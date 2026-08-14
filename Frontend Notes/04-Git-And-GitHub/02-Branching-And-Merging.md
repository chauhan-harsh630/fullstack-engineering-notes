# 🌿 Git Branching & Merge Conflict Resolution

## 📖 Overview

Branching allows developers to isolate feature development, bug fixes, or experiments without affecting the stable `main` production codebase.

---

## 🛠 Branching Commands

```bash
# Create and switch to a new feature branch
git checkout -b feature/user-auth

# Switch back to main branch
git checkout main

# Merge feature branch into main
git merge feature/user-auth
```

---

## 💥 Resolving Merge Conflicts

When Git cannot automatically resolve edits to the same lines of code across merged branches, it inserts conflict markers:

```html
<<<<<<< HEAD
<h1>Production Title</h1>
=======
<h1>New Feature Title</h1>
>>>>>>> feature/user-auth
```

### Steps to Resolve:
1. Manually edit the file to keep the desired code.
2. Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
3. Run `git add <file>` and `git commit` to finalize the merge.

---

## 📌 Summary
* Develop new features on isolated feature branches before merging to `main`.
