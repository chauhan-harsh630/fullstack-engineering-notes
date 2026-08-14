# 🏗️ MVC (Model-View-Controller) Pattern

## 📖 Overview

**MVC (Model-View-Controller)** is a software architectural pattern that separates an application into three main components:
1. **Model**: Represents the database schema and business data logic.
2. **View**: Handles the presentation layer (in REST APIs, this is JSON output sent to the client).
3. **Controller**: Handles HTTP request logic, delegates work to models, and returns responses.

```text
               Request
User / Client ----------> Router
                            │
                            ▼
                        Controller <────> Model (Database)
                            │
                            ▼
                         Response (JSON)
```

---

## 🛠 Directory Layout

```text
src/
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
└── app.js
```

---

## 💻 Implementation Example

### 1. Model (`models/userModel.js`)
```javascript
// Database abstraction / queries
const pool = require('../config/db');

const findAllUsers = async () => {
  const result = await pool.query('SELECT id, name, email FROM users');
  return result.rows;
};

module.exports = { findAllUsers };
```

### 2. Controller (`controllers/userController.js`)
```javascript
const userModel = require('../models/userModel');

const getUsers = async (req, res, next) => {
  try {
    const users = await userModel.findAllUsers();
    res.status(200).json({ status: 'success', data: users });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };
```

### 3. Router (`routes/userRoutes.js`)
```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);

module.exports = router;
```

---

## 📌 Summary
* Separation of concerns: Models handle DB queries, Controllers handle HTTP logic, Routers handle route mapping.
* Promotes clean, testable, maintainable codebases.
