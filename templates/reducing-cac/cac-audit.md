# CAC Audit — {{company_name}}

> Generated: {{date}} | Skill: reducing-cac | Period: {{analysis_period}}

## Executive Summary

<!-- AGENT: Write 3-4 sentences summarizing overall CAC health.
     Call out the single biggest finding. -->
{{executive_summary}}

## Three Layers of CAC

| Layer | Amount | Notes |
|-------|--------|-------|
| **Channel-Specific CAC** (best channel) | {{best_channel_cac}} | {{best_channel_name}} |
| **Blended CAC** | {{blended_cac}} | All channels combined |
| **Fully-Loaded CAC** | {{fully_loaded_cac}} | Includes headcount, tools, overhead |

## Channel-by-Channel Breakdown

| Channel | Monthly Spend | New Customers | Channel CAC | Payback (Mo) | LTV:CAC | 3mo Trend | Verdict |
|---------|--------------|---------------|-------------|-------------|---------|-----------|---------|
<!-- AGENT: One row per channel. Pull spend from ad platforms + user input.
     Pull customer counts from CRM. Calculate CAC = spend/customers.
     Verdict = Scale if LTV:CAC >5:1, Hold if 3-5:1, Kill if <2:1. -->
| Google Ads (brand) | {{google_brand_spend}} | {{google_brand_customers}} | {{google_brand_cac}} | {{google_brand_payback}} | {{google_brand_ltv_cac}} | {{google_brand_trend}} | {{google_brand_verdict}} |
| Google Ads (non-brand) | {{google_nonbrand_spend}} | {{google_nonbrand_customers}} | {{google_nonbrand_cac}} | {{google_nonbrand_payback}} | {{google_nonbrand_ltv_cac}} | {{google_nonbrand_trend}} | {{google_nonbrand_verdict}} |
| LinkedIn Ads | {{linkedin_spend}} | {{linkedin_customers}} | {{linkedin_cac}} | {{linkedin_payback}} | {{linkedin_ltv_cac}} | {{linkedin_trend}} | {{linkedin_verdict}} |
| Organic Search/GEO | {{organic_spend}} | {{organic_customers}} | {{organic_cac}} | {{organic_payback}} | {{organic_ltv_cac}} | {{organic_trend}} | {{organic_verdict}} |
| Content/Inbound | {{content_spend}} | {{content_customers}} | {{content_cac}} | {{content_payback}} | {{content_ltv_cac}} | {{content_trend}} | {{content_verdict}} |
| Community/Word of mouth | {{community_spend}} | {{community_customers}} | {{community_cac}} | {{community_payback}} | {{community_ltv_cac}} | {{community_trend}} | {{community_verdict}} |
| Founder-led content | {{founder_spend}} | {{founder_customers}} | {{founder_cac}} | {{founder_payback}} | {{founder_ltv_cac}} | {{founder_trend}} | {{founder_verdict}} |
| Partnerships/Referrals | {{partnerships_spend}} | {{partnerships_customers}} | {{partnerships_cac}} | {{partnerships_payback}} | {{partnerships_ltv_cac}} | {{partnerships_trend}} | {{partnerships_verdict}} |
| Events/Conferences | {{events_spend}} | {{events_customers}} | {{events_cac}} | {{events_payback}} | {{events_ltv_cac}} | {{events_trend}} | {{events_verdict}} |
| Outbound (SDR) | {{outbound_spend}} | {{outbound_customers}} | {{outbound_cac}} | {{outbound_payback}} | {{outbound_ltv_cac}} | {{outbound_trend}} | {{outbound_verdict}} |
| Product-led (free trial/freemium) | {{plg_spend}} | {{plg_customers}} | {{plg_cac}} | {{plg_payback}} | {{plg_ltv_cac}} | {{plg_trend}} | {{plg_verdict}} |
| **BLENDED** | **{{total_spend}}** | **{{total_customers}}** | **{{blended_cac}}** | **{{blended_payback}}** | **{{blended_ltv_cac}}** | | |

<!-- AGENT: Remove rows for channels the company does not use.
     Add rows for any channels not listed above that the company uses. -->

## LTV:CAC by ICP Segment

<!-- AGENT: Only include this table if upstream ICP data is available from defining-icp-segmentation.
     Otherwise replace with: "Run defining-icp-segmentation to enable segment-level analysis." -->

| ICP Segment | Avg CAC | Avg ACV | LTV (3yr) | LTV:CAC | Payback Period | Verdict |
|-------------|---------|---------|-----------|---------|----------------|---------|
| Tier 1 (ideal) | {{tier1_cac}} | {{tier1_acv}} | {{tier1_ltv}} | {{tier1_ltv_cac}} | {{tier1_payback}} | Target for scaling |
| Tier 2 (good fit) | {{tier2_cac}} | {{tier2_acv}} | {{tier2_ltv}} | {{tier2_ltv_cac}} | {{tier2_payback}} | Optimize or hold |
| Tier 3 (marginal) | {{tier3_cac}} | {{tier3_acv}} | {{tier3_ltv}} | {{tier3_ltv_cac}} | {{tier3_payback}} | Likely kill |
| Off-ICP | {{officp_cac}} | {{officp_acv}} | {{officp_ltv}} | {{officp_ltv_cac}} | {{officp_payback}} | Stop acquiring |

## Benchmarks

| Metric | Your Number | Healthy Target | Status |
|--------|------------|----------------|--------|
| LTV:CAC (blended) | {{blended_ltv_cac}} | >3:1 | {{ltv_cac_status}} |
| CAC Payback | {{blended_payback}} months | <18 months | {{payback_status}} |
| Organic % of Pipeline | {{organic_pct}}% | >30% | {{organic_status}} |
| Best Channel LTV:CAC | {{best_channel_ltv_cac}} | >5:1 (scale signal) | {{best_channel_status}} |
| Worst Channel LTV:CAC | {{worst_channel_ltv_cac}} | >1:1 (kill below) | {{worst_channel_status}} |

<!-- AGENT: For each benchmark, set Status to one of: Healthy, Warning, Critical.
     Healthy = meets target. Warning = within 20% of target. Critical = fails target. -->

## Key Findings

<!-- AGENT: Write 3-5 specific, data-backed findings. Each finding should imply an action.
     Example: "LinkedIn Ads CAC of $4,200 is 3.2x the blended average — this channel is dragging up overall CAC." -->

{{key_findings}}

## Recommended Next Steps

<!-- AGENT: Based on the data, suggest 3-5 specific next steps.
     Reference which phase of the reducing-cac workflow addresses each finding. -->

{{next_steps}}
