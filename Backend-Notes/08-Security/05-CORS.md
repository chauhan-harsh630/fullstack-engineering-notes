# 🌐 Cross-Origin Resource Sharing (CORS)

## 📖 Overview

**CORS (Cross-Origin Resource Sharing)** is a browser security mechanism that restricts HTTP requests initiated from scripts running in one domain (`http://frontend.com`) to a different domain (`http://api-backend.com`).

Browsers block cross-origin AJAX responses unless the backend explicitly returns the `Access-Control-Allow-Origin` HTTP header allowing the origin.

---

## 🛠 Express `cors` Configuration

```bash
npm install cors
```

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Whitelist allowed frontend domains
const allowedOrigins = ['https://myapp.com', 'https://admin.myapp.com'];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow non-browser requests (Postman, mobile apps) or whitelisted domains
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies to be sent across origins
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
```

---

## 📌 Summary
* Never use `app.use(cors({ origin: '*' }))` in production apps that handle authenticated cookies!
