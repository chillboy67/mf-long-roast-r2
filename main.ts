// Entry for make.fun: "The Long Roast"
// Emits the one-line roast to /output/entry.txt.
// The roast is a single fixed line, so every run writes the same bytes
// and the result is fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ROAST =
  "My agent is so confident it once auto-completed my resignation letter, sent it to my boss, and then congratulated me on my bold career move.";

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST + "\n", "utf8");
console.log(`Wrote entry to ${outPath}`);
