# 🧰 Dev Toolkit CLI

[![npm version](https://img.shields.io/npm/v/@forz70043/dev-toolkit.svg?style=flat-square&color=00bfa5)](https://www.npmjs.com/package/@forz70043/dev-toolkit)
[![npm downloads](https://img.shields.io/npm/dt/@forz70043/dev-toolkit.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/@forz70043/dev-toolkit)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![GitHub Repo](https://img.shields.io/badge/source-GitHub-black?logo=github&style=flat-square)](https://github.com/Forz70043/dev-toolkit)

> A powerful CLI toolkit that automates common developer tasks — clean Git branches, check `.env` files, lint commits, and show project info.  
> Developed with ❤️ by [Alfonso Pisicchio](https://pisicchio.dev).


![Dev Toolkit demo](./assets/dev-kit.gif)


### 🏁 Installation

```bash
npm install -g @forz/dev-toolkit
```

### 💡 Usage
```bash
dev git-clean
dev env-check
dev lint-commit
dev project-info
```

---

### ⚡ How to run commands from repository

1. Open folder
   ```bash
   cd ~/dev-toolkit
    ```

2. Install dependencies
    ```
    npm install
    ```

3. Link globally the CLI :
    ```
    npm link
    ```

Now it's possible tu run commands everywhere:
```
dev git-clean   
dev env-check   
dev project-info  
```

💡 npm link create a global symlink → it's possible to test as is installed by npm i -g.


### 🧰 Roadmap
* ✅ Git branch cleaner
* ✅ Environment variable validator
* ✅ Commit linter
* ✅ Project info command
* ❌ dev help command with autocomplete
* ❌ GitHub API integration for remote repo stats


### 🧑‍💻 Author

Alfonso Pisicchio  
🌐 https://pisicchio.dev