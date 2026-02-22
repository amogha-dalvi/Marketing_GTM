#!/usr/bin/env bun

/**
 * Computes channel-specific, blended, and fully-loaded CAC.
 *
 * Input: --spend spend.json --revenue revenue.json --costs costs.json
 *
 * spend.json:   { channels: [{ name, monthly_spend }] }
 * revenue.json: { customers_by_source: [{ source, count, total_revenue }] }
 * costs.json:   { headcount: N, tools: N, agencies: N }
 *
 * Output:
 * {
 *   channel_cac: [{ channel, spend, customers, cac, ltv_cac_ratio, payback_months, verdict }],
 *   blended_cac: N,
 *   fully_loaded_cac: N,
 *   benchmarks: { ltv_cac_status, payback_status, organic_pct_status }
 * }
 */

import { readFileSync } from "fs";

function parseArgs(args: string[]): Record<string, string> {
  const flags: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      flags[args[i].slice(2)] = args[i + 1] || "";
      i++;
    }
  }
  return flags;
}

function readJson(path: string): any {
  return JSON.parse(readFileSync(path, "utf8"));
}

function statusFor(value: number, target: number, higher_is_better: boolean): string {
  if (higher_is_better) {
    if (value >= target) return "Healthy";
    if (value >= target * 0.8) return "Warning";
    return "Critical";
  } else {
    if (value <= target) return "Healthy";
    if (value <= target * 1.2) return "Warning";
    return "Critical";
  }
}

const USAGE = {
  tool: "calculate-cac.ts",
  description: "Compute channel/blended/fully-loaded CAC from spend, revenue, and cost data",
  usage: "bun tools/scripts/reducing-cac/calculate-cac.ts --spend spend.json --revenue revenue.json --costs costs.json",
  inputs: {
    "spend.json": '{ "channels": [{ "name": "Google Ads", "monthly_spend": 10000 }] }',
    "revenue.json": '{ "customers_by_source": [{ "source": "Google Ads", "count": 5, "total_revenue": 50000 }] }',
    "costs.json": '{ "headcount": 5000, "tools": 2000, "agencies": 3000 }',
  },
  optional: "--ltv <number> (average customer LTV, default: 10x ACV estimate from revenue data)",
};

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(JSON.stringify(USAGE, null, 2));
    return;
  }

  const flags = parseArgs(args);

  if (!flags.spend || !flags.revenue || !flags.costs) {
    console.error(JSON.stringify({ error: "Required: --spend, --revenue, --costs (all JSON file paths)" }));
    process.exit(1);
  }

  const spend = readJson(flags.spend);
  const revenue = readJson(flags.revenue);
  const costs = readJson(flags.costs);

  // Build a lookup from source name to customer data
  const revenueBySource: Record<string, { count: number; total_revenue: number }> = {};
  for (const entry of revenue.customers_by_source || []) {
    revenueBySource[entry.source] = { count: entry.count, total_revenue: entry.total_revenue };
  }

  // Calculate total customers and revenue for LTV estimation
  let totalCustomers = 0;
  let totalRevenue = 0;
  for (const entry of revenue.customers_by_source || []) {
    totalCustomers += entry.count;
    totalRevenue += entry.total_revenue;
  }

  // Estimate LTV (use flag if provided, otherwise 3x avg deal size as conservative estimate)
  const avgDealSize = totalCustomers > 0 ? totalRevenue / totalCustomers : 0;
  const estimatedLTV = flags.ltv ? parseFloat(flags.ltv) : avgDealSize * 3;

  // Calculate channel-level CAC
  let totalSpend = 0;
  const channelCac = (spend.channels || []).map((ch: any) => {
    const monthlySpend = ch.monthly_spend || 0;
    totalSpend += monthlySpend;
    const revenueData = revenueBySource[ch.name];
    const customers = revenueData?.count || 0;
    const cac = customers > 0 ? Math.round(monthlySpend / customers) : null;
    const ltvCacRatio = cac && cac > 0 ? Math.round((estimatedLTV / cac) * 10) / 10 : null;
    const monthlyRevPerCustomer = avgDealSize / 12;
    const paybackMonths = cac && monthlyRevPerCustomer > 0
      ? Math.round((cac / monthlyRevPerCustomer) * 10) / 10
      : null;

    let verdict = "N/A";
    if (ltvCacRatio !== null) {
      if (ltvCacRatio > 5) verdict = "Scale";
      else if (ltvCacRatio >= 3) verdict = "Hold";
      else if (ltvCacRatio >= 1) verdict = "Optimize";
      else verdict = "Kill";
    }

    return {
      channel: ch.name,
      spend: monthlySpend,
      customers,
      cac,
      ltv_cac_ratio: ltvCacRatio,
      payback_months: paybackMonths,
      verdict,
    };
  });

  // Blended CAC
  const blendedCac = totalCustomers > 0 ? Math.round(totalSpend / totalCustomers) : null;

  // Fully-loaded CAC
  const overheadCosts = (costs.headcount || 0) + (costs.tools || 0) + (costs.agencies || 0);
  const fullyLoadedCac = totalCustomers > 0
    ? Math.round((totalSpend + overheadCosts) / totalCustomers)
    : null;

  // Benchmarks
  const blendedLtvCac = blendedCac && blendedCac > 0 ? estimatedLTV / blendedCac : 0;
  const blendedPayback = blendedCac && avgDealSize > 0 ? blendedCac / (avgDealSize / 12) : 0;

  // Organic percentage (channels with $0 or very low spend relative to customers)
  const organicCustomers = (revenue.customers_by_source || [])
    .filter((s: any) => {
      const channelSpend = (spend.channels || []).find((c: any) => c.name === s.source);
      return !channelSpend || channelSpend.monthly_spend === 0;
    })
    .reduce((sum: number, s: any) => sum + s.count, 0);
  const organicPct = totalCustomers > 0 ? Math.round((organicCustomers / totalCustomers) * 100) : 0;

  const output = {
    channel_cac: channelCac,
    blended_cac: blendedCac,
    fully_loaded_cac: fullyLoadedCac,
    total_spend: totalSpend,
    total_customers: totalCustomers,
    estimated_ltv: estimatedLTV,
    overhead_costs: overheadCosts,
    benchmarks: {
      ltv_cac_ratio: Math.round(blendedLtvCac * 10) / 10,
      ltv_cac_status: statusFor(blendedLtvCac, 3, true),
      payback_months: Math.round(blendedPayback * 10) / 10,
      payback_status: statusFor(blendedPayback, 18, false),
      organic_pct: organicPct,
      organic_pct_status: statusFor(organicPct, 30, true),
    },
  };

  console.log(JSON.stringify(output, null, 2));
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
