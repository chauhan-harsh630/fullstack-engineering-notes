# 🛡️ Backend Security Audit Checklist

## 📖 Overview

A complete checklist to ensure Node.js / Express production backends resist security threats.

---

## 🔒 Security Audit Checklist

1. **Environment & Dependency Security**
   * Keep Node.js runtime and packages updated (`npm audit`).
   * Never commit `.env` files or API secrets to Git repository history.

2. **Data & Transport Protection**
   * Enforce HTTPS/TLS across all production endpoints (`Strict-Transport-Security`).
   * Hash passwords with `bcrypt` (work factor $\ge 12$).
   * Store JWT tokens in `HttpOnly`, `Secure`, `SameSite=Strict` cookies.

3. **Input Validation & Sanitization**
   * Use parameterized queries (`$1, $2`) to prevent SQL Injection.
   * Validate schema inputs with `zod` or `joi` to prevent Mass Assignment vulnerabilities.
   * Sanitize HTML to prevent XSS.

4. **Network & System Protection**
   * Configure strict CORS origin white-lists.
   * Apply global and route-specific Rate Limiting.
   * Use `helmet` to mask `X-Powered-By: Express` headers and set security headers.

---

## 📌 Summary
* Security is layered. Implement security checks at transport, header, code execution, and database persistence layers.
