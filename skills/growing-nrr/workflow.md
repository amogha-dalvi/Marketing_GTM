# NRR Engine (Net Revenue Retention)

> **Layer 4 — Growth & Optimization** | Skill 14 of 16
> **Dependencies:** [Customer Research](./01-customer-research.md), [ICP Definition](./02-icp-definition.md), [Positioning & Messaging](./04-positioning-messaging.md), [GTM Strategy](./05-gtm-strategy.md), [Content Engine](./08-content-engine.md), [Sales Enablement](./10-sales-enablement.md)
> **Feeds into:** [Marketing Metrics](./15-marketing-metrics.md), [Marketing Ops](./16-marketing-ops.md)
> **Parallel with:** [CAC Optimizer](./12-cac-optimizer.md), [Pipeline Accelerator](./13-pipeline-accelerator.md)

---

## Purpose

NRR is the single metric that most reliably predicts SaaS survival and valuation. A company with 120% NRR can lose 20% of its customers and still grow revenue — without closing a single new deal. At $1M-5M ARR, every percentage point of NRR separates you from the fundraising treadmill. The "bowtie funnel" is the new operating model — what happens after the sale (activation, adoption, expansion) drives as much pipeline value as what happens before it. This skill builds the systems, scoring models, and intervention playbooks that turn your existing customer base into your most efficient growth engine.

---

## Business Context ($1M-5M ARR)

- Top-performing SaaS companies maintain 120-130% NRR; median sits around 100-105%. The gap is existential.
- At your scale, every churned customer is felt — losing 5 customers out of 200 is 2.5% of your base in a single month
- You have enough customers (50-500) to build predictive models but few enough that each account matters individually
- Customer success is likely still a founder or a single CSM doing everything reactively — health scoring and automation change the game
- Expansion revenue is the highest-margin revenue you can generate: no CAC, shorter cycles, higher win rates
- The customer success platform market is projected to hit $31B by 2026 — the tooling exists to operationalize this even at your stage
- Community and ecosystem stickiness create switching costs that product features alone cannot match
- AI has made personalized onboarding and proactive intervention possible at scale without hiring a 10-person CS team

---

## Workflow

### Phase 1: Customer Health Scoring Model (Week 1)

**Objective:** Build a multi-signal scoring system that predicts churn and expansion before they happen.

**Why traditional health scores fail:**
Login frequency is not health. A user who logs in daily to check one dashboard is not "healthy" — they're barely using the product. A user who logs in twice a week but runs complex workflows, invites teammates, and integrates with other tools is deeply embedded. The signals that predict retention are behavioral, not volumetric.

**Customer Health Scoring Model Template:**

```
Signal Category 1: PRODUCT ADOPTION (Weight: 35%)
├── Feature breadth: % of core features used (not logins)
├── Feature depth: Sophistication of usage (basic vs. advanced workflows)
├── Integration count: Number of connected tools (high switching cost)
├── User penetration: % of licensed seats actively used
├── Workflow creation: Custom automations, templates, saved processes
│
Signal Category 2: ENGAGEMENT TRAJECTORY (Weight: 25%)
├── Usage trend: 30-day rolling average vs. prior 30 days (direction matters more than absolute level)
├── Session depth: Time in product per session (trending up or down?)
├── Feature expansion: Are they discovering new capabilities over time?
├── Champion engagement: Is the internal champion still active?
├── Executive sponsor activity: Has the economic buyer logged in recently?
│
Signal Category 3: SUPPORT & SENTIMENT (Weight: 20%)
├── Ticket sentiment: AI-analyzed tone of support conversations (frustration vs. curiosity)
├── Ticket frequency trend: Increasing tickets = growing friction
├── NPS/CSAT response: Score AND qualitative comments
├── Community participation: Active in forums, Slack, user groups?
├── Review site activity: Recent reviews (positive or negative signals)
│
Signal Category 4: COMMERCIAL SIGNALS (Weight: 20%)
├── Contract timeline: Days until renewal (urgency indicator)
├── Payment behavior: Late payments, failed charges, downgrades
├── Expansion conversations: Has the champion asked about plans, pricing, or new features?
├── Stakeholder changes: New decision-makers (risk) or additional team buy-in (opportunity)
├── Competitive signals: Visiting competitor pages, asking comparison questions
```

**Scoring Thresholds:**

| Score Range | Health Status | Action |
|-------------|--------------|--------|
| 85-100 | Thriving | Expansion candidate — trigger upsell/cross-sell workflows |
| 70-84 | Healthy | Monitor; nurture with value content and community invitations |
| 50-69 | At risk | Proactive outreach within 48 hours; investigate root cause |
| 25-49 | Critical | Immediate intervention; executive-level save attempt |
| 0-24 | Churning | Activate save playbook; begin win-back preparation if save fails |

**AI Workflow:**
1. Ingest signals from product analytics, CRM, support platform, community platform, billing system
2. Weight and normalize across all signal categories
3. Calculate composite score per account on a daily cadence
4. Flag accounts crossing threshold boundaries (direction of change matters — a "Healthy" account dropping 15 points in a week is more urgent than a stable "At Risk" account)
5. Route alerts to appropriate team member with context on what changed and recommended action

**Output:** `customer-health-model.md` — Scoring model definition with signal sources, weights, thresholds, and routing rules.

### Phase 2: Personalized Onboarding at Scale (Week 2)

**Objective:** Get every customer to first value in minutes, not days. Activation is the highest-leverage NRR intervention because it happens at the moment of maximum motivation.

**Why this matters:**
Customers who don't activate within the first 72 hours churn at 3-5x the rate of those who do. The Figma, Notion, and Slack model — value before the onboarding is "complete" — is the standard. Generic onboarding flows that treat a 5-person startup the same as a 200-person team are leaving activation on the table.

**Onboarding Flow Design Framework:**

**Step 1: Segmented Activation Paths**

| Segment Signal | How It Changes Onboarding | Example |
|---------------|--------------------------|---------|
| Use case (from sign-up survey or ICP match) | Different first-run experience, templates, sample data | "Marketing team" sees marketing templates; "Engineering" sees dev workflows |
| Team size | Solo users get quick-start; teams get invite + collaboration flow first | Solo → "Create your first [thing]"; Team → "Invite your team, then create together" |
| Integration stack | Prioritize connecting their existing tools to show instant data | If they use Slack, lead with Slack integration; if HubSpot, show CRM sync |
| Technical sophistication | Adjust complexity of initial setup and guidance depth | Power users → skip basics; beginners → guided walkthrough |
| Referral source | Mirror the promise that brought them in | Came from a case study about [use case] → show that use case first |

**Step 2: Activation Metrics & Milestones**

Define your "Aha Moment" — the specific action that predicts long-term retention:

```
Activation Milestone Map:
│
├── Milestone 0: Account created (baseline — everyone gets here)
│   Target: 100% within minutes of sign-up
│
├── Milestone 1: [Core setup action] — e.g., "Connected first integration"
│   Target: 80% within first session
│   If not reached → Trigger: contextual nudge or support chat offer
│
├── Milestone 2: [First value action] — e.g., "Created first [output]"
│   Target: 60% within 24 hours
│   If not reached → Trigger: personalized email with use-case-specific guide
│
├── Milestone 3: [Habit formation action] — e.g., "Used product 3+ days in first week"
│   Target: 50% within 7 days
│   If not reached → Trigger: CSM outreach or targeted re-engagement sequence
│
├── Milestone 4: [Team adoption action] — e.g., "Second user active"
│   Target: 40% within 14 days
│   If not reached → Trigger: team invitation campaign with champion enablement
│
└── Milestone 5: [Expansion signal] — e.g., "Hit usage limit or requested feature from higher tier"
    Target: 20% within 30 days
    If reached → Trigger: expansion workflow (see Phase 4)
```

**Step 3: AI-Personalized Onboarding Flows**

AI customization layer (runs on top of milestone framework):
1. Analyze sign-up data + any pre-existing relationship data (from [Sales Enablement](./10-sales-enablement.md))
2. Select the optimal onboarding path based on segment signals
3. Dynamically adjust in-app guidance based on real-time behavior (skip steps they've already figured out, emphasize steps they're struggling with)
4. Generate personalized check-in emails referencing specific actions taken or not taken
5. Route stalled accounts to human intervention with full context on where the user got stuck

**Output:** `onboarding-flow-design.md` — Activation milestone map, segmented paths, AI personalization rules, and intervention triggers.

### Phase 3: Customer Feedback Synthesis (Week 3)

**Objective:** Turn thousands of scattered customer signals into prioritized strategic actions.

**The problem:** Feedback lives in 10+ places — support tickets, NPS surveys, G2 reviews, community posts, sales call transcripts, social mentions, feature requests, cancellation surveys. No human can synthesize it all. Most companies use NPS as a proxy and miss 90% of the signal.

**Customer Feedback Synthesis Workflow:**

**Step 1: Aggregate All Signal Sources**

| Source | Signal Type | Frequency | Tool |
|--------|------------|-----------|------|
| Support tickets | Pain points, bugs, confusion points | Real-time | Zendesk, Intercom, etc. |
| NPS/CSAT surveys | Satisfaction + qualitative comments | Quarterly or triggered | Delighted, Typeform, etc. |
| Review sites (G2, Capterra) | Public perception, competitive comparison | Weekly | G2 API, manual monitoring |
| Community (Slack, Discord, forum) | Feature desires, workarounds, peer advice | Real-time | Community platform |
| Sales call transcripts | Objections, desired capabilities, competitive mentions | Per call | Gong, Chorus, etc. |
| Cancellation surveys | Direct churn reasons | Per churn event | Billing platform or custom |
| Social media mentions | Brand sentiment, complaints, praise | Real-time | Social listening tool |
| Product feedback widgets | In-context feature requests | Real-time | Canny, Productboard, etc. |
| CS call notes | Account-level sentiment, expansion signals | Per touchpoint | CRM |

**Step 2: AI-Powered Synthesis**

1. Ingest all sources into a unified corpus (weekly cadence for batch sources, real-time for streaming sources)
2. AI categorizes every signal into:
   - **Theme:** What category of feedback is this? (UX, performance, missing feature, billing, onboarding, etc.)
   - **Sentiment:** Positive, neutral, negative, urgent
   - **Customer tier:** Is this from a Tier 1 ICP customer or a poor-fit account? (from [ICP Definition](./02-icp-definition.md))
   - **Revenue weight:** ARR of the account (a complaint from a $50K account ≠ a complaint from a $500 account)
   - **Frequency:** How many unique accounts mention this same theme?
   - **Trend:** Is this signal increasing, stable, or decreasing over time?
3. Generate a prioritized feedback report:

```
Customer Feedback Synthesis Report — [Month]

TOP THEMES BY WEIGHTED IMPACT:

1. [Theme] — 47 mentions, $380K ARR affected, trending ↑
   Representative quotes: "[exact quote]", "[exact quote]"
   Segment most affected: [segment]
   Recommended action: [product fix / messaging change / process change]

2. [Theme] — 31 mentions, $220K ARR affected, stable
   ...

CHURN-CORRELATED SIGNALS:
- Accounts that churned this month mentioned [theme] 3x more than retained accounts
- [Signal] preceded 70% of churn events by 30-60 days

EXPANSION-CORRELATED SIGNALS:
- Accounts that expanded mentioned [theme] 2x more than non-expanders
- [Behavior] preceded 60% of expansion events by 14-30 days

COMPETITIVE INTELLIGENCE FROM FEEDBACK:
- [Competitor] mentioned in [N] negative comparisons, primarily around [capability]
- Feeds into: Competitive Intel (03)
```

**Step 3: Feedback Loop to Product and Marketing**

- Route product-related themes to product team with customer quotes and revenue weight
- Route messaging-related themes to marketing (feeds back into [Positioning & Messaging](./04-positioning-messaging.md))
- Route process-related themes to CS/ops
- Track action taken on each theme and close the loop with customers ("You asked, we built")

**Output:** `customer-feedback-synthesis.md` — Monthly synthesis report with prioritized themes, recommended actions, and routing.

### Phase 4: Automated Expansion Trigger Workflows (Week 3-4)

**Objective:** Identify the optimal moment and method for upsell, cross-sell, and seat expansion — based on value realization, not arbitrary calendars.

**Why timing matters:**
An expansion ask that arrives when a customer is frustrated fails. An expansion ask that arrives right after a customer achieves a major milestone converts at 3-5x the rate. The difference between a pushy upsell and a helpful upgrade suggestion is timing and context.

**Expansion Trigger Workflow Design:**

```
Trigger Type 1: USAGE-BASED EXPANSION
├── Signal: Account approaching plan limit (>80% of seats, storage, API calls)
├── Context: Only trigger if health score is 70+ (don't upsell frustrated customers)
├── Action: In-app notification + email showing usage trajectory and what the next tier unlocks
├── Messaging: Frame as enabling growth, not hitting a wall (from Positioning & Messaging)
│
Trigger Type 2: FEATURE-BASED CROSS-SELL
├── Signal: User attempts to access a feature on a higher tier (or searches for it)
├── Context: Show what the feature does with their existing data (make the value tangible)
├── Action: Contextual upgrade prompt with 14-day trial of the specific feature
├── Follow-up: If trial used, CSM outreach with ROI calculation
│
Trigger Type 3: TEAM-BASED SEAT EXPANSION
├── Signal: Primary users inviting non-licensed colleagues, or sharing exports externally
├── Context: Multiple team members are deriving value but only some have seats
├── Action: Champion enablement email — give them an internal business case template
├── Messaging: "Your team is already using [product] — here's how to bring everyone in"
│
Trigger Type 4: MILESTONE-BASED EXPANSION
├── Signal: Customer achieves significant outcome (e.g., ROI milestone, usage milestone)
├── Context: High engagement + measurable value delivered = ideal expansion moment
├── Action: Personalized CSM outreach celebrating the milestone + introducing next-level capabilities
├── Timing: Within 48 hours of milestone achievement
│
Trigger Type 5: STAKEHOLDER-BASED EXPANSION
├── Signal: New executive or department head joins the customer's company
├── Context: Organizational change often triggers tool evaluation (both risk and opportunity)
├── Action: New stakeholder welcome sequence + executive briefing offer
├── Source: LinkedIn alerts, CRM updates, champion notification
```

**Expansion Playbook by Account Health:**

| Health Score | Expansion Approach | Channel | Timing |
|-------------|-------------------|---------|--------|
| 85-100 (Thriving) | Proactive, direct expansion conversations | CSM + in-app | When any trigger fires |
| 70-84 (Healthy) | Soft expansion via feature education and use case content | Email + in-app | After value milestone achieved |
| 50-69 (At Risk) | NO expansion activity; focus on stabilization | CSM outreach | Never — fix health first |
| <50 (Critical) | Save effort only | Executive escalation | Immediately |

**Output:** `expansion-trigger-workflows.md` — Trigger definitions, conditions, actions, messaging, and routing rules.

### Phase 5: Churn Prediction & Prevention (Week 4-5)

**Objective:** Build a systematic churn prediction model and layered intervention playbooks by risk level.

**Churn Prediction Model Framework:**

**Step 1: Cohort Analysis — When and Why Do Customers Churn?**

```
Churn Timing Cohort Analysis:

Days 0-30:   [X]% of all churn — "Activation failure"
             Root cause: Never reached first value milestone
             Prevention: Phase 2 (Onboarding) — fix before they churn

Days 31-90:  [X]% of all churn — "Adoption stall"
             Root cause: Activated but didn't build habit or expand usage
             Prevention: Adoption drip campaigns, CSM check-ins at Day 45 and 75

Days 91-180: [X]% of all churn — "Value gap"
             Root cause: Initial use case solved but no expansion; ROI questioned
             Prevention: QBR with ROI report; introduce new use cases

Days 180+:   [X]% of all churn — "Relationship decay" or "Strategic shift"
             Root cause: Champion left, priorities changed, competitor approached
             Prevention: Multi-stakeholder relationships, executive engagement
```

**Step 2: Predictive Signal Identification**

Train (or manually calibrate) a model on historical churn data:

| Predictive Signal | Churn Correlation | Lead Time | Data Source |
|-------------------|-------------------|-----------|-------------|
| Login frequency drop >40% over 14 days | High | 30-60 days | Product analytics |
| Champion goes inactive | Very high | 30-90 days | Product analytics + CRM |
| Support ticket sentiment turns negative | High | 14-45 days | Support platform (AI sentiment) |
| Feature usage breadth contracts | Medium-high | 45-90 days | Product analytics |
| No new users added in 60+ days | Medium | 60-120 days | Product analytics |
| Competitor pages visited (if tracked) | Medium | 30-60 days | Intent data |
| Payment failed + not resolved in 7 days | Very high | 7-30 days | Billing |
| NPS response drops >20 points | High | 30-90 days | Survey platform |
| Renewal date within 60 days + health <70 | Very high | 0-60 days | CRM + health score |

**Step 3: Intervention Playbook by Risk Level**

```
RISK LEVEL: EARLY WARNING (Health 50-69, trending down)
├── Timeline: Intervene within 48 hours of detection
├── Owner: CSM (automated alert with context)
├── Action 1: Review account health dashboard — identify which signals degraded
├── Action 2: Casual check-in (not "we noticed you're not logging in")
│   Script: "Hey [name], wanted to share some new [features/resources] that
│   other [similar segment] teams have found valuable. Got 15 minutes this week?"
├── Action 3: If engagement concern — deliver targeted value content based on their use case
├── Action 4: If product concern — escalate to product team, offer workaround
├── Escalation: If no improvement in 14 days → move to Active Save

RISK LEVEL: ACTIVE SAVE (Health 25-49)
├── Timeline: Intervene within 24 hours
├── Owner: Senior CSM or CS Manager
├── Action 1: Full account review — timeline of degradation, all signals
├── Action 2: Direct conversation with champion — open-ended: "How are things going
│   with [product]? I want to make sure we're delivering value."
├── Action 3: Build a 30-day recovery plan with specific milestones
├── Action 4: Offer concessions if appropriate (additional training, premium
│   support, temporary feature access)
├── Action 5: Identify and build relationship with a second stakeholder
│   (never depend on single-threaded champion)
├── Escalation: If no improvement in 21 days → move to Executive Escalation

RISK LEVEL: EXECUTIVE ESCALATION (Health <25 or renewal at risk)
├── Timeline: Immediate
├── Owner: VP CS or founder (at $1M-5M ARR, founder involvement still works)
├── Action 1: Executive-to-executive outreach
├── Action 2: On-site or video call — NOT email
├── Action 3: Bespoke offer: custom feature, pricing flexibility, dedicated support
├── Action 4: If save fails → graceful offboarding + win-back preparation
├── Win-back: Add to 90-day win-back sequence (see below)
```

**Step 4: Win-Back Campaigns for Churned Customers**

Not all churned customers are lost forever. Segment and target selectively:

| Churn Reason | Win-Back Approach | Timing | Message |
|-------------|-------------------|--------|---------|
| Missing feature | Announce when feature ships | When available | "You asked for [feature]. We built it. Come see." |
| Budget/pricing | Offer re-engagement at adjusted terms | 60-90 days | "We have new plans that might work better for your team." |
| Champion left | Reach new stakeholders | 30-60 days | "Teams at [company] used to rely on [product] for [use case]. Your team might benefit too." |
| Poor onboarding | Offer white-glove re-onboarding | 90-120 days | "We've completely revamped our onboarding. Give us another shot." |
| Competitor switch | Monitor for competitor dissatisfaction | 6-12 months | Trigger on intent signals or competitor negative press |

**Output:** `churn-prediction-model.md` — Cohort analysis, predictive signals, intervention playbooks, and win-back campaigns.

### Phase 6: Community as Retention Moat (Week 5-6)

**Objective:** Build community-driven switching costs that product features alone cannot create.

**Why community drives NRR:**
Data consistently shows that community members churn at 30-50% lower rates than non-community members. The reason is simple — they are embedded in an ecosystem of peers, workflows, templates, and relationships that they would lose if they left. Product switching costs are table stakes. Ecosystem switching costs are the moat.

**Community Retention Framework:**

| Community Element | How It Creates Switching Cost | How to Build It |
|-------------------|------------------------------|-----------------|
| Templates & workflows | Users invest time building and sharing assets on your platform | Template marketplace; reward top contributors |
| Peer connections | Relationships formed around your product | User groups by segment, industry meetups, Slack/Discord |
| Expertise investment | Users build reputation and skill around your product | Certification programs, community leaderboards, speaking opportunities |
| Content ecosystem | User-generated tutorials, guides, and best practices | Community content program; co-create with power users |
| Integration network | Connected tools create dependency web | Partner ecosystem; community-built integrations |

**Tactics:**
1. Identify your top 20% most engaged users — invite them into an exclusive community or advisory board
2. Create a customer-to-customer help channel (reduces support costs AND builds bonds)
3. Launch a template/workflow sharing marketplace (user-generated content becomes a retention asset)
4. Run quarterly community events (virtual or in-person) that connect users with peers
5. Feed community insights back into [Content Engine](./08-content-engine.md) — customer stories, use cases, and tips become marketing content

**Output:** `community-retention-plan.md` — Community strategy, programs, measurement, and integration with broader NRR efforts.

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Net Revenue Retention (NRR) | 110%+ (target 120%+) | The defining metric — are you growing from existing customers? |
| Gross Revenue Retention (GRR) | 90%+ | Isolates churn from expansion — how much are you keeping? |
| Logo churn rate | <2% monthly / <15% annual | Account losses — even small accounts signal product or fit issues |
| Time to first value | <24 hours (target: <1 hour) | Activation speed directly predicts retention |
| Activation rate (Milestone 2) | 60%+ within 24 hours | Are customers reaching the "aha moment"? |
| Health score accuracy | 80%+ of churn predicted 30+ days out | Is the model actually predictive? |
| Expansion revenue as % of new ARR | 30%+ | Are you growing efficiently from within? |
| Customer health distribution | >60% of accounts in Healthy/Thriving | Is the base stable? |
| Intervention success rate | 40%+ of at-risk accounts saved | Are the playbooks working? |
| Win-back conversion rate | 10-15% of addressable churned accounts | Is there a path back? |

---

## Anti-Patterns (What NOT to Do)

- **Don't use login frequency as your health score.** A user logging in daily to do one thing is not healthy — they're underutilizing. Build multi-signal scoring that measures depth, breadth, and trajectory.
- **Don't run calendar-based QBRs.** Quarterly business reviews that happen because it's "that time" get ignored. Signal-based outreach at the right moment is 10x more effective.
- **Don't treat all churn the same.** A poor-fit customer churning is healthy. A Tier 1 ICP customer churning is an emergency. Segment your churn analysis by ICP fit (from [ICP Definition](./02-icp-definition.md)).
- **Don't try to upsell unhappy customers.** Expansion asks when health is below 70 are insulting. Fix the problem first, then grow the account.
- **Don't rely on NPS as your standalone retention metric.** NPS is a lagging indicator taken at a point in time. AI-driven leading indicators from behavioral data predict churn weeks or months earlier.
- **Don't build generic onboarding.** A 5-person startup and a 200-person enterprise have completely different activation paths. One-size-fits-all onboarding leaves value on the table.
- **Don't ignore churned customers forever.** 10-15% of churned customers will come back if approached at the right time with the right message. Build win-back into your system.
- **Don't single-thread on one champion.** If your entire account relationship depends on one person, you're one departure away from churn. Always build multi-stakeholder depth.

---

## Integration Points

```
NRR Engine outputs → consumed by:

┌───────────────────────────────┐
│ Customer Health Scores        │──→ Marketing Metrics (15) — retention dashboards
│                               │──→ Marketing Ops (16) — automated alert routing
│                               │──→ Sales Enablement (10) — renewal prep context
├───────────────────────────────┤
│ Onboarding Flow Design        │──→ Positioning & Messaging (04) — onboarding copy
│                               │──→ Content Engine (08) — activation content
│                               │──→ Marketing Ops (16) — automation workflows
├───────────────────────────────┤
│ Feedback Synthesis Reports    │──→ Customer Research (01) — ongoing voice of customer
│                               │──→ Positioning & Messaging (04) — messaging refinement
│                               │──→ Competitive Intel (03) — competitive signals
│                               │──→ Content Engine (08) — content priorities
├───────────────────────────────┤
│ Expansion Trigger Workflows   │──→ Sales Enablement (10) — expansion playbooks
│                               │──→ CAC Optimizer (12) — expansion vs. new CAC comparison
│                               │──→ Pipeline Accelerator (13) — expansion pipeline
├───────────────────────────────┤
│ Churn Prediction & Playbooks  │──→ Marketing Metrics (15) — churn forecasting
│                               │──→ Marketing Ops (16) — intervention automation
│                               │──→ GTM Strategy (05) — segment-level retention strategy
├───────────────────────────────┤
│ Community Retention Strategy  │──→ Content Engine (08) — community-sourced content
│                               │──→ Brand Strategy (06) — community brand presence
│                               │──→ GTM Strategy (05) — community as channel
└───────────────────────────────┘

NRR Engine consumes from:

┌───────────────────────────────┐
│ Customer Research (01)        │──→ Churn & Expansion Signal Map, Voice Library
│ ICP Definition (02)           │──→ Tier-based prioritization for interventions
│ Positioning & Messaging (04)  │──→ Persona messaging for onboarding + expansion
│ GTM Strategy (05)             │──→ Segment-level retention targets
│ Content Engine (08)           │──→ Adoption and education content
│ Sales Enablement (10)         │──→ Renewal and expansion talk tracks
└───────────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Health scoring model recalibration | Quarterly | Or after significant product changes, new churn data |
| Onboarding flow optimization | Monthly | Based on activation rate data and drop-off analysis |
| Customer feedback synthesis | Monthly (batch) + real-time alerts | Continuous signal ingestion |
| Expansion trigger tuning | Monthly | Based on conversion rate data per trigger type |
| Churn prediction model update | Quarterly | New cohort data, changing churn patterns |
| Intervention playbook review | Monthly | Based on intervention success rate data |
| Win-back campaign refresh | Quarterly | Based on win-back conversion data and product changes |
| Community retention programs | Quarterly | Based on community engagement and churn correlation data |
| Full NRR strategy review | Every 6 months | Or after major pricing, product, or market changes |
