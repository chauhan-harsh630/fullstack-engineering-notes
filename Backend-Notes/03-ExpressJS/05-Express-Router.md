# 🔀 Express Router

## 📖 Overview

As applications grow, defining all routes inside `server.js` leads to messy, unmaintainable code. The `express.Router` class creates modular, mountable route handlers. A `Router` instance is a complete middleware and routing system.

---

## 🛠 Modular Structure Example

### Project Structure
```text
src/
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
└── server.js
```

### 1. Define Router (`routes/userRoutes.js`)
```javascript
const express = require('express');
const router = express.Router();

// Routes mounted relative to root where this router is mounted
router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id}` });
});

module.exports = router;
```

### 2. Mount Router (`server.js`)
```javascript
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

// Mount routers on base paths
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);

app.listen(3000);
```

---

## 📌 Summary
* `express.Router()` decouples routing into modular domain-specific files.
* Sub-routes in router files are relative to the path specified in `app.use(path, router)`.
