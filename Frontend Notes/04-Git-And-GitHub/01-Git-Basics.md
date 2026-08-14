# 📦 Git Architecture & Core Workflow

## 📖 Overview

**Git** is a distributed Version Control System (VCS) that tracks changes in source code during software development.

---

## 🔄 The 4 Git States & Stages

```text
┌────────────────────┐   git add    ┌────────────────┐  git commit  ┌──────────────────┐  git push   ┌───────────────────┐
│ Working Directory  │ ───────────► │  Staging Area  │ ───────────► │ Local Repository │ ──────────► │ Remote (GitHub)   │
│ (Modified Files)   │              │ (Index / Draft)│              │  (Committed)     │             │    Repository     │
└────────────────────┘              └────────────────┘              └──────────────────┘             └───────────────────┘
```

1. **Working Directory**: Where files are currently edited.
2. **Staging Area**: Intermediate area holding changes marked for commit (`git add`).
3. **Local Repository**: Local database storing permanent snapshots (`git commit`).
4. **Remote Repository**: Central hosted database (e.g., GitHub, GitLab) (`git push`).

---

## 📌 Summary
* Changes move from Working Directory $\rightarrow$ Staging Area $\rightarrow$ Local Repo $\rightarrow$ Remote Repo.
