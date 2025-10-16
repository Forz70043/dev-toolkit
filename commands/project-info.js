import fs from "fs";
import chalk from "chalk";
import simpleGit from "simple-git";

export async function projectInfo() {
  const pkgPath = "./package.json";

  const git = simpleGit();
  const currentBranch = (await git.branchLocal()).current;
  const lastCommit = (await git.log({ n: 1 })).latest;

  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    console.log(chalk.cyan("📦 Project Info"));
    console.log(chalk.white(`Name:        ${pkg.name}`));
    console.log(chalk.white(`Version:     ${pkg.version}`));
  }

  console.log(chalk.white(`Branch:      ${currentBranch}`));
  console.log(chalk.white(`Last commit: ${lastCommit.message}`));
  console.log(chalk.gray(`By ${lastCommit.author_name} on ${lastCommit.date}`));
}
