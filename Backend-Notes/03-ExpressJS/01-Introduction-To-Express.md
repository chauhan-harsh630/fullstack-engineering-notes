# 🚀 Introduction to Express.js

## 📖 Overview

**Express.js** is a minimal, flexible, and unopinionated web application framework for Node.js. It provides a robust set of features for building single-page, multi-page, and hybrid web applications, as well as RESTful APIs.

Express acts as a layer built on top of Node.js's built-in `http` module, simplifying request routing, middleware integration, header manipulation, and error handling.

---

## 🎯 Key Features of Express.js

* **Simplified Routing**: Easily match HTTP methods (GET, POST, PUT, DELETE) and path patterns.
* **Middleware Support**: Chain reusable functions to execute logic before sending a response.
* **Template Engines**: Integrate server-side engines like EJS, Pug, or Handlebars (if building server-rendered UI).
* **High Performance**: Minimal overhead over raw Node.js.

---

## ⚡ Creating an Express Server

### Installation
```bash
npm install express
```

### Basic Server (`server.js`)
```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON body parsing
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express.js REST API' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

---

## 🧠 Interview Questions

### 1. What does "unopinionated framework" mean?
Express does not force a strict directory structure, specific database choice, or built-in ORM. Developers are free to architect the app (MVC, Clean Architecture, Microservices) and choose any tools they prefer.

---

## 📌 Summary
* Express reduces boilerplate code needed when building backend servers with native Node.js.
* It is the standard web framework in the Node.js ecosystem (part of MERN/PERN stacks).
