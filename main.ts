// Make the AI Judge Laugh: Office Jokes — entry program.
// Writes one single-line office joke to /output/entry.txt.
// The joke: a boss calls it "wearing many hats"; payroll calls it one salary.
// One line, 66 characters, no setup longer than it needs to be.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My boss calls it 'wearing many hats'; payroll calls it one salary.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
