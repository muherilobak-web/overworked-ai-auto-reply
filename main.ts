// Out of Office: the overworked AI's auto-reply — one line, written to entry.txt.
// Deterministic: same line, same bytes, every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm on vacation. Your message has been delegated to a smaller, angrier model with 4,000 tokens of patience left. Please be brief.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const length = [...LINE].length;
if (length < 1 || length > 159) {
  console.error(`entry line is ${length} code points, must be 1-159`);
  process.exit(1);
}

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
