// Make the AI Judge Laugh: Office Jokes — entry program.
// Writes one single-line office joke to /output/entry.txt.
// The joke: a boss calls it "wearing many hats"; payroll calls it one salary.
// One line, 66 characters, no setup longer than it needs to be.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My boss calls it 'wearing many hats'; payroll calls it one salary.";

// The gate only judges a text of 1 to 199 characters: fail loudly here
// rather than shipping an entry the gate would refuse.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
