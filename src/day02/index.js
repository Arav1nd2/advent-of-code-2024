import path from "path";
import { fileURLToPath } from "url";
import { inputReader } from "../../utils/inputReader.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseInput(payload) {
  // Add your input parsing logic here.
  return payload
    .split("\n")
    .map((line) => line.split(" "))
    .map((line) => line.map((x) => parseInt(x)));
}

function isSameSign(a, b) {
  if (a <= 0 && b <= 0) return true;
  if (a >= 0 && b >= 0) return true;
  return false;
}

function isSafe(arr, sign) {
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(prev - arr[i]);
    if (diff < 1 || diff > 3 || !isSameSign(prev - arr[i], sign)) {
      return false;
    } else {
      prev = arr[i];
    }
  }
  return true;
}

function partOne(input) {
  // Solve for part one of the puzzle
  let safe = 0;
  for (const line of input) {
    if (isSafe(line, -1) || isSafe(line, 1)) {
      safe++;
    }
  }
  console.log("Output: %s", safe);
}

function partTwo(input) {
  // Solve for part two of the puzzle
  let safe = 0;
  for (const line of input) {
    if (isSafe(line, 1) || isSafe(line, -1)) {
      safe++;
    } else {
      const len = line.length;
      let found = false;
      for (let skip = 0; skip < len; skip++) {
        let arr = [];
        for (let i = 0; i < len; i++) {
          if (i === skip) continue;
          arr.push(line[i]);
        }
        if (isSafe(arr, 1) || isSafe(arr, -1)) {
          found = true;
          break;
        }
      }
      if (found) {
        safe++;
      }
    }
  }
  console.log("Output: %s", safe);
}

const { puzzleInput, sampleInput } = inputReader(__dirname);

partOne(parseInput(puzzleInput));
partTwo(parseInput(puzzleInput));
