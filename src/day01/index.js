import path from "path";
import { fileURLToPath } from "url";
import { inputReader } from "../../utils/inputReader.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseInput(payload) {
  const parsed = payload.split("\n").map((line) =>
    line
      .split(" ")
      .filter((num) => !isNaN(parseInt(num)))
      .map((num) => parseInt(num))
  );
  const listA = [],
    listB = [];
  for (const [a, b] of parsed) {
    listA.push(a);
    listB.push(b);
  }
  return [listA, listB];
}

function partOne(input) {
  const [listA, listB] = parseInput(input);

  listA.sort((a, b) => a - b);
  listB.sort((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < listA.length; i++) {
    total += Math.abs(listA[i] - listB[i]);
  }

  console.log("Part 1 output: %s", total);
}

function partTwo(input) {
  const [listA, listB] = parseInput(input);

  const count = new Map();

  for (const element of listB) {
    count.set(element, (count.get(element) || 0) + 1);
  }

  let total = 0;
  for (const element of listA) {
    if (count.has(element)) {
      total += element * count.get(element);
    }
  }

  console.log("Part 2 output: %s", total);
}

const { puzzleInput } = inputReader(__dirname);

partOne(puzzleInput);
partTwo(puzzleInput);
