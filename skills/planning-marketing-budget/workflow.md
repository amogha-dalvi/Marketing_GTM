# Marketing Budget & Resource Allocation

> **Layer 2 — Strategic Planning** | Skill 07 of 16
> **Dependencies:** [ICP Definition](./02-icp-definition.md), [GTM Strategy](./05-gtm-strategy.md)
> **Feeds into:** [Content Engine](./08-content-engine.md), [GEO Optimizer](./09-geo-optimizer.md), [Sales Enablement](./10-sales-enablement.md), [Launch Playbook](./11-launch-playbook.md), [CAC Optimizer](./12-cac-optimizer.md), [Pipeline Accelerator](./13-pipeline-accelerator.md), [Marketing Ops](./16-marketing-ops.md)
> **Parallel with:** [GTM Strategy](./05-gtm-strategy.md), [Brand Strategy](./06-brand-strategy.md)

---

## Purpose

At $1M-5M ARR you are resource-constrained by definition. You have 1-3 marketers, a budget that feels simultaneously too small to do anything and too large to waste, and a board asking for "efficient growth." This skill turns your revenue targets into a precise resource plan — how much to spend, where to spend it, who does the work, and what tools to buy. It is the bridge between strategy (what you want to achieve) and execution (what you can actually afford to do). Every downstream execution skill draws its resource envelope from this one.

---

## Business Context ($1M-5M ARR)

- Typical marketing spend is 15-30% of ARR, but the right number depends on growth targets and capital efficiency expectations
- You probably have 1-3 marketers doing everything — content, demand gen, product marketing, ops, events, design
- Founder is still a major marketing asset (and free) but their time is the scarcest resource
- You are making irreversible hiring and tooling decisions that compound for years
- AI tools have fundamentally changed the resource equation — one person with AI can produce what 3-5 did two years ago
- Most budget waste at this stage comes from premature channel diversification and hiring ahead of playbook
- You likely have no formal budget tracking — spend happens on credit cards and gets reconciled quarterly
- The difference between a well-allocated $50K/month and a poorly-allocated $100K/month is enormous

---

## Workflow

### Phase 1: Revenue-Backward Budget Model (Day 1)

**Objective:** Derive total marketing budget from revenue targets, not from arbitrary percentages.

**Inputs required:**

From [GTM Strategy](./05-gtm-strategy.md):
- Annual revenue target and growth rate
- Pipeline model (target pipeline, average deal size, win rate, sales cycle length)
- Primary GTM motion(s) — inbound, outbound, product-led, partner, or hybrid

From [ICP Definition](./02-icp-definition.md):
- Tier 1 ICP (who you're targeting, where they spend attention)
- Total addressable market size (to validate budget against opportunity)

**Additional inputs:**
- Current ARR and monthly revenue
- Current marketing spend (all-in: people, tools, programs, agencies)
- Current CAC and LTV:CAC ratio
- Cash position and runway
- Board/investor expectations for growth efficiency

**Budget Derivation Framework:**

```
Step 1: Set the revenue target
   → Target new ARR this year: $___

Step 2: Work backward to pipeline needed
   → Average deal size: $___
   → Win rate: ___%
   → Deals needed to close: Target new ARR / Avg deal size
   → Pipeline needed: Deals needed / Win rate
   → Pipeline value needed: Pipeline deals x Avg deal size

Step 3: Determine pipeline sources
   → Inbound marketing: ___% of pipeline
   → Outbound/sales-sourced: ___% of pipeline
   → Partner/referral: ___% of pipeline
   → Product-led/self-serve: ___% of pipeline

Step 4: Cost to generate marketing-sourced pipeline
   → Historical cost per MQL/SQL: $___
   → If no history, use benchmark: $150-500/SQL for B2B SaaS
   → Marketing pipeline target x Cost per $ of pipeline = Program budget

Step 5: Add people and infrastructure costs
   → Headcount cost (fully loaded)
   → Tool/tech stack cost
   → Agency/freelancer retainers
   → Total marketing budget = Program + People + Tools + Agency

Step 6: Sanity-check against benchmarks
   → Budget as % of revenue (target 15-30%)
   → CAC payback period (target <18 months)
   → LTV:CAC ratio (target >3:1)
```

**Budget Allocation Model — Example at $2M ARR:**

```
Revenue: $2M ARR | Growth target: 80% YoY ($1.6M new ARR)
Total marketing budget: $400K-600K/year ($33K-50K/month)

Allocation:
┌────────────────────────┬───────────┬───────────────────────────┐
│ Category               │ % of Total│ Annual $                  │
├────────────────────────┼───────────┼───────────────────────────┤
│ Headcount (1-2 people) │ 40-50%    │ $200K-250K                │
│ Program spend          │ 25-35%    │ $125K-175K                │
│   Content production   │   10%     │   $50K                    │
│   Paid acquisition     │   10-15%  │   $50K-75K                │
│   Events/community     │   5%      │   $25K                    │
│   Tools/tech stack     │ 10-15%    │ $50K-75K                  │
│ Agency/freelance       │ 10-15%    │ $50K-75K                  │
│ Buffer (unallocated)   │ 5%        │ $25K                      │
└────────────────────────┴───────────┴───────────────────────────┘
```

**Budget Allocation Model — Example at $4M ARR:**

```
Revenue: $4M ARR | Growth target: 60% YoY ($2.4M new ARR)
Total marketing budget: $800K-1.2M/year ($67K-100K/month)

Allocation:
┌────────────────────────┬───────────┬───────────────────────────┐
│ Category               │ % of Total│ Annual $                  │
├────────────────────────┼───────────┼───────────────────────────┤
│ Headcount (2-3 people) │ 35-45%    │ $350K-450K                │
│ Program spend          │ 30-35%    │ $300K-350K                │
│   Content production   │   8-10%   │   $80K-100K               │
│   Paid acquisition     │   12-15%  │   $120K-150K              │
│   Events/community     │   5-8%    │   $50K-80K                │
│   ABM/direct programs  │   3-5%    │   $30K-50K                │
│ Tools/tech stack       │ 8-12%     │ $80K-120K                 │
│ Agency/freelance       │ 10-12%    │ $100K-120K                │
│ Buffer (unallocated)   │ 5%        │ $50K                      │
└────────────────────────┴───────────┴───────────────────────────┘
```

**Output:** `marketing-budget-model.md` — Revenue-backward budget with allocation by category, validated against benchmarks.

### Phase 2: Headcount Planning (Day 2)

**Objective:** Determine who to hire, when, and what to keep outsourced.

**The 1-3 Marketer Reality:**

At $1M-5M ARR your marketing team is tiny. Every hire is a strategic commitment of $100K-180K/year fully loaded. Hire wrong and you lose 6-12 months.

**Headcount Decision Matrix:**

```
Marketer #1 (usually exists at $1M ARR):
┌─────────────────────────────────────────────────────┐
│ WHEN: $0.5M-1.5M ARR                               │
│ ROLE: Marketing Generalist / Growth Lead            │
│ PROFILE: T-shaped — deep in one channel (usually    │
│ content or demand gen), capable across others        │
│ OWNS: Website, content, basic demand gen, marketing │
│ ops basics, metrics                                  │
│ SIGNAL TO HIRE: Founder spending >10 hrs/week on    │
│ marketing activities                                 │
│ AI LEVERAGE: High — this person uses AI for content  │
│ drafting, research, basic design, data analysis      │
└─────────────────────────────────────────────────────┘

Marketer #2:
┌─────────────────────────────────────────────────────┐
│ WHEN: $1.5M-3M ARR                                  │
│ ROLE: Depends on primary GTM motion:                │
│   Inbound-heavy → Content/SEO/GEO specialist        │
│   Outbound-heavy → Demand gen / campaigns           │
│   Product-led → Product marketing / lifecycle       │
│ SIGNAL TO HIRE:                                      │
│   - Marketer #1 is at capacity and dropping balls   │
│   - One channel is proven and needs dedicated owner  │
│   - Pipeline target requires channel you can't       │
│     outsource (e.g., product marketing)              │
│ AI LEVERAGE: This person specializes — AI handles    │
│ the adjacent tasks they'd otherwise hire for         │
└─────────────────────────────────────────────────────┘

Marketer #3:
┌─────────────────────────────────────────────────────┐
│ WHEN: $3M-5M ARR                                    │
│ ROLE: Usually the complement of marketer #2:        │
│   If #2 is content → #3 is demand gen               │
│   If #2 is demand gen → #3 is content/product mktg  │
│   OR: Marketing ops / RevOps if systems are complex  │
│ SIGNAL TO HIRE:                                      │
│   - Two proven channels need dedicated ownership     │
│   - Marketing ops debt is causing attribution gaps   │
│   - Pipeline targets exceed what 2 people can drive  │
│     even with AI and agencies                        │
│ AI LEVERAGE: Team now has enough people to specialize│
│ and use AI for cross-functional work                 │
└─────────────────────────────────────────────────────┘
```

**What NOT to Hire For (Outsource or Automate Instead):**

| Function | Why Not to Hire | Better Alternative |
|----------|----------------|--------------------|
| Graphic design | Not enough volume for full-time | Freelancer + AI design tools (Canva, Midjourney) |
| Video production | Episodic need, expensive full-time | Freelance videographer + AI editing |
| Paid media management | Narrow skill, needs senior talent | Agency or fractional specialist |
| PR | Lumpy, relationship-driven | PR agency or fractional PR lead |
| Marketing analytics | Not enough complexity yet | AI-assisted analysis + RevOps or marketing generalist |
| Copywriting | AI handles 80% of first drafts | AI + freelance editor for high-stakes pieces |

**Output:** `headcount-plan.md` — Hiring roadmap with roles, timing triggers, job descriptions, and budget impact.

### Phase 3: Build vs. Buy vs. Automate Decision Framework (Day 3)

**Objective:** For every marketing function, decide what to do in-house, outsource, or automate with AI.

**Decision Framework:**

```
For each marketing activity, score on three dimensions:

1. STRATEGIC VALUE — How core is this to competitive advantage?
   Low (1) = commodity task, anyone can do it
   High (5) = uniquely tied to your positioning/ICP/voice

2. FREQUENCY — How often do you need this done?
   Low (1) = once a quarter or less
   High (5) = daily or weekly

3. AI AUTOMATABLE — Can AI do 80%+ of this today?
   Low (1) = requires deep human judgment, relationships, creativity
   High (5) = AI can handle with light human review

Decision Matrix:
┌────────────────────────┬─────────────┬──────────────────┐
│                        │ Low         │ High             │
│                        │ Frequency   │ Frequency        │
├────────────────────────┼─────────────┼──────────────────┤
│ High Strategic Value   │ Fractional/ │ BUILD IN-HOUSE   │
│                        │ Agency      │ (hire for this)  │
├────────────────────────┼─────────────┼──────────────────┤
│ Low Strategic Value    │ DON'T DO    │ AUTOMATE WITH AI │
│                        │ (or one-off │ (or outsource    │
│                        │  freelance) │  to agency)      │
└────────────────────────┴─────────────┴──────────────────┘
```

**Practical Application — Mapping Common Activities:**

| Activity | Strategic Value | Frequency | AI Automatable | Decision |
|----------|----------------|-----------|----------------|----------|
| Positioning & messaging | 5 | Low (quarterly) | 2 | In-house (founder + marketer) |
| Blog content creation | 4 | High (weekly) | 4 | AI draft + in-house editing |
| Social media posts | 3 | High (daily) | 5 | AI + in-house review |
| Paid ad management | 3 | High (daily) | 3 | Agency or specialized freelancer |
| Website design/dev | 4 | Low (quarterly) | 3 | Freelancer or agency |
| Case study creation | 5 | Medium (monthly) | 3 | In-house interview, AI drafts |
| Email nurture sequences | 4 | Medium (monthly) | 4 | AI draft + in-house strategy |
| SEO/GEO optimization | 4 | High (weekly) | 4 | In-house with AI tooling |
| Event management | 3 | Low (quarterly) | 2 | Freelancer or part-time |
| Competitive monitoring | 4 | High (weekly) | 5 | Fully automated with AI |
| Marketing analytics | 4 | High (weekly) | 4 | AI dashboards + human insight |
| PR/comms | 3 | Low (monthly) | 2 | Agency or fractional |
| Graphic design | 2 | High (weekly) | 4 | AI tools + freelance for brand |
| Video production | 3 | Low (monthly) | 3 | Freelancer + AI editing |

**The AI Efficiency Multiplier:**

```
Pre-AI (2022):              With AI (2025+):
─────────────────           ─────────────────
1 marketer can manage:      1 marketer can manage:
- 2-3 blog posts/month      - 8-12 blog posts/month
- 1 channel well             - 2-3 channels well
- Basic email sequences      - Sophisticated nurture flows
- Manual reporting           - Automated dashboards
- 10 hrs/week on production  - 3-4 hrs/week on production
                             - 6-7 hrs/week on strategy

Net effect: 1 AI-equipped marketer ≈ 3-5 pre-AI marketers
            for production tasks, NOT for strategy/judgment

This means: A 2-person team with AI at $3M ARR can
            deliver what used to require a 5-7 person team
```

**Output:** `build-buy-automate-matrix.md` — Decision for each marketing function with rationale and cost.

### Phase 4: Tool & Tech Stack Budgeting (Day 4)

**Objective:** Select the minimum viable tool stack that maximizes output per dollar.

**Tech Stack Framework — Tiered by Necessity:**

```
TIER 1 — Non-Negotiable (buy these first):
┌──────────────────────────────────────────────────────┐
│ CRM                    │ HubSpot Free / Salesforce   │
│ Website/CMS            │ Webflow / WordPress          │
│ Email/Marketing Automation │ HubSpot / ActiveCampaign│
│ Analytics              │ Google Analytics (free)      │
│ AI assistant           │ ChatGPT/Claude (Team plan)  │
│                                                      │
│ Typical cost: $200-800/month                         │
└──────────────────────────────────────────────────────┘

TIER 2 — Needed Once You Have a Proven Channel:
┌──────────────────────────────────────────────────────┐
│ SEO/GEO tool           │ Ahrefs / Semrush            │
│ Social scheduling      │ Buffer / Hootsuite          │
│ Design tool            │ Canva Pro / Figma           │
│ Session recording      │ Hotjar / FullStory          │
│ Enrichment / intent    │ Clearbit / 6sense (lite)    │
│                                                      │
│ Typical cost: $500-1,500/month                       │
└──────────────────────────────────────────────────────┘

TIER 3 — Scale Tools (justify with ROI before buying):
┌──────────────────────────────────────────────────────┐
│ ABM platform           │ Demandbase / RollWorks      │
│ Conversation intel     │ Gong / Chorus               │
│ Attribution            │ HockeyStack / Dreamdata     │
│ Content optimization   │ Clearscope / Surfer         │
│ Advanced personalization│ Mutiny / Intellimize       │
│                                                      │
│ Typical cost: $1,500-5,000/month                     │
│ Only buy when: pipeline >$500K/month and you need    │
│ optimization, not just execution                      │
└──────────────────────────────────────────────────────┘
```

**Tool Spend Guardrails:**
- Total tool spend should be 8-15% of marketing budget
- No single tool should exceed 25% of tool budget (dependency risk)
- Audit quarterly: if a tool isn't used weekly, cancel it
- Free tiers first: exhaust free/cheap options before upgrading
- AI-native tools are replacing point solutions — evaluate consolidation

**Output:** `tech-stack-budget.md` — Tool list with cost, justification, and alternatives for each.

### Phase 5: Channel ROI Estimation & Budget Phasing (Day 5)

**Objective:** Allocate program spend across channels with realistic return expectations and phase it by quarter.

**Channel ROI Estimation Template:**

| Channel | Monthly Spend | Time to First Result | Pipeline per $ Spent | Best For | Risk Level |
|---------|--------------|---------------------|---------------------|----------|------------|
| SEO/GEO content | $2-5K | 3-6 months | $5-15 per $1 (at maturity) | Compounding inbound | Low (but slow) |
| Paid search (Google) | $3-10K | 2-4 weeks | $3-8 per $1 | Capturing existing demand | Medium |
| Paid social (LinkedIn) | $3-8K | 4-8 weeks | $2-5 per $1 | ICP targeting, awareness | Medium-High |
| Founder content (LinkedIn/X) | $0 (time only) | 4-12 weeks | Highest ROI when it works | Authority, inbound | Low cost, high effort |
| Email/nurture | $0.5-1K | 2-4 weeks | $8-20 per $1 | Converting existing leads | Low |
| Community building | $0-2K | 3-6 months | Hard to attribute directly | Retention, referrals, brand | Low cost, long game |
| Events/webinars | $2-5K | 4-8 weeks | $2-6 per $1 | Pipeline acceleration, trust | Medium |
| Partnerships/integrations | $0-1K | 2-6 months | $5-15 per $1 (when working) | Net-new audience access | Low cost, slow |
| Review sites (G2, Capterra) | $1-3K | 4-12 weeks | $3-8 per $1 | Buyer validation, SEO | Low |
| Direct mail / gifting | $1-3K | 2-4 weeks | $2-5 per $1 | Enterprise deal acceleration | Medium |

**Budget Phasing Framework — Quarterly Sequencing:**

```
Q1: FOUNDATION (Prove 1-2 channels)
├── 70% of program budget → 1-2 proven or highest-conviction channels
├── 20% → experiments (2-3 small tests on new channels)
├── 10% → buffer
└── Focus: Get baseline metrics, establish tracking, prove unit economics

Q2: OPTIMIZE (Double down on what works)
├── 60% → winning channel(s) from Q1 — increase spend
├── 25% → scale the best Q1 experiment into a real channel
├── 10% → new experiments
├── 5% → buffer
└── Focus: Improve cost per SQL, increase volume on proven channels

Q3: SCALE (Expand to 3-4 channels)
├── 50% → primary channel(s) at optimized spend
├── 30% → secondary channel(s) now proven in Q2
├── 15% → new experiments + seasonal plays
├── 5% → buffer
└── Focus: Diversify pipeline sources, reduce single-channel dependency

Q4: COMPOUND (Maximize ROI across portfolio)
├── 40% → primary channels (may hit diminishing returns)
├── 35% → secondary channels (scaling)
├── 15% → Q1-next-year experiments + planning
├── 10% → buffer + year-end pushes
└── Focus: Hit annual targets, set up next year's budget model
```

**Zero-Budget Tactics That Actually Work:**

These are not "instead of budget" — they are "in addition to budget" and often outperform paid channels:

1. **Founder LinkedIn content** — Post 3-5x/week about problems your ICP faces. No selling. Costs time only. Often becomes the #1 pipeline source at $1-3M ARR.
2. **Customer story flywheels** — Every happy customer becomes a case study, a quote, a co-marketing partner, and a referral source. Systematize this.
3. **Product-led content** — Build free tools, templates, or calculators that attract your ICP. High upfront investment, compounding returns.
4. **Community participation** — Be genuinely helpful in Slack communities, Reddit, Discord where your ICP hangs out. Don't pitch. Build authority.
5. **Integration partnerships** — Co-market with complementary tools. Shared audiences, shared costs, shared credibility.
6. **Strategic open-source or freemium** — Give away something useful to create a top-of-funnel engine.
7. **Guest content / podcast guesting** — Borrow other people's audiences. Costs time, builds authority fast.

**Output:** `channel-roi-model.md` — Channel-by-channel allocation with expected returns, phased by quarter.

### Phase 6: Monthly Budget Review Process (Ongoing)

**Objective:** Establish a disciplined cadence to track, evaluate, and reallocate budget monthly.

**Monthly Budget Review — Process:**

```
WHEN: First week of each month (60-90 min meeting)
WHO: Marketing lead + founder + finance (if applicable)

AGENDA:

1. ACTUALS vs. PLAN (15 min)
   - What did we spend last month by category?
   - Are we over/under plan? By how much?
   - Any unplanned expenses? Why?

2. PERFORMANCE by CHANNEL (20 min)
   For each active channel:
   - Spend last month
   - Leads/MQLs/SQLs generated
   - Cost per lead, cost per SQL
   - Pipeline generated ($ value)
   - Trend: improving, flat, or declining?

3. PIPELINE HEALTH CHECK (15 min)
   - Are we on track for quarterly pipeline target?
   - Pipeline coverage ratio (target: 3-4x)
   - Velocity: are deals moving faster or slower?
   - Any pipeline gaps to fill with marketing?

4. REALLOCATION DECISIONS (15 min)
   - What's working? Increase spend?
   - What's underperforming? Give it one more month or cut?
   - Any new experiments to start?
   - Any tools/agencies to add or cancel?

5. NEXT MONTH PLAN (10 min)
   - Budget allocation for next month
   - Key initiatives and expected outcomes
   - Who owns what?

DECISION RULES:
- Channel underperforming for 2+ months with no improving trend → cut or pause
- Channel exceeding targets by 30%+ → propose 25-50% spend increase
- New experiment with promising early signals → graduate to 10% of program budget
- Never reallocate more than 30% of total budget in a single month (too volatile)
```

**AI-Assisted Budget Tracking:**
1. Feed monthly spend and performance data into AI
2. AI identifies anomalies: "LinkedIn CPL increased 40% — investigate"
3. AI generates reallocation recommendations based on ROI trends
4. AI projects quarterly outcomes based on current spend trajectory
5. Human makes final allocation decisions

**Output:** `monthly-budget-review-template.md` — Recurring review framework with decision rules and reporting template.

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Marketing spend as % of ARR | 15-30% | Benchmark for appropriate investment level |
| CAC (Customer Acquisition Cost) | Declining QoQ | Budget is being allocated efficiently |
| CAC payback period | <18 months | Unit economics work |
| LTV:CAC ratio | >3:1 | Investment returns compound |
| Marketing-sourced pipeline | >40% of total | Marketing is pulling its weight |
| Cost per SQL by channel | Varies by channel | Identifies best-performing channels |
| Pipeline coverage ratio | 3-4x target | Enough pipeline to hit revenue goals |
| Budget utilization rate | 85-95% | Not under-investing, not overspending |
| Tool ROI (pipeline per tool $) | >5x | Tools are earning their keep |
| Time to value on new channel | <90 days for first signal | Not investing in dead ends |

---

## Anti-Patterns (What NOT to Do)

- **Don't allocate budget by gut feel.** "Let's try $10K on LinkedIn and see what happens" is not a strategy. Start from revenue targets and work backward.
- **Don't spread budget across 6+ channels.** At $2M ARR, you cannot run 6 channels well. Master 1-2 before adding a third. Thin spend across many channels produces zero signal.
- **Don't hire ahead of playbook.** If you don't have a proven content strategy, don't hire a content marketer. Prove the playbook with freelancers and AI first, then hire to scale it.
- **Don't skip the 5% buffer.** Unexpected opportunities and costs always arise. A small buffer avoids reactive cuts to working programs.
- **Don't buy Tier 3 tools at $2M ARR.** You don't need a $3K/month ABM platform when you have 50 target accounts. A spreadsheet and LinkedIn work fine.
- **Don't treat founder time as free.** Founder content is "zero budget" but not zero cost. Track time investment and model the opportunity cost.
- **Don't compare your budget to venture-backed competitors spending 60% of revenue on marketing.** Your budget needs to be capital-efficient. Different game.
- **Don't lock into annual contracts in year one of a channel.** Pay monthly until the channel is proven, even if annual pricing is cheaper. The optionality is worth the premium.
- **Don't set budget once a year and forget it.** Markets shift, channels decay, competitors move. Monthly reviews with quarterly rebalancing is the minimum cadence.
- **Don't confuse activity with allocation.** Spending $5K/month on content means nothing if there's no distribution plan. Budget allocation = production + distribution.

---

## Integration Points

```
Marketing Budget & Resource Allocation outputs → consumed by:

┌────────────────────────────┐
│ Budget Allocation Model     │──→ Content Engine (08) — content production budget
│                             │──→ GEO Optimizer (09) — SEO/GEO tool + content budget
│                             │──→ CAC Optimizer (12) — paid channel budgets
│                             │──→ Pipeline Accelerator (13) — program spend by stage
├────────────────────────────┤
│ Headcount Plan              │──→ Content Engine (08) — who produces content
│                             │──→ Sales Enablement (10) — who owns enablement
│                             │──→ Marketing Ops (16) — who manages systems
├────────────────────────────┤
│ Build/Buy/Automate Matrix   │──→ Content Engine (08) — AI vs. human content mix
│                             │──→ GEO Optimizer (09) — tool selection
│                             │──→ Marketing Ops (16) — automation architecture
├────────────────────────────┤
│ Channel ROI Model           │──→ CAC Optimizer (12) — channel efficiency benchmarks
│                             │──→ Pipeline Accelerator (13) — channel mix strategy
│                             │──→ Launch Playbook (11) — launch channel budget
├────────────────────────────┤
│ Tech Stack Budget           │──→ Marketing Ops (16) — tool implementation plan
│                             │──→ Every execution skill — tool availability
├────────────────────────────┤
│ Monthly Review Process      │──→ Marketing Metrics (15) — reporting cadence
│                             │──→ CAC Optimizer (12) — reallocation triggers
└────────────────────────────┘
```

---

## Signals to Increase Budget

Not all growth problems are budget problems, but some are. Increase marketing budget when:

| Signal | What It Means | Action |
|--------|---------------|--------|
| Proven channel is maxed on leads at current spend | You've optimized; now you need volume | Increase spend 25-50% on that channel |
| CAC is decreasing and pipeline is growing | Your efficiency is improving — invest more | Increase total budget by 15-25% |
| Sales team is under-utilized (pipeline < 2x target) | Not enough pipeline for the team you have | Fund marketing to fill the gap |
| Competitor is outspending you in your best channel | You risk losing share of voice | Match or reposition to different channel |
| New ICP segment validated | Opportunity to expand before competitors | Allocate incremental budget to new segment |
| LTV:CAC ratio exceeds 5:1 | You are under-investing in growth | Significant budget increase warranted |
| Tool or AI breakthrough reduces production costs | Same output for less | Shift savings to distribution/programs |

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Full budget model rebuild | Annually | New fiscal year, new funding round, new growth targets |
| Monthly budget review | Monthly | First week of every month |
| Channel ROI assessment | Monthly | Part of monthly review |
| Headcount plan review | Quarterly | Or when a hiring signal triggers |
| Tech stack audit | Quarterly | Identify unused tools, evaluate new ones |
| Build/Buy/Automate reassessment | Every 6 months | AI capabilities evolve rapidly |
| Budget reallocation | Monthly (minor), Quarterly (major) | Performance data and pipeline health |
| Benchmark comparison | Every 6 months | Compare to industry data and peer companies |
