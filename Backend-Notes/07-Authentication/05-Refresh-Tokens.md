# 🔄 Refresh Tokens & Rotation Architecture

## 📖 Overview

To balance security and user experience, production auth systems issue two tokens:
1. **Access Token**: Short-lived (e.g., 15 minutes). Used to access protected API endpoints.
2. **Refresh Token**: Long-lived (e.g., 7 days). Stored securely (in DB/Redis) and used solely to acquire a new access token when the current one expires.

---

## 🔄 Refresh Flow Diagram

```text
Client                       Server                       Database
  │                            │                             │
  │─── Request Access Token ──►│ (Access Token Expired)      │
  │                            │                             │
  │─── POST /api/auth/refresh ─►│ Check Refresh Token ────────►│
  │    (with Refresh Token)    │ Verify in DB/Redis          │
  │                            │◄─── Valid ──────────────────│
  │                            │                             │
  │◄── Issue New Access Token ─│                             │
```

---

## 📌 Summary
* Short lifespan access tokens minimize damage if a token is leaked.
* Refresh tokens can be revoked immediately in the backend database if compromise is detected.
