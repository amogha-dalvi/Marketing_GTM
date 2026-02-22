# Pipeline Accelerator

> **Layer 4 — Growth & Optimization** | Skill 13 of 16
> **Dependencies:** [ICP Definition](./02-icp-definition.md), [Competitive Intel](./03-competitive-intel.md), [Positioning & Messaging](./04-positioning-messaging.md), [GTM Strategy](./05-gtm-strategy.md), [Content Engine](./08-content-engine.md), [Sales Enablement](./10-sales-enablement.md)
> **Feeds into:** [Marketing Metrics](./15-marketing-metrics.md), [Marketing Ops](./16-marketing-ops.md)
> **Parallel with:** [CAC Optimizer](./12-cac-optimizer.md), [NRR Engine](./14-nrr-engine.md)

---

## Purpose

Pipeline velocity is the compound metric that moves revenue. It is not one number but four levers operating together: deal volume, win rate, deal size, and cycle time. Most $1M-5M ARR companies optimize one lever (usually top-of-funnel volume) while ignoring the other three. A 15% improvement across all four levers produces a 75% increase in pipeline velocity. This skill builds the system for identifying which lever has the highest leverage at your current stage, then applying AI-powered signal-based approaches to move all four simultaneously.

---

## Business Context ($1M-5M ARR)

- You have enough pipeline data to identify patterns but likely no formal velocity measurement or lever analysis
- MQL volume targets and last-click attribution are dying — buyers self-educate in dark social channels, engage across buying groups, and expect relevance at the moment they raise their hand
- Only ~33% of organizations have implemented AI agents for marketing operations at scale, creating a massive early-mover advantage for those who act now
- Manual lead routing and linear nurture drips are being replaced by signal-triggered engagement that meets buyers where they are in their journey
- Sales and marketing alignment at this stage is often informal — RevOps discipline separates the companies that break through $5M from those that stall
- Your biggest pipeline problem is rarely "not enough leads" — it is unqualified leads clogging the funnel, missing stakeholders in the buying group, and deals stalling mid-cycle because nobody owns acceleration
- Buyers are influenced in untrackable places (Slack DMs, podcasts, private communities) — attribution tools miss 60-70% of the picture

---

## Workflow

### Phase 1: Pipeline Velocity Audit & Lever Analysis (Day 1-2)

**Objective:** Measure your current pipeline velocity, identify which lever has the highest leverage, and set improvement targets.

**Inputs required:**
- CRM data export (all opportunities last 12 months: stage, dates, deal value, outcome, source)
- Win/loss records with reason codes
- Sales cycle timestamps (stage-to-stage progression)
- Historical MQL/SQL/Opportunity conversion rates
- Current lead scoring model (if any)
- Average deal size by segment
- Sales team capacity and quota data

**Pipeline Velocity Calculator:**

```
Pipeline Velocity = (# Qualified Opps x Win Rate x Avg Deal Size) / Sales Cycle Length (days)

Example:
Current: (50 opps x 22% win rate x $18,000 ADS) / 45 days = $4,400/day

Lever Analysis — Impact of 15% improvement to each lever independently:
  +15% Qualified Opps:  (57.5 x 22% x $18,000) / 45 = $5,060/day (+15%)
  +15% Win Rate:        (50 x 25.3% x $18,000) / 45 = $5,060/day (+15%)
  +15% Deal Size:       (50 x 22% x $20,700) / 45 = $5,060/day (+15%)
  -15% Cycle Length:    (50 x 22% x $18,000) / 38.25 = $5,176/day (+18%)

Combined +15% all levers:
  (57.5 x 25.3% x $20,700) / 38.25 = $7,870/day (+79%)
```

**Lever Prioritization Framework:**

| Stage Signal | Highest-Leverage Play | Why |
|---|---|---|
| Win rate <15% | Fix qualification and competitive positioning | You are letting bad-fit deals in or losing on differentiation |
| Avg deal size declining | Implement buying group orchestration and value selling | You are selling to individuals, not buying groups with budget authority |
| Cycle length >60 days | Accelerate with signal-based engagement and social proof matching | Deals stall when buyers lack confidence or internal champions lack air cover |
| Qualified opps <30/month | Focus on intent-based ABM and inbound demand gen | Volume is legitimately too low to hit targets |
| All metrics stable but flat | Layer AI automation across all four levers | Compound small improvements for outsized velocity gain |

**AI Workflow:**
1. Pull all CRM opportunity data for last 12 months
2. Calculate current velocity and each lever's contribution
3. Segment velocity by source, segment, deal size tier, and sales rep
4. Identify the lever with the highest gap between current and benchmark performance
5. Model scenarios: what happens if you improve each lever by 10%, 20%, 30%
6. Identify stage-to-stage drop-off points (where do deals stall or die?)
7. Generate prioritized improvement roadmap

**Output:** `pipeline-velocity-audit.md` — Current velocity calculation, lever analysis, stage-to-stage conversion map, and prioritized improvement plan with modeled impact.

### Phase 2: Intent-Based ABM Program Design (Day 3-5)

**Objective:** Build an account-based program that uses intent signals to identify, engage, and convert high-fit accounts.

**ABM has evolved from a campaign tactic to revenue architecture.** At $1M-5M ARR, you cannot afford spray-and-pray ABM. Focus on 50-200 high-fit accounts and orchestrate multi-channel engagement across the buying group.

**ABM Program Design Template:**

```
# ABM Program Architecture

## 1. ACCOUNT SELECTION (ICP-Aligned)
Tiering criteria:
├── Tier 1 (1:1) — 10-25 accounts
│   Criteria: Perfect ICP fit + active intent signals + known champion
│   Treatment: Fully personalized, dedicated resources
│
├── Tier 2 (1:Few) — 25-75 accounts
│   Criteria: Strong ICP fit + some intent signals
│   Treatment: Segment-personalized, shared resources
│
└── Tier 3 (1:Many) — 75-200 accounts
    Criteria: ICP fit, no active intent yet
    Treatment: Programmatic, trigger-activated

Data sources for account selection:
- ICP fit score (from ICP Definition, Skill 02)
- Technographic match (tech stack alignment)
- Firmographic match (size, industry, growth stage)
- Intent data (third-party: Bombora, G2, TrustRadius buyer activity)
- First-party signals (website visits, content engagement, pricing page views)
- Competitive intelligence (contract expiration timing, competitor dissatisfaction signals)

## 2. BUYING GROUP MAPPING (per account)
Typical B2B SaaS buying group at $15K-50K ACV:
├── Economic Buyer — Controls budget, approves spend
├── Champion — Internal advocate, drives evaluation
├── Technical Evaluator — Validates product capability
├── End User — Will use the product daily
└── Blocker — Has objections or competing priorities

For each target account, map:
- Which roles are identified (contacts in CRM)
- Which roles are engaged (opened email, attended event, visited site)
- Which roles are missing (no contact, no engagement)
- What content/touchpoint each role needs

## 3. ENGAGEMENT ORCHESTRATION
Channel mix by tier:
├── Tier 1: Direct outreach, personalized content, executive dinners,
│           custom demos, account-specific landing pages
├── Tier 2: Segment webinars, personalized email sequences,
│           retargeting, peer roundtables
└── Tier 3: Programmatic ads, gated content, automated nurture,
            event invitations

Multi-touch sequence (Tier 1 example):
  Week 1: Intent signal detected → AI generates account brief
  Week 2: Personalized insight email to champion
  Week 3: Targeted ad campaign across buying group
  Week 4: High-value content asset to economic buyer
  Week 5: Custom demo offer to technical evaluator
  Week 6: Peer reference matching (case study from same industry)
  Week 8: Executive-to-executive outreach

## 4. MEASUREMENT FRAMEWORK
Leading indicators:
- Account engagement score (weighted across buying group)
- Buying group coverage (% of roles identified and engaged)
- Intent signal strength (increasing, stable, declining)

Lagging indicators:
- Accounts progressing to opportunity
- Pipeline generated from ABM-sourced accounts
- Win rate on ABM-influenced deals vs non-ABM
- Average deal size (ABM vs non-ABM)
- Sales cycle length (ABM vs non-ABM)
```

**Output:** `abm-program-design.md` — Account tiers, selection criteria, buying group maps, engagement sequences, and measurement framework.

### Phase 3: Signal-Based Engagement System (Day 6-8)

**Objective:** Replace linear nurture drips with signal-triggered engagement that reaches buyers at their moment of highest relevance.

**Core Principle:** Every buyer action is a signal. Most companies ignore 90% of these signals or respond too slowly. The 5-minute lead response window is real — companies that respond within 5 minutes are 100x more likely to connect than those responding after 30 minutes.

**Signal-Based Engagement Workflow:**

```
SIGNAL DETECTION → SCORING → ROUTING → ENGAGEMENT → MEASUREMENT

1. SIGNAL DETECTION
   High-intent signals (trigger immediate action):
   ├── Pricing page depth (>30 seconds, multiple visits)
   ├── Demo/trial request
   ├── Competitor comparison page visit
   ├── Multiple stakeholders from same account visiting in same week
   ├── Return visit after 30+ days of inactivity
   └── G2/review site category research (third-party intent)

   Medium-intent signals (trigger nurture acceleration):
   ├── Blog post binge (3+ pages in one session)
   ├── Case study download
   ├── Webinar registration or attendance
   ├── Email re-engagement after dormancy
   └── Social engagement (LinkedIn comment, share)

   Low-intent signals (trigger programmatic engagement):
   ├── Single page visit
   ├── Newsletter signup
   ├── Social follow
   └── Content syndication lead

   External signals (trigger proactive outreach):
   ├── Competitor contract expiration (estimated from technographic data)
   ├── New funding announcement (company can now afford solutions)
   ├── Leadership change (new VP often brings new tools)
   ├── Technographic change (adopted complementary tech)
   ├── Job postings signaling initiative (e.g., "hiring data engineer" = data tool need)
   └── Negative competitor reviews (dissatisfaction signal)

2. AI SCORING (replaces manual MQL handoffs)
   Score = f(behavioral intent, firmographic fit, technographic alignment,
             buying group engagement, recency, frequency)

   Behavioral intent (40% weight):
   - Pages visited (weighted by proximity to purchase)
   - Content consumed (weighted by funnel stage)
   - Engagement recency and frequency

   Firmographic fit (25% weight):
   - ICP match score (from Skill 02)
   - Company size, industry, growth trajectory

   Technographic alignment (15% weight):
   - Current tech stack compatibility
   - Complementary tool adoption

   Buying group signal (20% weight):
   - Number of contacts engaged from same account
   - Seniority of engaged contacts
   - Role coverage across buying group

3. ROUTING
   Score 80-100 → Immediate sales handoff (within 5 minutes)
   Score 60-79  → Sales + marketing co-engagement sequence
   Score 40-59  → Accelerated nurture with personalized content
   Score 0-39   → Programmatic nurture, re-score on next signal

4. ENGAGEMENT TRIGGERS
   Each signal maps to a specific response:
   ├── Pricing page visit → Personalized pricing email + SDR call within 5 min
   ├── Competitor comparison view → Battlecard-informed outreach
   ├── Case study download → Related case study + demo offer
   ├── Multi-stakeholder activity → Buying group orchestration activation
   ├── Return after dormancy → "What's changed?" re-engagement
   └── Competitor contract expiration → Proactive migration offer
```

**AI Agent Architecture for Signal-Based Engagement:**
1. **Signal Collection Agent** — Aggregates signals from website analytics, CRM, MAP, third-party intent providers, social platforms
2. **Scoring Agent** — Applies AI scoring model, identifies score changes and threshold crossings
3. **Routing Agent** — Assigns leads/accounts to correct engagement track, notifies sales in real time
4. **Content Personalization Agent** — Selects and personalizes content for each signal-response pair
5. **Orchestration Agent** — Ensures multi-channel coordination, prevents over-contact, manages cadence

**Output:** `signal-engagement-system.md` — Signal taxonomy, scoring model, routing rules, engagement triggers, and AI agent specifications.

### Phase 4: Buying Group Orchestration (Day 9-10)

**Objective:** Track, engage, and fill gaps across the entire buying group for each active opportunity.

**Why This Matters:** Single-threaded deals (one contact = one champion) have a 15-20% win rate. Multi-threaded deals (3+ contacts engaged across the buying group) have a 40-50% win rate. Most $1M-5M ARR companies are dangerously single-threaded.

**Buying Group Coverage Map Template:**

```
# Buying Group Coverage Map — [Account Name]

## Target Buying Group
| Role | Contact Name | Title | Status | Engagement Level | Last Touch | Gap Action |
|------|-------------|-------|--------|-----------------|------------|------------|
| Economic Buyer | [name or UNKNOWN] | [title] | Identified / Engaged / Active | Low/Med/High | [date] | [action needed] |
| Champion | [name or UNKNOWN] | [title] | Identified / Engaged / Active | Low/Med/High | [date] | [action needed] |
| Technical Evaluator | [name or UNKNOWN] | [title] | Identified / Engaged / Active | Low/Med/High | [date] | [action needed] |
| End User | [name or UNKNOWN] | [title] | Identified / Engaged / Active | Low/Med/High | [date] | [action needed] |
| Blocker/Influencer | [name or UNKNOWN] | [title] | Identified / Engaged / Active | Low/Med/High | [date] | [action needed] |

## Coverage Score: [X/5 roles identified] | [X/5 roles engaged] | [X/5 roles active]

## Gap Analysis
- Missing roles: [list]
- Under-engaged roles: [list]
- Recommended actions:
  ├── [Role]: [specific content/outreach recommendation]
  ├── [Role]: [specific content/outreach recommendation]
  └── [Role]: [specific content/outreach recommendation]

## Content Mapping by Role
| Role | Pain Point | Content Asset | Stage |
|------|-----------|---------------|-------|
| Economic Buyer | ROI justification | ROI calculator, executive brief | Decision |
| Champion | Internal selling support | Business case template, competitive comparison | Evaluation |
| Technical Evaluator | Integration/security concerns | Architecture doc, security whitepaper | Evaluation |
| End User | Ease of use, daily workflow | Product walkthrough, customer testimonial | Consideration |
| Blocker | Risk mitigation | Migration plan, SLA documentation | Decision |
```

**AI-Powered Buying Group Orchestration:**
1. AI scans CRM contacts per opportunity and maps to buying group roles
2. Identifies gaps: which roles are missing or under-engaged
3. Recommends content and outreach for each gap
4. Triggers personalized engagement sequences to missing roles
5. Alerts sales reps when key roles go dark or new stakeholders emerge
6. Tracks group-level engagement progression, not just individual contacts

**Output:** `buying-group-orchestration.md` — Coverage map template, role-based content mapping, AI orchestration rules, and gap-filling playbook.

### Phase 5: Predictive Lead Scoring Model (Day 11-13)

**Objective:** Replace manual MQL definitions with an AI-powered scoring model that predicts conversion probability.

**Why Traditional Scoring Fails at $1M-5M ARR:**
- Basic demographic/firmographic scoring misses behavioral intent
- Static threshold-based MQL definitions create false positives and false negatives
- Manual scoring cannot keep up with signal volume or complexity
- Sales wastes time on "MQLs" that never convert while real buyers go unnoticed

**Lead Scoring Model Design Framework:**

```
# Predictive Lead Scoring Architecture

## Layer 1: Fit Score (Is this the right account?)
Inputs:
├── Firmographic: company size, industry, revenue, growth rate
├── Technographic: current tech stack, complementary tools, competitor tools
├── ICP alignment: match against ideal customer profile (Skill 02)
└── Firmographic disqualifiers: too small, wrong industry, incompatible stack

Scoring: 0-100 fit score
Threshold: <40 = auto-disqualify, 40-70 = monitor, >70 = qualified fit

## Layer 2: Intent Score (Is this account actively looking?)
Inputs:
├── First-party behavioral: page visits, content engagement, return frequency
├── Third-party intent: Bombora, G2 buyer intent, review site activity
├── Competitive signals: competitor page views, comparison searches
├── Trigger events: funding, leadership change, job postings, tech adoption
└── Buying group signals: multiple contacts from same account

Scoring: 0-100 intent score
Threshold: <30 = passive, 30-60 = warming, >60 = active intent

## Layer 3: Engagement Score (Is this contact/account engaging with us?)
Inputs:
├── Email engagement: opens, clicks, replies
├── Website behavior: session depth, page value scores, return visits
├── Content consumption: downloads, webinar attendance, video views
├── Sales interaction: meetings booked, calls completed, replies to outreach
└── Social engagement: LinkedIn interactions, community participation

Scoring: 0-100 engagement score
Threshold: <25 = cold, 25-50 = warming, >50 = hot

## Composite Score Calculation
Pipeline Readiness Score = (Fit x 0.30) + (Intent x 0.40) + (Engagement x 0.30)

Score 80-100 → Opportunity-ready: immediate sales handoff
Score 60-79  → Sales-developing: SDR outreach + accelerated content
Score 40-59  → Marketing-nurturing: signal-triggered campaigns
Score 0-39   → Early-stage: programmatic awareness

## Model Calibration
- Backtest against last 12 months of won/lost deals
- Calculate: what score did won deals reach, and when?
- Identify: false positive rate (high score, didn't convert)
- Identify: false negative rate (low score, did convert)
- Retrain model quarterly with new outcome data
```

**Output:** `lead-scoring-model.md` — Scoring architecture, input definitions, composite calculation, thresholds, and calibration methodology.

### Phase 6: Win Rate Improvement System (Day 14-16)

**Objective:** Systematically improve win rates through AI-powered analysis, personalized engagement, and social proof matching.

**Win Rate Improvement Playbook:**

```
# Win Rate Improvement System

## 1. WIN/LOSS ANALYSIS AT SCALE
Manual approach (current): Interview 5-10 lost deals per quarter
AI-powered approach (target): Analyze every closed deal automatically

AI analyzes:
├── Call recordings (sentiment, objections, competitor mentions, decision criteria)
├── Email threads (engagement patterns, stakeholder involvement, response time)
├── CRM notes (rep observations, stage progression, stall points)
├── Deal metadata (cycle length, stage durations, stakeholders involved)
└── Outcome correlation (what patterns predict wins vs losses)

Deliverable: Monthly win/loss pattern report
├── Top 5 reasons we win (with frequency and confidence)
├── Top 5 reasons we lose (with frequency and confidence)
├── Win rate by segment, source, competitor, deal size, sales rep
├── Stage conversion rates (where do deals die?)
└── Recommended actions per pattern

## 2. PERSONALIZED PROPOSALS & DEMOS
AI researches prospect before every sales interaction:
├── Company context: recent news, earnings, strategic initiatives
├── Individual context: LinkedIn activity, content engagement, role priorities
├── Industry context: trends, challenges, regulatory changes
├── Competitive context: current vendor, likely alternatives being evaluated
└── Internal context: which content they consumed, what pages they visited

Generates:
├── Customized demo script (highlight features mapped to their stated needs)
├── Personalized proposal (ROI model using their metrics)
├── Tailored case studies (matched to their industry, size, use case)
└── Objection prep (predicted objections based on role/industry/competitor)

## 3. SOCIAL PROOF MATCHING
Instead of generic case studies, match proof to prospect profile:

| Prospect Attribute | Matched Social Proof |
|---|---|
| Industry: Healthcare | Healthcare customer case study + compliance testimonial |
| Size: 200 employees | Similar-sized company ROI story |
| Use case: Data migration | Migration success story with timeline metrics |
| Competitor: switching from X | Customer who switched from X with comparison data |
| Objection: security concerns | SOC2/security testimonial + peer reference |

AI workflow:
1. Profile each active opportunity (industry, size, use case, objections)
2. Search case study library for closest matches
3. If no exact match exists, flag gap for content team (feeds Content Engine, Skill 08)
4. Recommend specific assets to sales rep at each deal stage
5. Track which proof points correlate with higher win rates

## 4. DEAL ACCELERATION TACTICS (Reducing Cycle Time)
| Stall Pattern | Acceleration Tactic |
|---|---|
| Champion goes dark | AI detects engagement drop, triggers multi-thread outreach |
| Stuck in legal/procurement | Proactively send security docs, compliance certs, reference list |
| "We need to think about it" | Send ROI calculator + custom business case template |
| Competing priority delays | Create urgency content (cost of delay analysis, competitive window) |
| Missing stakeholder buy-in | Trigger buying group orchestration (Phase 4) |
| Budget not approved | Executive brief + peer CXO reference call offer |
```

**Output:** `win-rate-playbook.md` — Win/loss analysis system, personalization framework, social proof matching engine, and deal acceleration tactics.

### Phase 7: RevOps Alignment & Dashboard Design (Day 17-19)

**Objective:** Unify marketing and sales around shared definitions, shared data, and shared KPIs. Companies with aligned RevOps see 27% faster conversion and 34% higher win rates.

**RevOps Dashboard Design:**

```
# Revenue Operations Dashboard

## Layer 1: Pipeline Velocity (Executive View)
┌─────────────────────────────────────────────────────┐
│ PIPELINE VELOCITY: $X,XXX/day (vs target: $X,XXX)  │
│                                                       │
│ Qualified Opps: XX (▲/▼ vs last month)               │
│ Win Rate: XX% (▲/▼ vs last month)                    │
│ Avg Deal Size: $XX,XXX (▲/▼ vs last month)          │
│ Sales Cycle: XX days (▲/▼ vs last month)             │
│                                                       │
│ Pipeline Coverage: X.Xx (target: 3-4x quota)        │
│ Weighted Pipeline: $XXX,XXX                          │
│ Pipeline Created This Month: $XXX,XXX               │
│ Pipeline Created vs Target: XX%                      │
└─────────────────────────────────────────────────────┘

## Layer 2: Funnel Conversion (Marketing + Sales View)
┌─────────────────────────────────────────────────────┐
│ Visitors → Leads → MQLs → SQLs → Opps → Closed Won │
│ XXXXX     XXX      XX     XX     XX      X          │
│                                                       │
│ Stage Conversion Rates:                               │
│ Lead→MQL: XX%  MQL→SQL: XX%  SQL→Opp: XX%           │
│ Opp→Close: XX%  Overall: X.X%                        │
│                                                       │
│ Stage Velocity (avg days per stage):                  │
│ Lead→MQL: X days  MQL→SQL: X days                    │
│ SQL→Opp: X days   Opp→Close: XX days                │
│                                                       │
│ Bottleneck Alert: [stage with longest dwell time]    │
└─────────────────────────────────────────────────────┘

## Layer 3: Signal & Engagement (Marketing Ops View)
┌─────────────────────────────────────────────────────┐
│ Active Intent Signals This Week: XXX                 │
│ Signal→Response Time (median): X minutes             │
│ Signal→Meeting Rate: XX%                             │
│                                                       │
│ ABM Metrics:                                          │
│ Tier 1 Accounts Engaged: XX/XX                       │
│ Buying Group Coverage (avg): XX%                     │
│ ABM-Sourced Pipeline: $XXX,XXX                       │
│                                                       │
│ Lead Score Distribution:                              │
│ 80-100 (Opp-ready): XX | 60-79 (Developing): XX     │
│ 40-59 (Nurturing): XXX | 0-39 (Early): X,XXX       │
└─────────────────────────────────────────────────────┘

## Layer 4: Attribution & Dark Social (Insights View)
┌─────────────────────────────────────────────────────┐
│ Multi-Touch Attribution (AI-Powered):                │
│ ├── First Touch: XX% organic, XX% paid, XX% referral│
│ ├── Influenced: XX% content, XX% email, XX% events  │
│ └── Last Touch: XX% direct, XX% demo request         │
│                                                       │
│ Self-Reported Attribution ("How did you hear?"):     │
│ ├── Podcast: XX%                                     │
│ ├── Peer recommendation: XX%                         │
│ ├── Community (Slack/Discord): XX%                   │
│ ├── LinkedIn post: XX%                               │
│ └── Other: XX%                                       │
│                                                       │
│ Delta: What self-reported captures that tools miss   │
└─────────────────────────────────────────────────────┘
```

**Shared Definitions (Marketing + Sales Must Agree):**

| Term | Definition | Owner | SLA |
|------|-----------|-------|-----|
| Lead | Any identified contact with email | Marketing | — |
| MQL (or Signal-Qualified Lead) | Score >60 OR high-intent signal triggered | Marketing | Route to sales within 5 min |
| SQL | Sales accepts and confirms fit via conversation | Sales | Accept/reject within 24 hours |
| Opportunity | Budget, authority, need, timeline confirmed | Sales | Update stage within 48 hours |
| Closed Won | Contract signed | Sales | CRM updated same day |
| Closed Lost | Deal dead, reason captured | Sales | Reason code required |

**Dark Social & Self-Reported Attribution:**
- Add "How did you hear about us?" as a required field on demo request forms
- Track responses over time to understand true influence channels
- Compare self-reported data against tool-based attribution
- Invest in channels that self-reported attribution reveals but click-tracking misses: podcasts, peer communities, Slack/Discord groups, word-of-mouth, events
- Feed insights back into [GTM Strategy](./05-gtm-strategy.md) and [CAC Optimizer](./12-cac-optimizer.md) for channel allocation

**Output:** `revops-dashboard.md` — Dashboard specifications, shared definitions, SLAs, attribution framework, and dark social tracking methodology.

### Phase 8: AI Agent Deployment for Pipeline Operations (Day 20-22)

**Objective:** Deploy AI agents that automate the repetitive, time-sensitive operations that humans cannot do at scale.

**AI Agent Deployment Priority Matrix:**

| Agent | What It Does | Impact | Effort | Priority |
|---|---|---|---|---|
| Instant Lead Router | Detects high-intent signal, scores, routes to right rep within 5 minutes | Very High | Medium | 1 |
| Content Personalizer | Selects and tailors content for each prospect based on profile and behavior | High | Medium | 2 |
| Buying Group Mapper | Scans CRM + LinkedIn, identifies gaps in buying group coverage, recommends contacts | High | High | 3 |
| Win/Loss Analyzer | Processes call recordings and CRM data, generates pattern reports | High | Medium | 4 |
| Campaign Orchestrator | Manages multi-channel ABM sequences, adjusts based on engagement signals | Very High | High | 5 |
| Competitive Alert Monitor | Tracks competitor changes, updates battlecards, notifies sales | Medium | Low | 6 |

**Implementation Approach for $1M-5M ARR:**
- Start with Agent 1 (Instant Lead Router) — highest ROI, fastest to implement
- Use existing tools (CRM workflows, Zapier/Make, AI APIs) rather than building custom
- Measure impact: track response time, meeting rate, and conversion before/after
- Add agents incrementally as each one proves ROI
- Do NOT try to deploy all agents simultaneously — sequence by priority

**Output:** `ai-agent-deployment-plan.md` — Agent specifications, priority sequence, implementation approach, and success metrics per agent.

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Pipeline velocity ($/day) | Track and improve quarter-over-quarter | The compound metric — moves revenue directly |
| Qualified opportunities created/month | Sufficient for 3-4x pipeline coverage of quota | Not enough opps = not enough revenue, too many = poor qualification |
| Win rate (overall and by segment) | >20% and improving 2-3% per quarter | Highest-leverage metric for most $1M-5M companies |
| Average deal size | Growing or stable, not declining | Indicates you are selling to the right level in the buying group |
| Sales cycle length (days) | Decreasing quarter-over-quarter | Faster cycles = more revenue with same pipeline |
| Signal-to-meeting rate | >15% of high-intent signals become meetings | Validates that signal detection and routing are working |
| Lead response time (high-intent) | <5 minutes median | 100x connection rate improvement vs 30+ minute response |
| Buying group coverage | >3 contacts engaged per active opportunity | Multi-threaded deals win at 2-3x the rate of single-threaded |
| ABM account engagement rate | >60% of Tier 1 accounts actively engaged | ABM is only working if target accounts are engaging |
| Pipeline-to-close ratio | 3-4x quota in active pipeline | Below 3x = pipeline crisis, above 5x = qualification problem |
| Self-reported attribution capture rate | >80% of demo requests have "how did you hear?" answered | Captures the dark social influence tools miss |

---

## Anti-Patterns (What NOT to Do)

- **Don't optimize only top-of-funnel volume.** Doubling MQLs with the same win rate and deal size just doubles sales workload without doubling revenue. Work all four velocity levers.
- **Don't use MQL volume as a marketing success metric.** MQLs that do not convert to pipeline are vanity metrics. Measure pipeline created, not leads generated.
- **Don't build linear nurture drips.** "Day 1: Welcome email. Day 3: Blog post. Day 7: Case study." These ignore buyer context. Replace with signal-triggered engagement.
- **Don't route all leads the same way.** A pricing page visitor and a blog reader have vastly different intent levels. Routing both to the same SDR queue wastes the high-intent signal and annoys the low-intent browser.
- **Don't ignore dark social influence.** If your attribution model says 80% of pipeline comes from Google Ads but self-reported says 40% heard about you on a podcast, your attribution is lying and your budget allocation is wrong.
- **Don't single-thread deals.** One champion is one point of failure. If your champion goes on vacation, changes roles, or loses internal influence, the deal dies. Orchestrate the buying group.
- **Don't deploy AI agents without measuring baseline first.** You cannot prove AI agent ROI if you do not know pre-deployment performance. Measure response time, conversion rates, and cycle length before deploying automation.
- **Don't let marketing and sales define pipeline stages differently.** If marketing thinks an MQL is "downloaded a whitepaper" and sales thinks an SQL is "ready to buy next week," the entire funnel measurement is broken. Align on shared definitions.

---

## Integration Points

```
Pipeline Accelerator outputs → consumed by:

┌──────────────────────────────────┐
│ Pipeline Velocity Analysis        │──→ Marketing Metrics (15) — revenue forecasting
│                                   │──→ GTM Strategy (05) — resource allocation
│                                   │──→ CAC Optimizer (12) — efficiency benchmarking
├──────────────────────────────────┤
│ ABM Program & Buying Group Maps  │──→ Sales Enablement (10) — account-level selling tools
│                                   │──→ Content Engine (08) — role-based content needs
│                                   │──→ NRR Engine (14) — expansion account identification
├──────────────────────────────────┤
│ Signal-Based Engagement System   │──→ Marketing Ops (16) — automation infrastructure
│                                   │──→ CAC Optimizer (12) — channel signal analysis
│                                   │──→ Sales Enablement (10) — real-time buyer intel
├──────────────────────────────────┤
│ Lead Scoring Model               │──→ Marketing Ops (16) — scoring infrastructure
│                                   │──→ Marketing Metrics (15) — conversion analytics
├──────────────────────────────────┤
│ Win Rate Playbook                │──→ Sales Enablement (10) — deal-level tactics
│                                   │──→ Competitive Intel (03) — win/loss intelligence
│                                   │──→ Content Engine (08) — social proof gaps
├──────────────────────────────────┤
│ RevOps Dashboard & Attribution   │──→ Marketing Metrics (15) — unified measurement
│                                   │──→ Marketing Ops (16) — dashboard infrastructure
│                                   │──→ CAC Optimizer (12) — true channel ROI
├──────────────────────────────────┤
│ AI Agent Specifications          │──→ Marketing Ops (16) — implementation
│                                   │──→ Marketing Metrics (15) — automation ROI tracking
└──────────────────────────────────┘

Pipeline Accelerator consumes ← inputs from:

┌──────────────────────────────────┐
│ ICP Definition (02)              │──→ Account selection criteria, fit scoring
│ Competitive Intel (03)           │──→ Battlecards for deals, competitive signals
│ Positioning & Messaging (04)    │──→ Value props for personalized outreach
│ GTM Strategy (05)                │──→ Channel priorities, market segments
│ Content Engine (08)              │──→ Content assets for each funnel stage
│ Sales Enablement (10)            │──→ Sales process, rep readiness, deal intel
│ Customer Research (01)           │──→ Buying journey map, trigger events, language
└──────────────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Pipeline velocity calculation | Weekly | Automated from CRM data |
| Lever analysis and target review | Monthly | Or after major GTM change |
| ABM account list and tiering | Quarterly | New ICP data, account performance review |
| Buying group coverage audit | Bi-weekly for active Tier 1 deals | Any deal entering negotiation stage |
| Lead scoring model calibration | Quarterly | New win/loss outcome data available |
| Signal taxonomy and routing rules | Monthly | Performance data on signal-to-meeting conversion |
| Win/loss pattern analysis | Monthly | AI-generated from closed deal data |
| RevOps dashboard review | Weekly (team), Monthly (executive) | Automated |
| Dark social attribution analysis | Monthly | New self-reported data |
| AI agent performance review | Monthly | Baseline comparison metrics |
| Full pipeline accelerator system audit | Every 6 months | Or when pipeline velocity plateaus |
