# Healthcare Vertical Playbook Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create Skill #17 — a healthcare vertical playbook that adapts the 16-skill marketing system for healthtech B2B2C SaaS at $1M-5M ARR.

**Architecture:** A skill directory (`marketing-healthcare-vertical/`) containing `SKILL.md` (concise overview) and `workflow.md` (full lifecycle-based execution guide with 7 phases). Nine reference documents in a `references/` subdirectory provide healthcare-specific deep-dives on compliance, channels, buying groups, proof points, ICPs, messaging, patient adoption, competitive landscape, and safety. The system index skill is updated to include Skill 17.

**Tech Stack:** Markdown files following existing skill conventions (YAML frontmatter, section structure). No code dependencies.

---

## Task 1: Create skill directory and SKILL.md

**Files:**
- Create: `skills/marketing-healthcare-vertical/SKILL.md`

**Step 1: Create the directory**

```bash
mkdir -p /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical
```

**Step 2: Write SKILL.md**

Write `skills/marketing-healthcare-vertical/SKILL.md` with this content:

```markdown
---
name: marketing-healthcare-vertical
description: Use when marketing a healthtech B2B2C SaaS product to healthcare organizations. Adapts the entire 16-skill marketing system for healthcare-specific buyers, compliance requirements, channels, and the B2B2C value chain. Covers health systems, physician practices, health plans, and employers as buyers, with downstream patient/member adoption enablement.
---

# Healthcare Vertical Playbook

## Overview

Healthcare B2B2C SaaS has a fundamentally different marketing motion than horizontal SaaS. Buyers evaluate clinical evidence, not feature lists. Procurement involves compliance officers, not just department heads. Sales cycles run 6-18 months, not 30-60 days. And your product's value is ultimately measured by patient/member outcomes your business customer achieves — not by the software itself.

This skill adapts every layer of the marketing system for healthtech reality: who the buyers are, how they evaluate, what they trust, where they gather, what compliance gates exist, and how to prove your B2B2C value chain works.

## When to Use

- Marketing a healthtech SaaS product to healthcare organizations
- Entering the healthcare vertical from a horizontal product
- Existing healthcare marketing lacks clinical credibility or compliance rigor
- Sales cycles are stalling in procurement or security review
- Patient/member adoption is low and undermining retention and expansion
- Need to build a healthcare-specific GTM motion, channel strategy, or content plan

**Don't use when:** Your product serves healthcare but sells exclusively to non-clinical buyers (e.g., a generic HR tool sold to hospital HR departments) with no clinical or patient-facing component.

## Quick Reference

| Phase | Duration | Output |
|-------|----------|--------|
| Healthcare market assessment | Day 1-2 | Healthcare ICP profiles, buying journey, compliance gate map |
| Healthcare positioning & differentiation | Day 3-4 | Positioning statement, battlecards, messaging per buyer role |
| Healthcare GTM & channel strategy | Day 5-7 | Channel prioritization, pilot GTM playbook, conference strategy |
| Healthcare content & thought leadership | Day 8-10 | Content calendar, compliance-reviewed templates, thought leadership plan |
| Healthcare sales enablement & pipeline | Day 11-13 | Buying committee collateral, security questionnaire kit, pilot framework |
| Patient/member adoption enablement | Day 14-15 | Adoption toolkit, co-marketing framework, adoption metrics |
| Healthcare metrics, compliance & ops | Day 16-17 | Healthcare dashboard, compliance review SOP, CRM configuration |

## Core Deliverables

- **Healthcare ICP Profiles** — Buyer archetypes across health systems, practices, health plans, employers
- **Healthcare Positioning & Messaging** — Clinical credibility framing, evidence-based value props, role-specific messaging
- **Healthcare Channel Strategy** — Scored channel prioritization (conferences, trade media, EHR marketplaces, associations)
- **Pilot GTM Playbook** — Proof-of-concept as a core GTM motion with pilot-to-contract conversion framework
- **Compliance-Safe Content System** — Templates, approval workflows, and guardrails for healthcare marketing content
- **Patient Adoption Toolkit** — Enablement materials for helping B2B customers drive downstream adoption
- **Healthcare Marketing Dashboard** — KPIs including pilot conversion, adoption rate, clinical advisory board, conference ROI

## Common Mistakes

- Leading with technology features instead of clinical/operational/financial outcomes
- Treating HIPAA compliance as a differentiator instead of table stakes
- Skipping the pilot — trying to close enterprise healthcare without proof-of-concept
- Using patient data in marketing without explicit documented consent
- Ignoring the clinical champion while targeting only the C-suite or IT
- Marketing identically to health systems and small physician practices
- Running healthcare campaigns on consumer or horizontal SaaS playbooks
- Underinvesting in security/compliance materials that unblock procurement

## Integration

**Overlays:** All 16 existing skills — this is a vertical lens applied across the system

**Key upstream inputs:** conducting-customer-research (clinical user interviews), defining-icp-segmentation (healthcare buyer archetypes), building-positioning-messaging (clinical credibility framing)

**Key downstream outputs:** running-content-engine (compliance-safe content), creating-sales-enablement (buying committee materials), growing-nrr (adoption-driven retention), designing-gtm-strategy (pilot GTM motion)

**Refresh:** Healthcare ICP and channel strategy quarterly. Compliance guide when regulations change. Full playbook annually or after entering a new healthcare sub-segment.

See `workflow.md` for the full 7-phase execution guide with healthcare-specific templates, compliance checklists, channel scoring matrices, and buyer role guides. See `references/` for deep-dive documents on compliance, channels, buying groups, ICPs, messaging, proof points, patient adoption, competitive landscape, and safety.
```

**Step 3: Verify the file was created**

```bash
cat /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/SKILL.md | head -5
```

Expected: YAML frontmatter with `name: marketing-healthcare-vertical`

**Step 4: Commit**

```bash
cd /Users/amogha/Desktop/Teach_AI && git add skills/marketing-healthcare-vertical/SKILL.md && git commit -m "feat: add healthcare vertical playbook SKILL.md (skill 17)"
```

---

## Task 2: Write workflow.md — Purpose, Business Context, and Phase 1-2

**Files:**
- Create: `skills/marketing-healthcare-vertical/workflow.md`

**Step 1: Write the first portion of workflow.md**

Write `skills/marketing-healthcare-vertical/workflow.md` containing:

- **Header** matching existing convention: `> **Vertical Overlay** | Skill 17 of 17`
- **Purpose section** (~150 words): Healthcare B2B2C SaaS marketing requires a different operating system. This skill adapts the entire marketing system.
- **Business Context ($1M-5M ARR)** section (~200 words): Healthcare-specific constraints — long sales cycles, buying committees, compliance gates, pilot-first culture, clinical evidence requirements, B2B2C value chain complexity.
- **Phase 1: Healthcare Market Assessment (Day 1-2)**: Detailed workflow adapting skills 01 and 02. Include:
  - Required inputs from upstream skills with healthcare-specific additions
  - Healthcare sub-segment selection framework (health systems vs. practices vs. health plans vs. employers)
  - Clinical vs. operational vs. IT buyer mapping
  - Healthcare buying journey map template (trigger → research → clinical evaluation → IT/security review → procurement → pilot → contract → implementation → adoption)
  - Compliance gate map template
  - Output: `healthcare-market-assessment.md`
  - Cross-reference to `references/icp-templates.md` and `references/buying-group-guide.md`
- **Phase 2: Healthcare Positioning & Competitive Differentiation (Day 3-4)**: Detailed workflow adapting skills 03 and 04. Include:
  - Healthcare evidence hierarchy (RCT > observational > case study > testimonial > claim)
  - Clinical credibility building framework (advisory boards, published outcomes, peer citations)
  - B2B2C value articulation template (business outcome + patient/member outcome)
  - Healthcare competitive positioning matrix (EHR-native vs. best-of-breed vs. point solution)
  - HIPAA/security as table-stakes positioning guidance
  - Output: `healthcare-positioning.md`
  - Cross-reference to `references/messaging-examples.md`, `references/competitive-landscape.md`, `references/proof-points-framework.md`

**Formatting conventions** (match existing skills):
- Use `###` for phase headers
- Use `**Objective:**` bold for phase objectives
- Use code blocks for templates and frameworks
- Use tables for scoring matrices
- Use bullet lists for considerations
- Reference other skills using directory names in brackets: `[Customer Research](../conducting-customer-research/)`

**Step 2: Verify word count and structure**

```bash
wc -w /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/workflow.md
```

Expected: ~2000-3000 words for these sections

**Step 3: Commit**

```bash
cd /Users/amogha/Desktop/Teach_AI && git add skills/marketing-healthcare-vertical/workflow.md && git commit -m "feat: add healthcare workflow phases 1-2 (market assessment, positioning)"
```

---

## Task 3: Write workflow.md — Phases 3-4

**Files:**
- Modify: `skills/marketing-healthcare-vertical/workflow.md` (append)

**Step 1: Append Phase 3 and Phase 4 to workflow.md**

- **Phase 3: Healthcare GTM Motion & Channel Strategy (Day 5-7)**: Adapting skill 05. Include:
  - Healthcare GTM motion decision framework: pilot-first enterprise vs. land-and-expand vs. platform play
  - Healthcare Channel Prioritization Matrix (scored table with ~12 healthcare channels): HIMSS, HLTH, AHIP, Becker's conferences, Healthcare IT News/Fierce Healthcare media, EHR app marketplaces (Epic App Orchard, Cerner Open), health system innovation programs, GPO partnerships, clinical association sponsorships, healthcare LinkedIn communities, specialty conferences, referral/peer networks
  - Scoring: ICP Presence (25%), Competitive Gap (20%), Resource Fit (20%), Time to Impact (15%), Measurability (10%), Scalability (10%)
  - Pilot-as-GTM playbook: pilot proposal template, success criteria, pilot-to-contract conversion checklist
  - Healthcare conference ROI framework: pre-conference, at-conference, post-conference workflow
  - 90-day healthcare GTM plan template
  - The 6-18 month sales cycle survival guide (how to generate enough pipeline to survive long cycles)
  - Output: `healthcare-gtm-plan.md`
  - Cross-reference to `references/channel-map.md`

- **Phase 4: Healthcare Content & Thought Leadership (Day 8-10)**: Adapting skill 08. Include:
  - Healthcare content funnel allocation (BOFU 50%, MOFU 35%, TOFU 15% — same as general but with healthcare content types)
  - Healthcare BOFU content types: clinical comparison pages, integration/interoperability pages, compliance/security pages, ROI calculators with healthcare metrics, "switching from [legacy vendor]" guides
  - Healthcare MOFU: outcome case studies, clinical workflow guides, implementation playbooks, webinars with clinical advisors
  - Healthcare TOFU: original outcomes research, clinical advisory board thought leadership, industry benchmark reports
  - Compliance-safe content production workflow (legal/clinical review gates woven into content pipeline)
  - Case study approval workflow: patient consent → de-identification → BAA review → legal sign-off → clinical accuracy check
  - Healthcare-specific content distribution checklist (trade publications, CME, conference proceedings, specialty associations)
  - Content for each buyer role (what the clinical champion needs vs. what the CIO needs vs. what procurement needs)
  - Output: `healthcare-content-plan.md`
  - Cross-reference to `references/compliance-guide.md`, `references/proof-points-framework.md`, `references/safety-usage-guide.md`

**Step 2: Verify structure**

```bash
wc -w /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/workflow.md
```

Expected: ~4500-6000 words total

**Step 3: Commit**

```bash
cd /Users/amogha/Desktop/Teach_AI && git add skills/marketing-healthcare-vertical/workflow.md && git commit -m "feat: add healthcare workflow phases 3-4 (GTM channels, content)"
```

---

## Task 4: Write workflow.md — Phases 5-7, Key Metrics, Anti-Patterns, Integration Points, Refresh Cadence

**Files:**
- Modify: `skills/marketing-healthcare-vertical/workflow.md` (append)

**Step 1: Append remaining phases and closing sections**

- **Phase 5: Healthcare Sales Enablement & Pipeline (Day 11-13)**: Adapting skills 10 and 13. Include:
  - Healthcare buying group roles table: Clinical Champion, IT/Security, Compliance/Legal, Procurement, C-Suite — with each role's priorities, objections, messaging hooks, and preferred content format
  - Role-specific collateral checklist (what to build for each role)
  - Health system procurement process guide: RFP/RFI response, security questionnaire rapid-response kit, BAA execution checklist, legal review acceleration
  - Pilot success framework: define success criteria upfront, measure against them, build the expansion case before the pilot ends
  - Clinical advisory board as GTM lever: recruitment, structure, how to leverage for credibility, content, and introductions
  - Reference selling program: how to build, maintain, and deploy customer references in healthcare
  - Multi-site expansion strategy within health systems
  - Output: `healthcare-sales-enablement.md`
  - Cross-reference to `references/buying-group-guide.md`, `references/competitive-landscape.md`

- **Phase 6: Patient/Member Adoption Enablement (Day 14-15)**: Adapting skill 14. Include:
  - The B2B2C flywheel: higher adoption → better outcomes → stronger case studies → easier sales → more customers → more adoption data
  - Patient adoption toolkit contents: co-branded launch materials, patient communication templates, adoption tracking dashboards, best practices guides
  - Adoption metrics that matter: activation rate, engagement depth, sustained usage, clinical outcome correlation
  - Building "adoption as a feature" into the sales narrative
  - Co-marketing with customers on adoption outcomes
  - Expansion revenue from adoption success (usage-based upsell, multi-site expansion, additional modules)
  - Output: `healthcare-adoption-enablement.md`
  - Cross-reference to `references/patient-adoption-playbook.md`

- **Phase 7: Healthcare Metrics, Compliance & Ops (Day 16-17)**: Adapting skills 15 and 16. Include:
  - Healthcare marketing dashboard template with 10 key metrics (from design doc: pilot conversion, sales cycle, advisory board, adoption rate, ICP pipeline %, security questionnaire turnaround, conference ROI, referenceable accounts, compliance pass rate, expansion from adoption)
  - Compliance-safe analytics guidance (what you can/can't track, patient data boundaries)
  - Healthcare CRM configuration: custom stages (pilot, security review, BAA execution), multi-stakeholder tracking, long-cycle pipeline management
  - Marketing compliance review SOP: who reviews what, turnaround times, escalation paths
  - Safety guardrails for AI-generated healthcare content
  - Conference ROI tracking framework
  - Output: `healthcare-marketing-ops.md`
  - Cross-reference to `references/compliance-guide.md`, `references/safety-usage-guide.md`

- **Key Metrics section**: Use the 10-row table from the design doc verbatim.

- **Anti-Patterns section**: Use the 9 anti-patterns from the design doc verbatim.

- **Integration Points section**: Use the ASCII diagram from the design doc showing how Skill 17 overlays onto skills 01-16.

- **Refresh Cadence table**: Healthcare ICP and channel strategy quarterly. Compliance guide when regulations change. Buying group guide semi-annually. Patient adoption playbook quarterly. Full playbook annually.

**Step 2: Verify total document**

```bash
wc -w /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/workflow.md
```

Expected: ~7000-9000 words total

**Step 3: Commit**

```bash
cd /Users/amogha/Desktop/Teach_AI && git add skills/marketing-healthcare-vertical/workflow.md && git commit -m "feat: add healthcare workflow phases 5-7, metrics, anti-patterns, integration"
```

---

## Task 5: Write reference docs — compliance-guide.md, channel-map.md, buying-group-guide.md

**Files:**
- Create: `skills/marketing-healthcare-vertical/references/compliance-guide.md`
- Create: `skills/marketing-healthcare-vertical/references/channel-map.md`
- Create: `skills/marketing-healthcare-vertical/references/buying-group-guide.md`

**Step 1: Create references directory**

```bash
mkdir -p /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/references
```

**Step 2: Write compliance-guide.md (~800-1000 words)**

Content to cover:
- **HIPAA Marketing Rules**: What constitutes marketing under HIPAA, authorization requirements, exceptions (treatment communications, health-related products/services by covered entity)
- **BAA Requirements for Testimonials**: When a BAA is needed for customer case studies, what can be shared, patient vs. organization-level data
- **FDA Digital Health Claims**: When FDA oversight applies (SaMD, clinical decision support, digital therapeutics), marketing claims that trigger regulatory scrutiny, safe harbor language
- **State Privacy Laws**: Overview of state-level considerations beyond HIPAA (CCPA/CPRA for CA, state health data privacy acts like WA My Health My Data Act)
- **Compliance Checklists by Content Type**: Checklist for each content type:
  - Case study: patient consent check, de-identification, BAA review, clinical accuracy, legal approval
  - Blog post: claims review, source citation, disclaimers if needed
  - Social media: no PHI, no unsupported clinical claims, adverse event monitoring for digital therapeutics
  - Email marketing: CAN-SPAM + healthcare-specific consent, opt-out compliance
  - Testimonials: written consent, scope limitations, de-identification
  - Paid ads: platform-specific healthcare ad policies (Google, LinkedIn, Meta)

**Step 3: Write channel-map.md (~600-800 words)**

Content to cover:
- Scored healthcare channel ranking table (12+ channels) with columns: Channel, ICP Presence (1-5), Cost Level, Time to Pipeline, Best For, Notes
- Channels to include: HIMSS conference, HLTH conference, AHIP conference, Becker's events, Healthcare IT News/Modern Healthcare/Fierce Healthcare media, EHR app marketplaces (Epic App Orchard/Cerner Open), health system innovation programs, GPO partnerships, clinical association sponsorships (AMA, ANA, specialty societies), healthcare LinkedIn communities/groups, specialty conferences (by clinical area), peer referral networks, health IT analyst firms (KLAS, Gartner, Chilmark)
- Conference-specific guidance: booth vs. speaking vs. sponsorship ROI at different ARR stages
- Channel archetypes for healthcare: "Clinical Credibility First" vs. "IT/Digital Health Buyer" vs. "Practice/SMB Buyer"

**Step 4: Write buying-group-guide.md (~800-1000 words)**

Content to cover:
- 5-6 healthcare buyer archetypes, each with: role title, what they care about, how they evaluate, objections, messaging hooks, preferred content format, engagement channel
  - **Clinical Champion** (physician, nurse leader, care manager): outcomes, workflow impact, clinical evidence, peer validation
  - **IT/Security Leader** (CIO, CISO, VP IT): integration, security posture, infrastructure impact, EHR compatibility
  - **Compliance/Legal** (CCO, privacy officer, legal counsel): regulatory risk, BAA terms, data handling, audit readiness
  - **Procurement** (VP supply chain, purchasing): cost, contract terms, vendor management, implementation timeline
  - **C-Suite** (CEO, COO, CMO): strategic value, competitive advantage, ROI, board-reportable outcomes
  - **Operations Leader** (VP operations, practice manager): efficiency, workflow, staff adoption, training burden
- Buying group engagement matrix: which roles to engage at which stage of the buying journey
- Multi-threading strategy: how to build relationships across the buying group simultaneously

**Step 5: Commit**

```bash
cd /Users/amogha/Desktop/Teach_AI && git add skills/marketing-healthcare-vertical/references/compliance-guide.md skills/marketing-healthcare-vertical/references/channel-map.md skills/marketing-healthcare-vertical/references/buying-group-guide.md && git commit -m "feat: add healthcare reference docs (compliance, channels, buying groups)"
```

---

## Task 6: Write reference docs — proof-points-framework.md, icp-templates.md, messaging-examples.md

**Files:**
- Create: `skills/marketing-healthcare-vertical/references/proof-points-framework.md`
- Create: `skills/marketing-healthcare-vertical/references/icp-templates.md`
- Create: `skills/marketing-healthcare-vertical/references/messaging-examples.md`

**Step 1: Write proof-points-framework.md (~600-800 words)**

Content to cover:
- **Healthcare Evidence Hierarchy**: Ranked list of evidence types by credibility in healthcare — RCT/clinical trial > peer-reviewed observational study > validated outcomes data > third-party analyst validation > customer case study with metrics > customer testimonial > vendor claim
- **Outcome Study Structure**: Template for documenting clinical/operational/financial outcomes — baseline measurement, intervention period, post-intervention measurement, statistical significance, confounders addressed
- **Case Study Template (Compliance-Safe)**: Organization profile (anonymized if needed), challenge, solution, implementation, outcomes (with metrics), quote (with consent documentation), disclaimer language
- **Peer-Reviewed Publication Strategy**: When and how to pursue peer-reviewed publication of outcomes, selecting journals, working with academic medical center customers on co-authored research
- **Pilot Results Formatting**: How to present pilot data credibly — sample size transparency, limitations acknowledged, comparison to benchmarks, next steps
- **Building a Proof Points Library**: How to systematically collect, categorize, and deploy proof points across marketing and sales

**Step 2: Write icp-templates.md (~800-1000 words)**

Content to cover:
- 5 pre-built ICP profiles, each with: organization type, size range, annual revenue/budget, typical pain points, buying trigger events, decision-making structure, sales cycle length, ACV range, key evaluation criteria, channels where they research
  - **Health System / IDN** (500+ beds, multi-site): Innovation office, long procurement, pilot-first, $50K-500K ACV
  - **Community Hospital** (100-500 beds): Leaner process, IT-driven, budget-sensitive, $25K-150K ACV
  - **Physician Practice / Ambulatory** (5-50 providers): Practice manager or physician decision, fast cycle, $5K-50K ACV
  - **Health Plan / Payer** (100K+ members): RFP-driven, compliance-heavy, actuary-validated ROI, $100K-1M ACV
  - **Employer / Self-Insured** (5K+ employees): Benefits team, broker-influenced, member engagement focus, $25K-200K ACV
- Negative ICP guidance for healthcare: who NOT to target (organizations too small, regulatory environments too restrictive, technology readiness too low)
- Tier 1/2/3 prioritization framework for healthcare segments

**Step 3: Write messaging-examples.md (~800-1000 words)**

Content to cover:
- **Healthcare Value Prop Framework**: Template structure — [Buyer role] at [organization type] can [outcome] by [mechanism], resulting in [measurable impact] for [patients/members]
- **Sample Homepage Messaging**: 2-3 headline + subhead + CTA examples for healthtech B2B2C positioning
- **Email Sequence Examples**: 3-email cold outreach sequence to a health system buyer — personalized, outcome-focused, compliance-safe
- **Ad Copy Examples**: LinkedIn ad copy variants targeting health system IT, clinical, and executive buyers
- **Objection-Handling Language**: 8-10 common healthcare buyer objections with response frameworks:
  - "We need to see clinical evidence"
  - "How does this integrate with our EHR?"
  - "We've been burned by healthtech vendors before"
  - "Our clinicians won't adopt another tool"
  - "We need to run this through our security review"
  - "We're locked into a contract with [incumbent]"
  - "Show me ROI before I bring this to leadership"
  - "We don't have budget until next fiscal year"
- **Messaging by Buyer Role**: Short messaging variants per buying group role (clinical champion, IT, C-suite, procurement)

**Step 4: Commit**

```bash
cd /Users/amogha/Desktop/Teach_AI && git add skills/marketing-healthcare-vertical/references/proof-points-framework.md skills/marketing-healthcare-vertical/references/icp-templates.md skills/marketing-healthcare-vertical/references/messaging-examples.md && git commit -m "feat: add healthcare reference docs (proof points, ICPs, messaging)"
```

---

## Task 7: Write reference docs — patient-adoption-playbook.md, competitive-landscape.md, safety-usage-guide.md

**Files:**
- Create: `skills/marketing-healthcare-vertical/references/patient-adoption-playbook.md`
- Create: `skills/marketing-healthcare-vertical/references/competitive-landscape.md`
- Create: `skills/marketing-healthcare-vertical/references/safety-usage-guide.md`

**Step 1: Write patient-adoption-playbook.md (~600-800 words)**

Content to cover:
- **The Adoption Imperative**: Why patient/member adoption is a marketing function, not just a product function — adoption drives retention, expansion, and your best case studies
- **Adoption Toolkit Contents**: Co-branded patient communication templates (email, SMS, print), launch announcement materials, patient FAQ, quick-start guides, in-app guidance suggestions
- **Adoption Metrics Dashboard**: Activation rate (% of eligible patients who sign up), engagement depth (features used, frequency), sustained usage (30/60/90-day retention), clinical correlation (outcomes for engaged vs. non-engaged)
- **Customer Enablement Model**: Training, materials, and support you provide to help customers drive adoption — tiered by customer segment (self-serve toolkit for SMB, hands-on support for enterprise)
- **Co-Marketing Framework**: Joint case studies, co-branded webinars, conference co-presentations, shared press releases — with templates and approval workflows
- **Adoption-Driven Expansion**: How high adoption unlocks expansion revenue — more users, more sites, additional modules, usage-based pricing tiers

**Step 2: Write competitive-landscape.md (~600-800 words)**

Content to cover:
- **Healthtech Competitor Categories**: Legacy healthcare IT (Epic, Cerner, Allscripts ecosystem), established healthtech (category leaders in your space), emerging healthtech (VC-backed startups), EHR-native features (when the EHR builds your feature), DIY/in-house builds (when health systems build it themselves)
- **Competitive Differentiation Framework**: Matrix of differentiation angles — clinical outcomes, integration depth, implementation speed, total cost of ownership, patient experience, innovation velocity, customer support
- **Legacy vs. Startup Positioning**: How to position against entrenched vendors (agility, modern UX, faster time-to-value, API-first) vs. how to position against other startups (maturity, proven outcomes, security posture, customer base)
- **EHR Ecosystem Strategy**: Compete vs. complement decision framework — when to position as EHR-complementary vs. standalone, how to leverage EHR partnerships, App Orchard/Cerner Open marketplace strategy
- **Competitive Intelligence Sources**: KLAS reports, Gartner/Forrester, Chilmark Research, health IT media, conference competitive monitoring, win/loss analysis focus areas

**Step 3: Write safety-usage-guide.md (~600-800 words)**

Content to cover:
- **Clinical Claims Guardrails**: What constitutes a clinical claim, when claims require FDA oversight, safe harbor language templates, "intended use" vs. "marketing claim" distinction
- **AI-Generated Content Safety**: Review requirements for AI-drafted healthcare content, clinical accuracy verification workflow, prohibited AI use cases in healthcare marketing (e.g., generating fake clinical data, fabricating outcome statistics)
- **Patient Data in Marketing**: Rules for using patient/member data — consent requirements, de-identification standards (HIPAA Safe Harbor vs. Expert Determination), aggregated data presentation, individual story usage
- **Review and Approval Workflows**: Who reviews what — clinical claims (medical advisor), compliance/regulatory (legal), patient data (privacy officer), competitive claims (legal + product)
- **Adverse Event & Safety Reporting**: If your product is classified as SaMD or digital therapeutics, marketing must not suppress or minimize adverse events; monitoring requirements for social media and public channels
- **Safe Language Patterns**: Words/phrases to use vs. avoid in healthcare marketing — "may help" vs. "will cure," "associated with" vs. "causes," "in a study of N patients" vs. unsourced statistics

**Step 4: Commit**

```bash
cd /Users/amogha/Desktop/Teach_AI && git add skills/marketing-healthcare-vertical/references/patient-adoption-playbook.md skills/marketing-healthcare-vertical/references/competitive-landscape.md skills/marketing-healthcare-vertical/references/safety-usage-guide.md && git commit -m "feat: add healthcare reference docs (patient adoption, competitive, safety)"
```

---

## Task 8: Update system index

**Files:**
- Modify: `skills/marketing-system-index/SKILL.md`
- Modify: `skills/marketing-system-index/reference.md`

**Step 1: Update SKILL.md**

In `skills/marketing-system-index/SKILL.md`:

1. Change "16 interconnected skills" to "17 interconnected skills" in the Overview section
2. Add to the Skill Map after Layer 5:

```
VERTICAL OVERLAY
  marketing-healthcare-vertical
```

3. Add a new row to the Quick Lookup table:

```
| Healthcare GTM | Pilot conversion, adoption rate | marketing-healthcare-vertical | conducting-customer-research, building-positioning-messaging, designing-gtm-strategy, running-content-engine |
```

4. Update the "Each skill has" line to mention that vertical overlays include reference subdirectories

**Step 2: Update reference.md**

In `skills/marketing-system-index/reference.md`:

1. Add a new section for Skill 17 in the Skill Directory
2. Add healthcare-specific entries to the Outcome Mapping table
3. Add the healthcare vertical to the Cross-Skill Data Flow diagram
4. Update "How to Use This System" with guidance on when to use the healthcare overlay

**Step 3: Verify cross-references**

```bash
grep -r "marketing-healthcare-vertical" /Users/amogha/Desktop/Teach_AI/skills/marketing-system-index/
```

Expected: References in both SKILL.md and reference.md

**Step 4: Commit**

```bash
cd /Users/amogha/Desktop/Teach_AI && git add skills/marketing-system-index/SKILL.md skills/marketing-system-index/reference.md && git commit -m "feat: update system index to include healthcare vertical (skill 17)"
```

---

## Task 9: Cross-reference validation and final review

**Files:**
- Review: All files in `skills/marketing-healthcare-vertical/`
- Review: `skills/marketing-system-index/SKILL.md`

**Step 1: Verify all files exist**

```bash
find /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/ -type f | sort
```

Expected output (11 files):
```
skills/marketing-healthcare-vertical/SKILL.md
skills/marketing-healthcare-vertical/workflow.md
skills/marketing-healthcare-vertical/references/buying-group-guide.md
skills/marketing-healthcare-vertical/references/channel-map.md
skills/marketing-healthcare-vertical/references/competitive-landscape.md
skills/marketing-healthcare-vertical/references/compliance-guide.md
skills/marketing-healthcare-vertical/references/icp-templates.md
skills/marketing-healthcare-vertical/references/messaging-examples.md
skills/marketing-healthcare-vertical/references/patient-adoption-playbook.md
skills/marketing-healthcare-vertical/references/proof-points-framework.md
skills/marketing-healthcare-vertical/references/safety-usage-guide.md
```

**Step 2: Verify all cross-references in workflow.md resolve**

Check that every `references/` path mentioned in workflow.md corresponds to an actual file:

```bash
grep -o 'references/[a-z-]*\.md' /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/workflow.md | sort -u
```

Cross-check against actual files in references/ directory.

**Step 3: Verify SKILL.md integration section references valid skill directory names**

```bash
grep -oP '[a-z]+-[a-z-]+' /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/SKILL.md | sort -u
```

Verify each matches an actual directory in `skills/`.

**Step 4: Read through SKILL.md and verify it's under 500 words**

```bash
wc -w /Users/amogha/Desktop/Teach_AI/skills/marketing-healthcare-vertical/SKILL.md
```

Expected: <500 words (excluding YAML frontmatter)

**Step 5: Final commit if any fixes were needed**

```bash
cd /Users/amogha/Desktop/Teach_AI && git status
```

If changes exist:
```bash
git add -A skills/marketing-healthcare-vertical/ && git commit -m "fix: resolve cross-reference issues in healthcare vertical playbook"
```
