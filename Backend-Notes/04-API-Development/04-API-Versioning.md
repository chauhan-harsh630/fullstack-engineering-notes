# 🔀 API Versioning Strategies

## 📖 Overview

As mobile apps, single-page web applications, and third-party integrations consume your API, introducing breaking changes to request/response models can break client applications in production. **API Versioning** allows teams to deploy new features and schema updates while maintaining backward compatibility for existing clients.

---

## 🛠 Common Versioning Strategies

### 1. URI Path Versioning (Recommended)
Include the version number explicitly in the URL path.

```http
GET /api/v1/users
GET /api/v2/users
```

#### Implementation in Express:
```javascript
const v1Router = require('./routes/v1');
const v2Router = require('./routes/v2');

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);
```

### 2. Header Versioning (Custom Header)
Clients pass the desired version in a custom HTTP header.

```http
GET /api/users
X-API-Version: 2.0
```

### 3. Accept / Media Type Header Versioning (Content Negotiation)
Client specifies the version in the `Accept` header.

```http
GET /api/users
Accept: application/vnd.company.v2+json
```

---

## 📌 Summary
* URI path versioning (`/api/v1/...`) is the most readable and widely adopted strategy across industry APIs (e.g., Stripe, GitHub, Twitter).
