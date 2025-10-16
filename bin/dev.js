#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { gitClean } from "../commands/git-clean.js";
import { envCheck } from "../commands/env-check.js";
import { lintCommit } from "../commands/lint-commit.js";
import { projectInfo } from "../commands/project-info.js";

const program = new Command();

program
  .name("dev")
  .description("🧰 Developer Toolkit CLI")
  .version("1.0.0");

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
  .description("Lint commit messages using conventional commits rules")
  .action(lintCommit);

program
  .command("project-info")
  .description("Show quick project info")
  .action(projectInfo);

program.parse();
