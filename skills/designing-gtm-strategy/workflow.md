# GTM Strategy & Growth Architecture

> **Layer 2 — Strategic Planning** | Skill 05 of 16
> **Dependencies:** [Customer Research](./01-customer-research.md), [ICP Definition](./02-icp-definition.md), [Competitive Intel](./03-competitive-intel.md), [Positioning & Messaging](./04-positioning-messaging.md)
> **Feeds into:** [Brand Strategy](./06-brand-strategy.md), [Marketing Budget](./07-marketing-budget.md), [Content Engine](./08-content-engine.md), [GEO Optimizer](./09-geo-optimizer.md), [Sales Enablement](./10-sales-enablement.md), [Launch Playbook](./11-launch-playbook.md), [CAC Optimizer](./12-cac-optimizer.md), [Pipeline Accelerator](./13-pipeline-accelerator.md)
> **Parallel with:** [Brand Strategy](./06-brand-strategy.md), [Marketing Budget](./07-marketing-budget.md)

---

## Purpose

GTM strategy is the orchestration layer. Every foundation skill produces insight — customer research reveals who you serve, ICP sharpens who to target, competitive intel maps the battlefield, positioning defines how to show up. GTM strategy takes all of it and answers the operational question: *what do we actually do, in what order, through which channels, with what resources, to hit revenue targets?* At $1M-5M ARR, this is the difference between a coherent growth engine and a collection of disconnected tactics that burn cash.

---

## Business Context ($1M-5M ARR)

- You have 1-3 people doing marketing (often the founder + 1 generalist + maybe an agency or contractor)
- You cannot execute more than 2-3 channels well simultaneously — channel selection is a survival decision
- The wrong GTM motion (e.g., building a PLG engine when your buyer requires hand-holding) wastes 6-12 months
- MQL-based funnels are dying — buyers self-educate, committees decide, and traditional lead scoring misses real buying intent
- New leverage points are emerging: GEO (generative engine optimization), founder-led content, signal-based outbound, AI-assisted content engines, community-led growth
- Revenue contribution math is non-negotiable — every channel must trace to pipeline and revenue, not vanity metrics
- The biggest mistake at this stage is premature scale: spending on channels before you've found what works
- Your GTM plan is a living system, not a slide deck — it changes monthly based on what the data says

---

## Workflow

### Phase 1: GTM Inputs Assembly & Revenue Math (Day 1)

**Objective:** Set revenue targets, calculate marketing's required contribution, and assemble all upstream intelligence.

**Required inputs from upstream skills:**

From [Customer Research](./01-customer-research.md):
- Buying Journey Map (how ICP finds, evaluates, and buys)
- JTBD Map (what drives purchase urgency)
- Customer Voice Library (language for all channels)

From [ICP Definition](./02-icp-definition.md):
- Tier 1/2/3 ICP profiles (who to target, in what priority)
- Buyer personas (who is involved in each deal)
- Negative ICP (who to exclude from all targeting)

From [Competitive Intel](./03-competitive-intel.md):
- Competitor GTM strategies (where they invest, what channels they own)
- Competitive whitespace (gaps you can exploit)
- Win/loss patterns (where you have advantage)

From [Positioning & Messaging](./04-positioning-messaging.md):
- Positioning statement (category and differentiation)
- Messaging architecture (messages per persona, per funnel stage)
- Proof points library (evidence to back claims)

**Revenue Contribution Model:**

```
Step 1: Annual revenue target
  Current ARR: $___
  Target ARR (12 months): $___
  New ARR required: $___

Step 2: Revenue source breakdown
  New business: ___% of new ARR ($___)
  Expansion: ___% of new ARR ($___) → feeds NRR Engine (14)

Step 3: Marketing-sourced pipeline requirement
  Marketing-sourced % of new business: ___% (typical: 40-60% at this stage)
  Marketing-sourced ARR target: $___
  Average deal size (from CRM): $___
  Deals needed: ___
  Average win rate (from CRM): ___%
  Qualified opportunities needed: ___

Step 4: Top-of-funnel math (work backwards)
  Opportunity-to-qualified rate: ___%
  MQLs / hand-raisers needed: ___
  Lead-to-MQL rate: ___%
  Total leads/contacts needed: ___

Step 5: Monthly targets
  Monthly qualified opportunities: ___
  Monthly pipeline generated: $___
  Monthly marketing-sourced revenue: $___
```

**Reality check at this stage:**
- If the math requires more than 3x your current lead volume, you likely need to improve conversion rates first, not scale top-of-funnel
- If your average deal size is <$5K ACV, you probably need a PLG or inbound-heavy motion (sales-led is too expensive)
- If your average deal size is >$25K ACV, you probably need a sales-assisted motion (pure PLG rarely closes complex deals)

**Output:** `gtm-revenue-model.md` — Revenue math, marketing contribution targets, monthly pipeline requirements.

### Phase 2: GTM Motion Selection (Day 2-3)

**Objective:** Choose the primary GTM motion that fits your product, ICP, and resources.

**GTM Motion Decision Framework:**

| Factor | Product-Led Growth (PLG) | Sales-Led | Hybrid (PLG + Sales) |
|--------|--------------------------|-----------|---------------------|
| **Best for ACV** | <$5K/year | >$25K/year | $5K-$50K/year |
| **Best for ICP** | Individual users, small teams | Enterprise, complex orgs | Mid-market, team leads |
| **Buying complexity** | Single decision-maker | 3-7 person buying group | 1-3 decision-makers |
| **Product complexity** | Self-serve, quick time-to-value | Requires config, training, integration | Core is self-serve, advanced needs help |
| **Marketing team needed** | Growth/product marketing + content | Demand gen + sales enablement | Both, sequenced |
| **Typical conversion path** | Free trial/freemium → self-serve upgrade | Content/outbound → demo → proposal → close | Free trial → PQL → sales-assist close |
| **CAC efficiency** | Highest (lower human cost) | Lowest (highest human cost) | Medium |
| **Time to revenue** | Faster for small deals | Slower but larger deals | Medium |
| **Key risk at $1M-5M ARR** | Monetization gap (lots of free, few paid) | CAC too high for deal size | Complexity for small team |

**Decision criteria (score 1-5 for your business):**

```
PLG Readiness Score:
- Product delivers value without human setup:        _/5
- Time to "aha moment" is < 1 day:                   _/5
- Buyer can self-educate on use case:                 _/5
- Viral/network effects exist:                        _/5
- ACV supports self-serve economics:                  _/5
Total PLG Score:                                      _/25

Sales-Led Readiness Score:
- Deal size justifies sales involvement:              _/5
- Buying process involves multiple stakeholders:      _/5
- Product requires configuration or integration:      _/5
- Customer needs white-glove onboarding:              _/5
- Competitive deals require relationship selling:     _/5
Total Sales-Led Score:                                _/25

If PLG > 18 and Sales-Led < 12 → go PLG
If Sales-Led > 18 and PLG < 12 → go Sales-Led
If both 12-18 → Hybrid (PLG acquisition, sales conversion)
```

**Hybrid Model Architecture (most common at $1M-5M ARR):**

```
                    ┌──────────────────────────┐
                    │  AWARENESS & EDUCATION    │
                    │  (content, GEO, social,   │
                    │   community, founder-led)  │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────▼─────────────┐
                    │  SELF-SERVE ENTRY         │
                    │  (free trial, freemium,   │
                    │   sandbox, free tool)      │
                    └────────────┬─────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                   │
    ┌─────────▼────────┐ ┌──────▼───────┐ ┌────────▼────────┐
    │  SELF-SERVE       │ │  PQL SIGNAL   │ │  HIGH-TOUCH     │
    │  CONVERSION       │ │  DETECTED     │ │  REQUEST        │
    │  (small deals,    │ │  (sales-      │ │  (demo request, │
    │   <$5K ACV)       │ │   assist)     │ │   >$15K ACV)    │
    └──────────┬────────┘ └──────┬───────┘ └────────┬────────┘
               │                 │                   │
               │        ┌───────▼────────┐          │
               │        │  SALES ASSIST   │          │
               │        │  (AE engages,   │          │
               │        │   consultative)  │          │
               │        └───────┬────────┘          │
               │                │                    │
               └────────────────┼────────────────────┘
                                │
                    ┌───────────▼───────────┐
                    │  CUSTOMER ONBOARDING   │
                    │  & EXPANSION            │
                    │  → NRR Engine (14)      │
                    └─────────────────────────┘
```

**Output:** `gtm-motion-decision.md` — Selected motion with scoring rationale and architectural diagram.

### Phase 3: Channel Strategy & Prioritization (Day 4-6)

**Objective:** Select and prioritize the 2-3 channels that will drive pipeline, given your motion, ICP, competitive landscape, and resources.

**Channel Prioritization Matrix:**

Score each channel 1-5 across these criteria, then weight by importance:

| Channel | ICP Presence (25%) | Competitive Gap (20%) | Resource Fit (20%) | Time to Impact (15%) | Measurability (10%) | Scalability (10%) | Weighted Score |
|---------|-------------------|----------------------|-------------------|---------------------|--------------------|--------------------|---------------|
| Organic search / SEO | | | | | | | |
| GEO (AI search optimization) | | | | | | | |
| Founder-led content (LinkedIn/X) | | | | | | | |
| Content marketing (blog/resources) | | | | | | | |
| Paid search (Google/Bing) | | | | | | | |
| Paid social (LinkedIn/Meta) | | | | | | | |
| Outbound (email/LinkedIn) | | | | | | | |
| Community building | | | | | | | |
| Partnerships / integrations | | | | | | | |
| Review sites (G2, Capterra) | | | | | | | |
| Events (virtual / in-person) | | | | | | | |
| Referral / word of mouth | | | | | | | |
| PLG / product-led acquisition | | | | | | | |
| Affiliate / influencer | | | | | | | |

**Scoring Guide:**

*ICP Presence (25%):* How actively does your Tier 1 ICP use this channel? (from [ICP Definition](./02-icp-definition.md) — information sources data, and from [Customer Research](./01-customer-research.md) — buying journey map)
- 5 = ICP's primary research/discovery channel
- 3 = ICP uses occasionally
- 1 = ICP rarely present here

*Competitive Gap (20%):* How crowded is this channel with competitors? (from [Competitive Intel](./03-competitive-intel.md) — competitor GTM profiles)
- 5 = Competitors absent or weak here — major whitespace
- 3 = Moderate competition but room to differentiate
- 1 = Competitors dominate this channel

*Resource Fit (20%):* Can your 1-3 person marketing team execute this well?
- 5 = Can execute with current team, minimal budget
- 3 = Requires one contractor/tool addition
- 1 = Requires dedicated hire or major budget

*Time to Impact (15%):* How fast will this channel generate pipeline?
- 5 = Pipeline within 30 days
- 3 = Pipeline within 90 days
- 1 = 6+ months to meaningful pipeline

*Measurability (10%):* Can you attribute pipeline and revenue to this channel?
- 5 = Direct attribution possible
- 3 = Directional attribution with some inference
- 1 = Brand/awareness only, hard to measure

*Scalability (10%):* Can this channel grow with you beyond $5M ARR?
- 5 = Scales linearly or better with investment
- 3 = Scales with diminishing returns
- 1 = Plateaus quickly

**Channel Archetypes for $1M-5M ARR:**

| Archetype | Primary Channels | Best For |
|-----------|-----------------|----------|
| **Founder-Led + Inbound** | Founder content (LinkedIn/X) + SEO/GEO + content marketing | Technical ICP, thought-leadership-sensitive buyers, low budget |
| **Outbound + Content** | Signal-based outbound + case study content + paid search | Mid-market ICP, $15K+ ACV, defined buying triggers |
| **PLG + Community** | Free trial/tool + community + review sites + GEO | Developer/SMB ICP, <$10K ACV, self-serve preference |
| **Paid + Sales** | Paid search/social + demo-driven + sales-assist | Urgent pain, high ACV, established category search volume |

**Output:** `channel-strategy.md` — Ranked channels, top 2-3 selected with rationale, resource allocation per channel.

### Phase 4: Growth Model Architecture (Day 7-8)

**Objective:** Design how all selected channels work together as a system, not isolated tactics.

**Growth Model Template:**

```
# [Company] Growth Model

## Primary Engine (60-70% of resources)
Channel: _______________
Role: Main pipeline driver
Funnel: [awareness tactic] → [capture mechanism] → [nurture/activation] → [conversion event]
Monthly targets: [traffic/impressions] → [leads/signups] → [qualified opps] → [revenue]
Owner: _______________

## Secondary Engine (20-30% of resources)
Channel: _______________
Role: Accelerator / second pipeline source
Funnel: [same structure]
Monthly targets: [same structure]
Owner: _______________

## Foundation Layer (10% of resources — always on)
Activities that support both engines:
- GEO optimization → ensures AI search visibility ([GEO Optimizer](./09-geo-optimizer.md))
- Review site presence → social proof for all funnels
- Customer proof points → feeds every channel ([Positioning & Messaging](./04-positioning-messaging.md))
- Email nurture → catches leads from all sources

## Compounding Loops (how channels reinforce each other)
Loop 1: [e.g., Content → SEO/GEO traffic → signups → customer stories → more content]
Loop 2: [e.g., Founder content → audience → outbound warm-up → sales conversations → case studies → more content]
Loop 3: [e.g., Product usage → community → word of mouth → organic signups → product usage]
```

**Signal-Based Pipeline Architecture (replacement for MQL funnels):**

Traditional MQL-based funnels fail at $1M-5M ARR because:
- Lead scores based on content downloads don't predict buying intent
- Buying groups (not individuals) make decisions — scoring one person misses the picture
- Buyers are 60-80% through their journey before they talk to sales
- AI search and dark social mean most research is invisible to your tracking

**Signal-based approach:**

```
REPLACE THIS:                         WITH THIS:

Lead → MQL → SQL → Opp → Close       Signal Detection → Intent Scoring →
                                      Buying Group Mapping → Engagement → Close

Score individuals on form fills       Score accounts on behavioral signals:
                                      - Multiple people from same company
                                        visiting your site
                                      - Product signups from target accounts
                                      - Engagement with competitive content
                                      - Trigger events (hiring, funding,
                                        tech stack changes)
                                      - Community participation
                                      - AI search queries about your category

Pass "leads" to SDRs to cold-call     Route high-signal accounts to AEs
                                      with context on what they've engaged
                                      with and who's involved
```

**Buying Group Awareness (critical for $15K+ ACV):**

```
For each target account, track:
┌─────────────────────────────────────────┐
│ Account: [Company Name]                  │
│ ICP Tier: [1/2/3]                        │
│ Intent Score: [high/medium/low]          │
│                                          │
│ Known Contacts:                          │
│ ├── [Name] - Champion (engaged: Y)       │
│ ├── [Name] - Economic Buyer (engaged: N) │
│ └── [Name] - Technical Buyer (engaged: N)│
│                                          │
│ Signals Detected:                        │
│ ├── 3 page views on pricing (this week)  │
│ ├── Free trial started (2 days ago)      │
│ ├── Case study downloaded (last week)    │
│ └── Competitor comparison page visited   │
│                                          │
│ Recommended Action: AE outreach to       │
│ Champion with ROI case study             │
└─────────────────────────────────────────┘
```

**Output:** `growth-model.md` — Complete system diagram, channel interactions, signal architecture, funnel design.

### Phase 5: GTM Sequencing & 90-Day Plan (Day 9-10)

**Objective:** Build the phased execution plan that respects resource constraints.

**Sequencing Principles for 1-3 Person Marketing Teams:**
1. **Sequence, don't parallelize.** Launch one channel properly before adding the next.
2. **Start with what compounds.** Content, SEO, and GEO take months to pay off — start early.
3. **Add what converts fast.** Pair slow-build channels with fast-feedback channels (e.g., outbound, paid) to generate pipeline while compounding channels ramp.
4. **Build the foundation before scaling.** Messaging, website conversion, and tracking must work before you pour traffic into the funnel.
5. **Validate before committing.** Run 30-day sprints on new channels. If early signals are bad, pivot fast.

**90-Day GTM Launch Plan:**

```
# Month 1: FOUNDATION (validate and build the base)

Week 1-2: Infrastructure
- [ ] Website messaging updated (from Positioning & Messaging (04))
- [ ] Analytics and attribution set up (UTM, CRM integration)
- [ ] Lead capture and nurture sequences built
- [ ] CRM lead scoring updated with ICP criteria (from ICP Definition (02))
- [ ] Signal detection tools configured

Week 3-4: Primary Channel Launch
- [ ] Primary channel activated (top-ranked from Channel Prioritization)
- [ ] Initial content/campaigns live
- [ ] Baseline metrics established
- [ ] First feedback loop: what's working, what's not?

Monthly checkpoint: Are we generating any qualified signals from primary channel?

# Month 2: OPTIMIZE + ADD (refine primary, launch secondary)

Week 5-6: Primary Channel Optimization
- [ ] Analyze Month 1 data for primary channel
- [ ] Double down on what's converting
- [ ] Kill what isn't working (be ruthless)
- [ ] Begin secondary channel preparation

Week 7-8: Secondary Channel Launch
- [ ] Secondary channel activated
- [ ] Cross-channel reinforcement established (how channels feed each other)
- [ ] Sales enablement materials deployed (from Sales Enablement (10))

Monthly checkpoint: Is pipeline building? Are conversion rates improving?

# Month 3: SCALE + COMPOUND (scale what works, activate loops)

Week 9-10: Scale Primary + Secondary
- [ ] Increase investment in highest-performing channel
- [ ] Activate compounding loops between channels
- [ ] Launch foundation layer activities (GEO, review sites)

Week 11-12: Review + Plan Next Quarter
- [ ] Full GTM performance review
- [ ] Channel-level ROI analysis
- [ ] Decide: scale existing channels or test new one in Q2?
- [ ] Update growth model with actual data
- [ ] Set Q2 targets based on Q1 learnings

Monthly checkpoint: Is marketing-sourced pipeline on track for annual target?
```

**Resource Allocation Model for 1-3 Person Marketing Teams:**

| Team Size | Recommended Focus | What to Outsource | What to Skip (For Now) |
|-----------|------------------|-------------------|----------------------|
| **1 person (founder or first marketer)** | Founder-led content + one inbound channel (SEO or community) | Design, technical SEO, paid media management | Multi-channel paid, events, ABM, elaborate automation |
| **2 people (marketer + founder support)** | Content engine + one acquisition channel + sales enablement basics | Design, paid media, technical setup | Enterprise ABM, multi-touch attribution, elaborate martech |
| **3 people (small team)** | Content + demand gen + one experimental channel | Specialized design, advanced analytics | Large-scale ABM, field marketing, brand advertising |

**Time Allocation (per person per week):**

| Activity Category | % of Time | What This Includes |
|-------------------|-----------|-------------------|
| Primary channel execution | 40% | Content creation, campaign management, outbound |
| Analysis & optimization | 15% | Reviewing data, adjusting targeting, A/B testing |
| Sales alignment | 15% | Enablement content, pipeline reviews, feedback loops |
| Secondary channel / experimentation | 15% | Testing new channels, running experiments |
| Infrastructure & operations | 10% | CRM, automation, reporting, tool management |
| Strategy & planning | 5% | GTM review, quarterly planning |

**Output:** `gtm-90-day-plan.md` — Phased execution plan, resource allocation, weekly milestones.

### Phase 6: Market Entry & Expansion Strategy (Day 11-12)

**Objective:** Decide when and how to go deeper in current segments versus wider into new ones.

**Depth vs. Width Decision Framework:**

| Signal | Go Deeper (current segment) | Go Wider (new segment) |
|--------|---------------------------|----------------------|
| Tier 1 TAM coverage | <15% penetrated | >30% penetrated |
| Win rate in current segment | Still improving | Plateauing |
| Competitive dynamics | Room to dominate | Getting crowded |
| Product-market fit | Strong in current segment | Validated interest from adjacent segment |
| Pipeline velocity | Still accelerating | Decelerating despite increased spend |
| CAC trend | Stable or declining | Rising |

**Go Deeper playbook:**
1. Increase share of voice in current ICP segment
2. Build more proof points and case studies within the segment
3. Create segment-specific content (industry reports, benchmarks)
4. Develop partnership channels within the ecosystem
5. Pursue competitive displacement deals
6. Build community/network effects within the segment

**Go Wider playbook (only when deeper criteria are met):**
1. Validate new segment demand with lightweight tests (landing page, targeted ads, founder outreach)
2. Run 5-10 customer interviews in the new segment (circle back to [Customer Research](./01-customer-research.md))
3. Assess product fit gap — can you serve them without major product changes?
4. If validated: create segment-specific ICP tier, messaging variant, and channel plan
5. Treat it as a new GTM micro-motion — sequence it like Phase 5 but smaller scope
6. Do NOT divert more than 20% of marketing resources to new segment until it's validated

**Emerging Channel Leverage Points (2025-2026):**

| Lever | What It Is | Relevance at $1M-5M ARR |
|-------|-----------|-------------------------|
| **GEO (Generative Engine Optimization)** | Optimizing for AI search engines (ChatGPT, Perplexity, Gemini) | High — AI is the new front door for B2B research. See [GEO Optimizer](./09-geo-optimizer.md) |
| **Founder-led content** | Founder's personal brand as a distribution channel | Very high — cheapest, highest-trust channel at this stage |
| **Signal-based outbound** | Using intent/behavioral signals to trigger targeted outreach | High for $15K+ ACV — replaces spray-and-pray cold outbound |
| **AI content engines** | Using AI to scale content production while maintaining quality | High — lets 1-person teams produce 5-person output. See [Content Engine](./08-content-engine.md) |
| **Community-led growth** | Building or embedding in communities your ICP trusts | Medium-high — compounds but slow to build; accelerates word of mouth |
| **Dark social attribution** | Tracking influence from untrackable channels (Slack, DMs, pods) | Medium — important for understanding real channel impact, even if imperfect |

**Output:** `market-expansion-strategy.md` — Depth vs. width decision, expansion criteria, emerging channel plan.

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Marketing-sourced pipeline ($) | 40-60% of total pipeline | Marketing's contribution to revenue |
| Pipeline velocity ($ per month) | Growing month-over-month | System is accelerating, not stalling |
| CAC by channel | Declining or stable per channel | Channels are getting more efficient (see [CAC Optimizer](./12-cac-optimizer.md)) |
| CAC payback period | <12 months | Unit economics are sustainable |
| Channel efficiency ratio (pipeline generated / $ spent) | >5x for early channels | Channel ROI before scaling |
| Win rate for marketing-sourced opps | >25% (higher for Tier 1 ICP) | Quality of pipeline, not just quantity |
| Time-to-pipeline for new channel | <90 days to first qualified opp | Channel viability signal |
| Marketing-influenced revenue (%) | >70% of all closed-won | Marketing is supporting the full journey |
| Signal-to-opportunity conversion rate | Improving quarterly | Signal-based architecture is working |
| ICP Tier 1 % of pipeline | >60% | Targeting precision (from [ICP Definition](./02-icp-definition.md)) |

---

## Anti-Patterns (What NOT to Do)

- **Don't spread across too many channels.** At 1-3 people, you can do 2-3 channels well. Doing 6 channels poorly produces zero pipeline. Pick, commit, validate, then expand.
- **Don't skip the revenue math.** "Let's try some content marketing" without connecting it to pipeline and revenue targets is hobby marketing, not growth marketing. Start with Phase 1 every time.
- **Don't copy a competitor's GTM motion.** Their motion fits their product, ACV, ICP, and resources — not yours. Use [Competitive Intel](./03-competitive-intel.md) to find whitespace, not templates.
- **Don't build MQL funnels.** Scoring individuals on content downloads doesn't predict buying intent. Score accounts on behavioral signals and buying group engagement.
- **Don't optimize for lead volume.** 100 Tier 1 ICP qualified opportunities beats 10,000 "leads" that don't close. Quality of pipeline is the only metric that matters.
- **Don't scale before you've validated.** A channel needs 60-90 days of data showing positive ROI before you increase spend. Premature scaling is the most common cash-burning mistake at this stage.
- **Don't ignore founder-led distribution.** At $1M-5M ARR, the founder is the highest-trust, lowest-cost marketing channel. Not using it is leaving pipeline on the table.
- **Don't plan 12 months in detail.** Plan 90 days in detail, 6 months directionally, 12 months as a hypothesis. The market changes too fast for rigid annual plans.
- **Don't separate GTM planning from sales.** Marketing and sales must share pipeline targets, signal definitions, and feedback loops. If sales says "these leads are garbage," the GTM plan is broken — fix it together.
- **Don't treat this as a one-time plan.** GTM strategy is a monthly operating rhythm, not a quarterly planning exercise.

---

## Integration Points

```
GTM Strategy outputs → consumed by:

┌───────────────────────────────┐
│ GTM Motion Selection          │──→ Brand Strategy (06) — tone and channel presence
│                               │──→ Marketing Budget (07) — spend allocation model
│                               │──→ Sales Enablement (10) — sales process design
│                               │──→ CAC Optimizer (12) — channel cost targets
├───────────────────────────────┤
│ Channel Strategy &            │──→ Content Engine (08) — content priorities per channel
│ Prioritization                │──→ GEO Optimizer (09) — AI search channel strategy
│                               │──→ Marketing Budget (07) — budget per channel
│                               │──→ CAC Optimizer (12) — channel-level efficiency
├───────────────────────────────┤
│ Growth Model &                │──→ Pipeline Accelerator (13) — funnel optimization
│ Funnel Architecture           │──→ Sales Enablement (10) — handoff points and signals
│                               │──→ Marketing Ops (16) — tracking and attribution
│                               │──→ Marketing Metrics (15) — reporting framework
├───────────────────────────────┤
│ 90-Day Execution Plan         │──→ Content Engine (08) — content calendar alignment
│                               │──→ Launch Playbook (11) — campaign sequencing
│                               │──→ Marketing Budget (07) — spend phasing
├───────────────────────────────┤
│ Market Expansion Strategy     │──→ ICP Definition (02) — new segment validation
│                               │──→ Customer Research (01) — new segment research
│                               │──→ Brand Strategy (06) — multi-segment brand arc
├───────────────────────────────┤
│ Revenue Contribution Model    │──→ Marketing Metrics (15) — target benchmarks
│                               │──→ Marketing Budget (07) — investment justification
│                               │──→ NRR Engine (14) — expansion revenue targets
└───────────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Revenue model recalculation | Quarterly | New bookings data, target changes |
| GTM motion review | Annually | Or after major ACV shift, new market entry |
| Channel prioritization review | Quarterly | Performance data, competitive shifts |
| Growth model update | Monthly | Actual performance vs. model |
| 90-day plan refresh | Every 90 days | End of current plan cycle |
| Channel ROI analysis | Monthly | Part of marketing operating review |
| Market expansion assessment | Quarterly | TAM penetration, pipeline velocity data |
| Signal architecture tuning | Monthly | Conversion data, sales feedback |
| Emerging channel evaluation | Quarterly | Market landscape scan, new platform adoption data |
| Full GTM strategy overhaul | Annually | Or after major pivot, fundraise, competitive disruption |
