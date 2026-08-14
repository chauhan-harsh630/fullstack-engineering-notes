# 🔑 Safe Password Hashing (`bcrypt`)

## 📖 Overview

Storing plain-text passwords in a database is a critical security violation. If the database is compromised, all user accounts become exposed. Passwords must be hashed using adaptive, salted cryptographic algorithms like **`bcrypt`** or **`argon2`**.

---

## 🛠 Why `bcrypt`?
1. **One-Way Hash**: Irreversible mathematical computation.
2. **Salting**: Appends a random cryptographic salt to every password before hashing, preventing rainbow table attacks.
3. **Adaptive Cost Factor (Work Factor)**: Slows down execution intentionally to defeat GPU-accelerated brute-force attacks.

---

## 💻 Code Example (`bcryptjs`)

```javascript
const bcrypt = require('bcryptjs');

// 1. Hash Password during User Signup
async function hashPassword(plainPassword) {
  const saltRounds = 12; // Recommended cost factor
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

// 2. Verify Password during User Login
async function verifyPassword(plainPassword, storedHash) {
  const isMatch = await bcrypt.compare(plainPassword, storedHash);
  return isMatch; // Returns true or false
}
```

---

## 📌 Summary
* Never store plain-text passwords or use plain fast hashes like MD5/SHA256.
* Use `bcrypt` with cost factor $\ge 10$.
