# Actionable Workflow Orchestration Design

> Date: 2026-02-21
> Pilot Skill: reducing-cac
> Status: Approved

## Problem

The 17 marketing skills have rich strategic content (SKILL.md + workflow.md) but the agent treats them as reference material rather than executable processes. The agent reads the frameworks and advises — it doesn't orchestrate multi-phase workflows, pull real data from platforms, or produce structured deliverables populated with actual numbers.

## Goal

Transform skills from advisory documents into orchestrated, data-connected workflows where the agent:
1. Follows a structured execution graph (phases, dependencies, checkpoints)
2. Pulls real data from platforms (Stripe, GA4, HubSpot, ad platforms)
3. Populates pre-structured templates with actual numbers
4. Pauses at checkpoints for user review and approval
5. Writes completed deliverables to a user-specified output directory

## Architecture

```
Teach_AI/
├── skills/
│   └── {skill-name}/
│       ├── SKILL.md              # Discovery + overview (unchanged)
│       ├── workflow.md            # Prose reference (unchanged)
│       └── workflow-spec.yaml    # NEW: Machine-readable execution spec
│
├── templates/                    # NEW: Shared output templates
│   └── {skill-name}/
│       └── {deliverable}.md      # Pre-structured template with {{placeholders}}
│
├── tools/                        # NEW: Data access layer
│   ├── clis/                     # TypeScript + Bun CLI wrappers per platform
│   │   ├── stripe.ts
│   │   ├── ga4.ts
│   │   ├── hubspot.ts
│   │   ├── google-ads.ts
│   │   ├── meta-ads.ts
│   │   └── linkedin-ads.ts
│   ├── scripts/                  # Skill-specific composite data scripts
│   │   └── {skill-name}/
│   │       └── {script}.ts
│   ├── integrations/             # Platform setup guides
│   │   └── {platform}.md
│   └── REGISTRY.md               # Tool index
│
└── skills/
    └── executing-workflow/        # NEW: Orchestrator meta-skill
        └── SKILL.md
```

### Three New Components

1. **workflow-spec.yaml** per skill — machine-readable execution graph
2. **templates/** directory — shared pre-structured output templates
3. **executing-workflow skill** — orchestrator that reads any skill's YAML and executes it

## Component 1: workflow-spec.yaml Schema

Each skill gets a `workflow-spec.yaml` alongside its existing files. This defines the execution graph without changing the prose workflow.md.

### Schema Definition

```yaml
skill: {skill-name}          # Must match directory name
version: 1.0.0

setup:
  ask_output_dir: true        # Agent asks user where to write outputs
  ask_output_dir_prompt: "Where should I save the outputs?"

upstream_dependencies:        # Soft deps on other skills' artifacts
  - skill: {skill-name}
    artifact: {filename}
    required: false           # true = block, false = proceed with degraded output

phases:
  - id: {phase-id}           # Unique identifier
    name: "Human-readable name"
    duration: "Day X-Y"      # Advisory, not enforced
    depends_on: [{phase-id}] # Phase ordering
    parallel_with: [{phase-id}]  # Can run concurrently with these
    checkpoint: after         # Pause for user review after phase
    skip_if: "condition"      # Skip this phase if condition is true

    data_sources:
      - id: {source-id}
        label: "Human description"
        source: mcp:{platform} | cli:{platform} | user:input | phase:{phase-id} | upstream:{skill-name}
        action: "What to pull"             # For mcp/cli sources
        fallback: cli:{platform}           # Fallback if primary fails
        fallback_cmd: "bun tools/clis/..." # Explicit CLI command
        prompt: "Question for user"        # For user:input sources
        artifact: {filename}               # For phase/upstream sources
        required: true|false

    steps:
      - "Step description"    # What the agent does with the data

    output:
      template: templates/{skill}/{deliverable}.md
      description: "What this output contains"

    context_ref: "workflow.md#section"  # Agent reads this for deeper guidance
```

### Key Schema Concepts

- **data_sources** — each has a source type, fallback chain, and required flag
- **checkpoint: after** — agent pauses, shows output, asks for approval before continuing
- **depends_on** — phase ordering; agent won't start until dependencies complete
- **parallel_with** — phases that can run concurrently (dispatched as subagents)
- **skip_if** — conditional phases
- **context_ref** — pointer into workflow.md for rich prose guidance
- **upstream_dependencies** — soft deps on artifacts from other skills

### Pilot: reducing-cac workflow-spec.yaml

```yaml
skill: reducing-cac
version: 1.0.0

setup:
  ask_output_dir: true
  ask_output_dir_prompt: "Where should I save the CAC analysis outputs?"

upstream_dependencies:
  - skill: defining-icp-segmentation
    artifact: icp-tiers.md
    required: false
  - skill: designing-gtm-strategy
    artifact: channel-performance.md
    required: false
  - skill: running-content-engine
    artifact: content-attribution.md
    required: false
  - skill: optimizing-geo-visibility
    artifact: geo-performance.md
    required: false

phases:
  - id: cac-audit
    name: "CAC Audit — Know Your Numbers"
    duration: "Day 1-3"
    checkpoint: after
    data_sources:
      - id: revenue-data
        label: "Revenue and subscription data"
        source: mcp:stripe
        action: "Pull last 12 months MRR, new customers, churn"
        fallback: cli:stripe
        fallback_cmd: "bun tools/clis/stripe.ts subscriptions list --limit 100"
        required: true
      - id: traffic-data
        label: "Traffic by source/medium"
        source: mcp:ga4
        action: "Pull last 12 months sessions by source/medium"
        fallback: cli:ga4
        fallback_cmd: "bun tools/clis/ga4.ts report --dimensions source,medium --metrics sessions,conversions --period 12m"
        required: true
      - id: crm-pipeline
        label: "Pipeline and deal data by source"
        source: mcp:hubspot
        action: "Pull deals closed last 12 months with source attribution"
        fallback: cli:hubspot
        required: true
      - id: ad-spend
        label: "Ad spend by platform"
        source: user:input
        prompt: "What is your monthly ad spend by platform? (Google Ads, LinkedIn, Meta, etc.) Include last 6-12 months if possible."
        required: true
      - id: cost-data
        label: "Headcount, tools, and agency costs"
        source: user:input
        prompt: "What are your marketing team costs? Include: headcount allocation, tool costs, agency/contractor fees."
        required: true
    steps:
      - "Calculate three layers of CAC: channel-specific, blended, fully-loaded"
      - "Build CAC audit table by channel using template"
      - "Calculate LTV:CAC ratio by ICP segment (if ICP data available from upstream)"
      - "Apply benchmarks: healthy >3:1, acceptable payback <18mo"
      - "Assign verdict per channel: Scale / Hold / Kill"
    output:
      template: templates/reducing-cac/cac-audit.md
      description: "Channel-by-channel CAC breakdown with benchmarks and verdicts"
    context_ref: "workflow.md#phase-1"

  - id: channel-scoring
    name: "Channel Efficiency Scoring"
    duration: "Day 4-5"
    depends_on: [cac-audit]
    checkpoint: after
    data_sources:
      - id: cac-audit-output
        label: "CAC audit results"
        source: phase:cac-audit
        artifact: cac-audit.md
    steps:
      - "Score each channel 1-5 on 8 dimensions (CAC efficiency, LTV:CAC, scalability, speed, ICP precision, compounding, attribution clarity, saturation)"
      - "Apply weights and calculate composite score out of 115"
      - "Classify channels into Tier A (80+), B (60-79), C (40-59), D (<40)"
      - "Generate investment recommendations per tier"
    output:
      template: templates/reducing-cac/channel-efficiency-scorecard.md
      description: "Ranked channel list with composite scores and investment recommendations"
    context_ref: "workflow.md#phase-2"

  - id: cac-playbooks
    name: "CAC Reduction Playbooks"
    duration: "Day 6-10"
    depends_on: [channel-scoring]
    checkpoint: after
    data_sources:
      - id: channel-scores
        source: phase:channel-scoring
        artifact: channel-efficiency-scorecard.md
    steps:
      - "Build Zero-Cost Flywheel blueprint based on available channels"
      - "Build CRO priority checklist mapped to current conversion rates"
      - "Calculate ICP precision impact on CAC using segment data"
      - "Build sales cycle reduction plan using pipeline velocity data"
    output:
      template: templates/reducing-cac/cac-reduction-playbooks.md
      description: "Prioritized playbooks per channel with estimated CAC impact"
    context_ref: "workflow.md#phase-3"

  - id: paid-optimization
    name: "Paid Media Optimization"
    duration: "Day 11-15"
    depends_on: [cac-playbooks]
    checkpoint: after
    skip_if: "No paid media channels in channel scorecard"
    data_sources:
      - id: google-ads
        label: "Google Ads performance data"
        source: mcp:google-ads
        fallback: cli:google-ads
        required: false
      - id: meta-ads
        label: "Meta Ads performance data"
        source: cli:meta-ads
        required: false
      - id: linkedin-ads
        label: "LinkedIn Ads performance data"
        source: cli:linkedin-ads
        required: false
    steps:
      - "Audit targeting against ICP firmographics"
      - "Review creative against customer voice library (if available)"
      - "Evaluate bidding strategy (CPA vs clicks)"
      - "Build retargeting strategy by audience segment"
      - "Determine scale vs organic investment decision"
    output:
      template: templates/reducing-cac/paid-media-optimization.md
      description: "Optimized paid media plan with targeting, creative, bidding, and measurement"
    context_ref: "workflow.md#phase-4"

  - id: dying-tactics
    name: "What's Dying — Stop Spending Here"
    duration: "Day 11-15"
    depends_on: [cac-playbooks]
    parallel_with: [paid-optimization]
    checkpoint: after
    steps:
      - "Evaluate each channel against 4-question kill framework"
      - "Build stop-spending recommendations with reallocation targets"
    output:
      template: templates/reducing-cac/channels-to-kill.md
      description: "Channels/tactics to stop or reduce with reallocation recommendations"
    context_ref: "workflow.md#phase-5"

  - id: unit-economics
    name: "Unit Economics Modeling"
    duration: "Day 16-18"
    depends_on: [paid-optimization, dying-tactics]
    checkpoint: after
    data_sources:
      - id: stripe-churn
        source: mcp:stripe
        action: "Pull churn rate, expansion revenue, ACV"
        fallback: cli:stripe
    steps:
      - "Build unit economics calculator with current actuals"
      - "Calculate LTV, LTV:CAC, CAC payback, marginal CAC"
      - "Run scenario analysis: current, optimized, aggressive"
      - "Build scaling decision matrix"
    output:
      template: templates/reducing-cac/unit-economics-model.md
      description: "Complete model with actuals, scenarios, and scaling decisions"
    context_ref: "workflow.md#phase-6"

  - id: prioritization
    name: "CAC Reduction Prioritization"
    duration: "Day 19-20"
    depends_on: [unit-economics]
    checkpoint: after
    steps:
      - "Score all optimization initiatives on impact, effort, speed, confidence"
      - "Rank and select top initiatives for 90-day roadmap"
      - "Assign owners and success metrics per initiative"
      - "Set 30-day review checkpoints"
    output:
      template: templates/reducing-cac/cac-reduction-roadmap.md
      description: "Prioritized 90-day plan with owners, metrics, and decision checkpoints"
    context_ref: "workflow.md#phase-7"
```

## Component 2: Templates

Templates live in a shared `templates/` directory at the project root, organized by skill name.

### Template Convention

- **{{placeholder}}** — values the agent fills in with real data
- **<!-- AGENT: instruction -->** — inline guidance the agent follows but strips from the final output
- Tables with empty cells for the agent to populate
- Benchmarks and reference data pre-filled

### Templates for reducing-cac

1. **cac-audit.md** — Executive summary, three-layer CAC table, channel breakdown, LTV:CAC by ICP segment, benchmarks, key findings
2. **channel-efficiency-scorecard.md** — 8-dimension scoring matrix with weights, tier classifications, investment recommendations
3. **cac-reduction-playbooks.md** — Zero-cost flywheel blueprint, CRO checklist, ICP precision impact table, sales cycle reduction plan
4. **paid-media-optimization.md** — Targeting audit, creative review, bidding strategy, retargeting matrix, scale-vs-organic decision
5. **channels-to-kill.md** — 4-question kill framework per channel, dying tactics table, reallocation recommendations
6. **unit-economics-model.md** — Calculator with inputs/outputs, LTV/CAC/payback computations, scenario analysis, scaling matrix
7. **cac-reduction-roadmap.md** — Initiatives scored on 4 dimensions, prioritized 90-day plan, owners, metrics, 30-day checkpoints

### Template Example (cac-audit.md)

```markdown
# CAC Audit — {{company_name}}
> Generated: {{date}} | Skill: reducing-cac | Period: {{analysis_period}}

## Executive Summary
<!-- AGENT: Write 3-4 sentences summarizing overall CAC health.
     Call out the single biggest finding. -->
{{executive_summary}}

## Three Layers of CAC

| Layer | Amount | Notes |
|-------|--------|-------|
| **Channel-Specific CAC** (best channel) | {{best_channel_cac}} | {{best_channel_name}} |
| **Blended CAC** | {{blended_cac}} | All channels combined |
| **Fully-Loaded CAC** | {{fully_loaded_cac}} | Includes headcount, tools, overhead |

## Channel-by-Channel Breakdown

| Channel | Monthly Spend | New Customers | Channel CAC | Payback (Mo) | LTV:CAC | 3mo Trend | Verdict |
|---------|--------------|---------------|-------------|-------------|---------|-----------|---------|
<!-- AGENT: One row per channel. Pull spend from ad platforms + user input.
     Pull customer counts from CRM. Calculate CAC = spend/customers.
     Verdict = Scale if LTV:CAC >5:1, Hold if 3-5:1, Kill if <2:1. -->
{{channel_rows}}
| **BLENDED** | **{{total_spend}}** | **{{total_customers}}** | **{{blended_cac}}** | **{{blended_payback}}** | **{{blended_ltv_cac}}** | | |

## LTV:CAC by ICP Segment
<!-- AGENT: Only include if upstream ICP data is available.
     Otherwise note: "Run defining-icp-segmentation to enable segment-level analysis." -->
{{icp_segment_table}}

## Benchmarks

| Metric | Your Number | Healthy Target | Status |
|--------|------------|----------------|--------|
| LTV:CAC (blended) | {{blended_ltv_cac}} | >3:1 | {{ltv_cac_status}} |
| CAC Payback | {{blended_payback}} months | <18 months | {{payback_status}} |
| Organic % of Pipeline | {{organic_pct}}% | >30% | {{organic_status}} |

## Key Findings
<!-- AGENT: 3-5 specific, data-backed findings. Each implies an action. -->
{{key_findings}}

## Recommended Next Steps
<!-- AGENT: Based on data, suggest what to investigate in channel efficiency scoring. -->
{{next_steps}}
```

## Component 3: Orchestrator Skill (executing-workflow)

A meta-skill that reads any skill's `workflow-spec.yaml` and drives execution.

### Trigger

User says "Run the CAC optimizer" / "Execute reducing-cac" / `/executing-workflow reducing-cac`

### Execution Flow

```
1. INITIALIZE
   ├── Read target skill's workflow-spec.yaml
   ├── Read target skill's SKILL.md (overview context)
   ├── Ask user: "Where should I save outputs?"
   ├── Check for upstream dependency artifacts
   │   └── If missing: inform user, note degraded output quality
   └── Create task list from phases (TaskCreate)

2. FOR EACH PHASE (respecting depends_on):
   ├── Mark task in_progress
   ├── RESOLVE DATA SOURCES (fallback chain)
   │   ├── mcp:{platform} → Try MCP server
   │   │   └── Unavailable → try fallback
   │   ├── cli:{platform} → Check env var, run Bun CLI
   │   │   └── No API key → ask user manually
   │   ├── user:input → Ask user via AskUserQuestion
   │   ├── phase:{id} → Read output from completed phase
   │   └── upstream:{skill} → Read artifact from other skill
   │
   ├── READ CONTEXT
   │   └── Read workflow.md at context_ref section
   │
   ├── EXECUTE STEPS
   │   ├── Read output template from templates/
   │   ├── Populate template with gathered data
   │   └── Use workflow.md context for judgment calls
   │
   ├── WRITE OUTPUT
   │   └── Write to {output_dir}/{artifact_name}
   │
   └── CHECKPOINT (if checkpoint: after)
       ├── Present output summary to user
       ├── Ask: "Does this look right? Adjustments before I continue?"
       ├── Adjust → revise and re-present
       └── Approved → mark completed, continue

3. HANDLE PARALLEL PHASES
   └── If parallel_with, dispatch phases as concurrent subagents

4. FINALIZE
   ├── Summarize all outputs produced
   ├── Note skipped phases and why
   └── Suggest next skills based on integration points
```

### Data Resolution Chain

Every data source gracefully degrades:

```
MCP server → CLI (Bun + TypeScript) → User provides manually
```

If a required source has no data after the full chain, the agent flags it and asks the user how to proceed rather than failing.

## Component 4: Data Access Layer (tools/)

### CLI Convention

- **TypeScript** `.ts` files
- **Bun** runtime — native fetch, zero dependencies
- **Consistent UX:** `bun tools/clis/{platform}.ts <resource> <action> [--options]`
- **Env var auth:** `{PLATFORM}_API_KEY`
- **JSON output** to stdout
- **`--dry-run`** on every command — previews request, masks credentials

### CLIs Needed for reducing-cac

| CLI | Env Var | What It Pulls |
|-----|---------|---------------|
| stripe.ts | STRIPE_API_KEY | MRR, subscriptions, churn, expansion revenue |
| ga4.ts | GA4_ACCESS_TOKEN | Sessions by source/medium, conversion events |
| hubspot.ts | HUBSPOT_API_KEY | Deals by source, pipeline stages, lifecycle data |
| google-ads.ts | GOOGLE_ADS_TOKEN + GOOGLE_ADS_DEVELOPER_TOKEN + GOOGLE_ADS_CUSTOMER_ID | Campaign spend, CPA, conversions |
| meta-ads.ts | META_ACCESS_TOKEN + META_AD_ACCOUNT_ID | Campaign spend, CPA, conversions |
| linkedin-ads.ts | LINKEDIN_ACCESS_TOKEN | Campaign spend, CPA, conversions |

### Skill-Specific Composite Scripts

```
tools/scripts/reducing-cac/
├── pull-all-spend.ts           # Aggregates spend across all ad platforms
├── pull-revenue-by-source.ts   # Joins Stripe revenue with CRM source data
└── calculate-cac.ts            # Computes channel/blended/fully-loaded CAC
```

These compose the generic CLIs into the specific data shapes each workflow phase needs.

## Implementation Order

1. **workflow-spec.yaml for reducing-cac** — define the full execution graph
2. **Templates for reducing-cac** — all 7 deliverable templates
3. **executing-workflow skill** — the orchestrator SKILL.md
4. **CLIs** — stripe.ts, ga4.ts, hubspot.ts (start with the 3 most critical)
5. **Composite scripts** — reducing-cac specific data pulls
6. **Ad platform CLIs** — google-ads.ts, meta-ads.ts, linkedin-ads.ts
7. **REGISTRY.md + integration guides**
8. **Test end-to-end** with reducing-cac as pilot
9. **Roll out** workflow-spec.yaml + templates to remaining 16 skills

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Workflow format | Separate YAML spec file | Clean separation from prose. Machine-parseable. No drift risk if both are maintained. |
| Template location | Shared top-level templates/ | Reusable across skills. Single source of truth. |
| CLI runtime | Bun + TypeScript | Zero-dep, fast, type-safe. Native fetch. |
| CLI pattern | Corey Haines' pattern (adapted) | Proven: consistent UX, env var auth, JSON output, dry-run. Written from scratch, not forked. |
| Data fallback | MCP → CLI → user:input | Graceful degradation. Never fails, just asks the user. |
| Output location | Agent asks user at runtime | Keeps skills portable. No hardcoded paths. |
| Pilot skill | reducing-cac | Most data-heavy (7 phases, multiple platforms). Stress tests every part of the system. |
