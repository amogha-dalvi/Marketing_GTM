#!/usr/bin/env bun

const ACCESS_TOKEN = process.env.GA4_ACCESS_TOKEN;
const PROPERTY_ID = process.env.GA4_PROPERTY_ID;

if ((!ACCESS_TOKEN || !PROPERTY_ID) && process.argv.length > 2) {
  console.error(JSON.stringify({ error: "GA4_ACCESS_TOKEN and GA4_PROPERTY_ID environment variables required" }));
  process.exit(1);
}

const BASE_URL = "https://analyticsdata.googleapis.com/v1beta";

function parseArgs(args: string[]): { command: string; flags: Record<string, string> } {
  const command = args[0] || "";
  const flags: Record<string, string> = {};
  for (let i = 1; i < args.length; i++) {
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
  return { command, flags };
}

function periodToDateRange(period: string): { startDate: string; endDate: string } {
  switch (period) {
    case "12m": return { startDate: "365daysAgo", endDate: "today" };
    case "6m": return { startDate: "180daysAgo", endDate: "today" };
    case "3m": return { startDate: "90daysAgo", endDate: "today" };
    case "30d": return { startDate: "30daysAgo", endDate: "today" };
    default: return { startDate: "365daysAgo", endDate: "today" };
  }
}

async function api(method: string, path: string, body?: any, dryRun?: boolean): Promise<any> {
  const url = `${BASE_URL}/properties/${PROPERTY_ID}${path}`;

  if (dryRun) {
    return {
      _dry_run: true,
      method,
      url,
      headers: { Authorization: "***" },
      ...(body ? { body } : {}),
    };
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };

  const init: RequestInit = { method, headers };
  if (body) init.body = JSON.stringify(body);

  const res = await fetch(url, init);
  return res.json();
}

async function apiGet(path: string, dryRun?: boolean): Promise<any> {
  const url = `${BASE_URL}/properties/${PROPERTY_ID}${path}`;

  if (dryRun) {
    return { _dry_run: true, method: "GET", url, headers: { Authorization: "***" } };
  }

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
  return res.json();
}

const USAGE = {
  tool: "ga4.ts",
  description: "Google Analytics 4 Data API CLI wrapper",
  env: ["GA4_ACCESS_TOKEN", "GA4_PROPERTY_ID"],
  commands: {
    report: {
      flags: ["--dimensions <dim1,dim2>", "--metrics <met1,met2>", "--period 12m|6m|3m|30d", "--limit N"],
      dimensions: ["source", "medium", "sessionSource", "sessionMedium", "pagePath", "date"],
      metrics: ["sessions", "conversions", "totalUsers", "newUsers", "engagedSessions"],
    },
    realtime: { flags: ["--metrics <met1,met2>"] },
    metadata: { description: "Lists available dimensions and metrics" },
  },
  usage: "bun tools/clis/ga4.ts <command> [--flags]",
  flags: { "--dry-run": "Preview the request without sending it" },
};

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(JSON.stringify(USAGE, null, 2));
    return;
  }

  const { command, flags } = parseArgs(args);
  const dryRun = flags["dry-run"] === "true";

  switch (command) {
    case "report": {
      const dimensions = (flags.dimensions || "sessionSource,sessionMedium")
        .split(",")
        .map((d: string) => ({ name: d.trim() }));
      const metrics = (flags.metrics || "sessions,conversions")
        .split(",")
        .map((m: string) => ({ name: m.trim() }));
      const period = flags.period || "12m";
      const limit = parseInt(flags.limit || "100", 10);
      const dateRange = periodToDateRange(period);

      const body = {
        dateRanges: [dateRange],
        dimensions,
        metrics,
        limit,
      };

      const result = await api("POST", ":runReport", body, dryRun);
      console.log(JSON.stringify(result, null, 2));
      break;
    }

    case "realtime": {
      const metrics = (flags.metrics || "activeUsers")
        .split(",")
        .map((m: string) => ({ name: m.trim() }));

      const body = { metrics };
      const result = await api("POST", ":runRealtimeReport", body, dryRun);
      console.log(JSON.stringify(result, null, 2));
      break;
    }

    case "metadata": {
      const result = await apiGet("/metadata", dryRun);
      console.log(JSON.stringify(result, null, 2));
      break;
    }

    default:
      console.error(JSON.stringify({
        error: `Unknown command: ${command}`,
        available: ["report", "realtime", "metadata"],
      }));
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
