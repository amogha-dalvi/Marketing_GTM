# Marketing GTM — AI-Native Go-to-Market System

A complete go-to-market operating system built for 1–3 person SaaS marketing teams at the $1M–5M ARR stage. 18 interconnected skills, zero-dependency CLI tools, execution templates, and workflow orchestration — all designed to be run with AI assistance.

## How It Works

Each **skill** is a self-contained marketing capability with three files:

| File | Purpose |
|---|---|
| `SKILL.md` | What it is, when to use it, deliverables, common mistakes |
| `workflow.md` | Step-by-step execution guide with frameworks and checklists |
| `workflow-spec.yaml` | Machine-readable spec for the workflow orchestrator |

Skills are organized in layers. Earlier layers feed into later ones — customer research informs ICP segmentation, which informs positioning, which informs content, and so on.

## Skills

### Layer 0 — Foundation

| Skill | What It Does |
|---|---|
| **conducting-customer-research** | Builds customer voice library, jobs-to-be-done maps, buying journey maps, churn signals |
| **defining-icp-segmentation** | Creates tiered ICP (Tier 1/2/3 + Negative), buyer personas, customer scoring matrix |

### Layer 1 — Strategic Core

| Skill | What It Does |
|---|---|
| **gathering-competitive-intel** | Competitive landscape mapping, deep profiles, battlecards, always-on monitoring |
| **building-positioning-messaging** | Positioning statement, value prop architecture, persona-specific messaging by funnel stage |

### Layer 2 — Strategic Planning

| Skill | What It Does |
|---|---|
| **designing-gtm-strategy** | Revenue contribution model, GTM motion selection (PLG/sales-led/hybrid), 90-day execution plan |
| **developing-brand-strategy** | Brand narrative, thought leadership strategy, voice guidelines, brand audit scorecard |
| **planning-marketing-budget** | Revenue-backward budget modeling, headcount planning, build/buy/automate decision matrices |

### Layer 3 — Execution Systems

| Skill | What It Does |
|---|---|
| **running-content-engine** | AI-assisted production pipeline (15–25 pieces/month), 1-to-10 repurposing framework |
| **optimizing-geo-visibility** | AI visibility audit (ChatGPT, Perplexity, Gemini), GEO content strategy, `llms.txt` implementation |
| **creating-sales-enablement** | Buying group orchestration, battlecards, objection guides, ROI calculators, signal-based engagement |
| **executing-launch-playbook** | Tier-based launch system, launch briefs, messaging matrices, asset packages, retrospectives |

### Layer 4 — Growth & Optimization

| Skill | What It Does |
|---|---|
| **reducing-cac** | Channel-by-channel CAC breakdown, LTV:CAC analysis, zero-cost flywheel tactics, paid media optimization |
| **accelerating-pipeline** | Pipeline velocity audit, intent-based ABM, predictive lead scoring, signal-based engagement |
| **growing-nrr** | Customer health scoring, personalized onboarding, expansion triggers, churn prediction & win-back |

### Layer 5 — Infrastructure

| Skill | What It Does |
|---|---|
| **tracking-marketing-metrics** | Three-tier metrics hierarchy, hybrid attribution model, dashboard blueprints, leading indicators |
| **managing-marketing-ops** | Tech stack audit, CRM setup, automation workflows, integration architecture, RevOps alignment |

### Layer 6 — Orchestration

| Skill | What It Does |
|---|---|
| **executing-workflow** | Reads `workflow-spec.yaml` files, runs phase-by-phase execution, populates templates with live data |
| **marketing-system-index** | Navigation layer across all skills — lookup by business outcome, dependencies, sequencing |

## Tools

### CLI Wrappers

Zero-dependency TypeScript CLIs that run with [Bun](https://bun.sh). Each wraps a platform API with consistent conventions: JSON to stdout, auth via env vars, `--dry-run` on every write command.

```
tools/clis/
├── stripe.ts        # subscriptions, customers, invoices, charges, prices, products
├── ga4.ts           # report, realtime, metadata
├── hubspot.ts       # deals, contacts, pipelines, owners
├── google-ads.ts    # campaigns, adgroups, keywords, spend
├── meta-ads.ts      # campaigns, adsets, ads, spend
└── linkedin-ads.ts  # campaigns, creatives, spend
```

**Usage:**

```bash
bun tools/clis/stripe.ts subscriptions list --status=active --limit=50
bun tools/clis/hubspot.ts deals list --stage=closedwon --limit=100
bun tools/clis/google-ads.ts spend summary --days=30
```

### Composite Scripts

Higher-level scripts that combine multiple CLIs for skill-specific analysis. Currently built for the **reducing-cac** skill:

```
tools/scripts/reducing-cac/
├── pull-all-spend.ts          # Aggregates spend across all ad platforms
├── pull-revenue-by-source.ts  # Joins Stripe revenue with HubSpot deal sources
└── calculate-cac.ts           # Computes channel-level, blended, and fully-loaded CAC
```

## Templates

Markdown templates with `{{placeholder}}` syntax and `<!-- AGENT: -->` instructions for AI-populated sections. Currently built for **reducing-cac**:

```
templates/reducing-cac/
├── cac-audit.md                    # Executive summary + channel breakdown
├── channel-efficiency-scorecard.md # 8-dimension channel scoring
├── cac-reduction-playbooks.md      # Per-channel optimization tactics
├── paid-media-optimization.md      # Targeting, creative, bidding review
├── unit-economics-model.md         # LTV:CAC scenarios + scaling matrix
├── channels-to-kill.md             # Discontinuation + reallocation plan
└── cac-reduction-roadmap.md        # 90-day prioritized plan
```

## Interactive Tools

Self-contained HTML tools for visual exploration and planning:

| Tool | What It Does |
|---|---|
| `playground/marketing-skills-map.html` | Interactive canvas showing all 17 skills and their dependencies |
| `playground/gtm-sprint-planner.html` | Sprint planning interface for marketing execution |
| `marketing-budget-allocator.html` | Budget allocation modeling tool |

## Getting Started

**Prerequisites:** [Bun](https://bun.sh) for running CLI tools.

**If you're starting from scratch**, begin with Layer 0:

1. Run `conducting-customer-research` — everything downstream depends on real customer data
2. Run `defining-icp-segmentation` — turns research into targeting
3. Move to Layer 1+ based on your most pressing business need

**If you're optimizing existing marketing**, use `marketing-system-index` to find the right skill by business outcome:

- CAC rising → `reducing-cac`
- Pipeline flat → `accelerating-pipeline`
- Churn increasing → `growing-nrr`
- Win rates dropping → `creating-sales-enablement` + `gathering-competitive-intel`
- Brand feels accidental → `developing-brand-strategy`

## Design Principles

- **Outcome-driven** — each skill moves a specific business metric
- **AI-native** — built for small teams using AI to punch above their weight
- **Data-informed** — every decision backed by customer research, not assumptions
- **Interconnected** — skills share outputs through explicit integration points
- **Current** — accounts for GEO, AI agents, signal-based engagement, buying-group orchestration
