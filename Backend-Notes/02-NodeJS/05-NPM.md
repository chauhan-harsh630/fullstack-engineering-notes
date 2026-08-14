# 📦 NPM (Node Package Manager)

## 📖 Overview

**NPM (Node Package Manager)** is the default package manager for Node.js. It consists of two main parts:
1. An online repository (registry) for publishing open-source Node.js packages.
2. A Command Line Interface (CLI) for installing, managing, and publishing dependencies in Node.js applications.

NPM is installed automatically when you install Node.js.

---

## 🎯 Key Concepts in NPM

### 1. `package.json`
The manifest file for any Node.js project. It records metadata, scripts, and installed dependencies.

```json
{
  "name": "my-backend-app",
  "version": "1.0.0",
  "description": "REST API Server",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### 2. `package-lock.json`
Automatically generated when `npm install` runs. It locks down the exact version of every installed package and its sub-dependencies to ensure reproducible builds across different environments.

### 3. `node_modules`
The folder where installed packages and their dependencies are stored locally on disk.

---

## ⚙️ Key Commands

| Command | Description |
| ------- | ----------- |
| `npm init -y` | Initialize a new `package.json` with default values |
| `npm install <package>` | Install a production dependency |
| `npm install -D <package>` | Install a development dependency (`devDependencies`) |
| `npm install -g <package>` | Install a package globally |
| `npm install` | Install all dependencies listed in `package.json` |
| `npm uninstall <package>` | Remove a package from `package.json` and `node_modules` |
| `npm run <script-name>` | Run custom scripts defined in `package.json` |

---

## 🔄 Semantic Versioning (SemVer)

NPM uses Semantic Versioning (`MAJOR.MINOR.PATCH` format, e.g., `2.4.1`):
* **MAJOR** (`2.x.x`): Breaking API changes.
* **MINOR** (`x.4.x`): New features added in a backward-compatible manner.
* **PATCH** (`x.x.1`): Backward-compatible bug fixes.

### Prefixes in `package.json`:
* `^2.4.1` (Caret): Allows updates to minor and patch releases (e.g., `2.5.0`, `2.4.2`).
* `~2.4.1` (Tilde): Allows updates to patch releases only (e.g., `2.4.2`).
* `2.4.1` (Exact): Locks down to exact version.

---

## 🧠 Interview Questions

### 1. What is the difference between `dependencies` and `devDependencies`?
* `dependencies`: Packages required for the production app to run (e.g., `express`, `pg`, `dotenv`).
* `devDependencies`: Packages needed only during development and testing (e.g., `nodemon`, `jest`, `eslint`).

### 2. Why is `package-lock.json` committed to Git?
It ensures all team members and deployment servers install the exact same dependency tree down to the specific commit/hash, avoiding "works on my machine" issues.

---

## 📌 Summary
* NPM manages external packages and project scripts.
* `package.json` tracks dependencies, while `package-lock.json` guarantees exact version locking.
* SemVer protects applications against unintended breaking changes.
