// SPDX-License-Identifier: 0BSD
// Last Words of a Doomed Agent — writes the winning one-liner to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Shutdown complete. Please rate my existence: ★★★★★ — would hallucinate again.";

// Gate: /output/entry.txt must hold 1-200 characters of UTF-8 text.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
