#!/usr/bin/env bun

const API_KEY = process.env.HUBSPOT_API_KEY;

if (!API_KEY && process.argv.length > 2) {
  console.error(JSON.stringify({ error: "HUBSPOT_API_KEY environment variable required" }));
  process.exit(1);
}

const BASE_URL = "https://api.hubapi.com";

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

async function apiGet(path: string, params?: Record<string, string>, dryRun?: boolean): Promise<any> {
  const url = new URL(`${BASE_URL}${path}`);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, v);
    }
  }

  if (dryRun) {
    return { _dry_run: true, method: "GET", url: url.toString(), headers: { Authorization: "***" } };
  }

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return res.json();
}

async function apiPost(path: string, body: any, dryRun?: boolean): Promise<any> {
  const url = `${BASE_URL}${path}`;

  if (dryRun) {
    return { _dry_run: true, method: "POST", url, headers: { Authorization: "***" }, body };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

const DEFAULT_DEAL_PROPERTIES = "dealname,amount,dealstage,closedate,pipeline,hs_analytics_source";

const USAGE = {
  tool: "hubspot.ts",
  description: "HubSpot CRM API CLI wrapper",
  env: "HUBSPOT_API_KEY",
  commands: {
    "deals list": { flags: ["--limit N", "--properties <prop1,prop2>"] },
    "deals search": { flags: ['--filters <json>'] },
    "contacts list": { flags: ["--limit N"] },
    "pipelines list": {},
    "owners list": {},
  },
  usage: "bun tools/clis/hubspot.ts <resource> <action> [--flags]",
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
  const limit = flags.limit || "10";

  switch (resource) {
    case "deals": {
      if (action === "list") {
        const properties = flags.properties || DEFAULT_DEAL_PROPERTIES;
        const result = await apiGet("/crm/v3/objects/deals", { limit, properties }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else if (action === "search") {
        const filtersJson = flags.filters;
        if (!filtersJson) {
          console.error(JSON.stringify({ error: "deals search requires --filters <json>" }));
          process.exit(1);
        }
        let filters: any;
        try {
          filters = JSON.parse(filtersJson);
        } catch {
          console.error(JSON.stringify({ error: "Invalid JSON in --filters" }));
          process.exit(1);
        }
        const body = {
          filterGroups: [{ filters }],
          properties: (flags.properties || DEFAULT_DEAL_PROPERTIES).split(","),
          limit: parseInt(limit, 10),
        };
        const result = await apiPost("/crm/v3/objects/deals/search", body, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: deals ${action}`, available: ["list", "search"] }));
      }
      break;
    }

    case "contacts": {
      if (action === "list") {
        const result = await apiGet("/crm/v3/objects/contacts", { limit }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: contacts ${action}`, available: ["list"] }));
      }
      break;
    }

    case "pipelines": {
      if (action === "list") {
        const result = await apiGet("/crm/v3/pipelines/deals", undefined, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: pipelines ${action}`, available: ["list"] }));
      }
      break;
    }

    case "owners": {
      if (action === "list") {
        const result = await apiGet("/crm/v3/owners", undefined, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: owners ${action}`, available: ["list"] }));
      }
      break;
    }

    default:
      console.error(JSON.stringify({
        error: `Unknown resource: ${resource}`,
        available: ["deals", "contacts", "pipelines", "owners"],
      }));
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
