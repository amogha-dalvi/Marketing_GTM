#!/usr/bin/env bun

/**
 * Joins Stripe revenue data with HubSpot deal source attribution.
 *
 * Output: { customers_by_source: [{ source, count, total_revenue, avg_deal_size }] }
 *
 * Requires: STRIPE_API_KEY and/or HUBSPOT_API_KEY
 */

const TOOLS_DIR = new URL("../../clis/", import.meta.url).pathname;

async function runCli(cli: string, args: string[]): Promise<any> {
  const proc = Bun.spawn(["bun", `${TOOLS_DIR}${cli}`, ...args], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const stdout = await new Response(proc.stdout).text();
  const exitCode = await proc.exited;
  if (exitCode !== 0) return null;
  try {
    return JSON.parse(stdout);
  } catch {
    return null;
  }
}

async function main() {
  const sources: string[] = [];
  const errors: string[] = [];

  // Pull Stripe subscription/invoice data for revenue
  let stripeData: any = null;
  if (process.env.STRIPE_API_KEY) {
    stripeData = await runCli("stripe.ts", ["subscriptions", "list", "--limit", "100"]);
    if (stripeData) sources.push("stripe");
    else errors.push("Stripe: failed to fetch subscriptions");
  } else {
    errors.push("Stripe: STRIPE_API_KEY not set");
  }

  // Pull HubSpot deals with source attribution
  let hubspotData: any = null;
  if (process.env.HUBSPOT_API_KEY) {
    hubspotData = await runCli("hubspot.ts", [
      "deals", "list", "--limit", "100",
      "--properties", "dealname,amount,dealstage,closedate,hs_analytics_source",
    ]);
    if (hubspotData) sources.push("hubspot");
    else errors.push("HubSpot: failed to fetch deals");
  } else {
    errors.push("HubSpot: HUBSPOT_API_KEY not set");
  }

  // Build customers_by_source from HubSpot deals (primary attribution source)
  const bySource: Record<string, { count: number; total_revenue: number }> = {};

  if (hubspotData?.results) {
    for (const deal of hubspotData.results) {
      const source = deal.properties?.hs_analytics_source || "Unknown";
      const amount = parseFloat(deal.properties?.amount || "0");
      if (!bySource[source]) bySource[source] = { count: 0, total_revenue: 0 };
      bySource[source].count++;
      bySource[source].total_revenue += amount;
    }
  }

  const customers_by_source = Object.entries(bySource).map(([source, data]) => ({
    source,
    count: data.count,
    total_revenue: Math.round(data.total_revenue * 100) / 100,
    avg_deal_size: data.count > 0 ? Math.round((data.total_revenue / data.count) * 100) / 100 : 0,
  }));

  const output = {
    customers_by_source,
    data_sources: sources,
    errors,
    stripe_subscription_count: stripeData?.data?.length || 0,
    hubspot_deal_count: hubspotData?.results?.length || 0,
  };

  console.log(JSON.stringify(output, null, 2));
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
