#!/usr/bin/env bun

const TOKEN = process.env.GOOGLE_ADS_TOKEN;
const DEV_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
const CUSTOMER_ID = process.env.GOOGLE_ADS_CUSTOMER_ID;

if ((!TOKEN || !DEV_TOKEN || !CUSTOMER_ID) && process.argv.length > 2) {
  console.error(JSON.stringify({
    error: "GOOGLE_ADS_TOKEN, GOOGLE_ADS_DEVELOPER_TOKEN, and GOOGLE_ADS_CUSTOMER_ID environment variables required",
  }));
  process.exit(1);
}

const BASE_URL = "https://googleads.googleapis.com/v18";

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

function periodToGaql(period: string): string {
  switch (period) {
    case "30d": return "LAST_30_DAYS";
    case "90d": return "LAST_90_DAYS";
    case "12m": return "LAST_12_MONTHS";
    default: return "LAST_30_DAYS";
  }
}

async function gaqlQuery(query: string, dryRun?: boolean): Promise<any> {
  const url = `${BASE_URL}/customers/${CUSTOMER_ID}/googleAds:searchStream`;
  const body = { query };

  if (dryRun) {
    return {
      _dry_run: true,
      method: "POST",
      url,
      headers: { Authorization: "***", "developer-token": "***" },
      body,
    };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "developer-token": DEV_TOKEN!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return convertMicros(data);
}

function convertMicros(data: any): any {
  if (Array.isArray(data)) return data.map(convertMicros);
  if (data && typeof data === "object") {
    const result: any = {};
    for (const [key, value] of Object.entries(data)) {
      if (key === "costMicros" || key === "cost_micros") {
        result[key] = value;
        result[key.replace("Micros", "").replace("_micros", "") + "_dollars"] =
          (Number(value) / 1_000_000).toFixed(2);
      } else {
        result[key] = convertMicros(value);
      }
    }
    return result;
  }
  return data;
}

const USAGE = {
  tool: "google-ads.ts",
  description: "Google Ads API CLI wrapper (GAQL)",
  env: ["GOOGLE_ADS_TOKEN", "GOOGLE_ADS_DEVELOPER_TOKEN", "GOOGLE_ADS_CUSTOMER_ID"],
  commands: {
    "campaigns list": { flags: ["--limit N"] },
    "campaigns report": { flags: ["--period 30d|90d|12m"] },
    "adgroups list": { flags: ["--campaign-id <id>"] },
    "keywords list": { flags: ["--campaign-id <id>"] },
    "spend summary": { flags: ["--period 30d|90d|12m"] },
  },
  usage: "bun tools/clis/google-ads.ts <resource> <action> [--flags]",
  flags: { "--dry-run": "Preview the request without sending it" },
};

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(JSON.stringify(USAGE, null, 2));
    return;
  }

  const { resource, action, flags } = parseArgs(args);
  const dryRun = flags["dry-run"] === "true";
  const period = periodToGaql(flags.period || "30d");
  const limit = flags.limit || "100";

  switch (resource) {
    case "campaigns": {
      if (action === "list") {
        const query = `SELECT campaign.name, campaign.status, metrics.cost_micros, metrics.conversions, metrics.clicks, metrics.impressions FROM campaign WHERE segments.date DURING LAST_30_DAYS LIMIT ${limit}`;
        const result = await gaqlQuery(query, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else if (action === "report") {
        const query = `SELECT campaign.name, campaign.status, metrics.cost_micros, metrics.conversions, metrics.clicks, metrics.impressions FROM campaign WHERE segments.date DURING ${period} LIMIT ${limit}`;
        const result = await gaqlQuery(query, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: campaigns ${action}`, available: ["list", "report"] }));
      }
      break;
    }

    case "adgroups": {
      if (action === "list") {
        const campaignId = flags["campaign-id"];
        if (!campaignId) {
          console.error(JSON.stringify({ error: "adgroups list requires --campaign-id <id>" }));
          process.exit(1);
        }
        const query = `SELECT ad_group.name, metrics.cost_micros, metrics.conversions FROM ad_group WHERE campaign.id = ${campaignId}`;
        const result = await gaqlQuery(query, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: adgroups ${action}`, available: ["list"] }));
      }
      break;
    }

    case "keywords": {
      if (action === "list") {
        const campaignId = flags["campaign-id"];
        if (!campaignId) {
          console.error(JSON.stringify({ error: "keywords list requires --campaign-id <id>" }));
          process.exit(1);
        }
        const query = `SELECT ad_group_criterion.keyword.text, metrics.clicks, metrics.cost_micros FROM keyword_view WHERE campaign.id = ${campaignId}`;
        const result = await gaqlQuery(query, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: keywords ${action}`, available: ["list"] }));
      }
      break;
    }

    case "spend": {
      if (action === "summary") {
        const query = `SELECT metrics.cost_micros, metrics.conversions, metrics.clicks FROM customer WHERE segments.date DURING ${period}`;
        const result = await gaqlQuery(query, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: spend ${action}`, available: ["summary"] }));
      }
      break;
    }

    default:
      console.error(JSON.stringify({
        error: `Unknown resource: ${resource}`,
        available: ["campaigns", "adgroups", "keywords", "spend"],
      }));
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
