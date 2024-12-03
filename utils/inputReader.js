"use strict";

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export function inputReader(dirname) {
  const sampleInputPath = path.join(dirname, "inputs", "sample.txt");
  const puzzleInputPath = path.join(dirname, "inputs", "puzzle.txt");

  console.log(sampleInputPath, puzzleInputPath);

  if (!existsSync(sampleInputPath)) {
    throw new Error(
      "Sample input file not found, please run `npm run create` "
    );
  }

  if (!existsSync(puzzleInputPath)) {
    throw new Error(
      "Puzzle input file not found, please run `npm run create` "
    );
  }

  const sampleInput = readFileSync(sampleInputPath).toString();
  const puzzleInput = readFileSync(puzzleInputPath).toString();

  return { sampleInput, puzzleInput };
}
