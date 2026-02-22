#!/usr/bin/env bun

const ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
const AD_ACCOUNT_ID = process.env.LINKEDIN_AD_ACCOUNT_ID;

if ((!ACCESS_TOKEN || !AD_ACCOUNT_ID) && process.argv.length > 2) {
  console.error(JSON.stringify({ error: "LINKEDIN_ACCESS_TOKEN and LINKEDIN_AD_ACCOUNT_ID environment variables required" }));
  process.exit(1);
}

const BASE_URL = "https://api.linkedin.com/rest";

function parseArgs(args: string[]): { resource: string; action: string; flags: Record<string, string> } {
  const resource = args[0] || "";
  const action = args[1] || "";
  const flags: Record<string, string> = {};
  for (let i = 2; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].slice(2);
      if (key === "dry-run") {
        flags["dry-run"] = "true";
      } else {
        flags[key] = args[i + 1] || "";
        i++;
      }
    }
  }
  return { resource, action, flags };
}

function periodToDateRange(period: string): { start: { year: number; month: number; day: number }; end: { year: number; month: number; day: number } } {
  const now = new Date();
  const end = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  let startDate: Date;
  switch (period) {
    case "12m": startDate = new Date(now); startDate.setDate(startDate.getDate() - 365); break;
    case "90d": startDate = new Date(now); startDate.setDate(startDate.getDate() - 90); break;
    case "30d":
    default: startDate = new Date(now); startDate.setDate(startDate.getDate() - 30); break;
  }
  const start = { year: startDate.getFullYear(), month: startDate.getMonth() + 1, day: startDate.getDate() };
  return { start, end };
}

async function apiGet(path: string, params?: Record<string, string>, dryRun?: boolean): Promise<any> {
  const url = new URL(`${BASE_URL}${path}`);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, v);
    }
  }

  if (dryRun) {
    return {
      _dry_run: true,
      method: "GET",
      url: url.toString(),
      headers: {
        Authorization: "***",
        "LinkedIn-Version": "202402",
        "X-Restli-Protocol-Version": "2.0.0",
      },
    };
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "LinkedIn-Version": "202402",
      "X-Restli-Protocol-Version": "2.0.0",
    },
  });
  return res.json();
}

const USAGE = {
  tool: "linkedin-ads.ts",
  description: "LinkedIn Ads API CLI wrapper",
  env: ["LINKEDIN_ACCESS_TOKEN", "LINKEDIN_AD_ACCOUNT_ID"],
  commands: {
    "campaigns list": { flags: ["--limit N"] },
    "campaigns analytics": { flags: ["--period 30d|90d|12m"] },
    "creatives list": { flags: ["--campaign-id <id>"] },
    "spend summary": { flags: ["--period 30d|90d|12m"] },
  },
  usage: "bun tools/clis/linkedin-ads.ts <resource> <action> [--flags]",
  flags: { "--dry-run": "Preview the request without sending it" },
  notes: "Requires LinkedIn-Version and X-Restli-Protocol-Version headers.",
};

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(JSON.stringify(USAGE, null, 2));
    return;
  }

  const { resource, action, flags } = parseArgs(args);
  const dryRun = flags["dry-run"] === "true";
  const limit = flags.limit || "25";

  switch (resource) {
    case "campaigns": {
      if (action === "list") {
        const result = await apiGet(`/adAccounts/${AD_ACCOUNT_ID}/adCampaigns`, {
          q: "search",
          count: limit,
        }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else if (action === "analytics") {
        const period = flags.period || "30d";
        const dateRange = periodToDateRange(period);
        const result = await apiGet("/adAnalytics", {
          q: "analytics",
          pivot: "CAMPAIGN",
          "dateRange.start.year": dateRange.start.year.toString(),
          "dateRange.start.month": dateRange.start.month.toString(),
          "dateRange.start.day": dateRange.start.day.toString(),
          "dateRange.end.year": dateRange.end.year.toString(),
          "dateRange.end.month": dateRange.end.month.toString(),
          "dateRange.end.day": dateRange.end.day.toString(),
          fields: "externalWebsiteConversions,costInLocalCurrency,impressions,clicks",
        }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: campaigns ${action}`, available: ["list", "analytics"] }));
      }
      break;
    }

    case "creatives": {
      if (action === "list") {
        const campaignId = flags["campaign-id"];
        if (!campaignId) {
          console.error(JSON.stringify({ error: "creatives list requires --campaign-id <id>" }));
          process.exit(1);
        }
        const result = await apiGet(`/adAccounts/${AD_ACCOUNT_ID}/creatives`, {
          q: "search",
          [`search.campaign.values[0]`]: `urn:li:sponsoredCampaign:${campaignId}`,
        }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: creatives ${action}`, available: ["list"] }));
      }
      break;
    }

    case "spend": {
      if (action === "summary") {
        const period = flags.period || "30d";
        const dateRange = periodToDateRange(period);
        const result = await apiGet("/adAnalytics", {
          q: "analytics",
          pivot: "ACCOUNT",
          "dateRange.start.year": dateRange.start.year.toString(),
          "dateRange.start.month": dateRange.start.month.toString(),
          "dateRange.start.day": dateRange.start.day.toString(),
          "dateRange.end.year": dateRange.end.year.toString(),
          "dateRange.end.month": dateRange.end.month.toString(),
          "dateRange.end.day": dateRange.end.day.toString(),
          fields: "costInLocalCurrency,impressions,clicks,externalWebsiteConversions",
        }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: spend ${action}`, available: ["summary"] }));
      }
      break;
    }

    default:
      console.error(JSON.stringify({
        error: `Unknown resource: ${resource}`,
        available: ["campaigns", "creatives", "spend"],
      }));
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
