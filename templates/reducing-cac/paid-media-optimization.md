# Paid Media Optimization — {{company_name}}

> Generated: {{date}} | Skill: reducing-cac | Phase: Paid Media Optimization

## Executive Summary

<!-- AGENT: Write 2-3 sentences summarizing current paid media health.
     Call out total paid spend, blended paid CAC, and the single biggest optimization opportunity. -->
{{executive_summary}}

## Current Paid Media Summary

| Platform | Monthly Spend | Impressions | Clicks | Conversions | CPA | ROAS | Status |
|----------|--------------|-------------|--------|-------------|-----|------|--------|
<!-- AGENT: Pull data from ad platform CLIs or user input. One row per active platform. -->
| Google Ads | {{google_spend}} | {{google_impressions}} | {{google_clicks}} | {{google_conversions}} | {{google_cpa}} | {{google_roas}} | {{google_status}} |
| Meta Ads | {{meta_spend}} | {{meta_impressions}} | {{meta_clicks}} | {{meta_conversions}} | {{meta_cpa}} | {{meta_roas}} | {{meta_status}} |
| LinkedIn Ads | {{linkedin_spend}} | {{linkedin_impressions}} | {{linkedin_clicks}} | {{linkedin_conversions}} | {{linkedin_cpa}} | {{linkedin_roas}} | {{linkedin_status}} |
| **TOTAL** | **{{total_paid_spend}}** | **{{total_impressions}}** | **{{total_clicks}}** | **{{total_conversions}}** | **{{blended_cpa}}** | **{{blended_roas}}** | |

---

## Targeting Audit

<!-- AGENT: Check each item against the company's current ad platform setup.
     Mark as Done, Needs Work, or Not Applicable. Add specific recommendations for items marked Needs Work. -->

- [ ] Audiences built from ICP firmographics (company size, industry, tech stack)
- [ ] Intent-based targeting active (in-market audiences, intent data providers)
- [ ] Demographic targeting replaced by behavioral/intent signals where possible
- [ ] Lookalike audiences built from best customers (not all customers)
- [ ] Negative audiences exclude existing customers, competitors, non-ICP
- [ ] Retargeting audiences segmented by engagement level (visited pricing > visited blog)
- [ ] Account-based targeting for top 50-100 target accounts (if ABM motion)

### Targeting Recommendations

{{targeting_recommendations}}

---

## Creative & Messaging Audit

<!-- AGENT: Review current ad creative against these criteria.
     Reference customer voice library if available from conducting-customer-research. -->

- [ ] Ad copy uses exact customer language (from Customer Research Voice Library)
- [ ] Minimum 3 creative variants per campaign (AI-generated variants for testing)
- [ ] Ads address specific pain points, not features
- [ ] Landing page copy matches ad copy (message match = higher conversion)
- [ ] Social proof in ad creative (customer quote, metric, logo)
- [ ] Different creative for cold vs. retargeting audiences
- [ ] Video/rich creative tested against static (particularly LinkedIn)

### Creative Recommendations

{{creative_recommendations}}

---

## Bidding & Budget Audit

<!-- AGENT: Review current bidding strategies across platforms.
     Flag any platform using maximize-clicks instead of target-CPA. -->

- [ ] AI-optimized bidding enabled (maximize conversions, not clicks)
- [ ] Bid strategy set to target CPA, not max clicks
- [ ] Budget allocated by channel efficiency score (from Phase 2)
- [ ] Daily budget caps prevent overspend on underperforming campaigns
- [ ] Dayparting active (only run ads during business hours for B2B)
- [ ] Geo-targeting matches ICP geography

### Bidding Recommendations

{{bidding_recommendations}}

---

## Measurement Audit

<!-- AGENT: Verify tracking setup is complete. Flag any gaps that prevent accurate CAC measurement. -->

- [ ] Conversion tracking confirmed working (pixel, API, offline conversion import)
- [ ] Attribution model documented and consistent (first-touch, last-touch, or multi-touch)
- [ ] ROAS/CAC measured at campaign level, not just channel level
- [ ] Offline conversion data (closed-won) fed back to ad platforms for optimization
- [ ] Weekly reporting cadence with kill/scale decisions every 2 weeks

### Measurement Recommendations

{{measurement_recommendations}}

---

## Retargeting Strategy

| Audience | Trigger | Message | Budget Allocation | Current Status |
|----------|---------|---------|-------------------|----------------|
| Website visitors (pricing page) | High intent | "Ready to get started? Here's what [customer] achieved" | 30% of retargeting | {{retarget_pricing_status}} |
| Website visitors (blog/content) | Low intent | Educational content, not sales pitch | 15% of retargeting | {{retarget_blog_status}} |
| Demo no-shows | Failed conversion | "Still exploring [category]? See a 2-min walkthrough" | 20% of retargeting | {{retarget_noshow_status}} |
| Free trial users (inactive) | Stalled activation | "Need help getting started? Here's a quick win" | 25% of retargeting | {{retarget_trial_status}} |
| Engaged social followers | Warm audience | Case studies, social proof | 10% of retargeting | {{retarget_social_status}} |

<!-- AGENT: For each retargeting audience, assess if the company has this set up.
     If not, recommend the top 2 to implement first based on expected volume and conversion. -->

---

## Scale vs. Organic Investment Decision

| Signal | Your Data | Action |
|--------|-----------|--------|
| LTV:CAC > 3:1 on paid, payback < 12 months | {{signal_1}} | Scale paid — unit economics support it |
| LTV:CAC 1-3:1 on paid, payback 12-18 months | {{signal_2}} | Hold paid, invest more in organic to reduce blended CAC |
| LTV:CAC < 1:1 on paid | {{signal_3}} | Kill paid, go all-in on organic/community/brand |
| Organic pipeline growing >20% QoQ | {{signal_4}} | Shift budget from paid to content/brand that fuels organic |
| Paid CAC rising >10% QoQ with same targeting | {{signal_5}} | Paid is saturated — diversify to new channels or invest in brand |
| Branded search CAC < 1/3 of non-brand CAC | {{signal_6}} | Invest in brand (brand search is a lagging indicator of brand investment) |

### Recommendation

<!-- AGENT: Based on the signals above, make a clear recommendation:
     Scale paid, Hold and optimize, or Reduce paid and shift to organic.
     Include specific dollar reallocation if recommending a shift. -->

{{scale_vs_organic_recommendation}}
