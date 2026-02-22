# Sales Enablement

> **Layer 3 — Execution Systems** | Skill 10 of 16
> **Dependencies:** [Customer Research](./01-customer-research.md), [ICP Definition](./02-icp-definition.md), [Competitive Intel](./03-competitive-intel.md), [Positioning & Messaging](./04-positioning-messaging.md), [GTM Strategy](./05-gtm-strategy.md)
> **Feeds into:** [CAC Optimizer](./12-cac-optimizer.md), [Pipeline Accelerator](./13-pipeline-accelerator.md), [NRR Engine](./14-nrr-engine.md), [Marketing Metrics](./15-marketing-metrics.md)
> **Parallel with:** [Content Engine](./08-content-engine.md), [GEO Optimizer](./09-geo-optimizer.md), [Launch Playbook](./11-launch-playbook.md)

---

## Purpose

Sales enablement is the bridge between marketing strategy and revenue. Every insight, message, and competitive advantage is worthless if reps can't access it in the moment they need it. At $1M-5M ARR, you typically have a founder plus 1-5 AEs with no dedicated product marketing manager — which means enablement must be systematized, AI-assisted, and ruthlessly prioritized. This skill turns the outputs of upstream skills into ammunition that shortens sales cycles, improves win rates, and orchestrates complex buying groups.

---

## Business Context ($1M-5M ARR)

- Average enterprise deal now involves 11+ stakeholders, each consuming 5-7 assets before a decision is made
- Buyers spend less than 20% of their time talking to vendors — enablement must arm reps for the 80% they don't control
- The MQL-to-SDR-to-generic-follow-up motion is dead — leads contacted within 5 minutes are 10x more likely to qualify
- One-size-fits-all sales decks address no stakeholder well — you need persona-specific assets for the buying group
- At this stage, the founder's sales knowledge lives in their head, not in a system — that's a bottleneck and a risk
- Reps waste 30-40% of their time searching for or creating content that should already exist
- AI collapses the cost of creating enablement assets from weeks to hours — making world-class enablement accessible at this stage for the first time

---

## Workflow

### Phase 1: Enablement Audit & Prioritization (Day 1-2)

**Objective:** Assess what exists, what's missing, and what to build first.

**Inputs required:**
- Customer Research outputs ([Skill 01](./01-customer-research.md)) — voice of customer library, buying journey map
- Competitive Intel outputs ([Skill 03](./03-competitive-intel.md)) — battlecards, competitor profiles
- Positioning & Messaging framework ([Skill 04](./04-positioning-messaging.md)) — messaging hierarchy, value propositions
- CRM data — deal stages, win/loss reasons, average cycle length, common objections
- Existing sales content — decks, one-pagers, case studies, email templates (even informal ones)
- Sales call recordings — last 20-30 calls across deal stages
- Rep feedback — what they wish they had, what they use most, what they never touch

**AI Workflow:**
1. Inventory all existing sales content and categorize by:
   - Asset type (deck, one-pager, case study, email template, etc.)
   - Buying stage (awareness, consideration, decision, negotiation)
   - Persona targeted (champion, economic buyer, technical buyer, end user, blocker)
   - Last updated date
   - Usage data (if available — how often shared, engagement)
2. Map existing content against the Buying Journey Map from [Customer Research](./01-customer-research.md)
3. Identify critical gaps — stages or personas with no coverage
4. Cross-reference with win/loss data — which gaps correlate with lost deals?
5. Score and prioritize using the Asset Priority Matrix

**Sales Enablement Asset Priority Matrix:**

```
Priority = (Impact on Win Rate) x (Frequency of Need) x (Current Gap Severity)

TIER 1 — Build First (Week 1-2)
├── Battlecards (from Competitive Intel 03) — used in 60%+ of deals
├── Core sales deck (persona-adaptable) — used in every deal
├── Top 3 objection handling guides — addresses #1 reason for stalled deals
└── Champion one-pager — the asset your champion uses to sell internally

TIER 2 — Build Next (Week 3-4)
├── Case studies (top 2-3 by ICP segment) — proof points close deals
├── ROI calculator / business case template — economic buyer requirement
├── Demo script (persona-specific talk track) — consistency across reps
└── Email sequences (per deal stage) — reduces rep content creation time

TIER 3 — Build After Foundation (Month 2)
├── One-pagers per use case / vertical — expands addressable conversations
├── Technical architecture / security documentation — unblocks technical buyers
├── Migration / implementation guide — reduces perceived switching risk
├── Proposal / SOW template — accelerates close stage
└── Mutual action plan template — aligns buyer and seller on next steps

TIER 4 — Iterate & Expand (Month 3+)
├── Video testimonials — highest-trust proof format
├── Industry-specific versions of Tier 1-2 assets — vertical expansion
├── Competitive comparison content for prospect sharing — not just internal
└── Interactive assessment / diagnostic tool — quantifies prospect's pain
```

**Output:** `enablement-audit-and-priority-plan.md` — Gap analysis, prioritized build order, timeline.

### Phase 2: Buying Group Orchestration (Day 3-4)

**Objective:** Map every stakeholder in your typical deal and define what each needs to say "yes."

**Buying Group Content Map:**

```
For each deal, identify and enable for these roles:

CHAMPION (your internal advocate)
├── Needs: Use cases, peer proof, product demos, internal pitch ammo
├── Key question: "How do I convince my colleagues this is worth doing?"
├── Assets to create:
│   ├── Champion one-pager (the doc they forward to their boss)
│   ├── Internal business case template (they fill in their specifics)
│   ├── "Why now" talking points (urgency framing)
│   └── Peer case study (someone in their exact role at similar company)
│
ECONOMIC BUYER (controls budget — VP/C-level)
├── Needs: ROI, business impact, risk mitigation, strategic alignment
├── Key question: "What's the return, and what's the risk?"
├── Assets to create:
│   ├── Executive summary (1-page, outcome-focused, no feature-speak)
│   ├── ROI calculator (inputs their numbers, outputs projected value)
│   ├── Business case template (structured for their internal process)
│   └── Risk mitigation document (implementation, security, vendor stability)
│
TECHNICAL BUYER (evaluates feasibility — IT, Engineering, Security)
├── Needs: Architecture, security posture, integrations, compliance
├── Key question: "Can this work in our environment without creating problems?"
├── Assets to create:
│   ├── Technical architecture overview
│   ├── Security & compliance documentation (SOC 2, GDPR, etc.)
│   ├── Integration guide (for their specific tech stack)
│   └── API documentation / sandbox access
│
END USERS (will use the product daily)
├── Needs: Ease of use, workflow improvement, onboarding simplicity
├── Key question: "Will this actually make my day easier?"
├── Assets to create:
│   ├── Product walkthrough (role-specific, 3-minute video or interactive)
│   ├── Day-in-the-life comparison (before vs. after your product)
│   ├── Onboarding timeline (how fast they'll be productive)
│   └── User testimonials from their role peers
│
BLOCKER (raises objections — procurement, legal, change-averse managers)
├── Needs: Risk mitigation, migration plans, change management support
├── Key question: "What could go wrong, and how do we prevent it?"
├── Assets to create:
│   ├── Migration plan template (step-by-step, low-risk framing)
│   ├── Change management guide (adoption playbook)
│   ├── Vendor assessment questionnaire (pre-filled)
│   └── SLA / contract terms overview
```

**AI Workflow:**
1. Pull buying group patterns from CRM — who's involved in won vs. lost deals
2. Cross-reference with [Customer Research](./01-customer-research.md) buying journey map
3. Identify the most common blockers at each stage and which role raises them
4. Map objections to the role that raises them (from sales call analysis)
5. Generate draft content for each role using persona-specific messaging from [Positioning & Messaging](./04-positioning-messaging.md)

**Output:** `buying-group-content-map.md` — Role-by-role asset requirements with status tracking.

### Phase 3: AI-Assisted Asset Creation (Week 1-3)

**Objective:** Use AI to compress weeks of asset creation into hours while maintaining quality.

**AI-Assisted Asset Creation Workflow:**

```
For each asset in the priority matrix:

STEP 1: Assemble source material (5 min)
├── Pull relevant customer quotes from Voice Library (Skill 01)
├── Pull competitive positioning from Battlecards (Skill 03)
├── Pull messaging framework from Positioning & Messaging (Skill 04)
├── Pull CRM data on relevant objections and win/loss patterns
└── Pull any existing content that covers adjacent topics

STEP 2: AI first draft (15-30 min)
├── Feed assembled materials + asset template to AI
├── Specify target persona, buying stage, and desired action
├── Generate complete first draft
├── AI cross-checks against messaging framework for consistency
└── AI flags gaps where specific data or quotes are needed

STEP 3: Expert review and enhancement (30-60 min)
├── Subject matter expert (founder, senior AE) reviews for accuracy
├── Adds real customer stories, specific metrics, insider knowledge
├── Adjusts tone and specificity for target persona
├── Validates competitive claims are current and defensible
└── Marks sections needing legal or product team review

STEP 4: Sales team validation (24 hours)
├── Share draft with 2-3 reps for field-readiness feedback
├── Key questions: "Would you use this? What's missing? What's wrong?"
├── Incorporate feedback
└── Finalize and publish to sales content system

STEP 5: Measurement setup
├── Track usage (views, shares, downloads)
├── Tag asset in CRM to correlate with deal outcomes
└── Schedule first review date (30 days for Tier 1, 60 for Tier 2-3)
```

**Asset-Specific AI Prompting Guidance:**

| Asset Type | AI Input Sources | Key Prompt Elements |
|---|---|---|
| Battlecard | Competitor profile, win/loss data, customer quotes | "Create a sales-ready battlecard that a rep can scan in 60 seconds before a call" |
| Objection handling guide | CRM objection data, customer interviews, call recordings | "For each objection, provide the psychology behind it, the response framework, and a proof point" |
| Case study | Customer interview transcript, usage data, outcome metrics | "Write as the customer's story, not ours — lead with their problem and outcome, not our features" |
| ROI calculator | Customer outcome data, industry benchmarks, pricing model | "Build a simple model where the prospect inputs 3-5 variables and sees projected ROI" |
| Sales deck | Messaging framework, persona profile, competitive positioning | "Create a [persona]-specific deck that follows: their problem → why now → our approach → proof → next steps" |
| Email sequence | Buying stage, persona, trigger event, messaging hierarchy | "Write 5-touch sequence, each email standalone, under 150 words, with a single clear CTA" |
| One-pager | Use case definition, customer quote, key metrics, differentiators | "One page, scannable in 30 seconds, answers: what is it, who is it for, why does it matter, proof it works" |

**Output:** Complete asset library following the priority matrix sequence.

### Phase 4: Signal-Based Engagement System (Week 2-3)

**Objective:** Replace linear nurture sequences with intent-triggered, AI-personalized outreach.

**Signal-Based Engagement Framework:**

```
SIGNAL DETECTION (always-on)
├── Intent signals:
│   ├── Website: Pricing page visit, comparison page visit, high-value page return visit
│   ├── Content: Case study download, ROI calculator usage, technical docs access
│   ├── Product: Free trial signup, feature activation, usage spike
│   ├── Third-party: G2 comparison, review site visit, category research
│   └── CRM: Deal stage change, stakeholder added, meeting requested
│
├── Engagement signals:
│   ├── Email: Opens on 3+ emails in sequence, reply, forward
│   ├── Sales: Call completed, demo attended, proposal viewed
│   └── Social: LinkedIn engagement, company page visit
│
└── Buying group signals:
    ├── Multiple contacts from same account engaging
    ├── New stakeholder role appearing (technical buyer entering = deeper evaluation)
    └── Champion sharing content internally (forwarded emails, shared links)

RESPONSE ENGINE (AI-powered)
├── Signal detected → AI determines:
│   ├── Who: Which persona/role triggered the signal
│   ├── Where: What buying stage this indicates
│   ├── What: Which enablement asset is most relevant
│   └── When: Urgency level (5-min response vs. next business day)
│
├── AI generates personalized outreach:
│   ├── Research prospect's company (recent news, job postings, tech stack)
│   ├── Match to relevant case study or proof point
│   ├── Draft personalized message referencing their specific context
│   └── Recommend the single most relevant asset to share
│
└── Rep reviews and sends (AI drafts, human approves)
```

**Speed-to-Lead Rules:**
| Signal Type | Response Target | Owner |
|---|---|---|
| Pricing page + demo request | 5 minutes | AE or round-robin |
| Free trial signup (ICP match) | 15 minutes | AE |
| Case study download (named account) | Same business day | AE |
| Comparison page visit (known contact) | Same business day | AE via email |
| Multiple stakeholders engaging | Within 24 hours (account strategy) | AE + founder |

**Output:** `signal-engagement-playbook.md` — Signals, routing rules, response templates, measurement.

### Phase 5: Sales-Marketing Alignment System (Week 3-4)

**Objective:** Build the feedback loops that keep enablement current and effective.

**Sales-Marketing Feedback Loop Process:**

```
SHARED DEFINITIONS
├── Lead qualification criteria (from ICP Definition, Skill 02)
│   ├── MQL definition: [specific firmographic + behavioral criteria]
│   ├── SQL definition: [specific criteria indicating sales-readiness]
│   ├── SAL definition: [sales accepted — confirmed fit after first conversation]
│   └── Agreed SLAs: Marketing delivers [X] SQLs/month, Sales follows up within [Y] hours
│
├── Deal stage definitions (agreed by both teams)
│   ├── Each stage has: entry criteria, exit criteria, required assets, typical duration
│   └── No ambiguity — both teams use same language
│
└── Win/loss categories (standardized in CRM)
    ├── Win reasons: [specific options, not free text]
    ├── Loss reasons: [specific options including competitive, timing, budget, etc.]
    └── Competitive loss: [which competitor + primary reason]

FEEDBACK CADENCE
├── Weekly: 30-min sales-marketing sync
│   ├── What objections came up this week?
│   ├── What content did reps wish they had?
│   ├── What competitive intel is new?
│   ├── What messaging resonated (or didn't)?
│   └── Action items with owners and deadlines
│
├── Monthly: Enablement effectiveness review
│   ├── Asset usage rates — what's being used, what's gathering dust?
│   ├── Win rate by deal stage — where are deals stalling?
│   ├── Objection trends — any new objections emerging?
│   ├── Competitive landscape changes — new players, positioning shifts?
│   └── Content requests pipeline — what's queued, what's shipped?
│
├── Quarterly: Full enablement audit
│   ├── Refresh all Tier 1 assets
│   ├── Re-run Asset Priority Matrix with updated data
│   ├── Update buying group content map
│   ├── Review and update battlecards (with Competitive Intel, Skill 03)
│   └── Training session on new/updated assets
│
└── Per-deal: Win/loss debrief
    ├── After every closed-won or closed-lost above [threshold]
    ├── What assets were used? What was missing?
    ├── What objections were raised? How were they handled?
    ├── Which stakeholders were involved? Who was the blocker?
    └── Feed insights back into asset library and competitive intel
```

**Output:** `sales-marketing-alignment.md` — Shared definitions, SLAs, meeting cadences, feedback templates.

### Phase 6: Enablement Rollout & Adoption (Week 4)

**Objective:** Ship enablement assets so they're actually used, not buried in a shared drive.

**Enablement Rollout Checklist:**

```
PRE-LAUNCH
□ All Tier 1 assets reviewed and approved by founder/sales lead
□ Assets organized by: buying stage, persona, competitor, use case
□ Assets accessible within the tool reps already use (CRM, Slack, email)
□ Naming convention established (consistent, searchable)
□ Each asset has: summary, when to use, who it's for, how to customize

LAUNCH
□ 60-minute enablement training session covering:
  □ Asset library walkthrough — what exists and where to find it
  □ Buying group framework — who needs what and when
  □ Objection handling practice — role-play top 5 objections
  □ Signal-based engagement — what to do when triggers fire
  □ Feedback process — how to request new content or flag issues
□ Cheat sheet distributed — one-page guide to all assets and when to use each
□ Slack channel created for real-time enablement questions and content requests

POST-LAUNCH (First 30 Days)
□ Track asset usage weekly — if usage is low, diagnose why (access issue vs. relevance issue)
□ Sit in on 5+ sales calls to observe if assets are being used correctly
□ Collect feedback from each rep — what's working, what needs revision
□ Update at least 2 assets based on initial feedback
□ Celebrate early wins — share stories where enablement directly contributed to a deal
□ Publish first Enablement Effectiveness Report

ONGOING
□ New asset announcement in Slack with context (not just a link drop)
□ Monthly "asset of the month" — spotlight a high-performing asset with usage data
□ Quarterly refresher training — especially for new hires
□ Deprecation process — archive outdated assets, don't let stale content persist
```

**Output:** `enablement-rollout-plan.md` — Timeline, training agenda, adoption tracking.

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Asset usage rate | >70% of assets used in past 30 days | Unused assets = wasted effort |
| Win rate (overall) | Improve 5-10% within 2 quarters | The ultimate measure of enablement effectiveness |
| Sales cycle length | Reduce by 10-15% within 2 quarters | Better enablement = faster decisions |
| Competitive win rate | Improve 5% per quarter (per competitor) | Battlecards and objection handling are working |
| Time from lead to first response | <15 min for high-intent signals | Speed-to-lead directly impacts conversion |
| Content creation cycle time | <1 week for Tier 1 assets (with AI assist) | AI-powered enablement should be fast |
| Rep satisfaction score | >8/10 on quarterly enablement survey | Reps are the customer — if they don't value it, it won't get used |
| Objection-to-win conversion | Track top 5 objections — improving handle rate | Objection handling guides are effective |
| Buying group coverage | Assets exist for 4+ of 5 key roles | Gaps in buying group coverage = stalled deals |
| Feedback loop velocity | <1 week from request to first draft | Responsiveness builds trust with sales team |

---

## Anti-Patterns (What NOT to Do)

- **Don't build assets nobody asked for.** Start with what reps actually need in active deals, not what looks impressive in a content library. The Asset Priority Matrix exists for this reason — follow it.
- **Don't create one sales deck for all personas.** A technical buyer and an economic buyer have fundamentally different questions. One-size-fits-all decks address no stakeholder well and actively hurt credibility.
- **Don't gate enablement behind a content management system nobody uses.** If reps can't find the asset in under 30 seconds within their existing workflow, it effectively doesn't exist. Meet reps where they are.
- **Don't skip the feedback loop.** Enablement without sales input is marketing talking to itself. The weekly sync and per-deal debriefs are non-negotiable.
- **Don't treat AI output as final draft.** AI generates 80% of the asset in 20% of the time. The remaining 20% — real customer stories, specific metrics, competitive nuance — is what makes it credible. Human review is required.
- **Don't let perfect be the enemy of shipped.** A good-enough battlecard in a rep's hands today beats a perfect one next month. Ship fast, iterate based on usage data.
- **Don't measure by volume of assets created.** 10 assets that get used daily are worth more than 100 that nobody opens. Measure usage and win-rate impact, not library size.
- **Don't forget to deprecate.** Stale content erodes trust faster than no content. If an asset hasn't been updated in 90 days and references outdated pricing or features, archive it or refresh it.

---

## Integration Points

```
Sales Enablement outputs → consumed by:

┌────────────────────────────────┐
│ Enablement Asset Library        │──→ Pipeline Accelerator (13) — deal-stage-specific assets
│                                │──→ NRR Engine (14) — expansion/upsell enablement
│                                │──→ CAC Optimizer (12) — sales efficiency metrics
├────────────────────────────────┤
│ Buying Group Content Map       │──→ Content Engine (08) — production queue for new assets
│                                │──→ Pipeline Accelerator (13) — multi-stakeholder engagement
│                                │──→ Marketing Metrics (15) — attribution by persona
├────────────────────────────────┤
│ Signal-Based Engagement System │──→ Pipeline Accelerator (13) — intent-triggered acceleration
│                                │──→ CAC Optimizer (12) — cost-per-signal-response tracking
│                                │──→ Marketing Ops (16) — automation infrastructure
├────────────────────────────────┤
│ Sales-Marketing Feedback Loop  │──→ Customer Research (01) — new insights from deal debriefs
│                                │──→ Competitive Intel (03) — field-level competitive updates
│                                │──→ Positioning & Messaging (04) — messaging effectiveness data
│                                │──→ Marketing Metrics (15) — enablement ROI reporting
├────────────────────────────────┤
│ Win/Loss Enablement Data       │──→ ICP Definition (02) — refine ideal customer criteria
│                                │──→ GTM Strategy (05) — channel and motion effectiveness
└────────────────────────────────┘

Sales Enablement consumes from:

┌────────────────────────────────┐
│ Customer Research (01)          │──→ Voice library, buying journey, JTBD, customer quotes
│ ICP Definition (02)            │──→ Target personas, firmographics, qualification criteria
│ Competitive Intel (03)         │──→ Battlecards, competitor profiles, monitoring alerts
│ Positioning & Messaging (04)   │──→ Messaging hierarchy, value props, differentiators
│ GTM Strategy (05)              │──→ Sales motion, channel strategy, pricing context
└────────────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Battlecard updates | Continuous (within 48 hours of competitive change) | Red alert from Competitive Intel monitoring |
| Objection handling guides | Monthly review, immediate update on new objection pattern | 3+ reps report same new objection |
| Case studies | Add 1-2 per quarter | Major customer win or new ICP segment |
| Sales deck | Quarterly refresh, immediate update on positioning change | Messaging framework update from Skill 04 |
| Email sequences | Monthly A/B review, refresh underperformers | Open/reply rates drop below baseline |
| ROI calculator | Quarterly update with new customer data | New outcome metrics available |
| One-pagers | Refresh every 6 months or when entering new vertical | New use case or vertical expansion |
| Buying group content map | Quarterly review | Win/loss data shows new stakeholder patterns |
| Full enablement audit | Quarterly | Aligned with sales QBR |
| Signal engagement rules | Monthly tuning | Response rate or conversion data |
| Sales-marketing alignment docs | Quarterly review of SLAs and definitions | Any change in sales process or team structure |
