import chalk from "chalk";
import simpleGit from "simple-git";

export async function lintCommit() {
  const git = simpleGit();
  const log = await git.log({ n: 10 });

  const pattern = /^(feat|fix|chore|docs|style|refactor|test|perf):/;
  let invalidCount = 0;

  for (const c of log.all) {
    if (!pattern.test(c.message)) {
      console.log(chalk.red(`❌ ${c.message}`));
      invalidCount++;
    } else {
      console.log(chalk.green(`✅ ${c.message}`));
    }
  }

  console.log(
    invalidCount === 0
      ? chalk.green("🎉 All commits follow Conventional Commit rules!")
      : chalk.yellow(`⚠️ ${invalidCount} invalid commits found.`)
  );
}
