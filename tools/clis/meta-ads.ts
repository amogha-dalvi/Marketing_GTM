#!/usr/bin/env bun

const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID;

if ((!ACCESS_TOKEN || !AD_ACCOUNT_ID) && process.argv.length > 2) {
  console.error(JSON.stringify({ error: "META_ACCESS_TOKEN and META_AD_ACCOUNT_ID environment variables required" }));
  process.exit(1);
}

const BASE_URL = "https://graph.facebook.com/v21.0";

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

function periodToTimeRange(period: string): { since: string; until: string } {
  const now = new Date();
  const until = now.toISOString().split("T")[0];
  let since: Date;
  switch (period) {
    case "12m": since = new Date(now); since.setDate(since.getDate() - 365); break;
    case "90d": since = new Date(now); since.setDate(since.getDate() - 90); break;
    case "30d":
    default: since = new Date(now); since.setDate(since.getDate() - 30); break;
  }
  return { since: since.toISOString().split("T")[0], until };
}

async function apiGet(path: string, params?: Record<string, string>, dryRun?: boolean): Promise<any> {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("access_token", dryRun ? "***" : ACCESS_TOKEN!);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, v);
    }
  }

  if (dryRun) {
    return { _dry_run: true, method: "GET", url: url.toString() };
  }

  const res = await fetch(url.toString());
  return res.json();
}

const USAGE = {
  tool: "meta-ads.ts",
  description: "Meta (Facebook) Ads API CLI wrapper",
  env: ["META_ACCESS_TOKEN", "META_AD_ACCOUNT_ID"],
  commands: {
    "campaigns list": { flags: ["--limit N"] },
    "campaigns insights": { flags: ["--period 30d|90d|12m"] },
    "adsets list": { flags: ["--campaign-id <id>"] },
    "ads list": { flags: ["--adset-id <id>"] },
    "spend summary": { flags: ["--period 30d|90d|12m"] },
  },
  usage: "bun tools/clis/meta-ads.ts <resource> <action> [--flags]",
  flags: { "--dry-run": "Preview the request without sending it" },
  notes: "Meta uses act_{id} prefix for ad account endpoints. Access token is sent as a query parameter.",
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
  const accountPath = `/act_${AD_ACCOUNT_ID}`;

  switch (resource) {
    case "campaigns": {
      if (action === "list") {
        const result = await apiGet(`${accountPath}/campaigns`, {
          fields: "name,status,objective,daily_budget,lifetime_budget",
          limit,
        }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else if (action === "insights") {
        const period = flags.period || "30d";
        const timeRange = periodToTimeRange(period);
        const result = await apiGet(`${accountPath}/insights`, {
          fields: "spend,impressions,clicks,actions,cpc,cpm,ctr",
          time_range: JSON.stringify(timeRange),
          level: "campaign",
          limit,
        }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: campaigns ${action}`, available: ["list", "insights"] }));
      }
      break;
    }

    case "adsets": {
      if (action === "list") {
        const campaignId = flags["campaign-id"];
        if (!campaignId) {
          console.error(JSON.stringify({ error: "adsets list requires --campaign-id <id>" }));
          process.exit(1);
        }
        const result = await apiGet(`/${campaignId}/adsets`, {
          fields: "name,status,targeting,daily_budget",
          limit,
        }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: adsets ${action}`, available: ["list"] }));
      }
      break;
    }

    case "ads": {
      if (action === "list") {
        const adsetId = flags["adset-id"];
        if (!adsetId) {
          console.error(JSON.stringify({ error: "ads list requires --adset-id <id>" }));
          process.exit(1);
        }
        const result = await apiGet(`/${adsetId}/ads`, {
          fields: "name,status,creative",
          limit,
        }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: ads ${action}`, available: ["list"] }));
      }
      break;
    }

    case "spend": {
      if (action === "summary") {
        const period = flags.period || "30d";
        const timeRange = periodToTimeRange(period);
        const result = await apiGet(`${accountPath}/insights`, {
          fields: "spend,impressions,clicks,actions",
          time_range: JSON.stringify(timeRange),
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
        available: ["campaigns", "adsets", "ads", "spend"],
      }));
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
