# Tools Registry

## CLI Tools

Zero-dependency TypeScript CLIs for marketing platforms. Run with Bun.

| CLI | Category | Env Vars | Commands |
|-----|----------|----------|----------|
| stripe.ts | Payments | STRIPE_API_KEY | subscriptions, customers, invoices, charges, balance-transactions, prices, products |
| ga4.ts | Analytics | GA4_ACCESS_TOKEN, GA4_PROPERTY_ID | report, realtime, metadata |
| hubspot.ts | CRM | HUBSPOT_API_KEY | deals, contacts, pipelines, owners |
| google-ads.ts | Ads | GOOGLE_ADS_TOKEN, GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID | campaigns, adgroups, keywords, spend |
| meta-ads.ts | Ads | META_ACCESS_TOKEN, META_AD_ACCOUNT_ID | campaigns, adsets, ads, spend |
| linkedin-ads.ts | Ads | LINKEDIN_ACCESS_TOKEN, LINKEDIN_AD_ACCOUNT_ID | campaigns, creatives, spend |

### Usage Pattern

```
bun tools/clis/{platform}.ts <resource> <action> [--options]
bun tools/clis/{platform}.ts                        # Print usage
bun tools/clis/{platform}.ts <resource> <action> --dry-run  # Preview request
```

### Conventions

- **Auth:** Environment variables (never hardcoded, never passed as args)
- **Output:** All JSON to stdout via `JSON.stringify(result, null, 2)`
- **Dry-run:** Every command supports `--dry-run` — returns `{ _dry_run: true, method, url, headers: { Authorization: "***" } }`
- **Errors:** JSON to stderr with `{ error: "message" }`
- **No dependencies:** Uses Bun's native `fetch` — zero npm packages

## Composite Scripts

Skill-specific scripts that compose CLIs into higher-level data operations.

| Script | Skill | What It Does |
|--------|-------|-------------|
| reducing-cac/pull-all-spend.ts | reducing-cac | Aggregates spend across all ad platforms |
| reducing-cac/pull-revenue-by-source.ts | reducing-cac | Joins Stripe revenue with HubSpot deal sources |
| reducing-cac/calculate-cac.ts | reducing-cac | Computes channel/blended/fully-loaded CAC |

### Composite Script Usage

```
# Pull spend from all configured ad platforms
bun tools/scripts/reducing-cac/pull-all-spend.ts

# Pull revenue by source (Stripe + HubSpot)
bun tools/scripts/reducing-cac/pull-revenue-by-source.ts

# Calculate CAC from JSON files
bun tools/scripts/reducing-cac/calculate-cac.ts \
  --spend spend.json \
  --revenue revenue.json \
  --costs costs.json
```
