# CAC Optimizer

> **Layer 4 — Growth & Optimization** | Skill 12 of 16
> **Dependencies:** [ICP Definition](./02-icp-definition.md), [Competitive Intel](./03-competitive-intel.md), [Positioning & Messaging](./04-positioning-messaging.md), [GTM Strategy](./05-gtm-strategy.md), [Content Engine](./08-content-engine.md), [GEO Optimizer](./09-geo-optimizer.md), [Sales Enablement](./10-sales-enablement.md)
> **Feeds into:** [Marketing Metrics](./15-marketing-metrics.md), [Marketing Ops](./16-marketing-ops.md)
> **Parallel with:** [Pipeline Accelerator](./13-pipeline-accelerator.md), [NRR Engine](./14-nrr-engine.md)

---

## Purpose

CAC has surged 60-222% in competitive SaaS markets over the last 5-8 years. Paid channels are more expensive, organic clicks are being eaten by AI Overviews, and the MQL-factory playbook is producing worse results at higher cost. CAC is the #1 pressure point for every SaaS CMO and founder — and at $1M-5M ARR, where every dollar compounds, unoptimized CAC is the difference between efficient scaling and death by cash burn. This skill is the optimization layer. It takes every execution system you've already built — content, GEO, sales enablement, paid — and ruthlessly optimizes them for acquisition efficiency.

---

## Business Context ($1M-5M ARR)

- You're spending on acquisition but probably can't answer "what is our CAC by channel?" with confidence
- Blended CAC masks enormous variation — some channels deliver $500 CAC, others deliver $5,000
- You likely have 2-3 channels working and 3-5 you're spending on out of habit or hope
- Founders feel "marketing isn't working" but the real problem is usually channel mix, not marketing quality
- You don't have budget to waste — killing one underperforming channel can fund two high-performers
- CAC payback period directly determines your runway and fundraising math
- AI is reshaping acquisition economics: organic search is declining, AI-assisted content is cheaper, brand is more important than ever
- The companies that master CAC optimization at this stage are the ones that make it to $10M ARR without raising a panic round

---

## Workflow

### Phase 1: CAC Audit — Know Your Numbers (Day 1-3)

**Objective:** Establish ground truth on what you're actually paying to acquire customers, by channel, by segment.

**Inputs required:**

From internal data:
- Full marketing spend by channel (last 12 months) — include tools, headcount allocation, agency fees, ad spend
- Sales team cost allocation (SDR time, AE time on new business vs. expansion)
- Revenue and new customer data by source/channel (from CRM)
- Conversion rates at each funnel stage by channel
- Average deal size and sales cycle length by channel
- Product usage data for PLG motions (if applicable)

From upstream skills:
- ICP tier definitions (from [ICP Definition](./02-icp-definition.md))
- Channel performance data (from [GTM Strategy](./05-gtm-strategy.md))
- Content attribution data (from [Content Engine](./08-content-engine.md))
- GEO/organic traffic and citation data (from [GEO Optimizer](./09-geo-optimizer.md))

**Step 1: Calculate Three Layers of CAC**

```
1. CHANNEL-SPECIFIC CAC (Marketing CAC)
   = Channel spend / Customers acquired from that channel
   Example: $10,000 Google Ads spend / 5 customers = $2,000 CAC

2. BLENDED CAC
   = Total marketing + sales cost / Total new customers acquired
   Example: $150,000 total / 30 customers = $5,000 CAC

3. FULLY-LOADED CAC
   = (Total marketing + sales + tools + overhead + content production
      + agency fees + event costs) / Total new customers acquired
   Example: $220,000 total / 30 customers = $7,333 CAC
```

**Step 2: CAC Audit Template (by channel)**

| Channel | Monthly Spend (Fully Loaded) | New Customers | Channel CAC | CAC Payback (Months) | LTV:CAC Ratio | Trend (3mo) | Verdict |
|---------|------------------------------|---------------|-------------|----------------------|---------------|-------------|---------|
| Google Ads (brand) | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Google Ads (non-brand) | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| LinkedIn Ads | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Organic Search/GEO | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Content/Inbound | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Community/Word of mouth | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Founder-led content | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Partnerships/Referrals | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Events/Conferences | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Outbound (SDR) | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| Product-led (free trial/freemium) | $ | | $ | | :1 | ↑↓→ | Scale / Hold / Kill |
| **BLENDED** | **$** | | **$** | | **:1** | | |

**Step 3: LTV:CAC Analysis by ICP Segment**

Cross-reference CAC data with ICP tiers from [ICP Definition](./02-icp-definition.md):

| ICP Segment | Avg CAC | Avg ACV | LTV (3yr) | LTV:CAC | Payback Period | Verdict |
|-------------|---------|---------|-----------|---------|----------------|---------|
| Tier 1 (ideal) | $ | $ | $ | :1 | months | Target for scaling |
| Tier 2 (good fit) | $ | $ | $ | :1 | months | Optimize or hold |
| Tier 3 (marginal) | $ | $ | $ | :1 | months | Likely kill |
| Off-ICP | $ | $ | $ | :1 | months | Stop acquiring |

**Benchmarks for SaaS at $1M-5M ARR:**
- Healthy LTV:CAC: 3:1 or higher
- Acceptable CAC payback: <18 months (ideally <12)
- If LTV:CAC < 1:1 on any channel, kill it immediately
- If LTV:CAC is 1:1 to 2:1, optimize hard or reallocate spend
- If LTV:CAC > 5:1, you're likely underinvesting in that channel

**Output:** `cac-audit.md` — Channel-by-channel CAC breakdown with benchmarks and verdicts.

### Phase 2: Channel Efficiency Scoring (Day 4-5)

**Objective:** Rank every channel on a composite efficiency score to prioritize where to invest, optimize, and cut.

**Channel Efficiency Scoring Matrix:**

Score each channel 1-5 on each dimension. Multiply by the weight. Sum for total score.

| Dimension | Weight | What You're Measuring |
|-----------|--------|-----------------------|
| CAC Efficiency | 5x | Lower CAC = higher score |
| LTV:CAC Ratio | 4x | Higher ratio = higher score |
| Scalability | 3x | Can you 3x spend and maintain efficiency? |
| Speed to Revenue | 3x | How fast from first touch to closed deal? |
| ICP Precision | 3x | Does this channel attract Tier 1 ICPs? |
| Compounding Returns | 2x | Does investment build an asset (content, brand) or evaporate (ads)? |
| Attribution Clarity | 1x | Can you clearly measure performance? |
| Competitive Saturation | 2x | How crowded is this channel? |

**Scoring Template:**

| Channel | CAC Eff (5x) | LTV:CAC (4x) | Scale (3x) | Speed (3x) | ICP Fit (3x) | Compound (2x) | Attrib (1x) | Saturation (2x) | **Total (/115)** |
|---------|-------------|--------------|-----------|-----------|-------------|-------------|------------|----------------|-----------------|
| Organic/GEO | | | | | | | | | |
| Brand search | | | | | | | | | |
| Community | | | | | | | | | |
| Founder content | | | | | | | | | |
| AI content engine | | | | | | | | | |
| Google Ads | | | | | | | | | |
| LinkedIn Ads | | | | | | | | | |
| SDR/Outbound | | | | | | | | | |
| Product-led | | | | | | | | | |
| Partnerships | | | | | | | | | |
| Events | | | | | | | | | |

**Channel Tier Classification:**

| Tier | Score Range | Action |
|------|------------|--------|
| **Tier A — Invest** | 80+ | Increase budget, increase effort, scale aggressively |
| **Tier B — Optimize** | 60-79 | Keep running, run optimization experiments |
| **Tier C — Test** | 40-59 | Small budget experiments only, prove efficiency or kill |
| **Tier D — Kill** | <40 | Stop spending, reallocate budget to Tier A/B |

**Output:** `channel-efficiency-scorecard.md` — Ranked channel list with investment recommendations.

### Phase 3: CAC Reduction Playbooks (Day 6-10)

**Objective:** Execute specific playbooks to reduce CAC on priority channels.

**Playbook 1: The Zero-Cost Flywheel**

This is the highest-leverage CAC reduction strategy. It compounds over time and has near-zero marginal cost.

```
Zero-Cost Flywheel Blueprint:

Stage 1: COMMUNITY & FOUNDER CONTENT (from Brand Strategy)
│   Founder shares practitioner insights on LinkedIn, Twitter, podcasts
│   Community discussions generate organic engagement
│   Cost: Time only (founder + 1-2 hours/day)
│
├──→ Stage 2: EARNED MEDIA & SOCIAL PROOF
│    Community members share and amplify content
│    Journalists/analysts discover thought leadership
│    G2/Capterra reviews grow organically
│    Cost: Zero incremental
│
├──→ Stage 3: GEO CITATION & AI VISIBILITY (from GEO Optimizer)
│    AI models cite your content in answer layers
│    Brand appears in AI-generated recommendations
│    Organic discovery bypasses paid channels entirely
│    Cost: Covered by Content Engine investment
│
├──→ Stage 4: ORGANIC INBOUND
│    Prospects arrive pre-educated, pre-sold on your approach
│    Sales cycle is shorter (60-70% of paid-sourced deals)
│    Close rate is higher (2-3x vs. cold outbound)
│    CAC: Near zero (no media spend, no SDR cost)
│
└──→ COMPOUNDS: Each stage feeds the next, building
     an organic growth engine that gets cheaper over time
     while paid channels get more expensive.
```

**Playbook 2: Conversion Rate Optimization (CRO)**

Better conversion = lower CAC at the same spend level. A 2x improvement in conversion rate cuts CAC in half.

```
CRO Priorities for CAC Reduction:

Website Conversion:
- [ ] Homepage headline matches ICP pain (from Positioning & Messaging)
- [ ] Social proof above the fold (customer logos, metrics)
- [ ] CTA is specific and low-friction ("See it work" > "Request demo")
- [ ] Page load <3 seconds (every second costs ~7% conversion)
- [ ] Mobile experience optimized (50%+ traffic is mobile)
- [ ] Remove navigation distractions on landing pages
- [ ] Add live chat / AI chatbot for immediate engagement

Demo/Trial Conversion:
- [ ] Demo request form is <5 fields (every field reduces conversion ~10%)
- [ ] Trial signup requires email only, progressive profiling after
- [ ] Immediate value delivery in first session (time-to-value <5 min)
- [ ] Onboarding sequence activated within 1 hour
- [ ] Follow-up within 5 minutes of demo request (speed-to-lead)

Lead-to-Customer Conversion:
- [ ] Sales follows messaging framework from Positioning & Messaging (04)
- [ ] Battlecards used consistently from Sales Enablement (10)
- [ ] Sales has case studies per ICP segment (from Content Engine)
- [ ] Objection handling documented and trained
- [ ] Multi-threading into accounts (champion + economic buyer)
```

**Playbook 3: ICP Precision Impact on CAC**

Tighter ICP targeting = higher conversion at every stage = dramatically lower CAC.

| Action | CAC Impact | How |
|--------|-----------|-----|
| Exclude Tier 3 / off-ICP from paid targeting | -20-30% CAC | Remove low-fit firmographics from ad audiences |
| Build lookalike audiences from best customers | -15-25% CAC | Upload Tier 1 customer list, let platforms find similar |
| Add negative keywords/exclusions | -10-20% CAC | Block irrelevant searches from triggering ads |
| Score inbound leads before sales engagement | -15-20% CAC | Only route ICP-fit leads to AEs, nurture the rest |
| Align content to Tier 1 pain points specifically | -10-15% CAC | Stop writing generic content, write for best-fit buyers |

**Playbook 4: Sales Cycle Reduction**

Every day in the sales cycle adds cost. SDR/AE time is the hidden CAC multiplier.

| Tactic | Cycle Reduction | Source |
|--------|----------------|--------|
| Better qualification at first touch | -20-30% cycle | ICP scoring from [ICP Definition](./02-icp-definition.md) |
| Send case study for their segment before demo | -10-15% cycle | [Content Engine](./08-content-engine.md) |
| Multi-thread from day 1 (champion + buyer) | -15-25% cycle | [Sales Enablement](./10-sales-enablement.md) |
| Mutual action plan from first meeting | -10-20% cycle | [Pipeline Accelerator](./13-pipeline-accelerator.md) |
| Address objections proactively in deck | -10-15% cycle | [Positioning & Messaging](./04-positioning-messaging.md) |
| Interactive product demo (not just slide deck) | -15-20% cycle | Product Marketing |

**Output:** `cac-reduction-playbooks.md` — Prioritized playbook per channel with estimated CAC impact.

### Phase 4: Paid Media Optimization (Day 11-15)

**Objective:** If you run paid acquisition, make every dollar maximally efficient.

**Paid Media Optimization Checklist:**

**Targeting:**
- [ ] Audiences built from ICP firmographics (company size, industry, tech stack)
- [ ] Intent-based targeting active (in-market audiences, intent data providers)
- [ ] Demographic targeting replaced by behavioral/intent signals where possible
- [ ] Lookalike audiences built from best customers (not all customers)
- [ ] Negative audiences exclude existing customers, competitors, non-ICP
- [ ] Retargeting audiences segmented by engagement level (visited pricing > visited blog)
- [ ] Account-based targeting for top 50-100 target accounts (if ABM motion)

**Creative & Messaging:**
- [ ] Ad copy uses exact customer language (from [Customer Research](./01-customer-research.md) Voice Library)
- [ ] Minimum 3 creative variants per campaign (AI-generated variants for testing)
- [ ] Ads address specific pain points, not features
- [ ] Landing page copy matches ad copy (message match = higher conversion)
- [ ] Social proof in ad creative (customer quote, metric, logo)
- [ ] Different creative for cold vs. retargeting audiences
- [ ] Video/rich creative tested against static (particularly LinkedIn)

**Bidding & Budget:**
- [ ] AI-optimized bidding enabled (maximize conversions, not clicks)
- [ ] Bid strategy set to target CPA, not max clicks
- [ ] Budget allocated by channel efficiency score (from Phase 2)
- [ ] Daily budget caps prevent overspend on underperforming campaigns
- [ ] Dayparting active (only run ads during business hours for B2B)
- [ ] Geo-targeting matches ICP geography

**Measurement:**
- [ ] Conversion tracking confirmed working (pixel, API, offline conversion import)
- [ ] Attribution model documented and consistent (first-touch, last-touch, or multi-touch)
- [ ] ROAS/CAC measured at campaign level, not just channel level
- [ ] Offline conversion data (closed-won) fed back to ad platforms for optimization
- [ ] Weekly reporting cadence with kill/scale decisions every 2 weeks

**Retargeting Strategy:**

| Audience | Trigger | Message | Budget Allocation |
|----------|---------|---------|-------------------|
| Website visitors (pricing page) | High intent | "Ready to get started? Here's what [customer] achieved" | 30% of retargeting |
| Website visitors (blog/content) | Low intent | Educational content, not sales pitch | 15% of retargeting |
| Demo no-shows | Failed conversion | "Still exploring [category]? See a 2-min walkthrough" | 20% of retargeting |
| Free trial users (inactive) | Stalled activation | "Need help getting started? Here's a quick win" | 25% of retargeting |
| Engaged social followers | Warm audience | Case studies, social proof | 10% of retargeting |

**When to Scale Paid vs. Invest in Organic:**

| Signal | Action |
|--------|--------|
| LTV:CAC > 3:1 on paid, payback < 12 months | Scale paid — unit economics support it |
| LTV:CAC 1-3:1 on paid, payback 12-18 months | Hold paid, invest more in organic to reduce blended CAC |
| LTV:CAC < 1:1 on paid | Kill paid, go all-in on organic/community/brand |
| Organic pipeline growing >20% QoQ | Shift budget from paid to content/brand that fuels organic |
| Paid CAC rising >10% QoQ with same targeting | Paid is saturated — diversify to new channels or invest in brand |
| Branded search CAC < 1/3 of non-brand CAC | Invest in brand (brand search is a lagging indicator of brand investment) |

**Output:** `paid-media-optimization.md` — Optimized paid media plan with targeting, creative, bidding, and measurement strategy.

### Phase 5: What's Dying — Stop Spending Here (Day 11-15, parallel with Phase 4)

**Objective:** Identify and kill spend on tactics with declining returns.

**The "Stop Spending" List:**

| Dying Tactic | Why It's Dying | What to Replace It With |
|-------------|----------------|------------------------|
| Spray-and-pray paid at broad targeting | CPMs rising, conversion declining, AI eating organic clicks | Intent-based targeting, AI-optimized bidding, brand search |
| Top-of-funnel SEO for traffic volume | AI Overviews cannibalize 40-60% of informational clicks | GEO optimization for AI citation (from [GEO Optimizer](./09-geo-optimizer.md)) |
| Gated content lead gen (ebook downloads) | <3% of MQLs convert to pipeline; wastes sales time on low-intent | Ungated content that builds brand, capture intent signals instead |
| Generic persona-based campaigns | Static personas can't compete with real-time intent signals | Behavioral/intent-based targeting using first-party data |
| Trade show booths without ABM strategy | $30-100K per event with unmeasurable ROI | Hosted dinners / roundtables with 20 ICP-fit accounts ($5-10K) |
| Display advertising (non-retargeting) | <0.1% CTR, brand safety issues, mostly bot traffic | Invest in owned media (podcast, newsletter, community) |
| Cold email blast outbound | Deliverability collapsing, spam filters tightening, buyer tolerance at zero | Warm outbound (engage on social first, then email with context) |

**Decision Framework — Kill or Keep:**

```
For each channel/tactic, answer:

1. Is the CAC trending up or down over the last 3 quarters?
   → Up = warning sign, investigate
   → Down = healthy, continue

2. Are customers from this channel Tier 1 ICP fit?
   → No = the channel is attracting wrong-fit buyers
   → Yes = channel is well-targeted

3. Do customers from this channel retain at or above average?
   → Below average = channel attracts low-quality customers
   → Above average = channel is finding great customers

4. Is this channel building a compounding asset?
   → No (ads stop, leads stop) = vulnerable to cost increases
   → Yes (content, brand, community) = investment compounds

If a channel scores poorly on 3+ of these → KILL IT
If a channel scores poorly on 2 → optimize aggressively for 90 days, then re-evaluate
If a channel scores well on all 4 → scale it
```

**Output:** `channels-to-kill.md` — List of channels/tactics to stop or reduce, with reallocation recommendations.

### Phase 6: Unit Economics Modeling (Day 16-18)

**Objective:** Build the financial model that connects CAC to business viability and guides investment decisions.

**Unit Economics Calculator Framework:**

```
INPUTS:
├── Average Contract Value (ACV):               $________
├── Gross Margin:                                ________%
├── Monthly Churn Rate:                          ________%
├── Average Customer Lifetime:                   ________ months
├── Expansion Revenue Rate (NRR - 100%):         ________%
├── Blended CAC:                                 $________
├── Channel-Specific CAC:                        $________ (per channel)
└── Sales Cycle Length:                           ________ days

CALCULATED OUTPUTS:
├── Customer Lifetime Value (LTV):
│   = ACV × Gross Margin × (1 / Monthly Churn Rate) × (1 + Expansion Rate)
│   = $________
│
├── LTV:CAC Ratio:
│   = LTV / CAC
│   = ____:1    (Target: >3:1)
│
├── CAC Payback Period:
│   = CAC / (ACV × Gross Margin / 12)
│   = ________ months    (Target: <18 months, ideal <12)
│
├── Marginal CAC (cost of NEXT customer):
│   = Incremental spend to acquire 1 more customer at current scale
│   Note: Often 20-50% higher than average CAC
│   = $________
│
├── Gross Margin-Adjusted CAC Payback:
│   = CAC / (Monthly Revenue Per Customer × Gross Margin %)
│   = ________ months
│
└── Break-Even Customer Count:
    = Fixed marketing costs / (ACV × Gross Margin - Variable Acquisition Cost)
    = ________ customers
```

**The Scaling Decision Matrix:**

| Metric | Optimize First | OK to Scale | Scale Aggressively |
|--------|---------------|-------------|-------------------|
| LTV:CAC | <2:1 | 3:1 - 5:1 | >5:1 |
| CAC Payback | >18 months | 12-18 months | <12 months |
| Marginal CAC Trend | Rising >20% QoQ | Stable (±10%) | Declining |
| Channel CAC vs. Blended | >1.5x blended | Within 1.2x blended | Below blended |
| NRR | <100% | 100-110% | >110% (expansion covers CAC faster) |

**Marginal CAC Analysis:**

```
Average CAC tells you where you've been.
Marginal CAC tells you where you're going.

If marginal CAC > average CAC:
→ You're hitting diminishing returns on current channels
→ Scale will make unit economics WORSE
→ Action: Optimize existing channels or find new ones before scaling

If marginal CAC < average CAC:
→ You have room to scale efficiently
→ Each new customer is CHEAPER than historical average
→ Action: Increase investment, you're in a scaling window

If marginal CAC = average CAC:
→ You're operating at stable efficiency
→ Scaling is neutral on unit economics
→ Action: Cautiously scale while monitoring for degradation
```

**Output:** `unit-economics-model.md` — Complete model with current actuals, scenario analysis, and scaling decision framework.

### Phase 7: CAC Reduction Prioritization (Day 19-20)

**Objective:** Rank all optimization opportunities by impact, effort, and speed.

**CAC Reduction Prioritization Framework:**

Score each initiative 1-5 on each dimension:

| Initiative | CAC Impact (5x) | Effort to Implement (5x, inverse) | Speed to Results (3x) | Confidence Level (2x) | **Total (/75)** | Priority |
|-----------|-----------------|-----------------------------------|----------------------|----------------------|-----------------|----------|
| Kill lowest-performing paid channel | | | | | | |
| Implement ICP-based lead scoring | | | | | | |
| Homepage CRO (headline + CTA) | | | | | | |
| Build retargeting sequences | | | | | | |
| Launch founder content program | | | | | | |
| Optimize trial-to-paid conversion | | | | | | |
| Shift budget from non-brand to brand search | | | | | | |
| Build community flywheel | | | | | | |
| Ungate all gated content | | | | | | |
| Implement speed-to-lead process | | | | | | |
| Feed offline conversions to ad platforms | | | | | | |
| Cut off-ICP audiences from targeting | | | | | | |

**Prioritization Rules:**
- Start with the highest-scoring initiative
- Never run more than 3 CAC optimization experiments simultaneously
- Each experiment gets a 90-day window and a clear success metric
- If an initiative doesn't show measurable CAC improvement in 90 days, kill it or iterate
- Quick wins (score >50, effort score >4) should be shipped within 2 weeks

**Output:** `cac-reduction-roadmap.md` — Prioritized 90-day plan with owners, metrics, and decision checkpoints.

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Blended CAC | Declining QoQ or stable while scaling | Overall acquisition efficiency |
| CAC by top 3 channels | Each <50% of LTV | Channel-level sustainability |
| LTV:CAC ratio (blended) | >3:1 | Unit economics viability |
| CAC payback period | <18 months (ideal <12) | Cash flow and runway impact |
| Organic as % of pipeline | Growing toward 40-60% | Reducing dependency on paid |
| Conversion rate (visitor → lead → customer) | Improving QoQ | CRO leverage on CAC |
| Sales cycle length | Declining or stable | Hidden CAC multiplier |
| Marginal CAC trend | Stable or declining | Scaling readiness |
| % of customers from Tier 1 ICP | >60% | Targeting quality drives LTV:CAC |
| Zero-cost channel contribution | Growing toward 30%+ of pipeline | Flywheel health |

---

## Anti-Patterns (What NOT to Do)

- **Don't optimize blended CAC without looking at channel-level data.** Blended CAC hides a Tier A channel subsidizing three Tier D channels. Always decompose to channel level.
- **Don't cut spend without understanding attribution.** The channel you cut may be an assist channel. Check multi-touch attribution before killing anything.
- **Don't chase CAC reduction by lowering quality.** Cheaper leads that don't close or churn fast increase *effective* CAC. Always measure CAC alongside LTV and retention.
- **Don't scale a channel before marginal CAC analysis.** Average CAC of $1,000 is meaningless if the next 10 customers cost $3,000 each.
- **Don't ignore fully-loaded CAC.** Marketing spend is only part of the cost. Include SDR time, tooling, content production, and agency fees.
- **Don't let "brand awareness" justify unmeasurable spend.** Brand matters enormously, but measure it through branded search volume, direct traffic, and mention growth — not vibes.
- **Don't optimize in a vacuum.** CAC optimization without [ICP Definition](./02-icp-definition.md) precision is just making waste cheaper. Tighten targeting first, then optimize spend.
- **Don't keep a channel alive because "we've always done it."** Sunk cost is not a strategy. Evaluate every channel on forward-looking efficiency, not historical momentum.
- **Don't treat CAC optimization as a one-time project.** Channels degrade over time (paid costs rise, organic algorithms change). This is a continuous discipline.

---

## Integration Points

```
CAC Optimizer outputs → consumed by:

┌───────────────────────────────┐
│ CAC Audit & Channel Scores    │──→ Marketing Metrics (15) — CAC benchmarks + reporting
│                               │──→ Marketing Ops (16) — attribution setup + data pipeline
│                               │──→ GTM Strategy (05) — channel mix decisions
├───────────────────────────────┤
│ CAC Reduction Playbooks       │──→ Content Engine (08) — content ROI optimization
│                               │──→ GEO Optimizer (09) — organic as CAC reduction lever
│                               │──→ Sales Enablement (10) — cycle reduction tactics
│                               │──→ Pipeline Accelerator (13) — conversion optimization
├───────────────────────────────┤
│ Paid Media Optimization       │──→ Marketing Metrics (15) — ROAS tracking
│                               │──→ Marketing Ops (16) — ad platform automation
├───────────────────────────────┤
│ Unit Economics Model          │──→ Marketing Metrics (15) — LTV:CAC tracking
│                               │──→ NRR Engine (14) — expansion revenue impact on LTV
│                               │──→ GTM Strategy (05) — scaling decisions
├───────────────────────────────┤
│ Zero-Cost Flywheel Blueprint  │──→ Brand Strategy (06) — brand-led demand
│                               │──→ Content Engine (08) — organic content strategy
│                               │──→ GEO Optimizer (09) — AI citation strategy
└───────────────────────────────┘

CAC Optimizer consumes from:

┌───────────────────────────────┐
│ ICP Definition (02)           │──→ Segment-level LTV:CAC, targeting precision
│ Competitive Intel (03)        │──→ Competitive channel benchmarks, share of voice
│ Positioning & Messaging (04)  │──→ Ad copy, landing page messaging, conversion
│ GTM Strategy (05)             │──→ Channel mix baseline, go-to-market motions
│ Content Engine (08)           │──→ Content attribution, organic pipeline data
│ GEO Optimizer (09)            │──→ AI visibility data, organic acquisition metrics
│ Sales Enablement (10)         │──→ Sales cycle data, conversion rates, win rates
└───────────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Full CAC audit (all channels) | Quarterly | Or after >15% budget change |
| Channel efficiency scoring | Quarterly | After CAC audit |
| Unit economics model update | Monthly | New revenue/churn data available |
| Paid media optimization review | Bi-weekly | Campaign performance data |
| CAC reduction roadmap review | Monthly | After each 30-day sprint |
| "Kill or keep" channel decision | Quarterly | After 90-day test windows close |
| Marginal CAC analysis | Monthly | Before any scaling decision |
| Zero-cost flywheel progress | Monthly | Content + community metrics available |
| Competitive CAC benchmarking | Every 6 months | Or after competitor raises / GTM shift |
| Full unit economics recalculation | Quarterly | After pricing, churn, or expansion rate changes |
