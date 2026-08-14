# 🛣️ Routing in Express.js

## 📖 Overview

Routing determines how an application responds to a client request to a specific endpoint (a URI/path and a specific HTTP request method).

---

## 🛠 Basic Route Syntax

```javascript
app.METHOD(PATH, HANDLER)
```
* `app`: An instance of `express`.
* `METHOD`: An HTTP request method (e.g., `get`, `post`, `put`, `patch`, `delete`).
* `PATH`: The URI path on the server.
* `HANDLER`: The function executed when the route is matched.

```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.send('Get all users');
});

app.post('/api/users', (req, res) => {
  res.send('Create a user');
});

app.put('/api/users/:id', (req, res) => {
  res.send(`Replace user with ID ${req.params.id}`);
});

app.patch('/api/users/:id', (req, res) => {
  res.send(`Update fields for user ${req.params.id}`);
});

app.delete('/api/users/:id', (req, res) => {
  res.send(`Delete user ${req.params.id}`);
});
```

---

## 🔍 Route Parameters & Query Strings

### Route Parameters (`req.params`)
Named URL segments used to capture values at specific positions in the URL.

```javascript
// URL: /users/42/posts/100
app.get('/users/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;
  res.json({ userId, postId });
});
```

### Query Parameters (`req.query`)
Key-value pairs appended after `?` in the URL, used for filtering, searching, or pagination.

```javascript
// URL: /products?category=electronics&sort=asc
app.get('/products', (req, res) => {
  const { category, sort } = req.query;
  res.json({ category, sort });
});
```

---

## 📌 Summary
* Routes combine HTTP methods and URL paths.
* Use `req.params` for required URL parameters and `req.query` for optional query options.
