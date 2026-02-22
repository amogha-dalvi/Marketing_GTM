# Marketing Skills System — $1M-5M ARR SaaS

> 17 interconnected skills that cover every aspect of SaaS marketing,
> sequenced by dependency and designed for AI-assisted execution.
> Includes a healthcare vertical overlay for healthtech B2B2C companies.

---

## Architecture

```
LAYER 0 — FOUNDATION (sequential, everything depends on these)
┌──────────────────────────────────────────────────┐
│  01. Customer Research & VoC                      │
│  02. ICP Definition & Segmentation                │
└─────────────────────┬────────────────────────────┘
                      │
LAYER 1 — STRATEGIC CORE (parallel after Layer 0)
┌─────────────────────┴────────────────────────────┐
│  03. Competitive Intelligence                     │
│  04. Positioning & Messaging                      │
└─────────────────────┬────────────────────────────┘
                      │
LAYER 2 — STRATEGIC PLANNING (parallel after Layer 1)
┌─────────────────────┴────────────────────────────┐
│  05. GTM Strategy                                 │
│  06. Brand Strategy                               │
│  07. Marketing Budget & Resource Allocation        │
└─────────────────────┬────────────────────────────┘
                      │
LAYER 3 — EXECUTION SYSTEMS (parallel after Layer 2)
┌─────────────────────┴────────────────────────────┐
│  08. Content Engine                               │
│  09. GEO Optimizer                                │
│  10. Sales Enablement                             │
│  11. Launch Playbook                              │
└─────────────────────┬────────────────────────────┘
                      │
LAYER 4 — GROWTH & OPTIMIZATION (parallel after Layer 3)
┌─────────────────────┴────────────────────────────┐
│  12. CAC Optimizer                                │
│  13. Pipeline Accelerator                         │
│  14. NRR Engine                                   │
└─────────────────────┬────────────────────────────┘
                      │
LAYER 5 — INFRASTRUCTURE & MEASUREMENT (references all)
┌─────────────────────┴────────────────────────────┐
│  15. Marketing Metrics & Attribution              │
│  16. Marketing Ops & Tech Stack                   │
└──────────────────────────────────────────────────┘
```

---

## Skill Directory

### Layer 0 — Foundation
| # | Skill | Purpose | Primary Output |
|---|-------|---------|---------------|
| 01 | [Customer Research](./01-customer-research.md) | Turn customer signal into structured insight | Customer Voice Library, JTBD Map, Buying Journey Map |
| 02 | [ICP Definition](./02-icp-definition.md) | Define who to target with surgical precision | ICP Tiers, Buyer Personas, Negative ICP |

### Layer 1 — Strategic Core
| # | Skill | Purpose | Primary Output |
|---|-------|---------|---------------|
| 03 | [Competitive Intel](./03-competitive-intel.md) | Always-on competitive monitoring and analysis | Competitor Profiles, Battlecards, Monitoring System |
| 04 | [Positioning & Messaging](./04-positioning-messaging.md) | Define how you exist in your buyer's mind | Positioning Statement, Messaging Architecture, Proof Points |

### Layer 2 — Strategic Planning
| # | Skill | Purpose | Primary Output |
|---|-------|---------|---------------|
| 05 | [GTM Strategy](./05-gtm-strategy.md) | Orchestrate the go-to-market plan | GTM Motion, Channel Strategy, Growth Model |
| 06 | [Brand Strategy](./06-brand-strategy.md) | Build brand as the lowest-CAC channel | Brand Narrative, Thought Leadership Plan, Community Strategy |
| 07 | [Marketing Budget](./07-marketing-budget.md) | Allocate resources with surgical precision | Budget Model, Headcount Plan, Channel ROI Model |

### Layer 3 — Execution Systems
| # | Skill | Purpose | Primary Output |
|---|-------|---------|---------------|
| 08 | [Content Engine](./08-content-engine.md) | AI-assisted content production at scale | Content Calendar, Production Workflows, Distribution System |
| 09 | [GEO Optimizer](./09-geo-optimizer.md) | Get recommended by AI search engines | GEO Audit, Optimized Content, AI Visibility Monitoring |
| 10 | [Sales Enablement](./10-sales-enablement.md) | Arm sales with AI-powered ammunition | Battlecards, Buying Group Content, Enablement Library |
| 11 | [Launch Playbook](./11-launch-playbook.md) | Ship GTM in days, not months | Launch Tiers, Asset Kits, Launch Timeline Templates |

### Layer 4 — Growth & Optimization
| # | Skill | Purpose | Primary Output |
|---|-------|---------|---------------|
| 12 | [CAC Optimizer](./12-cac-optimizer.md) | Acquire customers for less | CAC Audit, Channel Optimization, Unit Economics Model |
| 13 | [Pipeline Accelerator](./13-pipeline-accelerator.md) | Move more qualified deals faster | Pipeline Velocity Model, ABM Program, Signal-Based Workflows |
| 14 | [NRR Engine](./14-nrr-engine.md) | Retain and expand existing customers | Health Scoring, Onboarding Flows, Expansion Triggers |

### Layer 5 — Infrastructure & Measurement
| # | Skill | Purpose | Primary Output |
|---|-------|---------|---------------|
| 15 | [Marketing Metrics](./15-marketing-metrics.md) | Measure what matters, kill vanity metrics | Attribution Model, Dashboards, Review Cadence |
| 16 | [Marketing Ops](./16-marketing-ops.md) | Build the operational infrastructure | Tech Stack, Automation Workflows, Data Infrastructure |

### Vertical Overlay
| # | Skill | Purpose | Primary Output |
|---|-------|---------|---------------|
| 17 | [Healthcare Vertical](../../healthcare/skills/marketing-healthcare-vertical/) | Adapt the entire system for healthtech B2B2C SaaS | Healthcare ICP Profiles, Pilot GTM Playbook, Compliance-Safe Content, Patient Adoption Toolkit |

---

## Outcome Mapping

Each skill connects to the 7 business outcomes that SaaS leaders are measured on:

| Business Outcome | Key Metric | Primary Skills | Supporting Skills |
|-----------------|------------|---------------|-------------------|
| Lower CAC | CAC by channel | 12 | 01, 02, 04, 06, 08, 09 |
| Shorten Sales Cycle | Days in pipeline | 10, 13 | 01, 03, 04 |
| Increase NRR | NRR % | 14 | 01, 02, 08 |
| Increase Pipeline Velocity | Pipeline velocity score | 13 | 02, 05, 10, 15 |
| Reduce Time-to-Launch | Days to launch | 11 | 03, 04, 08, 10 |
| Increase AI Share-of-Voice | AI citation share | 09 | 06, 08 |
| Improve Win Rate | Win rate % | 03, 10 | 01, 04, 13 |
| Healthcare GTM | Pilot conversion, adoption rate | 17 | 01, 02, 04, 05, 08 |

---

## Cross-Skill Data Flow

```
                    ┌─────────┐
                    │ Customer │
                    │ Research │
                    │   (01)   │
                    └────┬────┘
                         │
              ┌──────────┴──────────┐
              │                     │
         ┌────┴────┐          ┌────┴────┐
         │   ICP   │          │  Churn  │
         │  (02)   │          │& Expand │
         └────┬────┘          │Signals  │
              │               └────┬────┘
    ┌─────────┼──────────┐         │
    │         │          │         │
┌───┴───┐ ┌──┴───┐ ┌───┴────┐   │
│Compet.│ │Posit.│ │  NRR   │◄──┘
│Intel  │ │& Msg │ │Engine  │
│ (03)  │ │ (04) │ │ (14)   │
└───┬───┘ └──┬───┘ └────────┘
    │        │
    └────┬───┘
         │
   ┌─────┴─────────────────┐
   │                       │
┌──┴───┐ ┌──────┐ ┌──────┐
│ GTM  │ │Brand │ │Budget│
│ (05) │ │ (06) │ │ (07) │
└──┬───┘ └──┬───┘ └──┬───┘
   │        │        │
   └────────┼────────┘
            │
  ┌─────────┼──────────────────┐
  │         │         │        │
┌─┴──┐  ┌──┴──┐  ┌──┴──┐ ┌──┴──┐
│Cont│  │ GEO │  │Sales│ │Lnch │
│Eng │  │Optim│  │Enab │ │Play │
│(08)│  │(09) │  │(10) │ │(11) │
└─┬──┘  └──┬──┘  └──┬──┘ └──┬──┘
  │        │        │        │
  └────────┼────────┼────────┘
           │        │
     ┌─────┴────┐   │
     │          │   │
  ┌──┴──┐  ┌──┴───┴┐
  │ CAC │  │Pipeln │
  │Optim│  │Accel  │
  │(12) │  │(13)   │
  └──┬──┘  └──┬────┘
     │        │
     └────┬───┘
          │
   ┌──────┴──────┐
   │             │
┌──┴────┐  ┌───┴───┐
│Metrics│  │Mktg   │
│ (15)  │  │Ops(16)│
└───────┘  └───────┘
```

---

## How to Use This System

### Starting from scratch (new marketing function):
1. Execute Layer 0 skills sequentially (01 → 02)
2. Execute Layer 1 skills in parallel (03 + 04)
3. Continue layer by layer, parallelizing within each layer

### Optimizing existing marketing:
1. Start with the outcome you need most (see Outcome Mapping above)
2. Check which upstream skills are prerequisites
3. Fill gaps in upstream skills first, then execute the target skill

### Marketing healthtech B2B2C:
1. Apply marketing-healthcare-vertical alongside every skill you execute
2. It adapts the entire system for healthcare buyers, compliance, channels, and the B2B2C value chain
3. Start with Phase 1 (Healthcare Market Assessment) before executing Layer 0 skills
4. Reference the 9 healthcare reference docs in `marketing-healthcare-vertical/references/` for deep-dive guidance

### Using individual skills:
Each skill is self-contained with:
- Clear inputs required (with links to source skills)
- Phase-by-phase workflow
- Deliverable templates
- Key metrics to track
- Anti-patterns to avoid
- Integration points showing data flow to other skills

---

## Design Principles

1. **Outcome-driven, not activity-driven.** Every skill exists to move a business metric, not to produce marketing busywork.
2. **AI-native.** Every workflow assumes AI assistance. A 1-3 person team can execute what used to require 10+.
3. **Data-informed, not assumption-based.** Layer 0 exists because everything else is guesswork without customer data.
4. **Interconnected, not siloed.** Skills share outputs. Customer Research feeds everything. Metrics measure everything.
5. **Built for $1M-5M ARR reality.** Limited budgets, small teams, existential resource allocation decisions. No enterprise playbooks downsized.
6. **Current for 2026.** GEO, AI agents, signal-based engagement, buying-group orchestration. Not 2020 playbooks repackaged.
7. **Anti-patterns included.** Each skill explicitly calls out what NOT to do — the dying approaches that waste time and money.
