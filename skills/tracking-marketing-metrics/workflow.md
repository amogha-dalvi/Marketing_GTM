# Marketing Metrics & Attribution

> **Layer 5 — Infrastructure & Measurement** | Skill 15 of 16
> **Dependencies:** [GTM Strategy](./05-gtm-strategy.md), [Marketing Budget](./07-marketing-budget.md), all execution and optimization skills ([Content Engine](./08-content-engine.md), [GEO Optimizer](./09-geo-optimizer.md), [Sales Enablement](./10-sales-enablement.md), [Launch Playbook](./11-launch-playbook.md), [CAC Optimizer](./12-cac-optimizer.md), [Pipeline Accelerator](./13-pipeline-accelerator.md), [NRR Engine](./14-nrr-engine.md))
> **Feeds into:** [Marketing Ops](./16-marketing-ops.md), and loops back to all skills (01-14) for optimization
> **Parallel with:** [Marketing Ops](./16-marketing-ops.md)

---

## Purpose

Measurement is the feedback loop that makes everything else work. Without it, you're optimizing blind — spending money on channels that don't convert, doubling down on content that doesn't pipeline, and celebrating vanity metrics while revenue stalls. At $1M-5M ARR, you can't afford measurement theater. You need a lean, honest system that tells you what's working, what's not, and what to do next. This skill builds the measurement infrastructure for the entire marketing system — the metrics hierarchy, attribution model, dashboards, and review cadences that turn data into decisions.

---

## Business Context ($1M-5M ARR)

- You have enough data to measure meaningfully but not so much that you need an enterprise analytics team
- Marketing and sales likely track different numbers and argue about lead quality vs. follow-up speed
- Attribution is probably last-click (if it exists at all), which gives all credit to the final touchpoint and none to the content, community, and brand work that actually built the relationship
- You're likely over-reporting vanity metrics (traffic, MQLs) and under-reporting business metrics (pipeline, CAC payback, NRR)
- AI search and dark social are creating attribution blind spots — buyers are influenced by channels you can't track with UTM parameters
- The cost of bad measurement is invisible: you keep funding what you can measure (paid ads) and starve what you can't (brand, community, content compounding)
- Getting this right now prevents the "we need to rebuild our data" crisis at $5-10M ARR

---

## Workflow

### Phase 1: Metrics Audit & Hierarchy Design (Day 1-2)

**Objective:** Understand what you currently measure, identify gaps, and build a metrics hierarchy that connects marketing activity to business outcomes.

**Step 1: Current State Audit**

Gather and inventory:
- Every marketing report, dashboard, and spreadsheet currently in use
- What metrics marketing reports to the CEO/board
- What metrics sales uses to evaluate marketing
- What tools are generating data (CRM, marketing automation, analytics, ad platforms)
- What definitions exist for MQL, SQL, SQO, opportunity, etc.
- Where data breaks (hand-off gaps, duplicate records, untracked touchpoints)

**AI Workflow:**
1. Feed all existing dashboards and reports into AI
2. Categorize every metric currently tracked into: vanity, business, or leading indicator
3. Identify gaps — business metrics with no tracking, leading indicators nobody watches
4. Map current metrics to business outcomes to see what's connected and what's floating

**Step 2: Metrics Hierarchy Framework**

Organize all metrics into three tiers:

```
Tier 1: BUSINESS METRICS (lagging — these are the outcomes)
│  Revenue, ARR growth rate, pipeline generated, CAC, LTV:CAC,
│  CAC payback period, NRR, win rate, sales cycle length
│
├── Tier 2: LEADING INDICATORS (predictive — these forecast Tier 1)
│   │  Demo requests, branded search volume, AI citation share,
│   │  activation rate, expansion signals, pipeline velocity score,
│   │  MQA→SQO conversion rate, content-sourced pipeline %
│   │
│   └── Tier 3: ACTIVITY METRICS (diagnostic — these explain Tier 2)
│       Traffic by source, email engagement, ad CTR/CPA,
│       content production velocity, social engagement,
│       event attendance, community participation
│
VANITY METRICS (track only as diagnostic context, never as goals):
  Page views, social followers, email list size, impressions,
  "reach," MQL volume without pipeline connection
```

**The rule:** Report Tier 1 to the board. Report Tier 2 to leadership. Use Tier 3 internally for channel optimization. Never celebrate Tier 3 without connecting it to Tier 1.

**Step 3: Map Metrics to the 7 Business Outcomes**

Every metric must connect to one of these outcomes:

| # | Business Outcome | Key Metrics | Leading Indicators |
|---|-----------------|-------------|-------------------|
| 1 | **Pipeline generation** | Pipeline $ created, # qualified opps, pipeline coverage ratio (3-4x) | Demo requests, high-intent page visits, branded search growth |
| 2 | **Revenue efficiency** | Blended CAC, channel CAC, fully-loaded CAC, CAC payback period | Cost-per-MQA trending, organic % of pipeline increasing |
| 3 | **Sales velocity** | Sales cycle length, stage-to-stage conversion rates, win rate | MQA→SQO conversion rate, time-in-stage trends, multi-threading % |
| 4 | **Revenue retention** | Gross retention, NRR, churn rate by cohort, expansion revenue % | Customer health score distribution, product usage trends, NPS/CSAT |
| 5 | **Market position** | Share of voice, AI citation share, branded search volume | GEO performance score, competitive win rate, category association |
| 6 | **Content ROI** | Content-sourced pipeline, content-influenced revenue, topic authority | Content engagement depth, SEO/GEO rankings, backlink growth |
| 7 | **Operational efficiency** | Marketing spend as % of ARR, cost per pipeline $, team utilization | Automation rate, time-to-launch, campaign throughput |

**Output:** `metrics-hierarchy.md` — The master metrics document organized by tier and business outcome.

### Phase 2: Attribution Model Design (Day 3-4)

**Objective:** Build an attribution model that captures both trackable and untrackable influence.

**Why last-click attribution is dead:**
A typical B2B SaaS buyer has 9-15+ touchpoints before talking to sales. Last-click gives 100% credit to the final one (usually a demo request page) and zero to the blog post that educated them, the podcast that built trust, the LinkedIn post that kept you top of mind, or the AI chatbot that recommended you. This systematically overvalues bottom-funnel paid media and undervalues everything else.

**The Hybrid Attribution Model (Multi-Touch + Self-Reported):**

```
┌────────────────────────────────────────────────────────┐
│              HYBRID ATTRIBUTION MODEL                   │
│                                                         │
│  Layer 1: MULTI-TOUCH (system-tracked)                 │
│  ├── First-touch (how they entered the ecosystem)      │
│  ├── Lead-creation touch (what converted them)         │
│  ├── Opportunity-creation touch (what sourced the deal)│
│  └── All touches in between (weighted by recency &     │
│      engagement depth)                                  │
│                                                         │
│  Layer 2: SELF-REPORTED (human-captured)               │
│  ├── "How did you first hear about us?" (open text)    │
│  ├── "What convinced you to reach out?" (open text)    │
│  └── Sales-captured intel from discovery calls         │
│                                                         │
│  Layer 3: AI-ENRICHED (pattern-detected)               │
│  ├── AI citation tracking (LLM recommendation audits)  │
│  ├── Dark social inference (direct traffic patterns)   │
│  └── Account-level engagement scoring                  │
│                                                         │
│  SYNTHESIS: Compare all 3 layers quarterly.            │
│  When they agree → high confidence.                    │
│  When they disagree → investigate the gap.             │
└────────────────────────────────────────────────────────┘
```

**Multi-Touch Implementation:**

| Touch Type | Tracking Method | Weight |
|-----------|----------------|--------|
| First touch | UTM on first website visit (cookied) | Medium — shows discovery channel |
| Content engagement | Page views, time-on-page, downloads | Low — shows interest, not intent |
| High-intent action | Pricing page, demo page, comparison page visit | High — shows buying intent |
| Lead creation | Form fill, chatbot conversation, free trial signup | High — marks conversion moment |
| Opportunity creation | Sales marks deal as sourced | High — marks pipeline moment |
| Closed-won touch | Last marketing touch before close | Medium — shows closing influence |

**Self-Reported Attribution Implementation:**

Add "How did you hear about us?" as an **open text field** (not a dropdown) to:
- Demo request forms
- Free trial signup
- First sales discovery call (sales asks and logs in CRM)
- Post-purchase onboarding survey

Why open text: Dropdowns force answers into your categories. Open text captures what buyers actually remember — "my colleague mentioned you," "saw your founder on a podcast," "ChatGPT recommended you." These answers reveal dark social and AI influence that system-tracked attribution misses entirely.

**AI-Specific Attribution (NEW for 2026):**

| What to Track | How to Track | Why It Matters |
|--------------|-------------|----------------|
| AI citation share | Monthly audit of top 50 prompts in your category across ChatGPT, Claude, Perplexity, Gemini | Shows your presence in AI-influenced buying |
| AI-referred traffic | Monitor direct/organic traffic spikes that correlate with GEO optimization efforts | Captures AI-to-website pipeline |
| AI share of voice | Compare citation frequency vs. top 3 competitors | Shows competitive position in AI layer |
| GEO performance | Track which queries return your brand as a recommendation | Identifies high-value query targets |

*Feeds into and from [GEO Optimizer](./09-geo-optimizer.md) — GEO provides the optimization, this skill measures the results.*

**The truth about attribution:** It will never be 100% accurate. A buyer who heard about you from a friend at a dinner party, then Googled you, then read 3 blog posts, then saw a LinkedIn ad, then asked ChatGPT for alternatives, then booked a demo — no model captures that complete journey. Optimize for directional accuracy: "Is content working? Is paid working? Is brand working?" not "Which exact blog post caused this deal?"

**Output:** `attribution-model.md` — Complete attribution model specification with implementation steps for your tech stack.

### Phase 3: Pipeline & Revenue Metrics Build (Day 5-6)

**Objective:** Build the pipeline and revenue metrics that connect marketing activity to business outcomes.

**Pipeline Velocity Score:**

```
Pipeline Velocity = (# Qualified Opps × Win Rate × Avg Deal Size) / Avg Cycle Length (days)

Example:
(50 opps × 25% win rate × $15,000 ACV) / 45 days = $4,167/day pipeline velocity

This single number tells you: "How much revenue does our pipeline generate per day?"
Track it monthly. Any sustained decline = investigate immediately.
```

**Stage-to-Stage Conversion Metrics:**

| Stage | Definition | Target Conversion | Red Flag Below |
|-------|-----------|-------------------|----------------|
| Visitor → MQA (Marketing Qualified Account) | Account shows buying signals across multiple contacts | 2-5% of target accounts | 1% |
| MQA → SQO (Sales Qualified Opportunity) | Sales validates fit and intent, creates opportunity | 30-40% | 20% |
| SQO → Proposal | Proposal or quote delivered | 50-60% | 35% |
| Proposal → Closed-Won | Deal signed | 30-40% | 20% |
| End-to-end: MQA → Closed-Won | Full marketing-to-revenue | 5-10% | 3% |

*Note: MQA (account-level) replaces MQL (lead-level). An account where 3 people from the buying committee engage is one MQA, not three MQLs. This is more honest and aligns with how B2B actually buys.*

**RevOps alignment stat:** Companies with aligned marketing + sales metrics see 27% faster MQA→SQO conversion because both teams optimize for the same outcome rather than throwing leads over a wall.

**CAC Metrics Suite:**

| Metric | Formula | Target | Why It Matters |
|--------|---------|--------|----------------|
| **Blended CAC** | Total S&M spend / New customers | Varies by ACV | Overall acquisition efficiency |
| **Channel CAC** | Channel spend / Channel-attributed customers | Compare across channels | Channel efficiency |
| **Fully-loaded CAC** | Blended CAC + (onboarding cost + tooling) | <1/3 first-year ACV | True cost of acquisition |
| **CAC Payback** | Fully-loaded CAC / (ACV × Gross Margin) | <18 months | Cash efficiency |
| **LTV:CAC** | (ACV × Gross Margin × Avg Customer Lifetime) / Fully-loaded CAC | 3:1+ (5:1 = excellent) | Unit economics health |
| **Marginal CAC** | Cost of acquiring the *next* customer | Rising = saturation signal | Growth efficiency curve |

*Feeds from [Marketing Budget](./07-marketing-budget.md) for spend data and [CAC Optimizer](./12-cac-optimizer.md) for channel-level optimization.*

**NRR Metrics Suite:**

| Metric | Formula | Target | Why It Matters |
|--------|---------|--------|----------------|
| **Gross Retention** | (Start ARR - Churn ARR) / Start ARR | >90% | Are you keeping customers? |
| **Net Revenue Retention** | (Start ARR - Churn + Expansion) / Start ARR | >110% | Are you growing within accounts? |
| **Expansion Revenue %** | Expansion ARR / Total New ARR | >30% | Efficiency of growth from existing base |
| **Churn Rate by Cohort** | Cohort churn at 3, 6, 12, 24 months | Decreasing over time | Are newer cohorts stickier? |
| **Customer Health Score** | Composite: usage, engagement, support, NPS | >70% in "healthy" | Predictive of retention |

*Feeds from and into [NRR Engine](./14-nrr-engine.md) — NRR Engine provides the programs, this skill measures their impact.*

**Output:** `pipeline-revenue-metrics.md` — Complete pipeline and revenue metrics definitions, formulas, and targets.

### Phase 4: Dashboard Blueprint (Day 7-8)

**Objective:** Design unified dashboards that marketing and sales agree on, with the right metrics shown to the right audience at the right cadence.

**Dashboard Architecture:**

```
┌─────────────────────────────────────────────────────┐
│  BOARD / CEO DASHBOARD (Monthly/Quarterly)          │
│  ───────────────────────────────────────             │
│  ARR Growth Rate │ NRR │ Blended CAC │ LTV:CAC      │
│  Pipeline Coverage │ CAC Payback │ Burn Multiple     │
│  Marketing Spend as % of ARR │ Efficiency Trend     │
│                                                      │
│  Rule: Only Tier 1 business metrics.                │
│  One page. No vanity. Trend lines, not snapshots.   │
└─────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────┐
│  LEADERSHIP DASHBOARD (Weekly/Monthly)              │
│  ───────────────────────────────────────             │
│  Pipeline created (this month vs. target)            │
│  Pipeline velocity score (trend)                     │
│  MQA→SQO conversion rate                            │
│  Channel CAC by source                              │
│  Win rate by segment                                │
│  AI citation share (monthly trend)                  │
│  Content-sourced pipeline %                         │
│  Branded search volume (trend)                      │
│                                                      │
│  Rule: Tier 1 + Tier 2. Leading indicators that     │
│  predict next quarter's Tier 1 outcomes.            │
└─────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────┐
│  MARKETING OPS DASHBOARD (Weekly/Daily)             │
│  ───────────────────────────────────────             │
│  Campaign performance (by channel, by campaign)      │
│  Email engagement (open, click, reply rates)         │
│  Ad performance (CTR, CPA, ROAS by platform)        │
│  Content performance (views, engagement, conversions)│
│  SEO/GEO rankings and traffic                       │
│  Social engagement and growth                       │
│  Event pipeline attribution                         │
│                                                      │
│  Rule: Tier 2 + Tier 3. Diagnostic data for         │
│  channel-level optimization decisions.               │
└─────────────────────────────────────────────────────┘
```

**Shared Definitions Guide (Marketing + Sales Must Agree):**

| Term | Definition | Why This Definition |
|------|-----------|-------------------|
| **MQA (Marketing Qualified Account)** | Account with 2+ contacts showing buying signals (content engagement, pricing page visit, demo request) within 30 days | Account-level replaces lead-level; matches how buying committees actually work |
| **SQO (Sales Qualified Opportunity)** | Sales has validated fit (matches ICP), confirmed budget/timeline, and created an opportunity in CRM | Sales owns this definition — no marketing gaming |
| **Pipeline** | Sum of SQO deal values in active stages | Only counts after sales qualification — no inflated "marketing pipeline" |
| **Sourced** | Marketing was the first-touch source for the account | Credit for creating awareness |
| **Influenced** | Marketing touched the account between MQA and Closed-Won (regardless of source) | Credit for accelerating deals |
| **Win** | Closed-won deal with signed contract and payment terms | No "verbal commits" or "handshake deals" |
| **Churn** | Customer cancels or does not renew (measured at contract end, not notice date) | Consistent measurement point |
| **Expansion** | Net new ARR from existing customers (upsell, cross-sell, seat expansion) | Must be net — offsets counted separately |

**Output:** `dashboard-blueprint.md` — Dashboard specifications for each audience tier, shared definitions, and tool requirements.

### Phase 5: Leading Indicator Framework (Day 9-10)

**Objective:** Identify the early signals that predict lagging business outcomes 30-90 days in advance.

**Leading Indicator Map:**

| Lagging Outcome (Tier 1) | Leading Indicator (Tier 2) | Signal Timeframe | Why It Predicts |
|--------------------------|---------------------------|-------------------|-----------------|
| **Pipeline next quarter** | Branded search volume trend | 60-90 days ahead | Awareness precedes demand |
| **Pipeline next quarter** | Demo request trend (4-week rolling) | 30-60 days ahead | Intent precedes opportunity |
| **Pipeline next quarter** | AI citation share change | 60-90 days ahead | AI recommendations drive discovery |
| **Revenue next quarter** | Pipeline coverage ratio (3-4x target) | 30-60 days ahead | Coverage predicts close |
| **Revenue next quarter** | Pipeline velocity score trend | 30-60 days ahead | Velocity predicts throughput |
| **CAC next quarter** | Organic % of pipeline (trending up/down) | 30-60 days ahead | Organic shift lowers blended CAC |
| **CAC next quarter** | Content-sourced pipeline trend | 30-60 days ahead | Content compounds, paid doesn't |
| **Win rate next quarter** | Multi-threading % (deals with 3+ contacts) | 30-60 days ahead | Multi-threaded deals win 2.4x more |
| **NRR next quarter** | Customer health score distribution shift | 30-90 days ahead | Health predicts retention |
| **NRR next quarter** | Product usage trend by cohort | 30-60 days ahead | Usage predicts expansion |
| **Churn next quarter** | Support ticket severity trend | 30-60 days ahead | Escalations predict churn |

**Early Warning System:**

Build alerts for these threshold breaches:
- Pipeline coverage drops below 3x target → immediate pipeline sprint
- MQA→SQO conversion drops 10%+ → audit lead quality and sales hand-off
- Branded search declines 3 consecutive weeks → investigate brand/awareness programs
- CAC payback exceeds 18 months → pause lowest-efficiency channels
- Customer health scores: >15% move from "healthy" to "at-risk" → trigger retention campaign
- AI citation share drops → audit GEO optimization and content freshness

**Output:** `leading-indicators.md` — Leading indicator definitions, thresholds, alert rules, and response playbooks.

### Phase 6: Review Cadence Design (Day 11-12)

**Objective:** Build the recurring review cadences that turn metrics into action.

**Weekly Marketing Standup (30 min)**

```
Audience: Marketing team + sales leader
Frequency: Every Monday

Agenda:
1. Pipeline scorecard (5 min)
   - Pipeline created this week vs. weekly target
   - MQA→SQO conversions this week
   - Pipeline coverage ratio (current)

2. Leading indicator check (5 min)
   - Demo requests (7-day trend)
   - Branded search (7-day trend)
   - Any early warning alerts triggered?

3. Channel performance snapshot (10 min)
   - What's working: top-performing campaign/content this week
   - What's not: underperforming channels or campaigns
   - What changed: any significant metric movements

4. Actions for this week (10 min)
   - What are we doubling down on?
   - What are we pausing or adjusting?
   - Any blockers?

Output: 3-5 action items with owners and deadlines
```

**Monthly Marketing Review (60 min)**

```
Audience: Marketing, sales leadership, CEO
Frequency: First week of each month

Agenda:
1. Business metrics scorecard (10 min)
   - Pipeline generated vs. target
   - Pipeline velocity score (trend)
   - Blended CAC and CAC payback (trend)
   - NRR and churn (trend)
   - Win rate by segment

2. Attribution insights (10 min)
   - Multi-touch attribution highlights
   - Self-reported attribution themes
   - AI attribution signals
   - Channel contribution to pipeline (sourced + influenced)

3. Leading indicators forecast (10 min)
   - What leading indicators say about next month/quarter
   - Any trend reversals or accelerations
   - Early warning alerts and responses taken

4. Channel deep dive (15 min)
   - Rotate: each month go deep on one channel or program
   - ROI analysis, what's working, what to change
   - Budget reallocation recommendations

5. Decisions and actions (15 min)
   - Budget shifts needed?
   - Programs to start, stop, or scale?
   - Alignment issues between marketing and sales?

Output: Monthly marketing report + action plan
```

**Quarterly Business Review (90 min)**

```
Audience: Executive team, marketing, sales, CS leadership
Frequency: End of each quarter

Agenda:
1. Quarter in review (20 min)
   - Performance vs. targets (all Tier 1 metrics)
   - Revenue attribution: what sourced and influenced closed revenue
   - CAC trend and LTV:CAC health
   - NRR and retention by cohort

2. Attribution model review (15 min)
   - Multi-touch vs. self-reported alignment analysis
   - AI attribution emerging patterns
   - Model accuracy check: does attribution match reality?
   - Any model adjustments needed?

3. Market position metrics (15 min)
   - AI citation share vs. competitors
   - Branded search trend vs. competitors
   - Share of voice trend
   - Competitive win rate trend

4. Next quarter forecast (20 min)
   - Pipeline coverage for next quarter target
   - Leading indicator trajectory
   - Channel efficiency outlook
   - Budget allocation recommendation for next quarter

5. Strategic decisions (20 min)
   - What investments are compounding? Double down.
   - What investments plateaued? Optimize or cut.
   - What new bets to make next quarter?
   - Metrics infrastructure improvements needed?

Output: Quarterly marketing performance report + next quarter plan
Feeds into: Marketing Budget (07) quarterly reallocation
```

**Output:** `review-cadence-templates.md` — Agenda templates, scorecard templates, and output formats for all three review cadences.

---

## Key Metrics (Meta: Measuring the Measurement System)

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Metrics coverage | 100% of Tier 1 metrics tracked accurately | No blind spots in business metrics |
| Attribution model completeness | Multi-touch + self-reported both active | Single-model attribution is misleading |
| Self-reported attribution capture rate | >70% of new opps have self-reported data | Dark social and AI influence captured |
| Dashboard adoption | >80% of marketing + sales check weekly | Data only works if people use it |
| Definition alignment | Marketing + sales agree on 100% of shared terms | No more "but my numbers say..." |
| Leading indicator → outcome correlation | >60% of leading indicator alerts correctly predict outcomes within 90 days | Indicators actually predict, not just correlate |
| Time from data to decision | <1 week for tactical, <1 month for strategic | Fast feedback loops beat perfect data |
| Metric accuracy (audit) | <5% discrepancy between reported and verified | Trust the numbers or nobody uses them |

---

## Anti-Patterns (What NOT to Do)

- **Don't celebrate vanity metrics.** Reporting traffic growth to the CEO while pipeline is flat is marketing malpractice. Every metric presented must connect to a business outcome.
- **Don't rely solely on last-click attribution.** It rewards the last touch and punishes the ones that actually built the relationship. Use the hybrid model.
- **Don't let marketing and sales measure different things.** If marketing counts MQLs and sales counts SQLs and neither maps to pipeline, you have two teams optimizing for different outcomes. Shared definitions or bust.
- **Don't measure everything.** More metrics does not mean more insight. It means more noise. Ruthlessly limit dashboards to metrics that drive decisions.
- **Don't chase perfect attribution.** You'll never track the dinner conversation where someone recommended you. Aim for directionally accurate, not precisely wrong.
- **Don't skip self-reported attribution.** System-tracked attribution misses 30-50% of influence in B2B. Self-reported data is the only way to capture dark social, word-of-mouth, and AI recommendations.
- **Don't set MQL volume targets.** Celebrating form fills while pipeline starves is the most common measurement failure at this stage. Measure pipeline, not leads.
- **Don't build dashboards nobody checks.** A dashboard that gets opened once a month is not infrastructure, it's decoration. Build what people need for weekly decisions.
- **Don't report without recommendations.** "Here are the numbers" is a report. "Here are the numbers and here's what we should do about them" is insight. Always pair data with action.

---

## Integration Points

```
Marketing Metrics & Attribution outputs → consumed by:

┌───────────────────────────────────┐
│ Metrics Hierarchy & Definitions   │──→ Marketing Ops (16) — operational tracking
│                                   │──→ All skills (01-14) — success criteria
│                                   │──→ GTM Strategy (05) — performance evaluation
├───────────────────────────────────┤
│ Attribution Model                 │──→ CAC Optimizer (12) — channel efficiency data
│                                   │──→ Marketing Budget (07) — spend allocation
│                                   │──→ Content Engine (08) — content ROI
│                                   │──→ GEO Optimizer (09) — AI attribution data
├───────────────────────────────────┤
│ Pipeline & Revenue Metrics        │──→ Pipeline Accelerator (13) — velocity tracking
│                                   │──→ Sales Enablement (10) — conversion data
│                                   │──→ NRR Engine (14) — retention metrics
├───────────────────────────────────┤
│ Dashboard Blueprint               │──→ Marketing Ops (16) — dashboard implementation
│                                   │──→ Marketing Budget (07) — reporting cadence
├───────────────────────────────────┤
│ Leading Indicator Framework       │──→ GTM Strategy (05) — strategic forecasting
│                                   │──→ CAC Optimizer (12) — early efficiency signals
│                                   │──→ Pipeline Accelerator (13) — pipeline forecasting
│                                   │──→ NRR Engine (14) — churn prediction
├───────────────────────────────────┤
│ Review Cadence Templates          │──→ Marketing Ops (16) — operational rhythm
│                                   │──→ All skills — feedback loops for optimization
└───────────────────────────────────┘

Marketing Metrics & Attribution consumes from:

┌───────────────────────────────────┐
│ GTM Strategy (05)                 │──→ Targets and goals to measure against
│ Marketing Budget (07)             │──→ Spend data for CAC and efficiency metrics
│ Content Engine (08)               │──→ Content performance data
│ GEO Optimizer (09)                │──→ AI citation and GEO performance data
│ Sales Enablement (10)             │──→ Sales conversion and cycle data
│ CAC Optimizer (12)                │──→ Channel-level performance data
│ Pipeline Accelerator (13)         │──→ Pipeline stage and velocity data
│ NRR Engine (14)                   │──→ Retention, expansion, and churn data
│ Customer Research (01)            │──→ Win/loss context for metric interpretation
└───────────────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Metrics hierarchy review | Quarterly | Or when business model changes (new product, new segment) |
| Attribution model audit | Quarterly | Compare multi-touch vs. self-reported for drift |
| Shared definitions review | Every 6 months | Or when marketing/sales alignment breaks |
| Dashboard refresh | Quarterly | Remove unused metrics, add newly relevant ones |
| Leading indicator validation | Quarterly | Check prediction accuracy, retire bad indicators |
| AI citation tracking update | Monthly | New AI platforms, new competitor tracking |
| Full measurement infrastructure audit | Annually | Or at major ARR milestones ($2M, $3M, $5M) |
| Review cadence format | Every 6 months | If reviews aren't producing decisions, redesign them |
