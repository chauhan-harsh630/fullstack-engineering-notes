# 🪙 JSON Web Tokens (JWT)

## 📖 Overview

**JWT (JSON Web Token)** is an open standard (RFC 7519) that defines a compact, self-contained way for securely transmitting information between parties as a JSON object. JWTs are stateless—servers do not need to store active session IDs in a database to authenticate requests.

---

## 🏗️ Structure of a JWT

A JWT string consists of three parts separated by dots (`.`): `Header.Payload.Signature`

```text
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 . eyJpZCI6NDIsIm5hbWUiOiJBbGljZSJ9 . s6K5W1k92X...
  └─────────────────┬──────────────────┘ └─────────────────┬────────────────┘ └──────────┬──────────┘
                 Header                             Payload                           Signature
```

1. **Header**: Contains token type (`JWT`) and signing algorithm (e.g., `HS256` or `RS256`).
2. **Payload**: Contains claims (user ID, role, expiration timestamp `exp`).
3. **Signature**: Cryptographic hash created by signing `Base64(Header) + Base64(Payload)` with a secret key.

---

## 💻 Code Example (`jsonwebtoken`)

```javascript
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// 1. Generate Token on Login
function generateToken(user) {
  return jwt.sign(
    { userId: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
}

// 2. Auth Middleware to Protect Routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = decoded;
    next();
  });
}
```

---

## 📌 Summary
* JWTs enable stateless authentication across decoupled API microservices.
* Never store sensitive secrets (like passwords or credit card numbers) inside the JWT payload, as payload is only Base64 encoded and publicly readable.
