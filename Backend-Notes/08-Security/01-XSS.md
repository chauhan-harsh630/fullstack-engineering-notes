# 🛡️ Cross-Site Scripting (XSS) Prevention

## 📖 Overview

**Cross-Site Scripting (XSS)** occurs when an attacker injects malicious client-side JavaScript into web applications, which is subsequently executed by browser users viewing the page.

---

## 🛠 Attack Vectors & Mitigations

### 1. Reflected / Stored XSS
An attacker submits HTML/script tags into a comment box (e.g., `<script>stealCookies()</script>`). If the backend renders or returns this unescaped, browsers execute it.

### 2. Backend Mitigations
* **Sanitize Inputs**: Use libraries like `DOMPurify` or `xss` to strip script tags.
* **Set Content Security Policy (CSP)**: Use `helmet` middleware in Express to specify allowed script execution sources.
  ```javascript
  const helmet = require('helmet');
  app.use(helmet());
  ```
* **Use HttpOnly Cookies**: Prevents XSS scripts from stealing session/auth tokens.

---

## 📌 Summary
* Never trust client inputs; sanitize data before storing and escaping HTML on output.
