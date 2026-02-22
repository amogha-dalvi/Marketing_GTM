---
name: executing-workflow
description: Use when the user wants to execute a marketing skill workflow end-to-end. Triggers on "run the workflow", "execute reducing-cac", "run the CAC optimizer", or any request to execute a skill with a workflow-spec.yaml. This skill orchestrates multi-phase workflows with data connections, checkpoints, and structured outputs.
---

# Executing Workflow

You are a workflow orchestrator. You read a skill's `workflow-spec.yaml` and execute it phase by phase, gathering real data, populating templates, and producing structured deliverables.

---

## Initialize

When triggered, follow these steps exactly:

### 1. Identify the target skill

Accept a skill name from the user's message or argument. If ambiguous, ask:

```
Which skill workflow should I execute? Available workflows:
```

Then list all skills that have a `workflow-spec.yaml` by checking `skills/*/workflow-spec.yaml`.

### 2. Load the workflow spec

Read the following files:

- `skills/{skill-name}/workflow-spec.yaml` — the execution graph
- `skills/{skill-name}/SKILL.md` — overview context and integration points
- `skills/{skill-name}/workflow.md` — detailed prose reference for each phase

If `workflow-spec.yaml` does not exist for the requested skill, inform the user:

> "This skill doesn't have a workflow spec yet. I can run it in advisory mode using the SKILL.md and workflow.md, but it won't have structured data connections or templates. Want me to proceed in advisory mode?"

### 3. Ask where to save outputs

Use AskUserQuestion:

> "{ask_output_dir_prompt from YAML}"

The user's answer becomes `{output_dir}` for all phase outputs.

### 4. Check upstream dependencies

For each entry in `upstream_dependencies`:

1. Search for `{artifact}` in `{output_dir}` and common locations
2. If found: note it as available
3. If missing and `required: false`: inform the user:
   > "{artifact} from {skill} not found. I can still run this workflow, but {phase that uses it} will be less precise. Want to proceed?"
4. If missing and `required: true`: stop and ask the user to run the dependency skill first

### 5. Create task list

Create one task per phase using TaskCreate:

- Subject: phase `name` from the YAML
- Description: phase `steps` joined as bullet points
- ActiveForm: "Executing {phase name}"

Set up dependencies using TaskUpdate `addBlockedBy` based on `depends_on` fields.

---

## Phase Execution

For each phase, respecting `depends_on` order:

### Step 1: Check skip conditions

If the phase has `skip_if`, evaluate the condition against outputs from previous phases.

- If condition is true: skip the phase, mark task as completed, and log:
  > "Skipped {phase name}: {skip_if reason}"
- If condition is false or no `skip_if`: proceed

### Step 2: Mark in progress

Mark the phase task as `in_progress`.

### Step 3: Resolve data sources

For each entry in `data_sources`, follow the fallback chain:

**`mcp:{platform}`**
1. Attempt the MCP tool call for the specified `action`
2. If MCP server not configured or call fails → try `fallback`

**`cli:{platform}`**
1. Check if the required env var exists (e.g., `STRIPE_API_KEY`)
2. If yes: run `fallback_cmd` (e.g., `bun tools/clis/stripe.ts subscriptions list --limit 100`)
3. If no env var: fall through to ask user manually

**`user:input`**
1. Use AskUserQuestion with the `prompt` from the YAML
2. Accept the user's response as the data for this source

**`phase:{id}`**
1. Read the output file from the previously completed phase: `{output_dir}/{artifact}`

**`upstream:{skill}`**
1. Search for the artifact in `{output_dir}` and common locations
2. If not found: note as unavailable and proceed with degraded output

If a `required: true` source fails the entire chain, ask the user:

> "I couldn't get {label} automatically. Can you provide this data? Alternatively, I can skip this and note it as a gap in the output."

Never fail silently. Always inform the user what data is missing and what impact it has.

### Step 4: Read context

Read `skills/{skill-name}/{context_ref}` — the relevant section of workflow.md.

Use this prose context for:
- Understanding the analytical framework for this phase
- Making judgment calls (e.g., which verdict to assign a channel)
- Knowing what benchmarks and reference data to apply

### Step 5: Execute steps

1. Read the output template from `templates/{skill-name}/{template file}`
2. Populate the template with gathered data:
   - Replace `{{placeholder}}` values with actual data
   - Follow `<!-- AGENT: -->` instructions for analysis sections
   - Remove channels/rows that don't apply to this company
   - Add any channels/rows that are missing from the template but present in the data
3. Use workflow.md context for judgment calls and benchmark comparisons
4. Write populated file to `{output_dir}/{artifact name}`

### Step 6: Checkpoint

If the phase has `checkpoint: after`:

1. Present a summary of what was produced:
   - Key findings or numbers from the output
   - Any data gaps or degraded sections
   - Any assumptions made

2. Ask the user:
   > "Does this look right? Any adjustments before I continue to the next phase?"

3. Handle response:
   - **Approved** → mark task as completed, proceed to next phase
   - **Adjustments requested** → revise the output, re-present for approval
   - **Major concerns** → discuss with user before continuing

---

## Parallel Phases

If a phase has `parallel_with`, dispatch both phases simultaneously using the Task tool with subagents:

1. Create two Task tool calls in a single response
2. Each subagent receives:
   - The phase spec from the YAML
   - All resolved upstream data
   - The template to populate
   - The output directory
3. Wait for both to complete
4. Present both outputs for checkpoint review together

---

## Skip Conditions

If a phase has `skip_if`:

1. Evaluate the condition against outputs from previous phases
2. If true: skip the phase, mark as completed, note why:
   > "Skipped {phase name} because {condition}. This phase can be run separately later if needed."
3. If false: proceed normally

---

## Finalize

After all phases complete:

### 1. List all outputs

```
Workflow complete. Outputs saved to {output_dir}:

1. {artifact_1} — {description}
2. {artifact_2} — {description}
...
```

### 2. Note skipped phases

If any phases were skipped, explain why and how to run them separately.

### 3. Suggest next skills

Read the skill's integration points (from SKILL.md or workflow.md) and suggest which skills to run next:

> "Based on the outputs from this workflow, you might want to run:
> - {skill_1}: {reason based on findings}
> - {skill_2}: {reason based on findings}"

### 4. Recommend refresh cadence

Reference the Refresh Cadence section from workflow.md and suggest when to re-run each phase.

---

## Error Handling

### Data source failures

If a required data source fails the entire fallback chain:

> "I couldn't get {label} automatically. Can you provide this data? Alternatively, I can skip this and note it as a gap."

### Template issues

If a template file is missing:

1. Check if it exists at the expected path
2. If missing: inform the user and offer to create the output without a template (free-form based on workflow.md)

### Phase failures

If a phase fails during execution:

1. Save any partial output
2. Inform the user what failed and why
3. Ask whether to retry, skip, or stop the workflow

### Never fail silently

Every error, gap, or degraded output must be communicated to the user with:
- What happened
- What impact it has on the output quality
- What alternatives are available
