# 🔄 CRUD Operations in Express.js

## 📖 Overview

**CRUD** stands for **C**reate, **R**ead, **U**pdate, and **D**elete. These four primitive functions represent the core data persistence interactions for any database-backed REST API.

---

## 🛠 Complete Express CRUD Route Implementation

```javascript
const express = require('express');
const router = express.Router();

// Mock database in-memory array
let items = [
  { id: 1, name: 'Item One', price: 100 },
  { id: 2, name: 'Item Two', price: 200 }
];

// 1. CREATE - POST /api/items
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  const newItem = { id: items.length + 1, name, price };
  items.push(newItem);
  res.status(201).json({ status: 'success', data: newItem });
});

// 2. READ ALL - GET /api/items
router.get('/', (req, res) => {
  res.status(200).json({ status: 'success', results: items.length, data: items });
});

// 3. READ ONE - GET /api/items/:id
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.status(200).json({ status: 'success', data: item });
});

// 4. UPDATE (PATCH) - PATCH /api/items/:id
router.patch('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  if (req.body.name) item.name = req.body.name;
  if (req.body.price) item.price = req.body.price;

  res.status(200).json({ status: 'success', data: item });
});

// 5. DELETE - DELETE /api/items/:id
router.delete('/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  items.splice(index, 1);
  res.status(204).send(); // 204 No Content
});

module.exports = router;
```

---

## ⚡ Key Distinction: PUT vs PATCH

| Operation | HTTP Method | Behavior |
| --------- | ----------- | -------- |
| Full Replace | `PUT` | Replaces the entire resource record with the payload. Omitted fields are overwritten as null/empty. |
| Partial Update | `PATCH` | Updates only the specific fields provided in the payload, preserving unmodified fields. |

---

## 📌 Summary
* CRUD maps directly to POST, GET, PUT/PATCH, and DELETE.
* Return `201 Created` for POST, `200 OK` for GET/PATCH, and `204 No Content` for DELETE.
