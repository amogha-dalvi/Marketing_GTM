#!/usr/bin/env bun

const API_KEY = process.env.STRIPE_API_KEY;

if (!API_KEY && process.argv.length > 2) {
  console.error(JSON.stringify({ error: "STRIPE_API_KEY environment variable required" }));
  process.exit(1);
}

const BASE_URL = "https://api.stripe.com/v1";

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

async function api(method: string, path: string, params?: Record<string, string>, dryRun?: boolean): Promise<any> {
  const url = new URL(`${BASE_URL}${path}`);
  if (method === "GET" && params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, v);
    }
  }

  if (dryRun) {
    return {
      _dry_run: true,
      method,
      url: url.toString(),
      headers: { Authorization: "***" },
      ...(method !== "GET" && params ? { body: new URLSearchParams(params).toString() } : {}),
    };
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${API_KEY}`,
  };

  const init: RequestInit = { method, headers };

  if (method !== "GET" && params) {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    init.body = new URLSearchParams(params).toString();
  }

  const res = await fetch(url.toString(), init);
  return res.json();
}

const USAGE = {
  tool: "stripe.ts",
  description: "Stripe API CLI wrapper",
  env: "STRIPE_API_KEY",
  commands: {
    "subscriptions list": { flags: ["--limit N", "--status active|canceled|all"] },
    "subscriptions get": { args: "<id>" },
    "customers list": { flags: ["--limit N", "--created-after YYYY-MM-DD"] },
    "invoices list": { flags: ["--limit N", "--status paid|open|void"] },
    "charges list": { flags: ["--limit N"] },
    "balance-transactions list": { flags: ["--limit N", "--type charge|refund"] },
    "prices list": { flags: ["--limit N"] },
    "products list": { flags: ["--limit N"] },
  },
  usage: "bun tools/clis/stripe.ts <resource> <action> [--flags]",
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
    case "subscriptions": {
      if (action === "list") {
        const params: Record<string, string> = { limit };
        if (flags.status && flags.status !== "all") params.status = flags.status;
        const result = await api("GET", "/subscriptions", params, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else if (action === "get") {
        const id = flags.id || args[2];
        if (!id || id.startsWith("--")) {
          console.error(JSON.stringify({ error: "Subscription ID required: subscriptions get <id>" }));
          process.exit(1);
        }
        const result = await api("GET", `/subscriptions/${id}`, undefined, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: subscriptions ${action}`, available: ["list", "get"] }));
      }
      break;
    }

    case "customers": {
      if (action === "list") {
        const params: Record<string, string> = { limit };
        if (flags["created-after"]) {
          const ts = Math.floor(new Date(flags["created-after"]).getTime() / 1000);
          params["created[gte]"] = ts.toString();
        }
        const result = await api("GET", "/customers", params, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: customers ${action}`, available: ["list"] }));
      }
      break;
    }

    case "invoices": {
      if (action === "list") {
        const params: Record<string, string> = { limit };
        if (flags.status) params.status = flags.status;
        const result = await api("GET", "/invoices", params, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: invoices ${action}`, available: ["list"] }));
      }
      break;
    }

    case "charges": {
      if (action === "list") {
        const result = await api("GET", "/charges", { limit }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: charges ${action}`, available: ["list"] }));
      }
      break;
    }

    case "balance-transactions": {
      if (action === "list") {
        const params: Record<string, string> = { limit };
        if (flags.type) params.type = flags.type;
        const result = await api("GET", "/balance_transactions", params, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: balance-transactions ${action}`, available: ["list"] }));
      }
      break;
    }

    case "prices": {
      if (action === "list") {
        const result = await api("GET", "/prices", { limit }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: prices ${action}`, available: ["list"] }));
      }
      break;
    }

    case "products": {
      if (action === "list") {
        const result = await api("GET", "/products", { limit }, dryRun);
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.error(JSON.stringify({ error: `Unknown action: products ${action}`, available: ["list"] }));
      }
      break;
    }

    default:
      console.error(JSON.stringify({
        error: `Unknown resource: ${resource}`,
        available: ["subscriptions", "customers", "invoices", "charges", "balance-transactions", "prices", "products"],
      }));
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
