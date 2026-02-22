# Marketing Ops & Tech Stack

> **Layer 5 — Infrastructure & Measurement** | Skill 16 of 16
> **Dependencies:** [GTM Strategy](./05-gtm-strategy.md), [Marketing Budget](./07-marketing-budget.md), all execution and optimization skills (08-14), [Marketing Metrics](./15-marketing-metrics.md)
> **Feeds into:** Loops back to all skills — this is the operational infrastructure that enables everything
> **Parallel with:** [Marketing Metrics](./15-marketing-metrics.md)

---

## Purpose

Marketing Ops is the operational backbone that makes every other skill actually run. It is the infrastructure, tools, automation, and processes that turn strategy into repeatable execution. At $1M-5M ARR, you are building the foundation that either scales with you to $10M+ or becomes technical debt that eventually requires a painful rip-and-replace. Every workflow, every handoff, every data point flows through Marketing Ops. Get it right now and you build compounding operational leverage. Get it wrong and you spend the next two years untangling spaghetti integrations, dirty data, and broken automations.

---

## Business Context ($1M-5M ARR)

- You likely have zero dedicated marketing ops people — ops is done by whoever set up HubSpot or by the founder
- Your CRM is probably partially configured, inconsistently used, and full of duplicate records
- You are using 8-15 tools but only getting value from 3-4 of them
- Lead routing is manual, slow, and leaky — leads sit in inboxes for hours or days
- You have no single source of truth — marketing says one number, sales says another, finance says a third
- AI agents and automation can now do what used to require a full-time ops hire, but only ~33% of organizations have implemented at scale — this is an early-mover advantage window
- Tool spend creeps up without anyone noticing — $200/month here, $150/month there, suddenly you are at $6K/month and cannot explain what half of it does
- The decisions you make now about data architecture, lifecycle definitions, and integration patterns will constrain or enable everything you do for the next 2-3 years
- RevOps alignment (marketing + sales + CS sharing definitions and data) is the difference between a pipeline machine and three teams arguing over spreadsheets

---

## Workflow

### Phase 1: Tech Stack Audit & Rationalization (Day 1-2)

**Objective:** Understand what you have, what you actually use, and what is costing you money for no reason.

**Inputs required:**
- Complete list of all marketing/sales/CS tools (check credit card statements, not just what people remember)
- Login/usage data for each tool (most SaaS tools show last login per user)
- Monthly cost per tool
- Integration map (what connects to what, via what method)
- Current data flow: where does a lead enter the system and where does it end up?

From [Marketing Budget](./07-marketing-budget.md):
- Total tool budget allocation
- Budget constraints and targets

From [GTM Strategy](./05-gtm-strategy.md):
- Channel strategy (determines which tools you need)
- Growth model (PLG vs. sales-led vs. hybrid determines stack architecture)

**AI Workflow:**
1. Catalog every tool into a structured audit:
   - Tool name, category, monthly cost, # of users, utilization rate
   - What it connects to
   - What would break if you removed it
   - Overlap with other tools
2. Score each tool on a 2x2: Value Delivered vs. Cost
3. Identify: tools to keep, tools to consolidate, tools to cut, tools missing
4. Calculate total current spend and target spend

**Tool Audit Matrix:**

| Tool | Category | Monthly Cost | Active Users | Utilization | Integrations | Verdict |
|------|----------|-------------|-------------|-------------|--------------|---------|
| [Tool A] | CRM | $X | X/X seats | High/Med/Low | [list] | Keep / Cut / Replace |
| [Tool B] | Email | $X | X/X seats | High/Med/Low | [list] | Keep / Cut / Replace |
| [Tool C] | Analytics | $X | X/X seats | High/Med/Low | [list] | Keep / Cut / Replace |

**Output:** `tech-stack-audit.md` — Complete inventory with rationalization recommendations and projected savings.

### Phase 2: Tech Stack Blueprint Design (Day 3-5)

**Objective:** Design the target tech stack architecture for your current ARR and next stage.

**Tech Stack Blueprint — $2M ARR ($2-3K/month total tool spend):**

```
SYSTEM OF RECORD (CRM) — $50-150/month
├── HubSpot Starter/Professional (recommended at this stage)
│   OR Pipedrive (if purely sales-led, simpler needs)
│   OR Salesforce Essentials (only if you have Salesforce expertise in-house)
│
MARKETING AUTOMATION — $0-200/month
├── HubSpot Marketing (if HubSpot CRM — native integration wins)
│   OR Mailchimp (email only, limited automation)
│   OR Customer.io (if product-led, event-driven nurture needed)
│
ANALYTICS — $0-100/month
├── Google Analytics 4 (free — web analytics)
├── PostHog or Mixpanel free tier (product analytics)
├── UTM tracking discipline (manual but critical)
│
CONTENT / CMS — $0-100/month
├── Webflow or WordPress (website/blog)
├── Notion or Google Docs (content production)
│
AI TOOLS — $100-400/month
├── Claude / ChatGPT Pro (research, writing, analysis)
├── AI image generation (Midjourney, DALL-E — as needed)
│
DESIGN — $15-50/month
├── Canva Pro or Figma
│
PROJECT MANAGEMENT — $0-30/month
├── Linear, Notion, or Asana free tier
│
SALES ENABLEMENT — $0-100/month
├── Loom (video messaging)
├── Calendly free tier (scheduling)
│
INTEGRATION LAYER — $0-50/month
├── Zapier or Make free/starter tier (glue between tools)
│
TOTAL: ~$2-3K/month
```

**Tech Stack Blueprint — $4M ARR ($4-6K/month total tool spend):**

```
SYSTEM OF RECORD (CRM) — $200-500/month
├── HubSpot Professional (recommended — CRM + marketing in one)
│   OR Salesforce Professional (if complex sales process, multiple teams)
│
MARKETING AUTOMATION — $200-500/month
├── HubSpot Marketing Professional (native CRM integration)
│   OR ActiveCampaign (strong automation, lower cost than HubSpot)
│   OR Customer.io (if PLG, event-driven workflows)
│
ANALYTICS & ATTRIBUTION — $100-400/month
├── Google Analytics 4 (free — web)
├── PostHog or Mixpanel (product analytics — free/growth tier)
├── HockeyStack or Dreamdata (attribution — if budget allows)
│   OR manual UTM + CRM attribution (free, more work)
│
CONTENT / CMS — $100-200/month
├── Webflow Professional (website/blog)
├── Notion team workspace (content production + docs)
│
AI TOOLS — $200-600/month
├── Claude / ChatGPT Team (research, writing, analysis)
├── AI agents for content, research, automation
├── AI image/video generation as needed
│
ABM / INTENT DATA — $0-500/month
├── Apollo.io or Clay (enrichment + outbound)
│   OR LinkedIn Sales Navigator (if account-based motion)
│
DESIGN — $30-100/month
├── Canva Pro or Figma team
│
PROJECT MANAGEMENT — $30-100/month
├── Linear, Asana, or Monday.com
│
SALES ENABLEMENT — $100-300/month
├── Gong or Chorus (call recording/intelligence — massive ROI)
├── Loom Business (async video)
├── Calendly Pro (scheduling + routing)
│
COMMUNITY — $0-200/month
├── Circle, Discord, or Slack community
│
INTEGRATION LAYER — $50-200/month
├── Zapier Professional or Make Pro
│   OR native integrations where available (always prefer native)
│
TOTAL: ~$4-6K/month
```

**Tool Evaluation Decision Matrix:**

When evaluating any new tool, score 1-5 on each criterion:

| Criterion | Weight | Questions to Ask |
|-----------|--------|-----------------|
| Problem severity | 25% | How painful is the problem this solves? Can you quantify time/money lost? |
| Integration fit | 20% | Does it integrate natively with your CRM? How many Zaps does it need? |
| Time to value | 15% | Can you get value in <1 week? Or does it need 3 months of setup? |
| Total cost (incl. time) | 15% | Monthly fee + setup time + maintenance time + training time |
| Scalability | 10% | Will this still work at $10M ARR? Or will you rip and replace? |
| Team adoption risk | 10% | Will your team actually use it? What is the learning curve? |
| Vendor viability | 5% | Will this company exist in 2 years? Is it default alive? |

**Decision framework: Buy vs. Build vs. Free Tier vs. Skip:**
- **Buy** when: The problem is painful, the tool has native integrations, and the ROI is >3x within 90 days
- **Free tier** when: You need the capability but volume is low enough — upgrade when you hit limits
- **Build (Zapier/Make)** when: No tool does exactly what you need, but you can stitch it together in <4 hours
- **Skip entirely** when: The problem is annoying but not painful, or you are buying for a process you do not actually have yet

**Output:** `tech-stack-blueprint.md` — Target architecture with migration plan from current state.

### Phase 3: CRM Setup & Data Infrastructure (Day 6-10)

**Objective:** Make your CRM the reliable single source of truth for all revenue data.

**CRM Setup Checklist:**

```
FOUNDATIONAL SETUP
□ Contact/company deduplication complete (merge all duplicates)
□ Standard fields defined and documented (no more free-text chaos)
□ Custom properties created for your specific needs:
  □ Lead source (with controlled dropdown — not free text)
  □ Lead source detail (campaign/channel specifics)
  □ Lifecycle stage (with YOUR definitions — see below)
  □ Lead score (if scoring is active)
  □ ICP fit tier (from ICP Definition skill)
  □ Industry, company size, role — standardized values
□ Deal pipeline stages defined (match your actual sales process)
□ Deal properties: close date, amount, source, lost reason (required field)

LIFECYCLE STAGE DEFINITIONS
□ Define and document each stage:
  │
  ├── Subscriber — Opted in, no engagement signal
  ├── Lead — Engaged with content, filled out form, showed intent
  ├── MQL — Meets scoring threshold (behavior + fit)
  ├── SQL — Sales accepted, qualified via conversation
  ├── Opportunity — Active deal in pipeline
  ├── Customer — Closed-won
  └── Evangelist — Active reference/advocate
  │
  ├── Disqualified — Does not meet ICP criteria
  └── Recycled — Was SQL/Opp, not ready, returned to nurture
□ Lifecycle stage transitions are automated (not manual updates)
□ Stage definitions shared with sales and CS (not just marketing)

DATA QUALITY STANDARDS
□ Required fields enforced on all forms and at stage transitions
□ Naming conventions documented:
  - Campaigns: [YYYY-Q#]-[type]-[name] (e.g., 2026-Q1-webinar-product-led-growth)
  - UTM parameters: standardized, documented, no variations
  - Lists: [type]-[description]-[date] (e.g., static-webinar-attendees-2026-02)
□ Monthly data cleanup scheduled:
  - Bounce/unsubscribe removal
  - Duplicate detection and merge
  - Stale lead archival (no activity >180 days)
  - Missing required field identification
□ Data enrichment process defined:
  - Tool (Apollo, Clearbit, Clay, or manual)
  - Fields to enrich (company size, industry, revenue, tech stack)
  - Trigger: enrich on form fill or lead creation

LEAD SOURCE TRACKING
□ First-touch and last-touch source captured on every contact
□ UTM parameter structure documented and enforced:
  - utm_source: platform (google, linkedin, newsletter)
  - utm_medium: channel type (cpc, organic, email, social)
  - utm_campaign: campaign name (using naming convention above)
  - utm_content: specific asset or ad variant
  - utm_term: keyword (paid search only)
□ Offline sources tracked (events, sales-created, referrals)
□ Self-reported attribution ("how did you hear about us?") captured on key forms
```

**Output:** `crm-setup-checklist.md` — Completed checklist with all configurations documented.

### Phase 4: Automation Workflow Build (Day 11-18)

**Objective:** Build the core automation workflows that eliminate manual work and ensure no lead falls through cracks.

**Workflow 1: Lead Capture → Enrichment → Scoring → Routing**

```
TRIGGER: New contact created (any source)
│
├── Step 1: ENRICH (immediate)
│   ├── Auto-enrich with Apollo/Clearbit/Clay
│   │   └── Populate: company size, industry, revenue, role, tech stack
│   └── If enrichment fails → flag for manual review
│
├── Step 2: SCORE (immediate after enrichment)
│   │
│   ├── FIT SCORE (demographic/firmographic — does this look like ICP?)
│   │   ├── +20: Company size matches ICP Tier 1
│   │   ├── +15: Industry matches ICP Tier 1
│   │   ├── +15: Role matches buyer persona
│   │   ├── +10: Company size matches ICP Tier 2
│   │   ├── -20: Company size below minimum threshold
│   │   ├── -30: Negative ICP match (competitor, student, consultant)
│   │   └── Max fit score: 50
│   │
│   ├── ENGAGEMENT SCORE (behavioral — are they actually interested?)
│   │   ├── +5: Visited pricing page
│   │   ├── +5: Visited >3 pages in one session
│   │   ├── +10: Downloaded gated content
│   │   ├── +15: Attended webinar
│   │   ├── +20: Requested demo / started free trial
│   │   ├── +3: Opened email
│   │   ├── +5: Clicked email link
│   │   ├── -10: No activity in 30 days (decay)
│   │   └── Max engagement score: 50
│   │
│   └── TOTAL LEAD SCORE = Fit + Engagement (0-100)
│       ├── 0-30: Low → Nurture sequence
│       ├── 31-60: Medium → Monitor, accelerate if fit is high
│       ├── 61-80: High → MQL → Route to sales
│       └── 81-100: Hot → MQL → Route immediately + alert
│
├── Step 3: ROUTE (based on score + criteria)
│   ├── Score ≥61 + ICP Tier 1 → Round-robin to AE team, Slack alert, <5 min SLA
│   ├── Score ≥61 + ICP Tier 2 → Assign to SDR for qualification
│   ├── Score 31-60 → Enter nurture workflow, re-score weekly
│   ├── Score <31 → Low-touch nurture (newsletter only)
│   └── Negative ICP → Auto-disqualify, do not route
│
└── Step 4: NOTIFY
    ├── Slack alert to assigned rep with lead context
    ├── Include: company, role, pages visited, content downloaded, score breakdown
    └── Response SLA tracking begins
```

**Workflow 2: Signal-Based Trigger Sequences (Replacing Linear Nurture)**

```
Traditional nurture: Day 1 email → Day 3 email → Day 7 email (regardless of behavior)
Signal-based: Respond to what the lead actually does.

TRIGGER LIBRARY:
│
├── INTENT SIGNAL: Visited pricing page
│   └── Action: Send comparison guide, notify sales if score >50
│
├── INTENT SIGNAL: Visited pricing page 2+ times
│   └── Action: Send ROI calculator, auto-route to sales regardless of score
│
├── RESEARCH SIGNAL: Downloaded 3+ content pieces in 7 days
│   └── Action: Enroll in accelerated nurture, send case study matching their industry
│
├── COMPETITIVE SIGNAL: Visited competitor comparison page
│   └── Action: Send battlecard-derived content, notify sales
│
├── PRODUCT SIGNAL: Started free trial
│   └── Action: Begin onboarding sequence, assign to CS, pause marketing nurture
│
├── PRODUCT SIGNAL: Trial user hit activation milestone
│   └── Action: Send expansion content, notify AE for conversion conversation
│
├── PRODUCT SIGNAL: Usage dropped >50% week-over-week
│   └── Action: Trigger re-engagement sequence, alert CS
│
├── EXPANSION SIGNAL: Customer visited upgrade/pricing page
│   └── Action: Notify account owner, send expansion case study
│
└── RE-ENGAGEMENT SIGNAL: No activity in 60 days
    └── Action: Send "still relevant?" email, if no response in 14 days → archive
```

**Workflow 3: Onboarding Automation**

```
TRIGGER: Deal closed-won
│
├── Day 0: Welcome email from CS (automated, personalized with use case)
├── Day 0: Internal Slack alert to CS team with deal context
├── Day 1: Onboarding resource email (getting started guide, video walkthrough)
├── Day 3: Check-in — "Have you completed [first activation step]?"
│   ├── If yes → advance to next milestone
│   └── If no → CS reach out, offer call
├── Day 7: Feature highlight based on their use case (from deal notes)
├── Day 14: NPS or satisfaction check
├── Day 30: First value milestone check — did they achieve [primary outcome]?
│   ├── If yes → request case study/review, enter advocacy track
│   └── If no → escalate to CS manager
└── Day 60: Expansion trigger — introduce adjacent feature/tier
```

**Workflow 4: Reporting Automation**

```
WEEKLY (automated every Monday 8am):
├── Pipeline generated this week (# leads, MQLs, SQLs, opps)
├── Pipeline value and velocity changes
├── Top-performing content/channels this week
├── Lead SLA compliance (% routed within target time)
└── Delivered to: Slack #marketing-metrics + email to leadership

MONTHLY (automated 1st business day):
├── Full funnel report: visitors → leads → MQLs → SQLs → opps → closed
├── Conversion rates at each stage + month-over-month trends
├── CAC by channel (from CAC Optimizer skill)
├── Content performance dashboard
├── Tool utilization and cost report
└── Delivered to: Notion/Google Doc + presented in team meeting

QUARTERLY (automated + manual analysis):
├── Full marketing metrics review (from Marketing Metrics skill)
├── Tech stack review (utilization, cost, ROI)
├── Automation performance (workflows triggered, conversion impact)
├── Data quality scorecard
└── Delivered to: Board deck + strategy planning doc
```

**Output:** `automation-workflows.md` — All workflow blueprints with implementation instructions per your specific tools.

### Phase 5: Integration Architecture (Day 19-22)

**Objective:** Map how every tool connects and ensure data flows cleanly to a single source of truth.

**Integration Architecture Design:**

```
                    ┌──────────────────────────────────────────┐
                    │           CRM (Single Source of Truth)     │
                    │         HubSpot / Salesforce / Pipedrive  │
                    └──────────┬──────────────┬─────────────────┘
                               │              │
              ┌────────────────┼──────────────┼────────────────────┐
              │                │              │                    │
    ┌─────────▼──────┐ ┌──────▼──────┐ ┌─────▼──────┐ ┌──────────▼────┐
    │ Marketing      │ │ Analytics   │ │ Sales      │ │ Customer      │
    │ Automation     │ │ Layer       │ │ Tools      │ │ Success       │
    │                │ │             │ │            │ │               │
    │ - Email flows  │ │ - GA4       │ │ - Gong     │ │ - Intercom    │
    │ - Lead scoring │ │ - PostHog   │ │ - Calendly │ │ - Help desk   │
    │ - Forms/CTAs   │ │ - Attribution│ │ - Loom    │ │ - NPS tool    │
    └────────────────┘ └─────────────┘ └────────────┘ └───────────────┘
              │                │              │                    │
              └────────────────┼──────────────┼────────────────────┘
                               │              │
                    ┌──────────▼──────────────▼─────────────────┐
                    │         Integration Layer                  │
                    │   Native APIs > Zapier/Make > Manual       │
                    └──────────────────────────────────────────┘
                               │
                    ┌──────────▼───────────────────────────────┐
                    │         Data Warehouse / Reporting         │
                    │   (At $4M+ ARR: consider Fivetran → BQ)   │
                    └──────────────────────────────────────────┘
```

**Integration Priority Rules:**
1. **Native integration always wins.** If HubSpot connects natively to a tool, use native. It is more reliable, auto-updates, and requires zero maintenance.
2. **API connections second.** More flexible than native but require setup and monitoring.
3. **Zapier/Make third.** Use for tools with no native/API option. Keep Zaps simple (3-5 steps max). Monitor for failures.
4. **Manual/CSV upload last resort.** If you are manually exporting and importing data between tools weekly, that is a tool you need to replace or integrate.

**Data Flow Validation Checklist:**
- [ ] A lead created on the website appears in the CRM within 5 minutes
- [ ] Lead source and UTM data persist from first touch to closed deal
- [ ] A deal marked closed-won in CRM triggers onboarding automation
- [ ] Product usage data flows back to CRM (for PLG motions)
- [ ] Email engagement data syncs to CRM contact record
- [ ] Call recordings link to CRM deal/contact record
- [ ] Unsubscribes in email tool sync to CRM (compliance)
- [ ] No data lives exclusively in one tool with no way to access it elsewhere

**Output:** `integration-architecture.md` — Visual map + validation checklist + maintenance schedule.

### Phase 6: RevOps Alignment Infrastructure (Day 23-25)

**Objective:** Ensure marketing, sales, and CS operate from shared definitions, data, and handoff processes.

**Shared Definitions Document:**

| Term | Marketing Definition | Sales Definition | CS Definition | ALIGNED Definition |
|------|---------------------|-----------------|---------------|-------------------|
| Lead | Form fill / signup | "Someone interested" | N/A | Contact who has provided information and shown intent signal |
| MQL | Score ≥61 | "Marketing sent me a lead" | N/A | Contact with fit score ≥30 AND engagement score ≥31 (total ≥61) |
| SQL | N/A | "I've qualified them" | N/A | MQL that sales has accepted AND confirmed budget, authority, need, timeline |
| Opportunity | N/A | "Active deal" | N/A | SQL with defined use case, identified decision-maker, and expected close date |
| Customer | N/A | "Closed-won" | "My account" | Signed contract with live access to product |
| Churn | N/A | N/A | "They cancelled" | Customer who has not renewed or has given notice of non-renewal |

**Handoff SLAs:**

| Handoff | From | To | SLA | Escalation |
|---------|------|----|-----|------------|
| MQL → Sales | Marketing | SDR/AE | Respond within 1 hour (business hours) | Auto-reassign at 2 hours, manager alert at 4 hours |
| SQL → Opportunity | SDR | AE | Accept/reject within 24 hours | Manager notified if no action |
| Closed-Won → Onboarding | Sales | CS | CS intro within 24 hours | CS manager alerted at 48 hours |
| Churn risk → Save attempt | CS | AE/Mgr | Response within 4 hours | VP alerted at 24 hours |
| Disqualified → Recycle | Sales | Marketing | Reason documented + returned within 48 hours | No lead sits in limbo |

**Feedback Loops:**

```
SALES → MARKETING (weekly):
├── Which MQLs were actually qualified? (MQL acceptance rate)
├── What are prospects actually asking about? (message validation)
├── Which content helped close deals? (content ROI)
└── What objections are you hearing? (feeds Competitive Intel, Messaging)

CS → MARKETING (monthly):
├── Which customers are happy enough for case studies/references?
├── What are customers struggling with? (feeds Content Engine)
├── What expansion signals are you seeing? (feeds NRR Engine)
└── What feature requests keep coming up? (feeds Product Marketing)

MARKETING → SALES (weekly):
├── What content is performing and can be used in outreach?
├── What accounts are showing intent signals?
├── What campaigns are running that sales should reference?
└── Pipeline forecast and attribution data
```

**Output:** `revops-alignment.md` — Shared definitions, SLAs, feedback loop templates, meeting cadences.

### Phase 7: Process Documentation & SOPs (Day 26-28)

**Objective:** Document every repeatable marketing process so it runs without tribal knowledge.

**Campaign Launch Checklist:**

```
PRE-LAUNCH (3-5 days before)
□ Campaign brief completed and approved
  □ Goal, target audience, channels, messaging, success metrics
  □ References Positioning & Messaging framework
□ Content assets created and reviewed
  □ Landing page live and tested (mobile + desktop)
  □ Email sequences drafted, reviewed, and scheduled
  □ Social posts drafted and scheduled
  □ Ad creative approved and uploaded
□ Tracking configured
  □ UTM parameters set (following naming convention)
  □ Conversion tracking verified (form submissions, signups)
  □ CRM campaign created and linked
  □ Goals/events set in analytics
□ Automation workflows activated
  □ Lead routing rules confirmed
  □ Nurture sequences connected
  □ Internal notifications tested
□ Team briefed
  □ Sales knows campaign is launching and what to expect
  □ CS knows (if relevant to existing customers)

LAUNCH DAY
□ All channels activated
□ First 2 hours: monitor for broken links, form errors, tracking issues
□ Quick Slack update to team with launch confirmation

POST-LAUNCH (ongoing)
□ Day 1: Quick performance check — is traffic/engagement as expected?
□ Week 1: First performance snapshot — leads, conversion rate, cost
□ Week 2-4: Optimize — pause underperformers, scale winners
□ End of campaign: Full retrospective with metrics vs. goals
□ Update campaign performance database
```

**Lead Management SOP:**

```
NEW LEAD ARRIVES:
1. Auto-enrichment fires (see Workflow 1 in Phase 4)
2. Lead scored automatically
3. Lead routed per score/fit rules
4. If routed to sales:
   a. Rep receives Slack notification with full context
   b. Rep has 1 hour to make first contact attempt
   c. If no response: 3 attempts over 5 business days
   d. If still no response: return to marketing nurture with notes
5. If routed to nurture:
   a. Enters appropriate signal-based sequence
   b. Re-scored weekly based on new engagement
   c. When score threshold hit → re-route to sales
6. Monthly: Review all leads stuck in any stage >30 days → action or archive

DISQUALIFICATION RULES:
- Competitor employee → auto-disqualify, tag reason
- Personal email + no company → low-priority nurture unless high engagement
- Company below minimum size threshold → auto-disqualify
- Explicit "not interested" → remove from active sequences, retain in CRM
- Bounced email → remove after 2 consecutive bounces
```

**Reporting Cadence SOP:**

```
DAILY (automated):
- Key metrics dashboard visible to team (pipeline, MQLs, website traffic)
- No manual work required — dashboard auto-refreshes

WEEKLY (Monday, 15 minutes):
- Automated report delivered to Slack (see Workflow 4 in Phase 4)
- Marketing team reviews and flags anomalies
- Sales-marketing sync: MQL quality, pipeline handoff, feedback

MONTHLY (first week of month, 1 hour):
- Full funnel analysis with month-over-month comparison
- Channel performance review (feeds CAC Optimizer)
- Content performance review (feeds Content Engine)
- Budget actuals vs. plan (feeds Marketing Budget)
- Action items documented and assigned

QUARTERLY (strategic review, 2-3 hours):
- Full marketing metrics review per Marketing Metrics framework
- Tech stack utilization and cost review
- Process improvement identification
- OKR/goal review and reset
- Board-ready marketing summary
```

**Output:** `marketing-sops/` — Directory of all SOPs, checklists, and templates.

### Phase 8: AI Agent Deployment for Marketing Ops (Day 29-30)

**Objective:** Deploy AI agents to handle operational tasks that used to require manual work or dedicated ops headcount.

**AI Agent Use Cases at $1M-5M ARR:**

| Agent | What It Does | Tools/Approach | ROI |
|-------|-------------|----------------|-----|
| Lead Router | Scores and routes leads in real-time based on fit + behavior signals | CRM workflow + AI scoring model | Cuts response time from hours to minutes |
| Content Personalizer | Selects and customizes nurture content based on industry, role, behavior | Marketing automation + AI content generation | 15-30% higher engagement vs. generic nurture |
| Data Cleaner | Identifies duplicates, enriches missing fields, flags bad data weekly | CRM + enrichment API + scheduled AI workflow | Saves 4-8 hours/month of manual cleanup |
| Report Generator | Pulls data, generates narrative insights, flags anomalies | Analytics APIs + AI summary | Saves 3-5 hours/week on reporting |
| Campaign Optimizer | Monitors campaign performance and recommends reallocation | Ad platforms + analytics + AI analysis | 10-20% better CAC through faster optimization |
| Competitive Monitor | Tracks competitor changes (pricing, features, positioning) and alerts team | Web monitoring + AI analysis | Continuous intel without manual tracking |

**Implementation Priority:**
1. **Lead routing and scoring** — Highest impact, most mature technology
2. **Reporting automation** — High time savings, relatively easy to implement
3. **Data cleanup** — Prevents compounding data quality problems
4. **Content personalization** — Meaningful lift but requires more content assets
5. **Campaign optimization** — Valuable but needs sufficient data volume
6. **Competitive monitoring** — Nice to have, feeds [Competitive Intel](./03-competitive-intel.md)

**Output:** `ai-agent-playbook.md` — Implementation plan with specific tools, prompts, and workflows for each agent.

---

## Marketing Ops Maturity Model

Use this to assess where you are and what to build next.

| Dimension | Crawl ($1-2M ARR) | Walk ($2-3.5M ARR) | Run ($3.5-5M ARR) |
|-----------|-------------------|--------------------|--------------------|
| **CRM** | CRM exists, partially used, lots of manual entry | CRM is system of record, lifecycle stages defined, basic automation | CRM is clean, fully automated, trusted data source for all teams |
| **Lead Management** | Manual routing, no scoring, leads sit for days | Basic scoring model, automated routing, <4hr response time | AI-powered scoring, real-time routing, <1hr response time, full SLAs |
| **Automation** | Email blasts, maybe a welcome sequence | 3-5 active workflows (nurture, onboarding, routing) | Signal-based triggers, 10+ workflows, minimal manual intervention |
| **Data Quality** | Duplicates everywhere, inconsistent fields, no enrichment | Monthly cleanup, enrichment on key leads, naming conventions | Automated cleanup, enrichment on all leads, data quality score >90% |
| **Integration** | Tools disconnected, CSV imports, copy-pasting between apps | Key tools connected (CRM ↔ email ↔ forms), some Zapier | All tools integrated, data flows automatically, single source of truth |
| **Reporting** | Manual spreadsheets, updated when someone asks | Automated weekly dashboard, monthly manual deep-dive | Real-time dashboards, automated anomaly alerts, AI-generated insights |
| **RevOps Alignment** | No shared definitions, marketing and sales argue about MQLs | Written definitions, basic SLAs, monthly sync meetings | Shared dashboards, enforced SLAs, weekly feedback loops, unified data model |
| **AI Agents** | Using ChatGPT for ad hoc tasks | 1-2 automated AI workflows (reporting, content drafts) | AI agents handling routing, scoring, reporting, personalization at scale |
| **Documentation** | Tribal knowledge, nothing written down | Key SOPs documented (lead management, campaign launch) | Complete playbook, any new hire can execute core processes in week 1 |

**Assessment instructions:**
1. Score yourself on each dimension (1-3: Crawl/Walk/Run)
2. Average score <1.5 = Focus on Crawl priorities
3. Average score 1.5-2.5 = Focus on Walk priorities
4. Average score >2.5 = Focus on Run priorities + preparing for $5M+ scale

---

## Data Quality Standards Document

Data quality is the silent killer of marketing ops. Bad data leads to wrong scoring, bad routing, inaccurate reporting, and wasted spend. Enforce these standards:

**Required Fields (must be populated for every contact):**
- Email address (validated format)
- First name, last name
- Company name
- Lead source (first-touch)
- Lifecycle stage
- Created date

**Required at MQL stage (must be populated before routing to sales):**
- Job title / role
- Company size (employee count or revenue range)
- Industry
- Lead score (fit + engagement)
- Lead source detail (campaign/content)

**Data Quality Scoring (run monthly):**

| Metric | Target | How to Measure |
|--------|--------|---------------|
| Email validity rate | >95% | Bounced emails / total emails |
| Field completeness (required fields) | >90% | Contacts with all required fields / total contacts |
| Duplicate rate | <5% | Duplicate contacts / total contacts |
| Lifecycle stage accuracy | >85% | Contacts in correct stage / total contacts (spot-check sample) |
| Lead source populated | >95% | Contacts with lead source / total contacts |
| Stale data rate | <15% | Contacts with no activity in 180 days / total active contacts |

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Lead response time (MQL → first sales touch) | <1 hour | Every hour of delay reduces conversion by 10%+ |
| MQL → SQL acceptance rate | 40-60% | Below 40% = scoring is broken; above 70% = bar is too low |
| Automation coverage | >80% of leads touched by automation | Measures operational leverage |
| Data quality score | >85% (composite) | Foundation for everything — scoring, routing, reporting |
| Tool utilization rate | >70% of paid features used | Below 70% = overpaying, need to downgrade or train |
| Total tool cost as % of marketing budget | <15% | Tools should enable, not consume, the budget |
| SLA compliance rate | >90% of handoffs within SLA | Broken SLAs = leaked pipeline |
| Time to implement new campaign | <5 business days from brief to live | Measures operational velocity |
| Integration reliability | >99% uptime on critical data flows | Broken integrations = silent data loss |
| Reporting accuracy | Metrics match across marketing, sales, finance (within 5%) | If numbers do not match, nobody trusts any of them |

---

## Anti-Patterns (What NOT to Do)

- **Don't buy enterprise tools for startup problems.** Salesforce Enterprise, Marketo, 6sense — these are built for companies with ops teams. At $1M-5M ARR, HubSpot Professional or equivalent is almost always the right answer. You do not need a Ferrari to drive to the grocery store.
- **Don't automate a broken process.** If your lead handoff process is a mess, automating it just creates an automated mess faster. Fix the process first, then automate.
- **Don't skip CRM hygiene.** Every month you do not clean your data, the problem compounds. Bad data is not neutral — it actively makes scoring, routing, and reporting worse.
- **Don't build before you document.** Write the SOP first, then build the automation. If you cannot describe the workflow in a document, you cannot build it reliably.
- **Don't integrate everything to everything.** Not every tool needs a bidirectional sync. Map the actual data you need to flow, and only build those integrations. Every integration is a maintenance burden.
- **Don't let tools drive process.** "We bought HubSpot so now we do things the HubSpot way" is backwards. Define your process, then configure the tool to support it.
- **Don't have marketing, sales, and CS use different definitions.** If marketing's MQL is not the same as what sales expects, the handoff fails every time. Align definitions before you build anything.
- **Don't ignore lead decay.** A lead scored 85 three months ago is not still an 85. Build time-decay into your scoring model — engagement fades, and your data should reflect that.
- **Don't over-automate nurture.** Sending 12 emails over 6 weeks to someone who downloaded one ebook is not nurture, it is spam. Signal-based triggers beat linear sequences.
- **Don't go live without testing the full flow.** Before launching any automation, create a test lead and follow it through the entire journey — enrichment, scoring, routing, notification, nurture. Find the breaks before real leads hit them.

---

## Integration Points

```
Marketing Ops & Tech Stack outputs → consumed by:

┌──────────────────────────────┐
│ Tech Stack Blueprint          │──→ Marketing Budget (07) — tool cost input
│                              │──→ All skills (01-15) — tools they use to execute
├──────────────────────────────┤
│ CRM & Data Infrastructure    │──→ Marketing Metrics (15) — data quality for reporting
│                              │──→ ICP Definition (02) — ICP fit scoring in CRM
│                              │──→ Pipeline Accelerator (13) — deal data and pipeline views
│                              │──→ NRR Engine (14) — customer health data
├──────────────────────────────┤
│ Automation Workflows         │──→ Content Engine (08) — content distribution automation
│                              │──→ GEO Optimizer (09) — content syndication workflows
│                              │──→ Sales Enablement (10) — lead routing to sales
│                              │──→ CAC Optimizer (12) — campaign automation
│                              │──→ Pipeline Accelerator (13) — deal acceleration triggers
│                              │──→ NRR Engine (14) — expansion and churn triggers
├──────────────────────────────┤
│ RevOps Alignment             │──→ GTM Strategy (05) — unified go-to-market execution
│                              │──→ Marketing Metrics (15) — shared metric definitions
│                              │──→ Sales Enablement (10) — handoff process
├──────────────────────────────┤
│ Integration Architecture     │──→ All skills — ensures data flows between tools
├──────────────────────────────┤
│ AI Agents                    │──→ Content Engine (08) — AI content workflows
│                              │──→ Competitive Intel (03) — automated monitoring
│                              │──→ Customer Research (01) — signal analysis
│                              │──→ CAC Optimizer (12) — campaign optimization
├──────────────────────────────┤
│ Process SOPs                 │──→ Launch Playbook (11) — campaign launch process
│                              │──→ All execution skills (08-14) — operational playbooks
└──────────────────────────────┘

Inputs consumed FROM other skills:
┌──────────────────────────────┐
│ GTM Strategy (05)            │──→ Growth model determines stack architecture
│ Marketing Budget (07)        │──→ Tool budget envelope
│ ICP Definition (02)          │──→ Scoring criteria and fit definitions
│ Marketing Metrics (15)       │──→ What to measure determines what to track
│ All execution skills (08-14) │──→ Process requirements determine automation needs
└──────────────────────────────┘
```

---

## Refresh Cadence

| Activity | Frequency | Trigger |
|----------|-----------|---------|
| Tech stack audit | Quarterly | Or when adding any new tool |
| CRM data cleanup | Monthly | Automated where possible |
| Lead scoring model review | Quarterly | Or when MQL acceptance rate drifts outside 40-60% |
| Automation workflow audit | Quarterly | Check for broken workflows, outdated sequences |
| Integration health check | Monthly | Verify all data flows are running |
| SOP updates | Quarterly | Or when process changes |
| RevOps alignment meeting | Monthly | Marketing + Sales + CS leadership |
| Full ops maturity assessment | Every 6 months | Use maturity model above |
| Tool contract review | Annually | 60 days before renewal — renegotiate or cut |
| AI agent performance review | Monthly | Are agents delivering expected ROI? |
