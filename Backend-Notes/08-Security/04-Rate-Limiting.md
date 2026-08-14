# ⏱️ Rate Limiting & Denial of Service Protection

## 📖 Overview

**Rate Limiting** restricts the number of HTTP requests a client (identified by IP address or API token) can make to a server within a specified time window. It protects backend APIs against:
* Denial of Service (DoS) / Distributed DoS (DDoS) attacks.
* Brute-force password guessing attacks.
* API resource scraping and overuse.

---

## 🛠 Express Rate Limiting Implementation

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

// General API Limiter: 100 requests per 15 minutes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { status: 'fail', message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict Limiter for Auth Routes: 5 login attempts per 15 minutes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { status: 'fail', message: 'Too many failed login attempts.' }
});

app.use('/api', apiLimiter);
app.use('/api/v1/auth/login', authLimiter);
```

---

## 📌 Summary
* Enforce rate limits on all endpoints, with extra strict constraints on authentication and password reset routes.
