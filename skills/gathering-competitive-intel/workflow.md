# Competitive Intelligence

> **Layer 1 — Strategic Core** | Skill 03 of 16
> **Dependencies:** [Customer Research](./01-customer-research.md), [ICP Definition](./02-icp-definition.md)
> **Feeds into:** [Positioning & Messaging](./04-positioning-messaging.md), [GTM Strategy](./05-gtm-strategy.md), [Sales Enablement](./10-sales-enablement.md), [Content Engine](./08-content-engine.md), [GEO Optimizer](./09-geo-optimizer.md), [CAC Optimizer](./12-cac-optimizer.md)
> **Parallel with:** [Positioning & Messaging](./04-positioning-messaging.md)

---

## Purpose

At $1M-5M ARR, you're in competitive knife fights daily. Buyers are comparing you to 3-5 alternatives in every deal. Competitive intelligence isn't a quarterly report — it's an always-on system that feeds real-time insight into sales enablement, positioning, content, and GTM decisions. This skill builds that system.

---

## Business Context ($1M-5M ARR)

- You face 2 types of competition: direct competitors (same category) and indirect competitors (different approach, same job-to-be-done)
- At this stage, you likely compete against 1-2 funded players + "do nothing" / spreadsheets / manual process
- Your competitive advantage is often speed, focus, or depth in a niche — NOT feature breadth
- Sales reps encounter competitive objections in 60%+ of deals but often lack current intel
- Competitors at this stage change fast — pricing, features, positioning shift quarterly
- AI enables always-on monitoring that used to require a dedicated analyst

---

## Workflow

### Phase 1: Competitive Landscape Mapping (Day 1-2)

**Objective:** Identify every competitor your ICP encounters.

**Data Sources:**
| Source | What It Reveals |
|--------|----------------|
| Customer Research interviews (Skill 01) | Who customers actually compared you to |
| Lost deal analysis (CRM) | Who you lose to and why |
| G2/Capterra/TrustRadius | Category alternatives, comparison searches |
| Search results (Google + AI) | Who ranks for your key queries |
| Reddit/community discussions | What alternatives people recommend |
| Crunchbase/funding news | Who's getting funded in your space |
| Job postings of competitors | What they're building (hiring signals) |

**AI Workflow:**
1. Aggregate all competitive mentions from Customer Research
2. Cross-reference with review sites, search results, and community mentions
3. Categorize competitors:

```
Competitive Landscape Map:

DIRECT COMPETITORS (same category, same buyer)
├── Competitor A — [positioning, funding, est. ARR, key differentiator]
├── Competitor B — [same]
└── Competitor C — [same]

INDIRECT COMPETITORS (different approach, same JTBD)
├── Alternative approach 1 (e.g., spreadsheets, manual process)
├── Alternative approach 2 (e.g., adjacent tool with overlapping feature)
└── Alternative approach 3 (e.g., in-house build)

EMERGING THREATS (not competing today, could tomorrow)
├── Adjacent product expanding into your space
├── AI-native startup attacking the problem differently
└── Platform play that could commoditize your feature
```

4. For each direct competitor, create initial profile

**Output:** `competitive-landscape-map.md` — Complete map with categorization and initial profiles.

### Phase 2: Deep Competitor Profiles (Day 3-5)

**Objective:** Build comprehensive profiles for top 3-5 direct competitors.

**Competitor Profile Template:**

```
# [Competitor Name] Profile

## Company Overview
- Founded: [year]
- Funding: [total raised, last round, investors]
- Estimated ARR: [range]
- Team size: [headcount, key hires]
- Growth trajectory: [accelerating/stable/declining]

## Product
- Core functionality: [what it does]
- Key differentiators: [what they claim is unique]
- Weaknesses: [from reviews, customer feedback, testing]
- Recent releases: [last 6 months of product changes]
- Pricing: [model, tiers, entry point, enterprise]
- Integrations: [key tech stack connections]
- Free trial/PLG motion: [how buyers can evaluate]

## Positioning & Messaging
- Tagline: [exact words]
- Primary value proposition: [what they lead with]
- Target audience: [who they say they're for]
- Key messaging themes: [3-5 recurring messages]
- Brand voice/tone: [professional, casual, technical, etc.]
- Positioning category: [how they define the category]

## GTM Strategy
- Primary acquisition channels: [where they invest]
- Content strategy: [blog themes, frequency, quality]
- SEO/GEO presence: [what queries they own]
- Paid media: [ad platforms, messaging, spend signals]
- Sales motion: [PLG, sales-led, hybrid]
- Community/social: [where they're active]

## Customers
- Notable logos: [named customers]
- Target segment overlap with us: [high/medium/low]
- Case studies/proof points: [what outcomes they claim]
- Review site ratings: [G2, Capterra scores + common themes]
- Customer complaints: [from reviews, community]

## Win/Loss Against Us
- We win when: [patterns from our CRM data]
- We lose when: [patterns from our CRM data]
- Common objections buyers raise about them: [from our customers]
- Common objections buyers raise about us vs them: [from lost deals]
```

**Data Collection Methods:**
1. **Website analysis** — AI crawls and extracts positioning, pricing, features
2. **Review site mining** — AI extracts sentiment, strengths, weaknesses from G2/Capterra reviews
3. **Content audit** — What topics they publish on, at what frequency, quality level
4. **Social listening** — What they post, what engagement they get, how they respond
5. **Product evaluation** — Sign up for free trials, document UX, features, onboarding
6. **CRM win/loss data** — Your own historical data on competitive outcomes
7. **Customer interviews** — From Customer Research, competitive mentions

### Phase 3: Battlecard Creation (Day 6-7)

**Objective:** Turn intelligence into sales-ready assets.

**Battlecard Structure (per competitor):**

```
# Battlecard: [Your Product] vs [Competitor]

## Quick Summary (30-second version)
[One paragraph: who they are, how we differ, when we win]

## When We Win
- [Scenario 1 + why]
- [Scenario 2 + why]
- [Scenario 3 + why]

## When We Lose (Be Honest)
- [Scenario 1 + what to do about it]
- [Scenario 2 + what to do about it]

## Key Differentiators
| Capability | Us | Them | Why It Matters |
|-----------|-----|------|----------------|
| [Feature/approach 1] | [our approach] | [their approach] | [impact on buyer] |
| [Feature/approach 2] | ... | ... | ... |

## Objection Handling
| Objection | Response | Proof Point |
|-----------|----------|-------------|
| "They're cheaper" | [response] | [case study, data] |
| "They have [feature] you don't" | [response] | [alternative approach] |
| "They're a bigger company" | [response] | [agility, focus advantage] |

## Landmines to Set
Questions to ask the prospect that expose competitor weaknesses:
- "[Question that highlights their known weakness]"
- "[Question that highlights our unique strength]"

## Trap Plays to Avoid
Questions the competitor will try to use against us:
- "[Their landmine question]" → How to respond: [response]

## Proof Points
- [Customer quote about why they chose us over them]
- [Metric showing our advantage]
- [Third-party validation]

## Pricing Comparison
[Side-by-side pricing at relevant deal sizes for our ICP]

## Last Updated: [date]
## Confidence Level: [high/medium/low — based on data recency]
```

**Output:** One battlecard per top competitor, formatted for immediate sales use.

### Phase 4: Always-On Monitoring System (Week 2)

**Objective:** Build a continuous intelligence system that keeps everything current.

**Monitoring Framework:**

| Signal | Source | Frequency | Alert Trigger |
|--------|--------|-----------|---------------|
| Pricing changes | Competitor websites | Weekly | Any change |
| New features | Product changelogs, Twitter | Weekly | Major release |
| Positioning shifts | Website copy, ads | Monthly | Messaging change |
| Funding/M&A | Crunchbase, news | Real-time | Any event |
| Key hires | LinkedIn | Monthly | Senior GTM/Product hires |
| Content strategy | Blog, social | Weekly | New themes |
| Review site changes | G2, Capterra | Monthly | Rating shift >0.3 |
| Customer wins/losses | CRM, LinkedIn | Ongoing | Pattern shift |
| AI search presence | AI platforms | Monthly | Citation share change |

**AI-Powered Monitoring Workflow:**
1. Set up automated monitoring for each signal source
2. AI processes changes and categorizes by impact:
   - **Red Alert:** Pricing change, major feature launch, funding event → immediate battlecard update
   - **Yellow:** New content themes, positioning tweak, minor feature → weekly digest
   - **Green:** Routine updates → monthly rollup
3. Auto-generate change summaries
4. Flag items that require battlecard or positioning updates
5. Distribute via weekly competitive digest to sales and marketing

**Output:** `competitive-monitoring-system.md` — Sources, triggers, workflows, distribution.

### Phase 5: Competitive Content Strategy (Week 2-3)

**Objective:** Create comparison and alternative content that captures competitive search intent.

**Content Types:**
1. **Comparison pages:** "[Your product] vs [Competitor]" — for each top competitor
2. **Alternative pages:** "Best [Competitor] alternatives" — target their brand traffic
3. **Category pages:** "Best [category] software for [ICP use case]"
4. **Migration guides:** "Switching from [Competitor] to [Your product]"
5. **Feature comparisons:** Deep-dive comparison on specific capabilities

**These feed directly into:**
- [Content Engine](./08-content-engine.md) — production pipeline
- [GEO Optimizer](./09-geo-optimizer.md) — structured for AI citation
- [Sales Enablement](./10-sales-enablement.md) — shareable with prospects

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Competitive win rate | Track per competitor, improve 5%/quarter | Direct revenue impact |
| Battlecard usage rate | >70% of competitive deals | Intel is useless if unused |
| Competitive content traffic | Growing month-over-month | Captures comparison shoppers |
| Time from competitor change to battlecard update | <48 hours | Freshness = effectiveness |
| Lost deals citing "competitor chosen" | Declining % | Overall competitive position |
| AI citation share vs competitors | Track quarterly | New visibility metric |

---

## Anti-Patterns (What NOT to Do)

- **Don't build static quarterly reports.** By the time they're distributed, they're stale. Always-on > periodic.
- **Don't trash-talk competitors.** Buyers see through it. Acknowledge strengths, position on your genuine advantages.
- **Don't obsess over feature parity.** You'll never match a larger competitor feature-for-feature. Compete on outcomes, speed, and focus.
- **Don't ignore "do nothing" as a competitor.** At $1M-5M ARR, your biggest competitor is often inertia — the spreadsheet, the manual process, the status quo.
- **Don't keep intel siloed in marketing.** If sales doesn't have it in their workflow, it doesn't exist.
- **Don't fake confidence.** If you don't know something, say "low confidence" and go find out. Bad intel is worse than no intel.

---

## Integration Points

```
Competitive Intel outputs → consumed by:

┌───────────────────────────┐
│ Competitor Profiles        │──→ Positioning & Messaging (04) — differentiation
│                           │──→ GTM Strategy (05) — whitespace identification
│                           │──→ Brand Strategy (06) — competitive narrative
├───────────────────────────┤
│ Battlecards               │──→ Sales Enablement (10) — rep-ready intel
│                           │──→ Pipeline Accelerator (13) — deal-level tactics
├───────────────────────────┤
│ Competitive Content Plan  │──→ Content Engine (08) — comparison/alternative pages
│                           │──→ GEO Optimizer (09) — competitive query strategy
│                           │──→ CAC Optimizer (12) — competitive paid strategy
├───────────────────────────┤
│ Monitoring System         │──→ Launch Playbook (11) — competitive response
│                           │──→ Marketing Ops (16) — alerting infrastructure
└───────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Competitor profiles | Full refresh every 6 months | Or after major competitive event |
| Battlecards | Continuous updates, full review quarterly | Any red alert trigger |
| Monitoring system | Always-on, reviewed weekly | Automated |
| Competitive content | New pages quarterly, existing updated monthly | SEO/GEO performance data |
| Win/loss competitive analysis | Monthly | New CRM data |
| Landscape map | Annually | Or when new entrant appears |
