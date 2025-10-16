# 🧰 Dev Toolkit CLI

[![npm version](https://img.shields.io/npm/v/@forz70043/dev-toolkit.svg?style=flat-square)](https://www.npmjs.com/package/@forz70043/dev-toolkit)
[![License](https://img.shields.io/npm/l/@forz70043/dev-toolkit.svg?style=flat-square)](LICENSE)

A developer CLI for Git, env, and project automation.


A multi-purpose developer CLI for automating common tasks like cleaning branches, checking .env consistency, and linting commits.

### 🏁 Installation

```bash
git clone https://github.com/yourusername/dev-toolkit.git
cd dev-toolkit
npm install
npm link
```

### 💡 Usage
```bash
dev git-clean
dev env-check
dev lint-commit
dev project-info
```

---

### ⚡ How to run commands

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