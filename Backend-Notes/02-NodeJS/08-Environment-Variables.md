# 🔐 Environment Variables (`process.env`)

## 📖 Overview

Environment variables allow developers to store sensitive application configuration (such as database credentials, API secret keys, session tokens, and port numbers) outside the codebase.

In Node.js, environment variables are accessible via the global `process.env` object.

---

## 🛠 Using `.env` and `dotenv`

Store secrets in a `.env` file at the root of the project:

```env
PORT=5000
DATABASE_URL=postgres://user:password@localhost:5432/mydb
JWT_SECRET=supersecretkey123
```

Load variables into `process.env` using the `dotenv` package:

```js
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

console.log(`Server starting on port ${PORT}`);
```

---

## ⚠️ Security Best Practices
1. **Never commit `.env` to Git**: Always add `.env` to `.gitignore`.
2. **Provide `.env.example`**: Commit a template file showing required key names without actual values.

---

## 📌 Summary
* `process.env` gives access to runtime environment configurations.
* Protect secrets by loading them dynamically using `dotenv` and excluding `.env` from git repositories.
