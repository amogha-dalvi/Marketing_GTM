# ICP Definition & Segmentation

> **Layer 0 — Foundation** | Skill 02 of 16
> **Dependencies:** [Customer Research](./01-customer-research.md)
> **Feeds into:** [Competitive Intel](./03-competitive-intel.md), [Positioning & Messaging](./04-positioning-messaging.md), [GTM Strategy](./05-gtm-strategy.md), [Brand Strategy](./06-brand-strategy.md), [Marketing Budget](./07-marketing-budget.md), [Content Engine](./08-content-engine.md), [Sales Enablement](./10-sales-enablement.md), [CAC Optimizer](./12-cac-optimizer.md), [Pipeline Accelerator](./13-pipeline-accelerator.md)

---

## Purpose

ICP is the single highest-leverage decision in a $1M-5M ARR business. Targeting the wrong segment means your CAC is too high, your churn is too fast, your content doesn't resonate, and your sales team wastes cycles. Getting ICP right means every downstream marketing activity compounds. This skill turns customer research into a precise, actionable targeting framework.

---

## Business Context ($1M-5M ARR)

- You've found initial product-market fit but it may be with multiple overlapping segments
- Resources are scarce — you can't afford to serve everyone
- The difference between 3% and 8% conversion rate often comes down to targeting precision
- Most companies at this stage have an implicit ICP in the founder's head but nothing documented or validated
- Expansion into adjacent segments is tempting but premature diversification kills focus
- Your best customers are your ICP blueprint — reverse-engineer from them

---

## Workflow

### Phase 1: Data Assembly (Day 1)

**Objective:** Build the dataset that reveals your ICP.

**Required inputs (from [Customer Research](./01-customer-research.md)):**
- Customer Voice Library
- JTBD Map
- Buying Journey Map

**Additional data required:**
- Full customer list with: revenue, contract value, churn status, NPS, expansion history, time-to-close, support ticket volume, product usage depth
- Won deals: company size, industry, tech stack, funding stage, team structure
- Lost deals: same firmographics + reason for loss
- Churned customers: same firmographics + reason for churn

**AI Workflow:**
1. Export and merge all data sources
2. Create a scoring matrix for each customer:

```
Customer Health Score = weighted combination of:
- Revenue contribution (20%)
- Retention duration (20%)
- Expansion revenue (15%)
- NPS/CSAT (15%)
- Support burden (inverse) (10%)
- Time-to-close (inverse) (10%)
- Referral activity (10%)
```

3. Rank all customers by health score
4. Segment into tiers: Top 20% (ideal), Middle 60% (acceptable), Bottom 20% (bad fit)

**Output:** `customer-scoring-matrix.csv` — Every customer scored and tiered.

### Phase 2: Pattern Extraction (Day 2)

**Objective:** Identify what your best customers have in common.

**Analyze Top 20% across these dimensions:**

**Firmographic Profile:**
| Dimension | Analysis Question |
|-----------|------------------|
| Company size | What employee range clusters? (e.g., 50-200) |
| Revenue range | What ARR range clusters? |
| Industry/vertical | Are there 2-3 dominant verticals? |
| Funding stage | Bootstrap? Series A? Series B+? |
| Geography | Does region matter? |
| Growth rate | Are fast-growing companies better fits? |

**Technographic Profile:**
| Dimension | Analysis Question |
|-----------|------------------|
| Tech stack | What tools do they already use? |
| Integration needs | What do they connect your product to? |
| Technical maturity | How sophisticated is their ops? |
| Existing solutions | What did they use before you? |

**Behavioral Profile (from Customer Research):**
| Dimension | Analysis Question |
|-----------|------------------|
| Trigger event | What caused them to look for a solution? |
| Primary JTBD | Which job-to-be-done do they hire you for? |
| Decision process | Who's involved? How long does it take? |
| Adoption pattern | How quickly do they onboard and activate? |
| Value realization | How fast do they see ROI? |

**AI Workflow:**
1. Feed top-20% customer data into analysis
2. Identify statistically significant patterns
3. Compare against bottom-20% to find disqualifying signals
4. Generate draft ICP profile

**Output:** `icp-pattern-analysis.md` — What best customers share, what worst customers share.

### Phase 3: ICP Framework Build (Day 3)

**Objective:** Create the actionable ICP document.

**ICP Document Structure:**

```
# [Product] Ideal Customer Profile

## Tier 1: Perfect Fit (Prioritize Always)
- Firmographics: [size, industry, stage, geography]
- Technographics: [stack, maturity, integrations]
- Trigger Events: [what causes them to buy now]
- Primary JTBD: [the job they hire us for]
- Budget Authority: [who signs, typical deal size]
- Success Indicators: [what predicts they'll be a great customer]
- Expected LTV: $[range]
- Expected CAC: $[range]
- LTV:CAC Ratio: [target]

## Tier 2: Good Fit (Pursue When Capacity Allows)
- [Same structure, slightly wider criteria]
- Key differences from Tier 1: [what makes them good but not great]

## Tier 3: Acceptable Fit (Inbound Only, Don't Pursue)
- [Same structure]
- Why not prioritize: [lower LTV, higher support cost, longer sales cycle]

## Disqualified: Do Not Pursue
- [Firmographic/behavioral signals that predict bad outcomes]
- Historical evidence: [churn rates, support costs, deal failure rates]
```

**Negative ICP (equally important):**
Define who you are NOT for. This is critical at $1M-5M ARR because saying no to bad-fit revenue is what protects your NRR and team sanity.

| Disqualification Signal | Why | Evidence |
|------------------------|-----|----------|
| Company size too small | Can't afford, high churn | [data from bottom 20%] |
| Missing tech dependency | Integration failure, poor activation | [data] |
| Wrong use case | Product doesn't solve their actual JTBD | [data] |
| Price-only buyers | Churn at first cheaper alternative | [data] |

### Phase 4: Buyer Persona Development (Day 4)

**Objective:** Within each ICP tier, define the people involved in buying.

**Critical distinction:** Personas are NOT the same as ICP. ICP = the company. Persona = the people within that company who buy, use, and champion your product.

**Persona Framework (per ICP tier):**

```
For each persona:
- Role/Title: [actual titles from CRM data, not guesses]
- Responsibility: [what they're accountable for]
- Pain Points: [specific to their role, from Customer Research]
- Goals: [what success looks like for them personally]
- Objections: [what makes them hesitant, from win/loss data]
- Information Sources: [where they research, learn, get influenced]
- Decision Role: [champion, economic buyer, technical buyer, blocker, end user]
- Content Preferences: [format, depth, channel]
- Language: [exact phrases from Customer Voice Library]
```

**Typical $1M-5M ARR SaaS Buying Group:**
| Role | What They Care About | Content Need |
|------|---------------------|--------------|
| Champion | Solving their day-to-day problem | Use cases, demos, peer proof |
| Economic Buyer | ROI, risk, total cost | Business cases, ROI calculators |
| Technical Buyer | Integration, security, scalability | Technical docs, architecture diagrams |
| End Users | Ease of use, learning curve | Product tours, onboarding guides |
| Blocker | Risk, change management | Security docs, migration plans |

### Phase 5: Validation & Operationalization (Week 2)

**Objective:** Pressure-test the ICP and embed it in operations.

**Validation Methods:**
1. **Backtesting:** Apply ICP criteria to last 12 months of deals. Does it predict win/loss and retention?
2. **Sales team gut-check:** Do the top reps intuitively agree? Where do they disagree?
3. **TAM sizing:** Is the Tier 1 ICP large enough to support growth targets? If <3x your revenue target, the ICP may be too narrow.
4. **Pipeline audit:** What % of current pipeline matches Tier 1? If <40%, you have a targeting problem.

**Operationalization Checklist:**
- [ ] ICP criteria loaded into CRM as lead/account scoring fields
- [ ] Sales team trained on ICP tiers and when to qualify out
- [ ] Marketing campaigns targeted at Tier 1 firmographics
- [ ] Content calendar aligned to Tier 1 JTBD and personas
- [ ] Inbound lead routing prioritizes Tier 1 matches
- [ ] Paid acquisition targeting mirrors Tier 1 firmographics
- [ ] SDR outbound list built from Tier 1 criteria

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| % of pipeline that matches Tier 1 ICP | >60% | Targeting precision |
| Win rate for Tier 1 vs. non-ICP | 2x+ higher | Validates the ICP works |
| CAC for Tier 1 vs. non-ICP | 30%+ lower | Proves focus saves money |
| NRR for Tier 1 vs. non-ICP | 20%+ higher | Proves fit = retention |
| Time-to-close for Tier 1 | 30%+ faster | Better fit = faster sales |
| % of churned customers that were non-ICP | Track quarterly | Retroactive validation |

---

## Anti-Patterns (What NOT to Do)

- **Don't build ICP from assumptions.** Use data from Customer Research. If you skip Skill 01, your ICP is a fiction.
- **Don't make ICP too broad.** "Companies with 10-10,000 employees" is not an ICP. Narrower = better at this stage.
- **Don't ignore negative ICP.** Knowing who to say no to is as valuable as knowing who to pursue.
- **Don't confuse personas with ICP.** ICP = company fit. Persona = people within those companies. Both matter, they're different.
- **Don't set and forget.** ICP evolves as you grow. Revisit quarterly with fresh data.
- **Don't optimize for TAM size.** A smaller addressable market you can dominate beats a massive market you can't penetrate.

---

## Integration Points

```
ICP Definition outputs → consumed by:

┌──────────────────────────┐
│ ICP Tiers (1/2/3)        │──→ GTM Strategy (05) — channel selection per tier
│                          │──→ Marketing Budget (07) — spend allocation per tier
│                          │──→ CAC Optimizer (12) — targeting precision
│                          │──→ Pipeline Accelerator (13) — ABM target lists
├──────────────────────────┤
│ Buyer Personas           │──→ Positioning & Messaging (04) — message per persona
│                          │──→ Content Engine (08) — content per persona × stage
│                          │──→ Sales Enablement (10) — enablement per stakeholder
├──────────────────────────┤
│ Negative ICP             │──→ Sales Enablement (10) — qualification criteria
│                          │──→ Marketing Ops (16) — lead scoring disqualifiers
│                          │──→ NRR Engine (14) — churn risk segmentation
├──────────────────────────┤
│ Firmographic/Technographic│──→ Competitive Intel (03) — who competes per segment
│ Criteria                 │──→ GEO Optimizer (09) — queries per segment
│                          │──→ Brand Strategy (06) — which communities to own
└──────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Full ICP review | Every 6 months | Or when entering new market |
| Scoring model recalibration | Quarterly | New customer data available |
| Pipeline audit vs. ICP | Monthly | Part of marketing review |
| Negative ICP update | Quarterly | After churn analysis |
| Persona refresh | Every 6 months | After new Customer Research cycle |
| TAM re-estimation | Annually | Or after significant ICP change |
