import chalk from "chalk";
import simpleGit from "simple-git";

export async function gitClean() {
  const git = simpleGit();

  try {
    const branches = await git.branchLocal();
    const current = branches.current;
    const remoteBranches = (await git.branch(["-r"])).all.map(b => b.replace("origin/", ""));

    const toDelete = branches.all.filter(
      b => !remoteBranches.includes(b) && b !== current
    );

    if (toDelete.length === 0) {
      console.log(chalk.green("✅ No outdated branches found."));
      return;
    }

    console.log(chalk.yellow(`🧹 Deleting ${toDelete.length} obsolete branches:`));
    for (const branch of toDelete) {
      await git.deleteLocalBranch(branch, true);
      console.log(chalk.gray(`  → ${branch}`));
    }

    console.log(chalk.green("✨ Cleanup complete!"));
  } catch (err) {
    console.error(chalk.red("❌ Error running git-clean:"), err.message);
  }
}
