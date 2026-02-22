# Customer Research & Voice of Customer

> **Layer 0 — Foundation** | Skill 01 of 16
> **Dependencies:** None (this is the bedrock)
> **Feeds into:** [ICP Definition](./02-icp-definition.md), [Positioning & Messaging](./04-positioning-messaging.md), [Competitive Intel](./03-competitive-intel.md), [Content Engine](./08-content-engine.md), [NRR Engine](./14-nrr-engine.md)

---

## Purpose

Every marketing decision is a bet on what your customer cares about. Customer research replaces assumptions with evidence. At $1M-5M ARR, you likely have 50-500 customers — enough to find patterns, few enough to actually talk to them. This skill turns raw customer signal into structured insight that every downstream skill consumes.

---

## Business Context ($1M-5M ARR)

- You have real customers but likely no formal research practice
- Founders are still close to customers but that knowledge isn't systematized
- Product-market fit exists but may be narrow — research reveals where to expand
- Every dollar misspent on wrong-fit customers compounds at this stage
- Customer insight is the highest-ROI activity because it de-risks everything else

---

## Workflow

### Phase 1: Audit Existing Signal (Day 1)

**Objective:** Surface what you already know but haven't organized.

**Inputs required:**
- CRM data export (deals won, lost, churned — last 12 months)
- Support/CS ticket history
- NPS or CSAT data (if available)
- Sales call recordings or notes
- Product usage/analytics data
- Review site mentions (G2, Capterra, TrustRadius)
- Community discussions mentioning your product

**AI Workflow:**
1. Aggregate all data sources into a single corpus
2. Use AI to extract and categorize:
   - **Jobs to be done** — What customers hired your product to do
   - **Pain points** — What was broken before they found you
   - **Trigger events** — What caused them to start looking for a solution
   - **Decision criteria** — What mattered most in choosing you
   - **Objections** — What almost stopped them from buying
   - **Value realized** — What outcomes they achieved
   - **Language patterns** — Exact words and phrases customers use (critical for messaging)
3. Generate a preliminary hypothesis document

**Output:** `customer-signal-audit.md` — Structured summary of existing customer intelligence with confidence levels per insight.

### Phase 2: Primary Research Design (Day 2-3)

**Objective:** Design interviews that fill gaps from the audit.

**Interview Framework (Win/Loss + JTBD Hybrid):**

```
Target: 15-20 interviews minimum
Mix: 5 best customers, 5 churned customers, 5 recent wins, 5 lost deals

Core Questions:
1. TRIGGER: "Walk me through what was happening when you first started
   looking for a solution like ours."
2. CONSIDERATION: "What alternatives did you evaluate? What did that
   process look like?"
3. DECISION: "What ultimately made you choose [us / competitor]?"
4. OUTCOME: "What's different now compared to before you started using
   [product]? What would happen if you couldn't use it anymore?"
5. LANGUAGE: "If you were describing [product] to a colleague, what
   would you say?"

For churned/lost:
6. "What would have needed to be different for you to [stay / choose us]?"
```

**Segmentation by interview type:**
- **Best customers** → Understand what "great fit" looks like (feeds ICP)
- **Churned customers** → Understand failure modes (feeds NRR Engine)
- **Recent wins** → Understand current buying journey (feeds Sales Enablement)
- **Lost deals** → Understand competitive gaps (feeds Competitive Intel)

**Output:** `research-plan.md` — Interview guide, target list, scheduling approach.

### Phase 3: Conduct & Synthesize (Week 1-3)

**Objective:** Run interviews and synthesize into actionable patterns.

**AI-Assisted Synthesis Workflow:**
1. Record all interviews (with permission)
2. Transcribe using AI
3. For each transcript, extract:
   - Direct quotes (preserve exact language)
   - Jobs to be done mentioned
   - Pain points and trigger events
   - Decision criteria and objections
   - Competitive mentions
   - Emotional drivers (fear, aspiration, frustration)
4. Cross-reference with Phase 1 audit data
5. Identify patterns across segments:
   - What do best customers have in common?
   - What do churned customers have in common?
   - What are the top 3 jobs to be done?
   - What language appears repeatedly?

**Pattern Detection Framework:**
| Pattern Type | Question | Feeds |
|---|---|---|
| Firmographic | What company size/industry/stage are best customers? | ICP Definition |
| Behavioral | What trigger events precede purchase? | Pipeline Accelerator, Sales Enablement |
| Psychographic | What do they believe about the problem? | Positioning & Messaging |
| Competitive | Who else do they consider and why? | Competitive Intel |
| Value | What outcomes matter most? | Content Engine, Case Studies |
| Language | What words do they use? | Messaging, GEO, Content |

**Output:** `customer-research-synthesis.md` — The master insight document.

### Phase 4: Build Research Artifacts (Day 1 after synthesis)

**Objective:** Turn synthesis into reusable assets that other skills consume.

**Deliverables:**

1. **Customer Voice Library**
   - 50+ categorized direct quotes
   - Organized by: pain point, aspiration, objection, value statement
   - Tagged by segment, persona, deal stage
   - *Used by:* Positioning & Messaging, Content Engine, Sales Enablement, Ad Copy

2. **Jobs-to-Be-Done Map**
   - Primary JTBD (the core job)
   - Related jobs (adjacent needs)
   - Emotional jobs (how they want to feel)
   - Social jobs (how they want to be perceived)
   - *Used by:* ICP Definition, Positioning & Messaging, Product Marketing

3. **Buying Journey Map**
   - Trigger events → Research phase → Evaluation → Decision → Onboarding
   - What happens at each stage
   - Who's involved at each stage
   - What content/touchpoints matter at each stage
   - *Used by:* Pipeline Accelerator, Sales Enablement, Content Engine

4. **Churn & Expansion Signal Map**
   - Why customers leave (top 5 patterns)
   - Why customers expand (top 5 triggers)
   - Early warning indicators
   - *Used by:* NRR Engine, Customer Health Scoring

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Interviews completed | 15-20 minimum | Statistical pattern reliability |
| Response rate | 30%+ for customers, 15%+ for lost deals | Indicates engagement quality |
| Unique JTBD identified | 3-5 primary | Too many = unfocused, too few = shallow |
| Quote library size | 50+ tagged quotes | Fuels all downstream messaging work |
| Time from start to synthesis | 3-4 weeks | Fast enough to act on, thorough enough to trust |

---

## Anti-Patterns (What NOT to Do)

- **Don't survey instead of interview.** Surveys give you data; interviews give you understanding. At this stage you need the "why" more than the "what."
- **Don't only talk to happy customers.** Churned customers and lost deals are where the real insight lives.
- **Don't let AI replace the interviews.** AI synthesizes and analyzes. Humans conduct the conversations. The nuance is in tone, hesitation, and follow-up questions.
- **Don't treat this as a one-time project.** Build a continuous research cadence — 2-3 interviews/month ongoing.
- **Don't skip the language capture.** The exact words customers use are worth more than any messaging framework. This is the raw material for everything downstream.

---

## Integration Points

```
Customer Research outputs → consumed by:

┌──────────────────────┐
│ Customer Voice Library│──→ Positioning & Messaging (04)
│                      │──→ Content Engine (08)
│                      │──→ Sales Enablement (10)
│                      │──→ GEO Optimizer (09)
├──────────────────────┤
│ JTBD Map             │──→ ICP Definition (02)
│                      │──→ Positioning & Messaging (04)
│                      │──→ GTM Strategy (05)
├──────────────────────┤
│ Buying Journey Map   │──→ Pipeline Accelerator (13)
│                      │──→ Sales Enablement (10)
│                      │──→ Content Engine (08)
├──────────────────────┤
│ Churn & Expansion Map│──→ NRR Engine (14)
│                      │──→ Marketing Metrics (15)
└──────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Full research cycle | Every 6 months | Or when entering new segment |
| Ongoing interviews | 2-3/month | Continuous |
| Win/loss analysis | Every closed deal | Automated via CRM |
| Voice library update | Monthly | New quotes from interviews, support, reviews |
| Signal audit refresh | Quarterly | New data from product analytics, support |
