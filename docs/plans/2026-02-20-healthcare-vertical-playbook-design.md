# Healthcare Vertical Playbook — Design Document

> **Date:** 2026-02-20
> **Status:** Approved
> **Skill:** #17 — Healthcare Vertical Playbook
> **Target:** Healthtech B2B2C SaaS at $1M-5M ARR

---

## What We're Building

A standalone skill (#17) that adapts the existing 16-skill marketing system for **healthtech B2B2C SaaS** companies. The playbook is organized around the healthcare buyer lifecycle, with compliance guardrails woven into each phase and a dedicated section on enabling downstream patient/member adoption. Nine reference documents provide deep-dive healthcare-specific guidance without bloating the main skill.

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Approach | Lifecycle-organized playbook (not overlay or campaign modules) | Mirrors how healthcare deals actually progress; gives marketers a "what do I do next" guide |
| Scope | General healthtech B2B2C (not narrowed to one product type) | Applicable across patient engagement, telehealth, care navigation, digital therapeutics, etc. |
| Stage | $1M-5M ARR (matches existing system) | Consistent with the rest of the skill system |
| Compliance depth | Compliance-aware in main skill + dedicated compliance reference doc | Keeps the skill actionable; regulatory detail is accessible but separate |
| B2B2C coverage | Primarily B2B marketing + patient/member adoption enablement section | Addresses the full B2B2C value proposition without becoming a consumer marketing manual |
| Structure | Main skill + 9 reference docs in subfolder | Rich enough to be genuinely useful; modular enough to maintain |

---

## File Structure

```
skills/
├── 17-healthcare-vertical.md              # Main skill document
└── references/
    └── healthcare/
        ├── compliance-guide.md             # HIPAA, BAA, FDA, state privacy checklists
        ├── channel-map.md                  # Healthcare channels ranked and scored
        ├── buying-group-guide.md           # Buyer archetypes and role-specific messaging
        ├── proof-points-framework.md       # Building healthcare-credible evidence
        ├── icp-templates.md               # Pre-built healthcare ICP profiles
        ├── messaging-examples.md           # Healthcare B2B2C messaging and copy examples
        ├── patient-adoption-playbook.md    # Driving downstream patient/member adoption
        ├── competitive-landscape.md        # Healthtech competitive mapping framework
        └── safety-usage-guide.md           # Clinical claims, AI content safety, review workflows
```

---

## Main Skill: Workflow Phases

### Phase 1: Healthcare Market Assessment (Day 1-2)

**Adapts:** Skills 01 (Customer Research) and 02 (ICP Definition)

Map the healthcare sub-segment: who buys, how procurement works, what compliance gates exist, how long the buying cycle really is. Healthcare-specific considerations include:
- Clinical vs. operational vs. IT buyers and their different evaluation criteria
- Committee structures and the role of clinical champions
- Credentialing, security, and compliance requirements as buying prerequisites
- The role of clinical evidence and outcomes data in purchase decisions
- B2B2C value articulation — proving value to the business buyer in terms of patient/member outcomes

**Key outputs:** Healthcare ICP profiles, buying journey map, compliance gate map

**References:** `icp-templates.md`, `buying-group-guide.md`

---

### Phase 2: Healthcare Positioning & Competitive Differentiation (Day 3-4)

**Adapts:** Skills 03 (Competitive Intel) and 04 (Positioning & Messaging)

Position against legacy healthcare vendors and other healthtech startups. Healthcare-specific considerations:
- HIPAA/security as table stakes, not differentiator
- Building clinical credibility as a non-clinical company (advisory boards, published outcomes, peer citations)
- The B2B2C messaging challenge: articulating value to business buyers in terms of patient/member outcomes
- Positioning against EHR-native solutions vs. standalone healthtech
- Evidence hierarchy in healthcare (RCT > observational > case study > testimonial)

**Key outputs:** Healthcare positioning statement, competitive battlecards, messaging architecture per buyer role

**References:** `messaging-examples.md`, `competitive-landscape.md`, `proof-points-framework.md`

---

### Phase 3: Healthcare GTM Motion & Channel Strategy (Day 5-7)

**Adapts:** Skill 05 (GTM Strategy)

Healthcare-specific GTM motion and channel selection. Key considerations:
- Healthcare conference strategy (HIMSS, HLTH, AHIP, Becker's, specialty conferences) — expensive, must measure ROI
- Health IT media and trade publications (Healthcare IT News, Fierce Healthcare, Becker's, CHIME)
- EHR marketplace and app ecosystem as a distribution channel
- GPO and health system innovation partnerships
- Pilot/proof-of-concept as a core GTM motion (not a sales delay)
- The 6-18 month healthcare sales cycle reality and how to survive it
- Regulatory-compliant outbound (healthcare-specific CAN-SPAM and consent considerations)
- Healthcare LinkedIn communities, clinical association channels

**Key outputs:** Healthcare channel prioritization matrix, pilot GTM playbook, conference strategy, 90-day healthcare GTM plan

**References:** `channel-map.md`

---

### Phase 4: Healthcare Content & Thought Leadership (Day 8-10)

**Adapts:** Skill 08 (Content Engine)

Compliance-safe content production for healthcare. Key considerations:
- What you can and can't claim (clinical outcomes, comparative claims, patient testimonials)
- Building clinical credibility through thought leadership (research, white papers, peer-reviewed publications)
- Publishing outcomes data and case studies that healthcare buyers trust
- Navigating testimonial and case study approvals (BAA, patient consent, de-identification)
- Healthcare-specific content distribution (trade publications, CME, medical conferences, specialty associations)
- Content for each buyer role in the healthcare buying group
- GEO optimization for healthcare-specific queries

**Key outputs:** Healthcare content calendar, compliance-reviewed content templates, thought leadership plan, case study approval workflow

**References:** `compliance-guide.md`, `proof-points-framework.md`, `safety-usage-guide.md`

---

### Phase 5: Healthcare Sales Enablement & Pipeline (Day 11-13)

**Adapts:** Skills 10 (Sales Enablement) and 13 (Pipeline Accelerator)

Selling to healthcare buying committees and navigating procurement. Key considerations:
- Healthcare buying group roles: clinical champion, IT/security, compliance/legal, procurement, C-suite
- Role-specific collateral (clinical outcomes for MDs, security/integration for CIOs, ROI for CFOs)
- Health system procurement processes (RFP/RFI, security questionnaires, BAA execution, legal review)
- Pilot-to-enterprise conversion playbook
- Clinical advisory boards as a go-to-market lever
- Reference selling in healthcare (buyers always call references)
- Multi-site expansion strategy within health systems

**Key outputs:** Healthcare battlecards by competitor type, security questionnaire rapid-response kit, pilot success framework, reference program

**References:** `buying-group-guide.md`, `competitive-landscape.md`

---

### Phase 6: Patient/Member Adoption Enablement (Day 14-15)

**Adapts:** Skill 14 (NRR Engine)

The B2C enablement layer — helping your B2B customers drive downstream adoption. Key considerations:
- Providing adoption toolkits and co-branded materials to customers
- Patient/member engagement strategies that your customers can deploy
- Measuring adoption rate as a core retention metric
- Building "adoption as a feature" into your sales narrative
- Expansion revenue from adoption success (more users, more sites, upsell)
- Co-marketing with customers on adoption outcomes

**Key outputs:** Patient adoption toolkit, adoption metrics dashboard template, customer co-marketing framework, adoption-driven expansion playbook

**References:** `patient-adoption-playbook.md`

---

### Phase 7: Healthcare Metrics, Compliance & Ops (Day 16-17)

**Adapts:** Skills 15 (Marketing Metrics) and 16 (Marketing Ops)

Healthcare-specific measurement and operational infrastructure. Key considerations:
- Healthcare KPIs: pilot conversion rate, implementation time, patient adoption rate, clinical outcome metrics
- Compliance-safe analytics and attribution (what you can track, what you can't)
- Healthcare CRM configuration (long cycles, multi-stakeholder tracking, pilot stages)
- Marketing compliance review workflows (legal/clinical review before publish)
- Safety guardrails for AI-generated healthcare content
- Conference ROI tracking

**Key outputs:** Healthcare marketing dashboard, compliance review SOP, CRM configuration guide

**References:** `compliance-guide.md`, `safety-usage-guide.md`

---

## Key Metrics

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Pilot-to-contract conversion rate | >40% | Healthcare buyers pilot before committing — this is your real close rate |
| Sales cycle length | Trending down QoQ | Healthcare cycles are 6-18 months; reducing this is existential |
| Clinical advisory board size | 3-5 active members by $3M ARR | Clinical credibility accelerates trust and shortens evaluation |
| Patient/member adoption rate | >60% within 90 days of deployment | Proves B2B2C value, drives retention, becomes best case study |
| Healthcare-specific pipeline | >70% from Tier 1 healthcare ICP | Targeting precision in a vertical with many non-buyers |
| Security questionnaire turnaround | <5 business days | Procurement bottleneck — speed here differentiates |
| Conference-to-pipeline conversion | >5% of meaningful conversations | Healthcare conferences are expensive — measure ROI ruthlessly |
| Customer-referenceable accounts | >30% of customer base | Healthcare buyers call references — having them unlocks deals |
| Content compliance pass rate | 100% | Zero tolerance for non-compliant marketing claims |
| Expansion from adoption success | >20% of NRR from usage-driven expansion | Proves the B2B2C flywheel is working |

---

## Anti-Patterns

- **Don't lead with technology features.** Healthcare buyers care about outcomes — clinical, operational, financial. "AI-powered" means nothing without "reduces readmission rate by X%."
- **Don't skip the pilot.** Trying to close enterprise healthcare deals without a proof-of-concept is fighting the system. Embrace pilots as a GTM motion.
- **Don't treat HIPAA as a marketing badge.** Every healthtech company claims HIPAA compliance. It's table stakes, not a differentiator.
- **Don't use patient data in marketing without explicit, documented consent.** Even de-identified data has rules.
- **Don't ignore the clinical champion.** The CIO signs the check, but the clinical champion drives internal advocacy.
- **Don't market the same way to health systems and physician practices.** Completely different buying processes, budgets, and decision-makers.
- **Don't underinvest in security/compliance materials.** Security questionnaires, BAAs, SOC 2 reports are marketing assets that remove procurement friction.
- **Don't run healthcare campaigns on consumer marketing playbooks.** Healthcare buyers are skeptical of hype and trained to evaluate evidence.
- **Don't ignore the EHR ecosystem.** EHR marketplaces and partner programs are high-intent channels.

---

## Integration Points

```
Healthcare Vertical Playbook (17) → overlays onto existing skills:

┌──────────────────────────────────┐
│ Healthcare Market Assessment     │──→ Customer Research (01) — add clinical user interviews
│                                  │──→ ICP Definition (02) — healthcare buyer archetypes
├──────────────────────────────────┤
│ Healthcare Positioning           │──→ Competitive Intel (03) — healthtech landscape mapping
│                                  │──→ Positioning & Messaging (04) — clinical credibility framing
├──────────────────────────────────┤
│ Healthcare GTM & Channels        │──→ GTM Strategy (05) — pilot-as-GTM-motion
│                                  │──→ Brand Strategy (06) — thought leadership in clinical circles
│                                  │──→ Marketing Budget (07) — conference/compliance budget items
├──────────────────────────────────┤
│ Healthcare Content               │──→ Content Engine (08) — compliance-safe content production
│                                  │──→ GEO Optimizer (09) — healthcare search visibility
├──────────────────────────────────┤
│ Healthcare Sales Enablement      │──→ Sales Enablement (10) — buying committee materials
│                                  │──→ Launch Playbook (11) — healthcare launch considerations
├──────────────────────────────────┤
│ Patient Adoption Enablement      │──→ NRR Engine (14) — adoption-driven retention/expansion
│                                  │──→ CAC Optimizer (12) — adoption success as CAC reducer
│                                  │──→ Pipeline Accelerator (13) — adoption metrics in sales deck
├──────────────────────────────────┤
│ Healthcare Metrics & Ops         │──→ Marketing Metrics (15) — healthcare KPI layer
│                                  │──→ Marketing Ops (16) — compliance tooling, CRM config
└──────────────────────────────────┘
```

---

## Reference Document Scope

| Reference Doc | ~Length | Key Contents |
|---------------|---------|-------------|
| `compliance-guide.md` | 800-1000 words | HIPAA marketing rules, BAA for testimonials, FDA digital health claims, state privacy, compliance checklists per content type |
| `channel-map.md` | 600-800 words | Scored ranking of healthcare channels (conferences, media, associations, EHR marketplaces, GPOs), with ICP presence and ROI notes |
| `buying-group-guide.md` | 800-1000 words | 5-6 buyer archetypes with role, priorities, objections, messaging hooks, content preferences |
| `proof-points-framework.md` | 600-800 words | Outcome study structure, case study template, peer-reviewed citations, pilot results formatting |
| `icp-templates.md` | 800-1000 words | 4-5 pre-built ICP profiles (health system, physician practice, health plan, employer, digital health platform) |
| `messaging-examples.md` | 800-1000 words | Healthcare value prop framework, sample copy, email sequences, ad copy, objection-handling language |
| `patient-adoption-playbook.md` | 600-800 words | Adoption strategy, co-branded materials, adoption metrics, enablement toolkit outline |
| `competitive-landscape.md` | 600-800 words | Healthtech competitor categories, differentiation frameworks, legacy vs. startup positioning |
| `safety-usage-guide.md` | 600-800 words | Clinical claims guardrails, AI content safety for healthcare, patient data usage rules, review/approval workflows |

---

## Implementation Sequence

1. Write main skill document (`17-healthcare-vertical.md`)
2. Write reference docs (can be parallelized):
   - `compliance-guide.md`
   - `channel-map.md`
   - `buying-group-guide.md`
   - `proof-points-framework.md`
   - `icp-templates.md`
   - `messaging-examples.md`
   - `patient-adoption-playbook.md`
   - `competitive-landscape.md`
   - `safety-usage-guide.md`
3. Update `00-system-index.md` to include Skill 17
4. Review and validate cross-references between main skill and reference docs
