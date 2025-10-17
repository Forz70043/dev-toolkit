import fs from "fs";
import chalk from "chalk";
import simpleGit from "simple-git";
import { execSync } from "child_process";

const fetchFn = global.fetch || (await import("node-fetch")).default;

export async function projectInfo() {
  try {
    const remoteUrl = execSync("git config --get remote.origin.url").toString().trim();

    if (!remoteUrl) {
      console.log(chalk.red("❌ No remote Git repository found."));
      return;
    }

    const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
    if (!match) {
      console.log(chalk.red("❌ Repository does not appear to be on GitHub."));
      return;
    }

    const [_, owner, repo] = match;

    const res = await fetchFn(`https://api.github.com/repos/${owner}/${repo}`);
    if (!res.ok) {
      console.log(chalk.red(`❌ Unable to retrieve info from GitHub (${res.status})`));
      return;
    }

    const data = await res.json();

    console.log(chalk.bold.cyan(`\n📦 Repository Info: ${data.full_name}`));
    console.log(chalk.gray(data.html_url));
    console.log("");
    console.log(`${chalk.yellow("🪶  Description:")} ${data.description || "—"}`);
    console.log(`${chalk.yellow("⭐ Stars:")} ${data.stargazers_count}`);
    console.log(`${chalk.yellow("🍴 Forks:")} ${data.forks_count}`);
    console.log(`${chalk.yellow("👀 Open Issues:")} ${data.open_issues_count}\n`);
    console.log(`${chalk.yellow("🧱 Language:")} ${data.language || "Unknown"}`);
    console.log(`${chalk.yellow("🕒 Last Updated:")} ${new Date(data.updated_at).toLocaleString()}`);
    
    const commitsRes = await fetchFn(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
    if (commitsRes.ok) {
      const [lastCommit] = await commitsRes.json();
      if (lastCommit) {
        console.log(`${chalk.yellow("🧩 Last Commit:")} ${lastCommit.commit.message}`);
        console.log(`${chalk.gray(`by ${lastCommit.commit.author.name} on ${lastCommit.commit.author.date}`)}\n`);
      }
    }

  } catch (err) {
    console.error(chalk.red(`❌ Error: ${err.message}`));
  }
}
