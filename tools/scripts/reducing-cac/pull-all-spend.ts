#!/usr/bin/env bun

/**
 * Aggregates ad spend across all configured ad platforms.
 * Calls each platform CLI's `spend summary` command and merges results.
 *
 * Output: { channels: [{ name, monthly_spend, period, source }] }
 *
 * Skips platforms without credentials (does not fail).
 */

const TOOLS_DIR = new URL("../../clis/", import.meta.url).pathname;

interface ChannelSpend {
  name: string;
  monthly_spend: number | null;
  period: string;
  source: string;
  raw?: any;
}

const PLATFORMS = [
  {
    name: "Google Ads",
    envCheck: "GOOGLE_ADS_TOKEN",
    cli: "google-ads.ts",
    args: ["spend", "summary", "--period", "12m"],
  },
  {
    name: "Meta Ads",
    envCheck: "META_ACCESS_TOKEN",
    cli: "meta-ads.ts",
    args: ["spend", "summary", "--period", "12m"],
  },
  {
    name: "LinkedIn Ads",
    envCheck: "LINKEDIN_ACCESS_TOKEN",
    cli: "linkedin-ads.ts",
    args: ["spend", "summary", "--period", "12m"],
  },
];

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
  const channels: ChannelSpend[] = [];
  const skipped: string[] = [];

  for (const platform of PLATFORMS) {
    if (!process.env[platform.envCheck]) {
      skipped.push(`${platform.name} (${platform.envCheck} not set)`);
      continue;
    }

    const result = await runCli(platform.cli, platform.args);
    channels.push({
      name: platform.name,
      monthly_spend: null, // Caller must extract from raw platform response
      period: "12m",
      source: platform.cli,
      raw: result,
    });
  }

  const output = {
    channels,
    skipped,
    note: "monthly_spend is null when raw data needs parsing. The orchestrator or calculate-cac script extracts the actual values from the raw platform response format.",
  };

  console.log(JSON.stringify(output, null, 2));
}

main().catch((err) => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
