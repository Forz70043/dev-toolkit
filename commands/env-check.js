import fs from "fs";
import chalk from "chalk";
import dotenv from "dotenv";

export function envCheck() {
  const envFile = ".env";
  const exampleFile = ".env.example";

  if (!fs.existsSync(exampleFile)) {
    console.log(chalk.red("❌ Missing .env.example file."));
    process.exit(1);
  }

  const envVars = dotenv.parse(fs.readFileSync(envFile, "utf-8"));
  const exampleVars = dotenv.parse(fs.readFileSync(exampleFile, "utf-8"));

  const missing = Object.keys(exampleVars).filter(k => !(k in envVars));
  const extra = Object.keys(envVars).filter(k => !(k in exampleVars));

  if (missing.length === 0 && extra.length === 0) {
    console.log(chalk.green("✅ Environment variables are consistent!"));
    return;
  }

  if (missing.length > 0)
    console.log(chalk.yellow("⚠️ Missing variables:"), missing.join(", "));

  if (extra.length > 0)
    console.log(chalk.cyan("ℹ️ Extra variables:"), extra.join(", "));
}
