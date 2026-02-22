# Actionable Workflow Orchestration — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the reducing-cac skill from an advisory document into an orchestrated, data-connected workflow that the agent executes phase-by-phase with real data and structured outputs.

**Architecture:** A `workflow-spec.yaml` per skill defines the execution graph. A shared `templates/` directory holds pre-structured output templates. An `executing-workflow` orchestrator skill reads any skill's YAML and drives execution. TypeScript + Bun CLI wrappers provide platform data access with MCP → CLI → user:input fallback.

**Tech Stack:** Bun 1.3.5, TypeScript, YAML, Markdown templates

**Design doc:** `docs/plans/2026-02-21-actionable-workflows-design.md`

---

### Task 1: Create directory structure

**Files:**
- Create: `templates/reducing-cac/` (directory)
- Create: `tools/clis/` (directory)
- Create: `tools/scripts/reducing-cac/` (directory)
- Create: `tools/integrations/` (directory)

**Step 1: Create all directories**

Run:
```bash
mkdir -p templates/reducing-cac tools/clis tools/scripts/reducing-cac tools/integrations
```

**Step 2: Verify structure**

Run:
```bash
find templates tools -type d | sort
```

Expected:
```
templates
templates/reducing-cac
tools
tools/clis
tools/integrations
tools/scripts
tools/scripts/reducing-cac
```

**Step 3: Commit**

```bash
git add templates/ tools/
git commit -m "chore: create directory structure for workflow orchestration"
```

---

### Task 2: Create workflow-spec.yaml for reducing-cac

**Files:**
- Create: `skills/reducing-cac/workflow-spec.yaml`
- Reference: `skills/reducing-cac/workflow.md` (read for phase structure)
- Reference: `docs/plans/2026-02-21-actionable-workflows-design.md` (read for schema)

**Step 1: Create the workflow-spec.yaml**

Create `skills/reducing-cac/workflow-spec.yaml` with the full YAML from the design doc (lines 122-307 of the design doc). This defines all 7 phases: cac-audit, channel-scoring, cac-playbooks, paid-optimization, dying-tactics, unit-economics, prioritization.

The complete YAML is already specified in the design doc under "Pilot: reducing-cac workflow-spec.yaml". Copy it exactly.

**Step 2: Validate YAML syntax**

Run:
```bash
bun -e "import yaml from 'js-yaml'; const fs = require('fs'); yaml.load(fs.readFileSync('skills/reducing-cac/workflow-spec.yaml', 'utf8')); console.log('Valid YAML')"
```

If `js-yaml` isn't available, use:
```bash
bun -e "const fs = require('fs'); const text = fs.readFileSync('skills/reducing-cac/workflow-spec.yaml', 'utf8'); console.log('File has', text.split('\n').length, 'lines'); console.log('Phases:', (text.match(/- id:/g) || []).length)"
```

Expected: 7 phases detected.

**Step 3: Verify phase IDs match workflow.md phases**

Cross-check that the 7 phase IDs in the YAML map to the 7 phases in `skills/reducing-cac/workflow.md`:
- `cac-audit` → Phase 1: CAC Audit (Day 1-3)
- `channel-scoring` → Phase 2: Channel Efficiency Scoring (Day 4-5)
- `cac-playbooks` → Phase 3: CAC Reduction Playbooks (Day 6-10)
- `paid-optimization` → Phase 4: Paid Media Optimization (Day 11-15)
- `dying-tactics` → Phase 5: What's Dying (Day 11-15)
- `unit-economics` → Phase 6: Unit Economics Modeling (Day 16-18)
- `prioritization` → Phase 7: CAC Reduction Prioritization (Day 19-20)

**Step 4: Commit**

```bash
git add skills/reducing-cac/workflow-spec.yaml
git commit -m "feat: add workflow-spec.yaml for reducing-cac skill"
```

---

### Task 3: Create cac-audit.md template

**Files:**
- Create: `templates/reducing-cac/cac-audit.md`
- Reference: `skills/reducing-cac/workflow.md` lines 31-103 (Phase 1 content)
- Reference: `docs/plans/2026-02-21-actionable-workflows-design.md` lines 333-380 (template example)

**Step 1: Create the template**

Create `templates/reducing-cac/cac-audit.md` based on the template example in the design doc. The template must include:

1. Header with `{{company_name}}`, `{{date}}`, `{{analysis_period}}` placeholders
2. Executive Summary section with `<!-- AGENT: -->` instruction
3. Three Layers of CAC table (channel-specific, blended, fully-loaded)
4. Channel-by-Channel Breakdown table with columns: Channel, Monthly Spend, New Customers, Channel CAC, Payback (Mo), LTV:CAC, 3mo Trend, Verdict
5. LTV:CAC by ICP Segment table (conditional on upstream data)
6. Benchmarks table with healthy targets pre-filled (>3:1 LTV:CAC, <18mo payback, >30% organic)
7. Key Findings section
8. Recommended Next Steps section

Pull the channel list and benchmark values from `workflow.md` Phase 1 (lines 70-101).

**Step 2: Verify template has all placeholders**

Run:
```bash
grep -c '{{' templates/reducing-cac/cac-audit.md
```

Expected: 15+ placeholder occurrences.

Run:
```bash
grep -c 'AGENT:' templates/reducing-cac/cac-audit.md
```

Expected: 4+ agent instruction comments.

**Step 3: Commit**

```bash
git add templates/reducing-cac/cac-audit.md
git commit -m "feat: add cac-audit template for reducing-cac"
```

---

### Task 4: Create channel-efficiency-scorecard.md template

**Files:**
- Create: `templates/reducing-cac/channel-efficiency-scorecard.md`
- Reference: `skills/reducing-cac/workflow.md` lines 105-149 (Phase 2 content)

**Step 1: Create the template**

Must include:
1. Header with `{{company_name}}`, `{{date}}`
2. Executive Summary section with `<!-- AGENT: -->` instruction
3. Scoring Dimensions reference table (8 dimensions with weights, pre-filled from workflow.md lines 113-122)
4. Channel Scoring Matrix — the big table with all 8 weighted dimensions per channel. Channels from workflow.md lines 128-138. Use `{{score}}` placeholders in cells.
5. Tier Classification table (pre-filled: A=80+, B=60-79, C=40-59, D=<40)
6. Investment Recommendations section — `<!-- AGENT: For each tier, recommend specific actions -->`
7. Key Insights section

**Step 2: Verify template structure**

```bash
grep -c '|' templates/reducing-cac/channel-efficiency-scorecard.md
```

Expected: 20+ table rows (dimensions table + scoring matrix + tier table).

**Step 3: Commit**

```bash
git add templates/reducing-cac/channel-efficiency-scorecard.md
git commit -m "feat: add channel-efficiency-scorecard template"
```

---

### Task 5: Create cac-reduction-playbooks.md template

**Files:**
- Create: `templates/reducing-cac/cac-reduction-playbooks.md`
- Reference: `skills/reducing-cac/workflow.md` lines 151-246 (Phase 3 content)

**Step 1: Create the template**

Must include:
1. Header with `{{company_name}}`, `{{date}}`
2. Playbook 1: Zero-Cost Flywheel — ASCII diagram from workflow.md lines 159-188, with `<!-- AGENT: -->` instructions to customize stages based on the company's available channels
3. Playbook 2: CRO Priorities — Checklist structure from workflow.md lines 197-219 (Website, Demo/Trial, Lead-to-Customer sections)
4. Playbook 3: ICP Precision Impact — Table from workflow.md lines 225-231 with `{{estimated_impact}}` placeholders
5. Playbook 4: Sales Cycle Reduction — Table from workflow.md lines 239-244
6. Priority Ranking section — `<!-- AGENT: Rank playbooks by expected CAC impact for this company -->`
7. Implementation Timeline section

**Step 2: Commit**

```bash
git add templates/reducing-cac/cac-reduction-playbooks.md
git commit -m "feat: add cac-reduction-playbooks template"
```

---

### Task 6: Create paid-media-optimization.md template

**Files:**
- Create: `templates/reducing-cac/paid-media-optimization.md`
- Reference: `skills/reducing-cac/workflow.md` lines 248-308 (Phase 4 content)

**Step 1: Create the template**

Must include:
1. Header with `{{company_name}}`, `{{date}}`
2. Current Paid Media Summary — table of active platforms with spend, CPA, conversion data (`{{placeholders}}`)
3. Targeting Audit — checklist from workflow.md lines 255-261 with `<!-- AGENT: -->` to check each against the company's current setup
4. Creative & Messaging Audit — checklist from workflow.md lines 264-270
5. Bidding & Budget Audit — checklist from workflow.md lines 273-278
6. Measurement Audit — checklist from workflow.md lines 281-285
7. Retargeting Strategy — table from workflow.md lines 291-295 with `{{placeholders}}`
8. Scale vs Organic Decision — table from workflow.md lines 299-306

**Step 2: Commit**

```bash
git add templates/reducing-cac/paid-media-optimization.md
git commit -m "feat: add paid-media-optimization template"
```

---

### Task 7: Create channels-to-kill.md template

**Files:**
- Create: `templates/reducing-cac/channels-to-kill.md`
- Reference: `skills/reducing-cac/workflow.md` lines 310-352 (Phase 5 content)

**Step 1: Create the template**

Must include:
1. Header with `{{company_name}}`, `{{date}}`
2. Dying Tactics table — from workflow.md lines 316-324 (tactic, why dying, replacement). Pre-fill the reference data, add `{{relevant}}` column for agent to mark which apply
3. Kill Framework — the 4-question evaluation from workflow.md lines 329-349, structured as a per-channel assessment table with columns: Channel, CAC Trend, Tier 1 ICP?, Retention vs Avg, Compounding Asset?, Score, Verdict
4. Reallocation Recommendations — `<!-- AGENT: For each killed channel, specify where to redirect budget -->`
5. Budget Impact Summary — table showing freed-up budget and proposed reallocation

**Step 2: Commit**

```bash
git add templates/reducing-cac/channels-to-kill.md
git commit -m "feat: add channels-to-kill template"
```

---

### Task 8: Create unit-economics-model.md template

**Files:**
- Create: `templates/reducing-cac/unit-economics-model.md`
- Reference: `skills/reducing-cac/workflow.md` lines 354-431 (Phase 6 content)

**Step 1: Create the template**

Must include:
1. Header with `{{company_name}}`, `{{date}}`
2. Inputs section — from workflow.md lines 362-369 with `{{placeholder}}` for each input (ACV, gross margin, churn rate, lifetime, expansion rate, blended CAC, channel CAC, sales cycle)
3. Calculated Outputs section — from workflow.md lines 371-395 with formulas shown AND `{{calculated_value}}` placeholders for actuals
4. Scaling Decision Matrix — from workflow.md lines 400-406, pre-filled thresholds with `{{your_value}}` column
5. Marginal CAC Analysis — interpretation framework from workflow.md lines 410-428 with `{{marginal_cac}}` and `{{average_cac}}` comparison
6. Scenario Analysis table — three columns: Current, Optimized (apply playbook impacts), Aggressive (apply all). Each row is a metric.
7. Recommendation — `<!-- AGENT: Based on the model, state whether the company is ready to scale, should optimize first, or needs to fix fundamentals -->`

**Step 2: Commit**

```bash
git add templates/reducing-cac/unit-economics-model.md
git commit -m "feat: add unit-economics-model template"
```

---

### Task 9: Create cac-reduction-roadmap.md template

**Files:**
- Create: `templates/reducing-cac/cac-reduction-roadmap.md`
- Reference: `skills/reducing-cac/workflow.md` lines 433-462 (Phase 7 content)

**Step 1: Create the template**

Must include:
1. Header with `{{company_name}}`, `{{date}}`
2. Prioritization Matrix — from workflow.md lines 440-453 with 4 weighted dimensions (CAC Impact 5x, Effort 5x inverse, Speed 3x, Confidence 2x). Pre-fill the initiative rows from the workflow. Add `{{score}}` placeholders.
3. Prioritization Rules — from workflow.md lines 456-460, pre-filled
4. 90-Day Roadmap — table with columns: Week, Initiative, Owner, Success Metric, Status. `<!-- AGENT: Select top 3 initiatives from scoring, schedule across 3 x 30-day sprints -->`
5. 30-Day Review Checkpoints — template for each checkpoint (what to measure, decision criteria, next actions)
6. Quick Wins section — `<!-- AGENT: List any initiatives scoring >50 with effort >4. These ship in 2 weeks. -->`

**Step 2: Commit**

```bash
git add templates/reducing-cac/cac-reduction-roadmap.md
git commit -m "feat: add cac-reduction-roadmap template"
```

---

### Task 10: Create the executing-workflow orchestrator skill

**Files:**
- Create: `skills/executing-workflow/SKILL.md`

**Step 1: Create the SKILL.md**

This is the orchestrator meta-skill. The SKILL.md must contain:

1. **Frontmatter:**
```yaml
---
name: executing-workflow
description: Use when the user wants to execute a marketing skill workflow end-to-end. Triggers on "run the workflow", "execute reducing-cac", "run the CAC optimizer", or any request to execute a skill with a workflow-spec.yaml. This skill orchestrates multi-phase workflows with data connections, checkpoints, and structured outputs.
---
```

2. **Role definition:** "You are a workflow orchestrator. You read a skill's workflow-spec.yaml and execute it phase by phase."

3. **Initialize section:** Instructions to:
   - Accept a skill name as input (from user message or argument)
   - Read `skills/{skill-name}/workflow-spec.yaml`
   - Read `skills/{skill-name}/SKILL.md` for overview context
   - Ask user where to save outputs (using AskUserQuestion)
   - Check for upstream dependency artifacts — for each `upstream_dependencies` entry, check if the artifact exists in the user's output directory. If missing, inform user: "X artifact not found. I can still run this but Y analysis will be less precise. Want to proceed?"
   - Create a task (using TaskCreate) for each phase

4. **Phase Execution section:** For each phase (respecting `depends_on` order):
   - Mark task `in_progress`
   - **Resolve data sources** using the fallback chain:
     - `mcp:{platform}` → attempt MCP tool call. If MCP server not configured or call fails → try `fallback`
     - `cli:{platform}` → check if env var exists (e.g., `STRIPE_API_KEY`). If yes, run `fallback_cmd`. If no env var → ask user manually
     - `user:input` → use AskUserQuestion with the `prompt` from the YAML
     - `phase:{id}` → read the output file from the previously completed phase
     - `upstream:{skill}` → search for the artifact in the output directory
   - **Read context** — read `skills/{skill-name}/{context_ref}` (the relevant section of workflow.md)
   - **Execute steps** — read the output template from `templates/`, populate it with gathered data, use workflow.md context for judgment
   - **Write output** — write populated file to `{output_dir}/{artifact_name}`
   - **Checkpoint** — if `checkpoint: after`, present a summary of what was produced, ask "Does this look right? Any adjustments before I continue to the next phase?"
   - Mark task `completed` on approval

5. **Parallel phases section:** If a phase has `parallel_with`, dispatch both phases simultaneously using the Task tool with subagents.

6. **Skip conditions section:** If a phase has `skip_if`, evaluate the condition against outputs from previous phases. If true, skip the phase and note why.

7. **Finalize section:** After all phases:
   - List all outputs written with paths
   - Note any skipped phases and why
   - Read the skill's integration points (from SKILL.md or workflow.md) and suggest which skills to run next

8. **Error handling section:**
   - If a required data source fails the entire fallback chain, ask the user: "I couldn't get {label} automatically. Can you provide this data? Alternatively, I can skip this and note it as a gap."
   - Never fail silently. Always inform the user what data is missing and what impact it has.

**Step 2: Verify SKILL.md frontmatter**

```bash
head -5 skills/executing-workflow/SKILL.md
```

Expected: Valid YAML frontmatter with `name: executing-workflow` and a `description`.

**Step 3: Verify SKILL.md length**

```bash
wc -l skills/executing-workflow/SKILL.md
```

Target: 200-400 lines. Under 500 per the skill spec.

**Step 4: Commit**

```bash
git add skills/executing-workflow/SKILL.md
git commit -m "feat: add executing-workflow orchestrator skill"
```

---

### Task 11: Create the Stripe CLI wrapper

**Files:**
- Create: `tools/clis/stripe.ts`

**Step 1: Create stripe.ts**

Write a zero-dependency Bun TypeScript CLI that wraps the Stripe API. Follow this pattern:

```typescript
#!/usr/bin/env bun

const API_KEY = process.env.STRIPE_API_KEY

if (!API_KEY) {
  console.error(JSON.stringify({ error: "STRIPE_API_KEY environment variable required" }))
  process.exit(1)
}

const BASE_URL = "https://api.stripe.com/v1"

// ... parseArgs, api helper, command routing
```

Key conventions:
- Shebang: `#!/usr/bin/env bun`
- Auth: `STRIPE_API_KEY` env var, sent as `Bearer` token
- Output: all JSON to stdout via `JSON.stringify(result, null, 2)`
- `--dry-run` on every command: return `{ _dry_run: true, method, url, headers: { Authorization: "***" } }`
- Stripe uses form-encoded bodies, not JSON. The `api()` helper must set `Content-Type: application/x-www-form-urlencoded` and encode body as URLSearchParams.

Required commands (what reducing-cac needs):

```
subscriptions list [--limit N] [--status active|canceled|all]
subscriptions get <id>
customers list [--limit N] [--created-after YYYY-MM-DD]
invoices list [--limit N] [--status paid|open|void]
charges list [--limit N]
balance-transactions list [--limit N] [--type charge|refund]
prices list [--limit N]
products list [--limit N]
```

Default command (no args) prints usage JSON.

**Step 2: Syntax check**

Run:
```bash
bun tools/clis/stripe.ts
```

Expected: JSON output with usage/help information (since no args provided).

**Step 3: Test dry-run**

Run:
```bash
STRIPE_API_KEY=test_key bun tools/clis/stripe.ts subscriptions list --dry-run
```

Expected: JSON showing `{ _dry_run: true, method: "GET", url: "https://api.stripe.com/v1/subscriptions?limit=10", headers: { Authorization: "***" } }`

**Step 4: Commit**

```bash
git add tools/clis/stripe.ts
git commit -m "feat: add Stripe CLI wrapper (Bun + TypeScript)"
```

---

### Task 12: Create the GA4 CLI wrapper

**Files:**
- Create: `tools/clis/ga4.ts`

**Step 1: Create ga4.ts**

Write a zero-dependency Bun TypeScript CLI wrapping the Google Analytics 4 Data API.

Auth: `GA4_ACCESS_TOKEN` env var (OAuth2 bearer token) + `GA4_PROPERTY_ID` env var.

GA4 Data API base URL: `https://analyticsdata.googleapis.com/v1beta`

Required commands:

```
report --dimensions <dim1,dim2> --metrics <met1,met2> [--period 12m|6m|3m|30d] [--limit N]
  # Maps to POST /properties/{propertyId}:runReport
  # Dimensions: source, medium, sessionSource, sessionMedium, pagePath, date
  # Metrics: sessions, conversions, totalUsers, newUsers, engagedSessions

realtime --metrics <met1,met2>
  # Maps to POST /properties/{propertyId}:runRealtimeReport

metadata
  # Maps to GET /properties/{propertyId}/metadata
  # Lists available dimensions and metrics
```

The `report` command must translate `--period` into `dateRanges`:
- `12m` → startDate: 365 days ago, endDate: today
- `6m` → startDate: 180 days ago, endDate: today
- `3m` → startDate: 90 days ago, endDate: today
- `30d` → startDate: 30 days ago, endDate: today

GA4 Data API uses JSON POST bodies:
```json
{
  "dateRanges": [{ "startDate": "365daysAgo", "endDate": "today" }],
  "dimensions": [{ "name": "sessionSource" }, { "name": "sessionMedium" }],
  "metrics": [{ "name": "sessions" }, { "name": "conversions" }],
  "limit": 100
}
```

**Step 2: Syntax check**

Run:
```bash
bun tools/clis/ga4.ts
```

Expected: JSON usage output.

**Step 3: Test dry-run**

Run:
```bash
GA4_ACCESS_TOKEN=test GA4_PROPERTY_ID=123 bun tools/clis/ga4.ts report --dimensions source,medium --metrics sessions,conversions --period 12m --dry-run
```

Expected: Dry-run JSON showing the POST body that would be sent.

**Step 4: Commit**

```bash
git add tools/clis/ga4.ts
git commit -m "feat: add GA4 CLI wrapper (Bun + TypeScript)"
```

---

### Task 13: Create the HubSpot CLI wrapper

**Files:**
- Create: `tools/clis/hubspot.ts`

**Step 1: Create hubspot.ts**

Auth: `HUBSPOT_API_KEY` env var (private app access token), sent as `Bearer` token.

Base URL: `https://api.hubapi.com`

Required commands:

```
deals list [--limit N] [--properties <prop1,prop2>]
  # GET /crm/v3/objects/deals
  # Default properties: dealname,amount,dealstage,closedate,pipeline,hs_analytics_source

deals search --filters <json>
  # POST /crm/v3/objects/deals/search
  # Example: --filters '[{"propertyName":"closedate","operator":"GTE","value":"2025-01-01"}]'

contacts list [--limit N]
  # GET /crm/v3/objects/contacts

pipelines list
  # GET /crm/v3/pipelines/deals

owners list
  # GET /crm/v3/owners
```

HubSpot uses JSON bodies for search, query params for list. Auth header: `Authorization: Bearer {token}`.

**Step 2: Syntax check and dry-run test**

Run:
```bash
bun tools/clis/hubspot.ts
```

Expected: JSON usage.

Run:
```bash
HUBSPOT_API_KEY=test bun tools/clis/hubspot.ts deals list --limit 5 --dry-run
```

Expected: Dry-run JSON.

**Step 3: Commit**

```bash
git add tools/clis/hubspot.ts
git commit -m "feat: add HubSpot CLI wrapper (Bun + TypeScript)"
```

---

### Task 14: Create the Google Ads CLI wrapper

**Files:**
- Create: `tools/clis/google-ads.ts`

**Step 1: Create google-ads.ts**

Auth: `GOOGLE_ADS_TOKEN` (OAuth2 access token), `GOOGLE_ADS_DEVELOPER_TOKEN`, `GOOGLE_ADS_CUSTOMER_ID`.

Base URL: `https://googleads.googleapis.com/v18`

Google Ads API uses GAQL (Google Ads Query Language) via POST to `/customers/{customerId}/googleAds:searchStream`.

Required commands:

```
campaigns list [--limit N]
  # GAQL: SELECT campaign.name, campaign.status, metrics.cost_micros, metrics.conversions, metrics.clicks, metrics.impressions FROM campaign WHERE segments.date DURING LAST_30_DAYS

campaigns report --period <30d|90d|12m>
  # Same as list but with date range control

adgroups list --campaign-id <id>
  # GAQL: SELECT ad_group.name, metrics.cost_micros, metrics.conversions FROM ad_group WHERE campaign.id = {id}

keywords list --campaign-id <id>
  # GAQL: SELECT ad_group_criterion.keyword.text, metrics.clicks, metrics.cost_micros FROM keyword_view WHERE campaign.id = {id}

spend summary --period <30d|90d|12m>
  # GAQL: SELECT metrics.cost_micros, metrics.conversions, metrics.clicks FROM customer WHERE segments.date DURING {period}
```

Headers:
```
Authorization: Bearer {GOOGLE_ADS_TOKEN}
developer-token: {GOOGLE_ADS_DEVELOPER_TOKEN}
Content-Type: application/json
```

Note: `cost_micros` is in micros (divide by 1,000,000 for dollars). The CLI should do this conversion automatically in the output.

**Step 2: Syntax check and dry-run test**

Run:
```bash
bun tools/clis/google-ads.ts
GOOGLE_ADS_TOKEN=test GOOGLE_ADS_DEVELOPER_TOKEN=test GOOGLE_ADS_CUSTOMER_ID=123 bun tools/clis/google-ads.ts campaigns list --dry-run
```

**Step 3: Commit**

```bash
git add tools/clis/google-ads.ts
git commit -m "feat: add Google Ads CLI wrapper (Bun + TypeScript)"
```

---

### Task 15: Create the Meta Ads CLI wrapper

**Files:**
- Create: `tools/clis/meta-ads.ts`

**Step 1: Create meta-ads.ts**

Auth: `META_ACCESS_TOKEN`, `META_AD_ACCOUNT_ID`. Access token goes as query param `access_token`.

Base URL: `https://graph.facebook.com/v21.0`

Required commands:

```
campaigns list [--limit N]
  # GET /act_{adAccountId}/campaigns?fields=name,status,objective,daily_budget,lifetime_budget

campaigns insights --period <30d|90d|12m>
  # GET /act_{adAccountId}/insights?fields=spend,impressions,clicks,actions,cpc,cpm,ctr&time_range={"since":"2025-01-01","until":"2026-02-21"}&level=campaign

adsets list --campaign-id <id>
  # GET /{campaignId}/adsets?fields=name,status,targeting,daily_budget

ads list --adset-id <id>
  # GET /{adsetId}/ads?fields=name,status,creative

spend summary --period <30d|90d|12m>
  # GET /act_{adAccountId}/insights?fields=spend,impressions,clicks,actions&time_range={...}
```

Note: Meta uses `act_{id}` prefix for ad account endpoints. The access_token must be sent as a query parameter, NOT in the Authorization header.

**Step 2: Syntax check and dry-run test**

**Step 3: Commit**

```bash
git add tools/clis/meta-ads.ts
git commit -m "feat: add Meta Ads CLI wrapper (Bun + TypeScript)"
```

---

### Task 16: Create the LinkedIn Ads CLI wrapper

**Files:**
- Create: `tools/clis/linkedin-ads.ts`

**Step 1: Create linkedin-ads.ts**

Auth: `LINKEDIN_ACCESS_TOKEN` (OAuth2), sent as `Bearer` token. Also needs `LINKEDIN_AD_ACCOUNT_ID`.

Base URL: `https://api.linkedin.com/rest`

Required commands:

```
campaigns list [--limit N]
  # GET /adAccounts/{accountId}/adCampaigns?q=search

campaigns analytics --period <30d|90d|12m>
  # GET /adAnalytics?q=analytics&pivot=CAMPAIGN&dateRange.start.year=...&dateRange.end.year=...&fields=externalWebsiteConversions,costInLocalCurrency,impressions,clicks

creatives list --campaign-id <id>
  # GET /adAccounts/{accountId}/creatives?q=search&search.campaign.values[0]=urn:li:sponsoredCampaign:{id}

spend summary --period <30d|90d|12m>
  # GET /adAnalytics?q=analytics&pivot=ACCOUNT&dateRange...
```

LinkedIn API requires header: `LinkedIn-Version: 202402`, `X-Restli-Protocol-Version: 2.0.0`.

**Step 2: Syntax check and dry-run test**

**Step 3: Commit**

```bash
git add tools/clis/linkedin-ads.ts
git commit -m "feat: add LinkedIn Ads CLI wrapper (Bun + TypeScript)"
```

---

### Task 17: Create composite data scripts for reducing-cac

**Files:**
- Create: `tools/scripts/reducing-cac/pull-all-spend.ts`
- Create: `tools/scripts/reducing-cac/pull-revenue-by-source.ts`
- Create: `tools/scripts/reducing-cac/calculate-cac.ts`

**Step 1: Create pull-all-spend.ts**

This script calls the `spend summary` command on each ad platform CLI, aggregates results into a unified format:

```typescript
#!/usr/bin/env bun

// Calls each ad CLI's spend summary and merges into:
// { channels: [{ name, monthly_spend, period, source }] }

// For each platform, check if env var exists:
// - GOOGLE_ADS_TOKEN → bun tools/clis/google-ads.ts spend summary --period 12m
// - META_ACCESS_TOKEN → bun tools/clis/meta-ads.ts spend summary --period 12m
// - LINKEDIN_ACCESS_TOKEN → bun tools/clis/linkedin-ads.ts spend summary --period 12m
// Skip platforms without credentials (don't fail)
```

Use `Bun.spawn` to call the child CLI processes and collect JSON output.

**Step 2: Create pull-revenue-by-source.ts**

This script calls Stripe for revenue data and HubSpot for deal source data, joins them:

```typescript
// Outputs: { customers_by_source: [{ source, count, total_revenue, avg_deal_size }] }
// Stripe: subscription/invoice data for revenue
// HubSpot: deals with hs_analytics_source for attribution
```

**Step 3: Create calculate-cac.ts**

This script takes spend data + revenue-by-source data (as JSON stdin or file paths) and computes:

```typescript
// Input: --spend spend.json --revenue revenue.json --costs costs.json
// costs.json: { headcount: N, tools: N, agencies: N } (from user input)
//
// Output:
// {
//   channel_cac: [{ channel, spend, customers, cac, ltv_cac_ratio, payback_months, verdict }],
//   blended_cac: N,
//   fully_loaded_cac: N,
//   benchmarks: { ltv_cac_status, payback_status, organic_pct_status }
// }
```

**Step 4: Test calculate-cac.ts with sample data**

Create a quick test with hardcoded sample JSON:

Run:
```bash
echo '{"channels":[{"name":"Google Ads","monthly_spend":10000}]}' > /tmp/spend.json
echo '{"customers_by_source":[{"source":"Google Ads","count":5,"total_revenue":50000}]}' > /tmp/revenue.json
echo '{"headcount":5000,"tools":2000,"agencies":3000}' > /tmp/costs.json
bun tools/scripts/reducing-cac/calculate-cac.ts --spend /tmp/spend.json --revenue /tmp/revenue.json --costs /tmp/costs.json
```

Expected: JSON with channel CAC of $2000 for Google Ads, blended and fully-loaded CAC values.

**Step 5: Commit**

```bash
git add tools/scripts/reducing-cac/
git commit -m "feat: add composite data scripts for reducing-cac"
```

---

### Task 18: Create tools REGISTRY.md

**Files:**
- Create: `tools/REGISTRY.md`

**Step 1: Create the registry**

Document all available CLIs and composite scripts:

```markdown
# Tools Registry

## CLI Tools

Zero-dependency TypeScript CLIs for marketing platforms. Run with Bun.

| CLI | Category | Env Vars | Commands |
|-----|----------|----------|----------|
| stripe.ts | Payments | STRIPE_API_KEY | subscriptions, customers, invoices, charges, balance-transactions, prices, products |
| ga4.ts | Analytics | GA4_ACCESS_TOKEN, GA4_PROPERTY_ID | report, realtime, metadata |
| hubspot.ts | CRM | HUBSPOT_API_KEY | deals, contacts, pipelines, owners |
| google-ads.ts | Ads | GOOGLE_ADS_TOKEN, GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID | campaigns, adgroups, keywords, spend |
| meta-ads.ts | Ads | META_ACCESS_TOKEN, META_AD_ACCOUNT_ID | campaigns, adsets, ads, spend |
| linkedin-ads.ts | Ads | LINKEDIN_ACCESS_TOKEN, LINKEDIN_AD_ACCOUNT_ID | campaigns, creatives, spend |

### Usage Pattern

bun tools/clis/{platform}.ts <resource> <action> [--options]
bun tools/clis/{platform}.ts --dry-run  # Preview request

## Composite Scripts

Skill-specific scripts that compose CLIs into higher-level data operations.

| Script | Skill | What It Does |
|--------|-------|-------------|
| reducing-cac/pull-all-spend.ts | reducing-cac | Aggregates spend across all ad platforms |
| reducing-cac/pull-revenue-by-source.ts | reducing-cac | Joins Stripe revenue with HubSpot deal sources |
| reducing-cac/calculate-cac.ts | reducing-cac | Computes channel/blended/fully-loaded CAC |
```

**Step 2: Commit**

```bash
git add tools/REGISTRY.md
git commit -m "feat: add tools registry"
```

---

### Task 19: End-to-end dry run

**Files:**
- Read: `skills/reducing-cac/workflow-spec.yaml`
- Read: `skills/executing-workflow/SKILL.md`
- Read: all `templates/reducing-cac/*.md`
- Run: CLIs with `--dry-run`

**Step 1: Verify all files exist**

Run:
```bash
echo "=== workflow-spec ===" && ls -la skills/reducing-cac/workflow-spec.yaml && echo "=== templates ===" && ls -la templates/reducing-cac/ && echo "=== orchestrator ===" && ls -la skills/executing-workflow/SKILL.md && echo "=== CLIs ===" && ls -la tools/clis/ && echo "=== scripts ===" && ls -la tools/scripts/reducing-cac/
```

Expected: All files present. 1 workflow-spec, 7 templates, 1 orchestrator, 6 CLIs, 3 scripts.

**Step 2: Verify all CLIs print usage when run with no args**

Run:
```bash
for cli in tools/clis/*.ts; do echo "--- $(basename $cli) ---"; bun "$cli" 2>&1 | head -3; echo; done
```

Expected: Each CLI prints a JSON usage/error message.

**Step 3: Verify all CLIs support --dry-run**

Run (with dummy env vars):
```bash
STRIPE_API_KEY=test bun tools/clis/stripe.ts subscriptions list --dry-run
GA4_ACCESS_TOKEN=test GA4_PROPERTY_ID=123 bun tools/clis/ga4.ts report --dimensions source --metrics sessions --period 30d --dry-run
HUBSPOT_API_KEY=test bun tools/clis/hubspot.ts deals list --dry-run
```

Expected: Each returns `{ _dry_run: true, ... }` JSON.

**Step 4: Verify template placeholder counts**

Run:
```bash
for tmpl in templates/reducing-cac/*.md; do echo "$(basename $tmpl): $(grep -c '{{' $tmpl) placeholders, $(grep -c 'AGENT:' $tmpl) instructions"; done
```

Expected: Each template has multiple placeholders and agent instructions.

**Step 5: Commit any fixes**

If anything needed fixing, commit:
```bash
git add -A
git commit -m "fix: end-to-end dry run corrections"
```

---

### Task 20: Final commit and summary

**Step 1: Review all changes**

Run:
```bash
git log --oneline -20
```

Verify the commit history shows the progression.

**Step 2: Count deliverables**

Run:
```bash
echo "Files created:" && find skills/reducing-cac/workflow-spec.yaml skills/executing-workflow templates/reducing-cac tools -type f | wc -l && echo "" && find skills/reducing-cac/workflow-spec.yaml skills/executing-workflow templates/reducing-cac tools -type f | sort
```

Expected: ~20 files total:
- 1 workflow-spec.yaml
- 7 templates
- 1 orchestrator skill
- 6 CLIs
- 3 composite scripts
- 1 REGISTRY.md

**Step 3: Document what's next**

The reducing-cac pilot is complete. The next phase (separate plan) is:
1. Add `workflow-spec.yaml` to the remaining 16 skills
2. Create templates for each skill
3. Add more CLIs as other skills need them
4. Add integration guides in `tools/integrations/`
