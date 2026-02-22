# Content Engine

> **Layer 3 — Execution Systems** | Skill 08 of 16
> **Dependencies:** [Customer Research](./01-customer-research.md), [ICP Definition](./02-icp-definition.md), [Competitive Intel](./03-competitive-intel.md), [Positioning & Messaging](./04-positioning-messaging.md), [GTM Strategy](./05-gtm-strategy.md), [Brand Strategy](./06-brand-strategy.md)
> **Feeds into:** [GEO Optimizer](./09-geo-optimizer.md), [Sales Enablement](./10-sales-enablement.md), [Launch Playbook](./11-launch-playbook.md), [CAC Optimizer](./12-cac-optimizer.md), [Pipeline Accelerator](./13-pipeline-accelerator.md), [NRR Engine](./14-nrr-engine.md)
> **Parallel with:** [GEO Optimizer](./09-geo-optimizer.md), [Sales Enablement](./10-sales-enablement.md), [Launch Playbook](./11-launch-playbook.md)

---

## Purpose

The Content Engine is the production system that turns positioning, messaging, and customer insight into published assets that generate pipeline. This is not "write blog posts" — it is the complete operational workflow for producing, distributing, and measuring content that converts, at scale, with AI assistance. At $1M-5M ARR, content is your highest-leverage growth channel because it compounds — every piece you publish works 24/7 across search, social, email, and sales conversations. The companies that build a real content engine at this stage create a durable moat; the ones that publish random acts of content waste months and budget with nothing to show for it.

---

## Business Context ($1M-5M ARR)

- You likely have 0-1 dedicated content people — the engine must maximize output per person
- 60% of Google searches now result in zero clicks (AI Overviews eat the answer) — top-of-funnel "what is X" SEO content is dying
- Your competitors are already using AI to flood the zone with mediocre content — volume is not a differentiator
- Buyers complete 70-80% of their evaluation before talking to sales — content IS the sales process now
- Bottom-of-funnel content (comparison pages, use-case pages, ROI calculators) converts 5-10x better than blog posts but most companies underinvest here
- Gated content is dying — ungated value builds brand preference and trust, which captures intent more effectively than a PDF behind a form
- Original research and proprietary data are the highest-authority content types — AI cannot replicate what it has never seen
- Content must now be structured for both human readers AND AI citation (feeds [GEO Optimizer](./09-geo-optimizer.md))

---

## Workflow

### Phase 1: Content Strategy Foundation (Day 1-2)

**Objective:** Align your content strategy to ICP buying journey, business goals, and competitive gaps.

**Required inputs from upstream skills:**

From [Customer Research](./01-customer-research.md):
- Customer Voice Library (exact language, quotes, pain points)
- JTBD Map (what jobs customers hire you for)
- Buying Journey Map (how they find and evaluate you)

From [ICP Definition](./02-icp-definition.md):
- Tier 1 ICP profile and buyer personas
- Channels where ICP consumes content
- Search behavior and information-gathering patterns

From [Competitive Intel](./03-competitive-intel.md):
- Competitor content audit (what they publish, what gaps exist)
- Win/loss patterns (what questions arise during evaluation)
- Competitive whitespace (topics no one covers well)

From [Positioning & Messaging](./04-positioning-messaging.md):
- Messaging architecture (narrative, value props, pillar messages)
- Persona-specific messaging variants
- Competitive messaging (for comparison content)
- Proof Points Library

From [GTM Strategy](./05-gtm-strategy.md):
- Primary GTM motions (inbound-led, outbound-assisted, product-led)
- Channel priorities and budget allocation
- Revenue targets and pipeline contribution targets for content

From [Brand Strategy](./06-brand-strategy.md):
- Brand voice and tone guidelines
- Narrative arc and thought leadership themes
- Visual and editorial identity standards

**Content Strategy Decisions:**

1. **Funnel Allocation** — Where to invest content effort:

```
Recommended allocation for $1M-5M ARR SaaS:

BOFU (Bottom of Funnel) — 50% of effort
├── Comparison pages (vs. Competitor A, B, C)
├── Use-case pages (one per primary JTBD)
├── Integration/ecosystem content
├── ROI calculators and assessment tools
├── Pricing/packaging content
├── Customer proof (case studies with metrics)
└── "Switching from X" migration guides

MOFU (Middle of Funnel) — 35% of effort
├── How-to guides and workflow content
├── Case studies (detailed, outcome-focused)
├── Webinars and live content
├── Templates, frameworks, and tools
├── Industry-specific use-case deep dives
└── Product-led tutorials and walkthroughs

TOFU (Top of Funnel) — 15% of effort
├── Original research and proprietary data reports
├── Founder/practitioner thought leadership
├── Industry trends analysis (opinionated, not generic)
└── Community-generated content and discussions
```

Most companies invert this — 80% TOFU, 20% everything else. Invert the inversion.

2. **Content-Channel Fit** — Match content types to where your ICP actually is:

| Channel | Content Type | Purpose | Frequency |
|---------|-------------|---------|-----------|
| Website | BOFU pages, case studies, use-case pages | Convert visitors to pipeline | Evergreen, updated quarterly |
| Blog | How-to guides, thought leadership, research | Build authority, earn citation | 2-4x/month |
| LinkedIn | Founder insights, data nuggets, hot takes | Build brand, drive traffic | 3-5x/week |
| Email | Nurture sequences, product updates, insights | Move prospects through funnel | 2-4x/month |
| YouTube/Video | Product demos, tutorials, customer stories | Visual proof, SEO | 2-4x/month |
| Podcast/Audio | Expert interviews, deep dives | Authority, relationship | 2-4x/month |
| Community | Discussions, AMAs, resource sharing | Trust, feedback loop | Ongoing |

**Output:** `content-strategy.md` — Funnel allocation, channel map, content-ICP alignment, and editorial themes for the quarter.

### Phase 2: Content Prioritization & Scoring (Day 3)

**Objective:** Build a prioritized content backlog so you always work on the highest-impact piece next.

**Content Scoring Matrix:**

Score every potential content piece on five dimensions (1-5 scale each):

| Dimension | Weight | Score Criteria |
|-----------|--------|---------------|
| **Buying Intent** | 5x | Does this content match high-intent search or evaluation behavior? BOFU = 5, MOFU = 3, TOFU = 1 |
| **ICP Relevance** | 4x | Does this directly address Tier 1 ICP pain/JTBD? |
| **Competitive Gap** | 3x | Is there a vacuum — no competitor covers this well? |
| **Reuse Potential** | 2x | Can this be repurposed into 5+ formats? Can sales use it? |
| **Production Effort** | 1x (inverse) | How hard is this to produce? Easy = 5, Hard = 1 |

```
Priority Score = (Intent x 5) + (ICP x 4) + (Gap x 3) + (Reuse x 2) + (Ease x 1)

Max score: 75
Tier 1 (produce now): 55+
Tier 2 (produce this quarter): 40-54
Tier 3 (backlog): <40
```

**Initial Backlog Build (AI-Assisted):**

1. Start with the Buying Journey Map from [Customer Research](./01-customer-research.md)
2. For each stage, identify every question the buyer asks
3. For each question, identify the best content format to answer it
4. Score each piece using the matrix above
5. Rank-order into the content backlog

**Output:** `content-backlog.md` — Scored and prioritized list of 30-50 content pieces with assigned formats and funnel stages.

### Phase 3: AI-Assisted Content Production Workflow (Ongoing)

**Objective:** Produce 10x output with 1 person by building an AI-assisted production line.

**The Content Production Pipeline:**

```
STAGE 1: BRIEF (30 min)
│  Human: Defines target audience, intent, key message, CTA
│  AI: Generates outline, suggests angles, pulls relevant customer quotes
│  Output: Content brief document
│
STAGE 2: DRAFT (1-2 hours)
│  AI: Produces first draft from brief + messaging framework + voice guidelines
│  Human: Reviews for accuracy, adds proprietary insight, injects personality
│  Output: Draft v1
│
STAGE 3: ENRICH (30 min)
│  Human: Adds original data, customer quotes, screenshots, examples
│  AI: Suggests additional proof points, internal links, CTAs
│  Output: Draft v2 (enriched)
│
STAGE 4: EDIT (30 min)
│  AI: Checks for messaging consistency, tone alignment, SEO structure
│  Human: Final editorial pass — voice, accuracy, brand alignment
│  Output: Final draft
│
STAGE 5: OPTIMIZE (15 min)
│  AI: Generates meta descriptions, social copy, email teasers
│  AI: Structures for AI citation (see GEO Optimizer)
│  Human: Approves and adjusts
│  Output: Publish-ready asset + distribution kit
│
STAGE 6: DISTRIBUTE (15 min)
│  Follow Distribution Checklist (see below)
│  Output: Published and distributed
│
STAGE 7: MEASURE (ongoing)
│  Track metrics at 7, 30, 90 days
│  AI: Analyzes performance, suggests optimization
│  Output: Performance data → feeds next prioritization cycle
```

**AI-Assisted Content Creation Framework:**

| Role | Human Does | AI Does |
|------|-----------|---------|
| Strategy | Decides what to create and why | Suggests topics based on data, identifies gaps |
| Research | Provides proprietary data, customer quotes, expert insight | Synthesizes public research, organizes sources |
| Drafting | Adds original thinking, personality, nuance | Generates structured first drafts from briefs |
| Editing | Final voice check, accuracy verification | Grammar, consistency, tone alignment |
| Optimization | Approves final versions | Meta content, social variants, structured data |
| Distribution | Decides channels, timing | Generates channel-specific copy variants |
| Measurement | Interprets results, makes strategic decisions | Aggregates data, identifies patterns |

**Quality Control Checkpoints:**

Before any piece publishes, it must pass:

```
[ ] Messaging alignment — Does it reinforce our positioning? (check against Messaging Architecture)
[ ] Customer voice — Does it use customer language, not internal jargon? (check against Voice Library)
[ ] Proof density — Does every claim have evidence? (customer quote, data, example)
[ ] BOFU hook — Even TOFU content has a natural path to conversion content
[ ] GEO structure — Formatted for AI citation (clear answers, structured data, authoritative sourcing)
[ ] Single reader test — Would ONE person in our ICP share this with a colleague?
[ ] Differentiation check — Would a competitor publish this exact piece? If yes, add proprietary angle
[ ] CTA relevance — The call to action matches the reader's intent at this funnel stage
```

### Phase 4: Content Repurposing Engine (Per Piece)

**Objective:** Turn every core content piece into 10+ format variants to maximize reach per unit of effort.

**The 1-to-10 Repurposing Framework:**

```
1 Core Asset (e.g., in-depth guide, original research, case study)
│
├──→ Blog post (long-form, 1,500-2,500 words)
├──→ LinkedIn post series (3-5 posts, each a key takeaway)
├──→ Email newsletter feature (summary + link)
├──→ Twitter/X thread (key data points and insights)
├──→ Video script (5-10 min explainer or founder take)
├──→ Podcast talking points (interview guide or solo episode outline)
├──→ Sales one-pager (key stats and quotes for sales team)
├──→ Slide deck (5-10 slides for webinar or internal use)
├──→ Infographic or visual summary (data visualization)
└──→ Community post (discussion starter with key finding)
```

**AI Workflow for Repurposing:**
1. Feed the core asset into AI with format-specific instructions
2. AI generates draft variants for each format
3. Human reviews and adjusts for channel-specific voice and norms
4. Batch-schedule distribution across channels

**Time investment:** ~2 hours of human time produces 10+ distribution-ready pieces from 1 core asset.

### Phase 5: Founder & Practitioner Content Integration (Ongoing)

**Objective:** Leverage authentic human voices — the one thing AI cannot replicate.

**Why this matters at $1M-5M ARR:**
- Founder content outperforms brand content 3-5x on engagement
- Practitioners (your engineers, CS team, product managers) have unique insight AI cannot generate
- Authentic voice builds trust in an era of AI-generated noise
- This is your unfair content advantage

**Founder Content Workflow:**

```
Step 1: Monthly "brain dump" session (30 min)
│  Record founder answering: "What's the most interesting thing
│  you've learned from customers/market this month?"
│
Step 2: AI transcribes and extracts 3-5 content angles
│
Step 3: AI drafts posts in founder's voice (trained on past content)
│
Step 4: Founder reviews, edits for authenticity (15 min per piece)
│
Step 5: Publish under founder's name with genuine voice
```

**Practitioner Content Workflow:**
- Engineers write technical deep dives on how the product solves hard problems
- CS team contributes "what we learned from helping [type of customer]" stories
- Product managers share roadmap thinking and build-in-public updates
- All go through the same AI-assisted production pipeline

### Phase 6: Community Content Strategy (Ongoing)

**Objective:** Create content for and from communities where your ICP gathers.

**Two-Way Community Content Flow:**

```
Content FROM community → Your content engine:
├── Customer questions become FAQ and how-to content
├── Feature requests become product-led content
├── Customer success stories become case studies
├── Community discussions reveal new content topics
└── User-generated tips become "power user" content series

Content FOR community → Distributed to community:
├── Exclusive early access to research
├── Behind-the-scenes product content
├── Discussion starters from your content
├── Templates and tools for community members
└── AMA and live content featuring your team
```

### Phase 7: Editorial Calendar & Workflow Management (Ongoing)

**Objective:** Maintain a predictable content cadence without burning out your team.

**Content Calendar Template:**

```
Monthly Calendar Structure:

Week 1: BOFU Focus
├── Day 1-2: Produce 1 comparison or use-case page
├── Day 3: Repurpose into distribution variants
├── Day 4-5: Distribute + produce 1 case study/proof piece

Week 2: MOFU Focus
├── Day 1-2: Produce 1 how-to guide or workflow piece
├── Day 3: Repurpose into distribution variants
├── Day 4-5: Distribute + update 1 existing high-traffic piece

Week 3: Founder/Practitioner Content
├── Day 1: Founder brain dump session
├── Day 2-3: AI-assisted drafting of 3-5 pieces
├── Day 4: Founder review and approval
├── Day 5: Schedule all pieces for distribution

Week 4: Research & Optimization
├── Day 1-2: Original research or data-driven piece (if scheduled)
├── Day 3: Content performance review (see Phase 8)
├── Day 4: Backlog re-prioritization
├── Day 5: Next month planning
```

**Monthly Output Target (1-person content team with AI):**

| Content Type | Monthly Target | Annual Total |
|-------------|---------------|-------------|
| BOFU pages (comparison, use-case, integration) | 2-3 new or updated | 24-36 |
| Case studies / customer proof | 1-2 | 12-24 |
| How-to guides / workflow content | 2-3 | 24-36 |
| Founder/practitioner posts | 4-6 | 48-72 |
| Social posts (LinkedIn, Twitter/X) | 15-20 | 180-240 |
| Email sends (newsletter + nurture) | 4-6 | 48-72 |
| Original research pieces | 1 per quarter | 4 |
| Video/podcast scripts | 2-4 | 24-48 |

This is realistic with AI assistance. Without AI, cut targets by 60-70%.

### Phase 8: Content Performance Measurement & Iteration (Monthly)

**Objective:** Measure what works, kill what doesn't, double down on what converts.

**Measurement Framework by Funnel Stage:**

| Stage | Metrics That Matter | Vanity Metrics (Ignore) |
|-------|-------------------|----------------------|
| BOFU | Conversion rate, pipeline influenced, demo requests, revenue attributed | Page views alone |
| MOFU | Time on page, email capture rate, content-to-demo path, return visits | Social shares alone |
| TOFU | Brand search lift, citation by AI engines, backlinks earned, share of voice | Raw traffic |

**Content Performance Tiers:**

```
After 90 days, every piece goes into a tier:

TIER 1 — Winners (top 20%)
Action: Repurpose aggressively, update quarterly, build related content

TIER 2 — Performers (middle 40%)
Action: Optimize (improve CTA, add proof, update for GEO), retest at 90 days

TIER 3 — Underperformers (next 30%)
Action: Consolidate, merge, or redirect into stronger pieces

TIER 4 — Dead weight (bottom 10%)
Action: Unpublish or noindex — bad content dilutes authority
```

**Monthly Content Review Workflow:**
1. Pull performance data for all content published 30+ days ago
2. AI analyzes patterns — what topics, formats, and angles perform best
3. Assign tiers to all content
4. Take action per tier (above)
5. Feed insights back into the content backlog and prioritization matrix

---

## Distribution Checklist (Per Content Type)

### BOFU Content (Comparison, Use-Case, Integration Pages)

```
[ ] Published on website with proper internal linking
[ ] Submitted to search engines (via sitemap update)
[ ] Structured for GEO / AI citation (see GEO Optimizer)
[ ] Shared with sales team + added to sales enablement library
[ ] Linked from relevant product pages and pricing page
[ ] Promoted via retargeting ads to website visitors
[ ] Sent to prospects in active pipeline (via sales outreach)
[ ] Added to relevant email nurture sequences
```

### MOFU Content (Guides, Case Studies, Tutorials)

```
[ ] Published on blog with clear CTA to BOFU content
[ ] Repurposed into 3-5 LinkedIn posts (staggered over 2 weeks)
[ ] Featured in next email newsletter
[ ] Shared in relevant communities (with genuine value, not spam)
[ ] Submitted to industry curators and newsletters
[ ] Promoted via social ads to lookalike audiences (if budget)
[ ] Added to relevant nurture email sequences
[ ] Shared with CS team for customer enablement
```

### TOFU Content (Research, Thought Leadership)

```
[ ] Published with ungated access (no form walls)
[ ] Press/media outreach for original research
[ ] Shared by founder on personal social channels
[ ] Repurposed into social series (5-10 posts)
[ ] Pitched to industry podcasts and newsletters
[ ] Promoted to relevant online communities
[ ] Syndicated to Medium, LinkedIn articles, or industry publications
[ ] Data points extracted for ongoing social content
```

### Founder/Practitioner Content

```
[ ] Published under personal profile (LinkedIn, Twitter/X)
[ ] Cross-posted to company channels with attribution
[ ] Compiled into monthly digest email
[ ] Best-performing pieces expanded into long-form blog content
[ ] Added to "team thought leadership" section of website
```

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Content-influenced pipeline | 30-50% of total pipeline | Proves content drives revenue, not just traffic |
| BOFU content conversion rate | 3-8% visitor-to-demo/signup | Direct revenue impact of conversion content |
| Content production velocity | 15-25 pieces/month (with AI) | Output per headcount — measures engine efficiency |
| Organic traffic growth | 10-15% MoM for first 12 months | Compounding traffic base |
| Content-to-MQL rate | 2-5% of content consumers enter pipeline | Measures funnel pull-through |
| AI citation rate | Increasing QoQ | Content appears in AI-generated answers (see [GEO Optimizer](./09-geo-optimizer.md)) |
| Repurpose ratio | 1 core piece to 8+ variants | Measures distribution leverage |
| Founder content engagement | 3-5x higher than brand content | Validates authentic voice strategy |
| Email subscriber growth | 10-15% MoM | Owned audience you can reach without algorithms |
| Content refresh rate | 20% of library updated/quarter | Keeps existing content performing |

---

## Anti-Patterns (What NOT to Do)

- **Don't start with TOFU.** The instinct is to write "what is [category]" blog posts. AI Overviews now eat those clicks. Start with BOFU — comparison pages, use-case pages, and case studies convert immediately.
- **Don't gate everything.** Gating a generic ebook for email addresses produces low-quality leads that clog your pipeline. Ungate value, earn brand preference, capture intent through behavior signals.
- **Don't use AI for volume without quality control.** AI lets you publish 100 mediocre pieces or 20 excellent ones. The latter wins. Every piece must pass the quality checkpoint — if it wouldn't make your best customer nod, don't publish it.
- **Don't publish without a distribution plan.** A piece without distribution is a tree falling in an empty forest. Every piece needs a distribution checklist completed BEFORE it goes live.
- **Don't ignore content decay.** Content that was accurate 12 months ago may be wrong today. Schedule content refreshes or you're slowly poisoning your own authority.
- **Don't write for search engines instead of buyers.** SEO structure matters, but writing "optimized content" that reads like a keyword-stuffed robot repels the humans you need to convert. Write for humans first, structure for machines second.
- **Don't skip proprietary angles.** If a competitor could publish the exact same piece, it has no strategic value. Every content piece needs at least one proprietary element — original data, customer quote, unique framework, or practitioner insight.
- **Don't separate content from sales.** Content that sales cannot use in deals is half as valuable. Build every BOFU and MOFU piece with a "sales can send this" lens (feeds [Sales Enablement](./10-sales-enablement.md)).
- **Don't measure content by vanity metrics.** Page views and social shares feel good. Pipeline influenced and conversion rate matter. Measure what counts.
- **Don't create content in isolation from the customer.** Every content piece should trace back to a real customer question, pain point, or JTBD from [Customer Research](./01-customer-research.md). If you can't cite the source insight, question whether the piece should exist.

---

## Integration Points

```
Content Engine outputs → consumed by:

┌──────────────────────────────┐
│ BOFU Content                 │──→ Sales Enablement (10) — comparison pages, case studies for deals
│ (comparison, use-case,       │──→ Pipeline Accelerator (13) — bottom-funnel conversion assets
│  integration pages)          │──→ CAC Optimizer (12) — retargeting and conversion content
│                              │──→ GEO Optimizer (09) — structured for AI citation
├──────────────────────────────┤
│ MOFU Content                 │──→ Sales Enablement (10) — guides and tutorials for prospects
│ (guides, case studies,       │──→ NRR Engine (14) — customer education and expansion content
│  tutorials, webinars)        │──→ Launch Playbook (11) — supporting content for launches
│                              │──→ Pipeline Accelerator (13) — nurture sequence content
├──────────────────────────────┤
│ TOFU Content                 │──→ GEO Optimizer (09) — authority content for AI citation
│ (research, thought           │──→ CAC Optimizer (12) — brand awareness and audience building
│  leadership)                 │──→ Brand Strategy (06) — reinforces brand narrative
├──────────────────────────────┤
│ Repurposed Variants          │──→ CAC Optimizer (12) — social ads, email, paid content
│ (social, email, video,       │──→ Pipeline Accelerator (13) — multi-touch nurture assets
│  podcast, slide decks)       │──→ Sales Enablement (10) — one-pagers and send-to-prospect assets
├──────────────────────────────┤
│ Content Performance Data     │──→ Marketing Metrics (15) — ROI attribution and reporting
│                              │──→ CAC Optimizer (12) — informs channel spend decisions
│                              │──→ GEO Optimizer (09) — informs AI visibility strategy
├──────────────────────────────┤
│ Editorial Calendar           │──→ Launch Playbook (11) — coordinates content with launches
│                              │──→ GTM Strategy (05) — aligns content to GTM motions
└──────────────────────────────┘

Content Engine consumes from:

Customer Research (01) ──→ Voice Library, JTBD Map, Buying Journey
ICP Definition (02) ──→ Target personas, channel preferences
Competitive Intel (03) ──→ Content gaps, competitive positioning
Positioning & Messaging (04) ──→ Messaging architecture, proof points
GTM Strategy (05) ──→ Channel priorities, pipeline targets
Brand Strategy (06) ──→ Voice, tone, narrative themes
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Content strategy review | Quarterly | Or after major positioning/ICP shift |
| Content backlog re-prioritization | Monthly | After performance review |
| Content performance review | Monthly | 30/90-day measurement cycles |
| Editorial calendar planning | Monthly | End of each month for next month |
| BOFU page audit and refresh | Quarterly | Competitor changes, product updates, pricing changes |
| Full content library audit | Every 6 months | Tier all content, unpublish dead weight |
| Repurposing workflow review | Quarterly | Assess which formats perform best per channel |
| Founder content session | Monthly | Recurring calendar block |
| AI workflow and prompt tuning | Monthly | As AI tools evolve and output quality shifts |
| Distribution checklist update | Quarterly | As new channels emerge or old ones decline |
| Content-to-sales alignment sync | Monthly | Joint review with sales team on what content they need |
