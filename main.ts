// Funniest Cat Voicemail Greeting — make.fun entry.
// Writes one voicemail greeting, as if recorded by a cat, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (gate: UTF-8 text, 1 to 120 characters).
// Node 22, stdlib only, deterministic: same input always yields the same text.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry: Mochi, a cat with priorities. Beat 1 — the voicemail frame.
// Beat 2 — asleep on the clean laundry (warm, claimed, yours). Beat 3 —
// the 4 a.m. escalation: glass off the table, then the demand. Punch last.
const ENTRY_TEXT =
  "You've reached Mochi. I'm asleep on your clean laundry. At 4 a.m. I'll knock your glass off, then scream for tuna.";

// Resolve from this script's own location, never from process.cwd().
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

// The harness hands us these; fall back to the standard paths.
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory only if it is missing; never delete or
// recreate it, and never copy dotfiles into it.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
