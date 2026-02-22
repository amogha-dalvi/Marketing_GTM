# Launch Playbook

> **Layer 3 — Execution Systems** | Skill 11 of 16
> **Dependencies:** [Customer Research](./01-customer-research.md), [ICP Definition](./02-icp-definition.md), [Competitive Intel](./03-competitive-intel.md), [Positioning & Messaging](./04-positioning-messaging.md), [GTM Strategy](./05-gtm-strategy.md), [Brand Strategy](./06-brand-strategy.md), [Content Engine](./08-content-engine.md)
> **Feeds into:** [CAC Optimizer](./12-cac-optimizer.md), [Pipeline Accelerator](./13-pipeline-accelerator.md), [Marketing Metrics](./15-marketing-metrics.md)
> **Parallel with:** [Content Engine](./08-content-engine.md), [GEO Optimizer](./09-geo-optimizer.md), [Sales Enablement](./10-sales-enablement.md)

---

## Purpose

A launch is the moment your positioning meets the market. It is the highest-leverage marketing event because attention is time-bounded — you either capture it or you don't. At $1M-5M ARR, the ability to ship launches fast and repeatedly is existential. While you spend three months planning, three competitors ship. This skill gives you a repeatable system to compress launch cycles from months to days using AI, without sacrificing quality or cross-functional alignment.

---

## Business Context ($1M-5M ARR)

- Building is commoditizing — the bottleneck has shifted to launching, positioning, and GTM execution
- Months-long launch cycles are a death sentence — competitors ship in weeks
- You likely don't have a dedicated launch team — the same 1-3 marketers do everything
- Agency-dependent creative with 6-week cycles is dying — a single PMM with AI drafts in hours
- Not every launch deserves the same investment — you need a tier system to allocate effort correctly
- Internal enablement is the most commonly skipped step and the most expensive to skip
- Your first 48 hours of launch determine 80% of the outcome — there are no do-overs
- Manual competitive research updated quarterly cannot keep up — always-on monitoring replaces it

---

## Workflow

### Phase 1: Launch Tier Classification (Day 0)

**Objective:** Determine the right level of investment for this launch. The single biggest launch mistake is over-investing in minor launches and under-investing in major ones.

**Launch Tier Decision Framework:**

| | Tier 1 — Major | Tier 2 — Medium | Tier 3 — Minor |
|---|---|---|---|
| **What triggers it** | New product, new market entry, major repositioning, new pricing model | Major feature, new integration, new use case, major partnership | Feature update, improvement, performance fix, UI change |
| **Business impact** | Changes the company narrative or addressable market | Expands value prop for existing or adjacent segments | Improves existing product experience |
| **Revenue expectation** | Directly opens new revenue stream or pipeline | Accelerates existing pipeline or reduces churn | Indirect — improves satisfaction, reduces support load |
| **Timeline** | 3-4 weeks (compressed from 8-12 with AI) | 1-2 weeks (compressed from 4-6 with AI) | 1-3 days (compressed from 1-2 weeks with AI) |
| **Who's involved** | Marketing, Sales, CS, Product, Exec team | Marketing, Sales, Product | Marketing, Product |
| **Positioning work needed** | Full positioning exercise (invoke [Positioning & Messaging](./04-positioning-messaging.md)) | Messaging variant from existing positioning | Copy update only — no new positioning |
| **Asset volume** | 15-25 assets | 8-12 assets | 3-5 assets |

**Decision Flowchart:**

```
Does this launch change who we sell to or how we're perceived?
├── YES → Tier 1
└── NO → Does it meaningfully expand what our product does for existing ICP?
    ├── YES → Tier 2
    └── NO → Tier 3
```

**Output:** `launch-brief.md` — Tier classification, business case, target audience, success metrics, timeline, and owner assignments.

### Phase 2: Launch Positioning & Messaging (Tier 1: Day 1-5 | Tier 2: Day 1-3 | Tier 3: Day 1)

**Objective:** Develop the messaging foundation that every launch asset will be built from.

**Required inputs from upstream skills:**

From [Customer Research](./01-customer-research.md):
- Customer Voice Library (exact language for the problem this launch solves)
- JTBD Map (which jobs this launch addresses)

From [ICP Definition](./02-icp-definition.md):
- Target personas for this launch (may be a subset of full ICP)
- Buyer context and pain points relevant to this launch

From [Competitive Intel](./03-competitive-intel.md):
- Competitor positioning for similar capabilities
- Whitespace this launch can own

From [Positioning & Messaging](./04-positioning-messaging.md):
- Master messaging architecture (launch messaging must nest within it)
- Persona-specific messaging variants

**AI-Assisted Positioning Workflow (compresses weeks to hours):**

1. Feed AI the following inputs as a single context package:
   - 10-15 relevant customer interview excerpts from the Voice Library
   - 3-5 competitor positioning statements for similar capabilities
   - 20-30 review site mentions (G2, Capterra) related to this problem area
   - Current product positioning statement
   - Product brief from the engineering/product team

2. AI generates draft positioning and messaging:
   - Launch positioning statement (internal-facing)
   - One-line description (what a journalist would write)
   - Headline variants (5-10 options)
   - Pain-agitate-solve narrative
   - Feature-to-benefit translations
   - Persona-specific angles

3. Human reviews, selects, and refines — AI proposes, humans decide

**Messaging Matrix (per launch):**

| Element | Persona 1: [Champion] | Persona 2: [Economic Buyer] | Persona 3: [Technical Buyer] |
|---------|----------------------|----------------------------|------------------------------|
| Pain point | [specific pain] | [specific pain] | [specific pain] |
| Promise | [what changes] | [what changes] | [what changes] |
| Proof | [evidence] | [evidence] | [evidence] |
| Headline | [angle] | [angle] | [angle] |
| CTA | [next step] | [next step] | [next step] |

**Output:** `launch-messaging.md` — Launch positioning, messaging matrix, headline variants, proof points.

### Phase 3: Asset Creation (Tier 1: Day 4-12 | Tier 2: Day 3-7 | Tier 3: Day 1-2)

**Objective:** Produce every launch asset from the messaging foundation. This is where AI creates the most leverage — a single PMM with AI can produce what used to require a team of 5.

**Launch Asset Checklist (per tier):**

| Asset | Tier 1 | Tier 2 | Tier 3 | Owner |
|-------|--------|--------|--------|-------|
| **Web** | | | | |
| Dedicated landing page | Required | Required | - | Marketing |
| Homepage update | Required | Optional | - | Marketing |
| Feature/product page | Required | Required | Optional | Marketing |
| Comparison page update | Required | Optional | - | Marketing |
| Pricing page update | If applicable | If applicable | - | Marketing |
| **Email** | | | | |
| Customer announcement email | Required | Required | Required | Marketing |
| Prospect nurture email | Required | Required | - | Marketing |
| Email sequence (3-5 emails) | Required | Optional | - | Marketing |
| Partner notification email | Required | Optional | - | Partnerships |
| **Content** | | | | |
| Blog post (long-form) | Required | Required | Required | Marketing |
| Blog post (technical) | Required | Optional | - | Product/Eng |
| Case study or early access story | Required | - | - | Marketing |
| Webinar or live demo | Required | Optional | - | Marketing |
| Video (product demo) | Required | Optional | - | Marketing |
| Video (social cut, 30-60s) | Required | Required | - | Marketing |
| **Sales** | | | | |
| Sales one-pager | Required | Required | - | Marketing |
| Updated sales deck (2-5 slides) | Required | Required | - | Marketing |
| Battlecard update | Required | Optional | - | Marketing |
| Talk track / script | Required | Required | - | Marketing |
| FAQ document | Required | Required | Optional | Marketing |
| **Paid & Social** | | | | |
| Social posts (LinkedIn, X) | Required | Required | Required | Marketing |
| Paid ad copy (3-5 variants) | Required | Optional | - | Marketing |
| Paid ad creative (display/social) | Required | Optional | - | Marketing |
| Executive social posts (ghostwritten) | Required | Optional | - | Marketing |
| **PR & Comms** | | | | |
| Press release | Required | Optional | - | Marketing |
| Analyst briefing doc | Optional | - | - | Marketing |
| Customer advisory board briefing | Required | - | - | CS |
| **Technical** | | | | |
| Documentation / help center update | Required | Required | Required | Product |
| API docs update | If applicable | If applicable | If applicable | Engineering |
| Changelog entry | Required | Required | Required | Product |

**AI-Assisted Asset Creation Workflow:**

```
Step 1: SEED — Load launch messaging doc into AI as system context
Step 2: GENERATE — AI creates first drafts of all assets from messaging
Step 3: CUSTOMIZE — Human edits for brand voice, accuracy, nuance
Step 4: REVIEW — Stakeholder review (Product for accuracy, Legal if needed)
Step 5: FINALIZE — Final polish and format for each channel
```

**Asset creation sequence (for efficiency):**
1. Landing page copy first — this forces the clearest articulation of value
2. Blog post second — this creates the detailed narrative
3. Email sequences third — derived from blog + landing page
4. Sales assets fourth — derived from all of the above
5. Social and ad copy last — these are compressed versions of everything above

**Critical rule:** Every asset must trace back to the messaging matrix. If an asset says something the messaging matrix doesn't support, either the asset is wrong or the matrix needs updating.

**Output:** All launch assets in draft, reviewed, and final states.

### Phase 4: Internal Enablement (Tier 1: Day 10-14 | Tier 2: Day 5-7 | Tier 3: Day 1)

**Objective:** Ensure every customer-facing team can speak to the launch before the market hears about it. The fastest way to destroy a launch is when a customer asks a sales rep about it and gets "oh, I haven't seen that yet."

**Internal Enablement Checklist:**

| Activity | Tier 1 | Tier 2 | Tier 3 | When |
|----------|--------|--------|--------|------|
| **Sales Enablement** | | | | |
| Sales team briefing (live) | Required | Required | - | 3-5 days pre-launch |
| Updated talk track distributed | Required | Required | Optional | 3 days pre-launch |
| Battlecard update distributed | Required | Optional | - | 3 days pre-launch |
| Role-play / objection handling session | Required | - | - | 2 days pre-launch |
| CRM fields/tags updated | Required | Required | Optional | 1 day pre-launch |
| **CS / Support Enablement** | | | | |
| CS team briefing (live) | Required | Required | Slack update | 3-5 days pre-launch |
| Support documentation published (internal) | Required | Required | Required | 2 days pre-launch |
| FAQ for inbound questions | Required | Required | Optional | 2 days pre-launch |
| Escalation path defined | Required | Optional | - | 2 days pre-launch |
| **Executive Enablement** | | | | |
| Exec briefing doc | Required | Optional | - | 5 days pre-launch |
| Exec social posts drafted and approved | Required | Optional | - | 2 days pre-launch |
| Board/investor talking points | Required | - | - | 5 days pre-launch |
| **Cross-Functional** | | | | |
| Launch Slack channel created | Required | Required | - | 1 week pre-launch |
| Launch calendar invite (go-live moment) | Required | Required | Optional | 3 days pre-launch |
| "Launch day runsheet" distributed | Required | Required | - | 1 day pre-launch |
| Post-launch all-hands update | Required | Optional | - | 1-3 days post-launch |

**Sales Enablement Bridge (connects to [Sales Enablement](./10-sales-enablement.md)):**
- Every Tier 1 and Tier 2 launch must produce a one-page "What changed, why it matters, what to say" document
- Sales must be able to answer: What is it? Who is it for? Why now? What's the CTA? How is it different?
- If a rep can't articulate the launch in 30 seconds after the briefing, the enablement failed

**Output:** All internal enablement materials distributed, all teams briefed.

### Phase 5: Launch Execution (Launch Day + First 48 Hours)

**Objective:** Execute the launch with precision. The first 48 hours determine 80% of launch impact.

**Tier 1 Launch Day-by-Day Timeline:**

```
Day -14: Launch brief finalized, tier classified, team assigned
Day -12: Positioning and messaging workshop complete
Day -10: All asset briefs created, asset creation begins
Day -7:  First drafts of all assets complete
Day -5:  Internal enablement begins (sales briefing, CS briefing)
Day -4:  All assets in review (Product accuracy, Legal if needed)
Day -3:  Final assets approved, loaded into platforms
Day -2:  Internal "dry run" — walk through the launch day runsheet
Day -1:  Pre-launch teaser (social, email to VIPs, customer advisory)
         All systems armed: emails scheduled, pages live but unlisted,
         ads in review, social drafted
Day 0:   LAUNCH DAY
         ├── 09:00 — Landing page live, feature page live
         ├── 09:15 — Blog post published
         ├── 09:30 — Email to customers (segment: active users)
         ├── 10:00 — Email to prospects (segment: relevant pipeline)
         ├── 10:00 — Social posts go live (company + exec accounts)
         ├── 10:00 — Press release distributed (if applicable)
         ├── 10:30 — Paid ads activated
         ├── 11:00 — Community/forum posts (Product Hunt, HN, etc.)
         ├── 12:00 — Monitor and engage (social, community, support)
         ├── 15:00 — Sales team outbound begins (warm leads)
         └── 17:00 — Day 0 metrics check-in (Slack)
Day +1:  Second-wave outreach: partner emails, analyst follow-up,
         Sales continues outbound, address early feedback
Day +2:  48-hour metrics snapshot, initial performance assessment
Day +7:  First-week retrospective data pull
Day +14: Full launch retrospective
Day +30: 30-day performance review and optimization report
```

**Tier 2 Compressed Timeline:**

```
Day -10: Launch brief and messaging
Day -7:  Asset creation begins
Day -4:  Assets in review, internal enablement
Day -2:  Final assets loaded
Day -1:  Pre-launch teaser (optional)
Day 0:   Launch day (blog, email, social, landing page)
Day +1:  Sales outbound, paid ads
Day +7:  Performance review
```

**Tier 3 Compressed Timeline:**

```
Day -3: Launch brief and copy
Day -2: Assets created and reviewed
Day -1: Internal notification (Slack)
Day 0:  Blog post, changelog, customer email, social
Day +3: Quick metrics check
```

**Launch Day War Room Protocol (Tier 1 only):**
- Dedicated Slack channel with all stakeholders
- Marketing owner monitors: website traffic, email metrics, social engagement
- Sales owner monitors: inbound inquiries, demo requests
- Product/Engineering on standby for: bugs, outages, technical questions
- Executive ready for: media/analyst callbacks, social engagement
- Escalation chain clear: who decides if something goes wrong

**Output:** Launch executed per runsheet, real-time monitoring in place.

### Phase 6: Channel Plan Execution (Launch Day - Day 7)

**Objective:** Activate the right channels per tier to maximize reach and pipeline.

**Channel Plan by Tier:**

| Channel | Tier 1 | Tier 2 | Tier 3 | Primary Goal |
|---------|--------|--------|--------|-------------|
| **Owned Website** | Dedicated LP + homepage + feature page | LP + feature page | Feature page or changelog | Convert awareness to action |
| **Email: Customers** | Segmented multi-touch sequence | Single announcement | Changelog digest | Retention, expansion |
| **Email: Prospects** | Targeted nurture sequence | Single announcement | - | Pipeline acceleration |
| **Blog** | Long-form + technical post | Single post | Changelog entry | SEO + narrative |
| **Social: Organic** | Multi-post campaign (5-10 posts over 2 weeks) | 3-5 posts over 1 week | 1-2 posts | Awareness, engagement |
| **Social: Executive** | CEO + leadership posts | CEO post | - | Authority, reach |
| **Paid: Search** | New keywords + updated copy | Updated copy | - | Capture demand |
| **Paid: Social** | Dedicated campaign (2-4 weeks) | Boosted post or short campaign | - | Generate demand |
| **PR** | Press release + targeted outreach | Contributed article or pitch | - | Credibility, backlinks |
| **Community** | Product Hunt, HN, Reddit, forums | Relevant forums/communities | - | Early adopter momentum |
| **Partners** | Co-marketing with integration partners | Partner notification | - | Extended reach |
| **Webinar/Demo** | Live launch event or webinar | On-demand demo | - | Mid-funnel conversion |
| **Analyst/Influencer** | Pre-briefing + follow-up | Notification | - | Industry credibility |
| **AI/GEO** | New content optimized for AI answers (connect to [GEO Optimizer](./09-geo-optimizer.md)) | Updated existing content | - | Future discoverability |

**Output:** Channel activation plan with owners, timing, and tracking links per channel.

### Phase 7: Post-Launch Optimization (Day 2-30)

**Objective:** Measure, learn, and optimize while momentum is still active.

**Launch Measurement Dashboard:**

| Metric | Tier 1 Target | Tier 2 Target | Tier 3 Target | Measurement Tool |
|--------|--------------|--------------|---------------|-----------------|
| **Awareness** | | | | |
| Launch page unique visitors | 2,000-10,000 | 500-2,000 | 100-500 | Analytics |
| Social impressions | 50,000+ | 10,000+ | 2,000+ | Social platform |
| Press mentions | 3-5+ | 0-2 | - | Media monitoring |
| **Engagement** | | | | |
| Blog post reads | 1,000+ | 300+ | 100+ | Analytics |
| Email open rate | 35%+ | 30%+ | 25%+ | Email platform |
| Email CTR | 5%+ | 4%+ | 3%+ | Email platform |
| Social engagement rate | 3%+ | 2%+ | 1%+ | Social platform |
| Video views (if applicable) | 1,000+ | 300+ | - | Video platform |
| **Pipeline** | | | | |
| Demo requests (launch-attributed) | 20-50+ | 5-20 | - | CRM |
| Trial signups (launch-attributed) | Varies by model | Varies | - | Product analytics |
| Pipeline created ($) | Track | Track | - | CRM |
| **Adoption** | | | | |
| Feature activation rate (existing customers) | 20%+ in 30 days | 15%+ | 10%+ | Product analytics |
| Support ticket volume (launch-related) | Monitor for spikes | Monitor | Monitor | Support platform |
| **Sales Enablement** | | | | |
| Sales rep asset usage | 80%+ downloaded/viewed | 60%+ | - | CMS/analytics |
| Competitive mention rate (post-launch) | Track change | - | - | Gong/call analytics |

**Post-Launch Optimization Cadence:**

| Timeframe | Activity |
|-----------|----------|
| Day 0-2 | Monitor in real-time. Fix broken links, typos, tracking. Engage social/community. |
| Day 3-7 | First performance read. Double down on winning channels. Kill underperformers. Update ad copy based on early CTR data. |
| Day 7-14 | Deeper funnel analysis. Are launch visitors converting to pipeline? Is Sales using the assets? AI-analyze customer feedback from support tickets, social, and community. |
| Day 14-30 | Full pipeline attribution. What revenue can be traced to the launch? Feature adoption curve analysis. Competitive response assessment. |
| Day 30 | Launch retrospective (see Phase 8). |

**Output:** Weekly optimization reports, channel reallocation decisions, pipeline attribution data.

### Phase 8: Launch Retrospective (Day 14-30)

**Objective:** Turn every launch into institutional learning that makes the next launch better.

**Launch Retrospective Template:**

```
# Launch Retrospective: [Launch Name]

## Launch Summary
- Launch name: [name]
- Tier: [1/2/3]
- Launch date: [date]
- Launch owner: [name]
- Goal: [what we aimed to achieve]

## Results vs. Targets
| Metric | Target | Actual | Delta | Notes |
|--------|--------|--------|-------|-------|
| [metric] | [target] | [actual] | [+/-] | [context] |

## Timeline Assessment
- Planned duration: [X days]
- Actual duration: [X days]
- Bottlenecks: [what slowed us down]
- What we'd cut: [assets or steps that didn't earn their time investment]

## What Worked
1. [Specific tactic + evidence of impact]
2. [Specific tactic + evidence of impact]
3. [Specific tactic + evidence of impact]

## What Didn't Work
1. [Specific tactic + what happened + why]
2. [Specific tactic + what happened + why]
3. [Specific tactic + what happened + why]

## Messaging Effectiveness
- Best-performing headline: [headline] — [metric]
- Best-performing email subject: [subject] — [metric]
- Best-performing social post: [post] — [metric]
- Message that didn't resonate: [message] — [evidence]
- Messaging insights to feed back to Positioning & Messaging (04): [insights]

## Channel Effectiveness
| Channel | Investment (time/$$) | Result | ROI Assessment |
|---------|---------------------|--------|----------------|
| [channel] | [investment] | [result] | [high/medium/low] |

## Internal Enablement Assessment
- Sales readiness: [1-5 score + evidence]
- CS readiness: [1-5 score + evidence]
- Did reps use the assets? [yes/no + data]
- Customer-reported confusion or gaps: [list]

## AI Workflow Assessment
- Where AI created the most leverage: [specifics]
- Where AI output required the most human editing: [specifics]
- Prompts/workflows to save for next launch: [reference]

## Action Items for Next Launch
1. [Specific change + owner]
2. [Specific change + owner]
3. [Specific change + owner]

## Artifacts to Archive
- [Link to launch messaging doc]
- [Link to launch assets folder]
- [Link to performance dashboard]
- [Link to this retrospective]
```

**Output:** Completed retrospective document, action items assigned, learnings archived.

---

## Competitive Response Playbook

When a competitor launches something that affects your market, you need a response protocol — not a panic protocol.

**Competitive Launch Response Framework:**

```
Step 1: ASSESS (within 24 hours)
├── What did they launch?
├── How does it affect our positioning?
├── Does it change what our ICP cares about?
├── Is this real (shipped product) or vaporware (announced, not delivered)?
└── Severity: Critical / Moderate / Negligible

Step 2: DECIDE (within 48 hours)
├── Critical: Full response (repositioning, sales counter-narrative, content)
├── Moderate: Targeted response (battlecard update, sales talk track, 1-2 content pieces)
└── Negligible: Monitor only (update competitive intel, no public response)

Step 3: EXECUTE (based on severity)
├── Update [Competitive Intel](./03-competitive-intel.md) with launch details
├── Update battlecards ([Sales Enablement](./10-sales-enablement.md))
├── Brief Sales and CS on how to address in conversations
├── If Critical: Consider accelerating your own roadmap announcement
├── If Critical: Publish "our perspective" content (not attack content)
└── If Critical: Update comparison pages and GEO content ([GEO Optimizer](./09-geo-optimizer.md))
```

**What NOT to do when competitors launch:**
- Don't panic-launch something half-baked
- Don't publicly attack the competitor (it elevates them)
- Don't change your positioning to react — that's letting them control your narrative
- Don't ignore it — Sales will face it in deals whether you address it or not

**AI-Assisted Competitive Response:**
1. Feed AI the competitor's launch materials (blog, landing page, press release)
2. AI generates: summary, feature comparison, positioning analysis, counter-narrative draft
3. Human reviews and decides response level
4. AI drafts response assets (battlecard update, talk track, content) if needed
5. Ship within 48-72 hours of competitor launch

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Launch cycle time (brief to live) | Tier 1: 3-4 weeks; Tier 2: 1-2 weeks; Tier 3: 1-3 days | Speed-to-market is competitive advantage |
| Pipeline generated per Tier 1 launch | 20%+ of quarterly pipeline target | Launches should move revenue, not just awareness |
| Feature adoption rate (existing customers) | 20%+ in 30 days post-launch | Validates the launch reached and persuaded users |
| Sales asset adoption | 80%+ of reps using launch materials | Internal enablement is working |
| Launch page conversion rate | 5-10% visitor-to-action | Messaging-market fit on the launch |
| Assets produced per launch | Tier 1: 15-25; Tier 2: 8-12; Tier 3: 3-5 | AI-leverage is scaling output |
| Competitive response time | <72 hours for battlecard update | Sales is never caught off-guard |
| Retrospective completion rate | 100% for Tier 1, 80% for Tier 2 | No launches without learning |

---

## Anti-Patterns (What NOT to Do)

- **Don't treat every launch as Tier 1.** Launch fatigue is real — internally and externally. Over-launching trains your audience to ignore you. Reserve the full playbook for launches that genuinely change the narrative.
- **Don't skip internal enablement.** The most common launch failure is not a messaging problem or a channel problem. It's a sales rep saying "I don't know what that is" on a customer call the day of launch.
- **Don't launch without a measurement plan.** If you can't define what success looks like before launch day, you'll declare victory based on vanity metrics and miss what actually matters.
- **Don't let asset creation drive timeline.** Start with the date and work backward. AI compression means asset volume is no longer the bottleneck — decisions are. Make positioning decisions fast and the assets flow.
- **Don't build assets without the messaging matrix.** Every asset that gets created before messaging is finalized will need to be rewritten. Do the positioning work first, always.
- **Don't launch on a Friday.** You need the first 48 hours for monitoring, engagement, and optimization. Don't waste them on a weekend.
- **Don't forget the GEO angle.** AI search engines form opinions during launches. Ensure launch content is structured for AI discoverability (from [GEO Optimizer](./09-geo-optimizer.md)), not just human readers.
- **Don't copy competitor launch playbooks.** Your launch should reinforce your positioning, not mirror theirs. If your launch looks like their launch, you've already lost the positioning battle.
- **Don't skip the retrospective.** The launch after this one is when the retrospective pays off. Skipping it guarantees you repeat the same mistakes.

---

## Integration Points

```
Launch Playbook outputs → consumed by:

┌─────────────────────────────┐
│ Launch Messaging             │──→ CAC Optimizer (12) — ad copy + campaign messaging
│                             │──→ Content Engine (08) — editorial calendar integration
│                             │──→ GEO Optimizer (09) — AI search content
├─────────────────────────────┤
│ Launch Assets                │──→ Sales Enablement (10) — decks, one-pagers, battlecards
│                             │──→ Content Engine (08) — blog posts, case studies
│                             │──→ CAC Optimizer (12) — ad creative + landing pages
├─────────────────────────────┤
│ Pipeline / Performance Data  │──→ Marketing Metrics (15) — launch attribution
│                             │──→ Pipeline Accelerator (13) — launch-sourced leads
│                             │──→ CAC Optimizer (12) — channel ROI data
├─────────────────────────────┤
│ Competitive Response Intel   │──→ Competitive Intel (03) — competitor launch tracking
│                             │──→ Sales Enablement (10) — updated battlecards
├─────────────────────────────┤
│ Launch Retrospective         │──→ Positioning & Messaging (04) — message testing results
│                             │──→ Marketing Metrics (15) — launch performance benchmarks
│                             │──→ Future launches — institutional learning
└─────────────────────────────┘

Launch Playbook consumes:

┌─────────────────────────────┐
│ Customer Research (01)       │──→ Voice Library, JTBD for launch messaging
│ ICP Definition (02)         │──→ Target personas per launch
│ Competitive Intel (03)      │──→ Whitespace + competitor positioning
│ Positioning & Messaging (04)│──→ Master messaging architecture
│ GTM Strategy (05)           │──→ Channel priorities + market strategy
│ Brand Strategy (06)         │──→ Brand voice + visual identity
│ Content Engine (08)         │──→ Content templates + editorial process
└─────────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Launch playbook process review | Quarterly | After every 3-4 launches, update the process itself |
| Launch tier thresholds | Every 6 months | As company matures, what counts as "major" evolves |
| Asset checklist update | Quarterly | New channels emerge, old ones lose effectiveness |
| Channel plan update | Quarterly | Align with GTM Strategy (05) and CAC Optimizer (12) data |
| Competitive response protocol | Monthly | After Competitive Intel (03) updates |
| Launch retrospective review | After every Tier 1 and Tier 2 launch | Non-negotiable |
| AI workflow templates | Monthly | As AI capabilities improve, update prompts and workflows |
| Internal enablement checklist | Every 6 months | As team structure and tools change |
