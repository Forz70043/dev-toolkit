import chalk from "chalk";

export const log = {
  info: msg => console.log(chalk.cyan("ℹ️ " + msg)),
  success: msg => console.log(chalk.green("✅ " + msg)),
  warn: msg => console.log(chalk.yellow("⚠️ " + msg)),
  error: msg => console.log(chalk.red("❌ " + msg))
};
