# Unit Economics Model — {{company_name}}

> Generated: {{date}} | Skill: reducing-cac | Phase: Unit Economics Modeling

## Executive Summary

<!-- AGENT: Write 2-3 sentences summarizing overall unit economics health.
     State whether the company is ready to scale, should optimize, or needs to fix fundamentals. -->
{{executive_summary}}

---

## Inputs

| Input | Value | Source |
|-------|-------|--------|
| Average Contract Value (ACV) | {{acv}} | {{acv_source}} |
| Gross Margin | {{gross_margin}}% | {{margin_source}} |
| Monthly Churn Rate | {{monthly_churn}}% | {{churn_source}} |
| Average Customer Lifetime | {{avg_lifetime}} months | {{lifetime_source}} |
| Expansion Revenue Rate (NRR - 100%) | {{expansion_rate}}% | {{expansion_source}} |
| Blended CAC | {{blended_cac}} | CAC Audit (Phase 1) |
| Best Channel CAC | {{best_channel_cac}} | CAC Audit (Phase 1) |
| Worst Channel CAC | {{worst_channel_cac}} | CAC Audit (Phase 1) |
| Sales Cycle Length | {{sales_cycle}} days | {{cycle_source}} |

<!-- AGENT: Pull ACV, churn, and expansion data from Stripe if available.
     Fall back to user input if platform data is unavailable. -->

---

## Calculated Outputs

### Customer Lifetime Value (LTV)

```
LTV = ACV x Gross Margin x (1 / Monthly Churn Rate) x (1 + Expansion Rate)
    = {{acv}} x {{gross_margin}}% x (1 / {{monthly_churn}}%) x (1 + {{expansion_rate}}%)
    = {{calculated_ltv}}
```

### LTV:CAC Ratio

```
LTV:CAC = LTV / Blended CAC
        = {{calculated_ltv}} / {{blended_cac}}
        = {{ltv_cac_ratio}}:1    (Target: >3:1)
```

### CAC Payback Period

```
CAC Payback = Blended CAC / (ACV x Gross Margin / 12)
            = {{blended_cac}} / ({{acv}} x {{gross_margin}}% / 12)
            = {{cac_payback}} months    (Target: <18 months, ideal <12)
```

### Gross Margin-Adjusted CAC Payback

```
GM-Adjusted Payback = CAC / (Monthly Revenue Per Customer x Gross Margin %)
                    = {{blended_cac}} / ({{monthly_revenue}} x {{gross_margin}}%)
                    = {{gm_adjusted_payback}} months
```

### Marginal CAC

```
Marginal CAC = Incremental spend to acquire 1 more customer at current scale
Note: Often 20-50% higher than average CAC
Estimated Marginal CAC = {{marginal_cac}}
```

### Break-Even Customer Count

```
Break-Even = Fixed Marketing Costs / (ACV x Gross Margin - Variable Acquisition Cost)
           = {{fixed_costs}} / ({{acv}} x {{gross_margin}}% - {{variable_cac}})
           = {{breakeven_customers}} customers
```

---

## Scaling Decision Matrix

| Metric | Your Value | Optimize First | OK to Scale | Scale Aggressively |
|--------|-----------|---------------|-------------|-------------------|
| LTV:CAC | {{ltv_cac_ratio}}:1 | <2:1 | 3:1 - 5:1 | >5:1 |
| CAC Payback | {{cac_payback}} mo | >18 months | 12-18 months | <12 months |
| Marginal CAC Trend | {{marginal_trend}} | Rising >20% QoQ | Stable (+-10%) | Declining |
| Channel CAC vs. Blended | {{channel_vs_blended}} | >1.5x blended | Within 1.2x blended | Below blended |
| NRR | {{nrr}}% | <100% | 100-110% | >110% |

<!-- AGENT: Highlight the row where the company falls for each metric.
     If 3+ metrics are in "Optimize First", the recommendation is to optimize before scaling.
     If 3+ metrics are in "Scale Aggressively", recommend aggressive scaling. -->

---

## Marginal CAC Analysis

```
Average CAC tells you where you've been.
Marginal CAC tells you where you're going.
```

| Comparison | Status | Interpretation |
|-----------|--------|----------------|
| Marginal CAC ({{marginal_cac}}) vs Average CAC ({{blended_cac}}) | {{marginal_status}} | {{marginal_interpretation}} |

<!-- AGENT: If marginal > average: "Diminishing returns. Optimize before scaling."
     If marginal < average: "Scaling window open. Each new customer is cheaper."
     If marginal ≈ average: "Stable efficiency. Cautiously scale while monitoring." -->

---

## Scenario Analysis

| Metric | Current | Optimized | Aggressive |
|--------|---------|-----------|------------|
| Blended CAC | {{current_cac}} | {{optimized_cac}} | {{aggressive_cac}} |
| LTV | {{current_ltv}} | {{optimized_ltv}} | {{aggressive_ltv}} |
| LTV:CAC | {{current_ratio}} | {{optimized_ratio}} | {{aggressive_ratio}} |
| CAC Payback | {{current_payback}} mo | {{optimized_payback}} mo | {{aggressive_payback}} mo |
| Monthly New Customers | {{current_customers}} | {{optimized_customers}} | {{aggressive_customers}} |
| Monthly Revenue Added | {{current_revenue}} | {{optimized_revenue}} | {{aggressive_revenue}} |

<!-- AGENT: Optimized scenario = apply playbook impacts from Phase 3 (CRO + ICP precision).
     Aggressive scenario = apply all playbooks + kill underperforming channels + scale Tier A.
     Show the assumptions behind each scenario. -->

### Scenario Assumptions

**Optimized:** {{optimized_assumptions}}

**Aggressive:** {{aggressive_assumptions}}

---

## Recommendation

<!-- AGENT: Based on the model, state clearly whether the company:
     1. Is ready to scale (unit economics support it)
     2. Should optimize first (fix CAC or improve LTV before scaling)
     3. Needs to fix fundamentals (unit economics are broken)
     Include the 2-3 specific metrics that drive this recommendation. -->

{{recommendation}}
