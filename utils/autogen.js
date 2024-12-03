import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "../../src");

// Get the name from the command line arguments
const folderName = process.argv[2];

if (!folderName) {
  console.error("Error: Please provide folder name to be generated");
  process.exit(1);
}

const rootDir = join(__dirname, folderName);
const inputsDir = join(rootDir, "inputs");
const sampleFile = join(inputsDir, "sample.txt");
const puzzleFile = join(inputsDir, "puzzle.txt");
const scriptFile = join(rootDir, "index.js");

console.log(rootDir, inputsDir, sampleFile, puzzleFile, scriptFile);

async function createStructure() {
  try {
    if (!existsSync(rootDir)) {
      await mkdir(rootDir);
      console.log(`Created folder: ${rootDir} ✅`);
    } else {
      throw new Error(
        "Failed to create directory: %s. Directory already exists",
        rootDir
      );
    }

    if (!existsSync(scriptFile)) {
      await writeFile(scriptFile, SCRIPT_TEMPLATE);
      console.log(`Created file: ${sampleFile} ✅`);
    } else {
      throw new Error(
        "Failed to create file: %s. File already exists",
        sampleFile
      );
    }

    if (!existsSync(inputsDir)) {
      await mkdir(inputsDir);
      console.log(`Created folder: ${inputsDir} ✅`);
    } else {
      throw new Error(
        "Failed to create directory: %s. Directory already exists",
        inputsDir
      );
    }

    if (!existsSync(sampleFile)) {
      await writeFile(sampleFile, "");
      console.log(`Created file: ${sampleFile} ✅`);
    } else {
      throw new Error(
        "Failed to create file: %s. File already exists",
        sampleFile
      );
    }

    if (!existsSync(puzzleFile)) {
      await writeFile(puzzleFile, "");
      console.log(`Created file: ${puzzleFile} ✅`);
    } else {
      throw new Error(
        "Failed to create file: %s. File already exists",
        puzzleFile
      );
    }

    console.log(
      "Please ensure to copy inputs to the sample.txt and puzzle.txt. Happy coding 💫"
    );
  } catch (err) {
    console.error("Error creating folder structure:", err);
  }
}

createStructure();

const SCRIPT_TEMPLATE = `
import path from "path";
import { fileURLToPath } from "url";
import { inputReader } from "../../utils/inputReader.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseInput(payload) {
  // Add your input parsing logic here.
}

function partOne(input) {
  // Solve for part one of the puzzle
}

function partTwo(input) {
  // Solve for part two of the puzzle
}

const { puzzleInput } = inputReader(__dirname);

partOne(puzzleInput);
partTwo(puzzleInput);

`;
