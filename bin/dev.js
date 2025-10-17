#!/usr/bin/env node
/**
 * dev-toolkit CLI
 * Author: Alfonso Pisicchio <https://pisicchio.dev>
 * License: MIT
 */

import { Command } from "commander";
import chalk from "chalk";
import { gitClean } from "../commands/git-clean.js";
import { envCheck } from "../commands/env-check.js";
import { lintCommit } from "../commands/lint-commit.js";
import { projectInfo } from "../commands/project-info.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgPath = path.resolve(__dirname, "../package.json");
const { version } = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

const program = new Command();

// =======================================
// 📦 Program Definition
// =======================================
program
  .name("dev")
  .description("🧰 Developer Toolkit CLI")
  .version(version);

// =======================================
// 🧩 Commands
// =======================================
program
  .command("git-clean")
  .description("Remove local Git branches not present in remote")
  .action(gitClean);

program
  .command("env-check")
  .description("Validate .env file against .env.example")
  .action(envCheck);

program
  .command("lint-commit")
  .description("Lint commit messages for Conventional Commit compliance")
  .action(lintCommit);

program
  .command("project-info")
  .description("Show quick project info")
  .action(projectInfo);

// Override help
program.addHelpText("after", `
  
Examples:
  $ dev git-clean
  $ dev env-check
  $ dev lint-commit
  $ dev project-info
`);

program.parse(process.argv);
