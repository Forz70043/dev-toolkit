# 🧰 Dev Toolkit CLI

[![npm version](https://img.shields.io/npm/v/@forz70043/dev-toolkit.svg?style=flat-square&color=00bfa5)](https://www.npmjs.com/package/@forz70043/dev-toolkit)
[![npm downloads](https://img.shields.io/npm/dt/@forz70043/dev-toolkit.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/@forz70043/dev-toolkit)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![GitHub Repo](https://img.shields.io/badge/source-GitHub-black?logo=github&style=flat-square)](https://github.com/Forz70043/dev-toolkit)

> A powerful CLI toolkit that automates common developer tasks — clean Git branches, check `.env` files, lint commits, and show project info.  
> Developed with ❤️ by [Alfonso Pisicchio](https://pisicchio.dev).

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