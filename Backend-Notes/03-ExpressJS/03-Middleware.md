# ⚙️ Middleware in Express.js

## 📖 Overview

**Middleware** functions are functions that have access to the Request object (`req`), the Response object (`res`), and the `next` function in the application’s request-response cycle.

Middleware functions can:
* Execute any code.
* Make changes to the request and response objects.
* End the request-response cycle.
* Call `next()` to pass control to the next middleware in stack.

```text
Incoming Request ---> Middleware 1 ---> Middleware 2 ---> Route Handler ---> Response
```

---

## 🛠 Types of Middleware

### 1. Application-Level Middleware
Bound to an instance of the `app` object using `app.use()`.

```javascript
// Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to next function!
});
```

### 2. Built-in Middleware
Provided out-of-the-box by Express:
* `express.json()`: Parses incoming requests with JSON payloads.
* `express.urlencoded()`: Parses URL-encoded bodies.
* `express.static()`: Serves static assets (images, CSS, JS).

```javascript
app.use(express.json());
app.use(express.static('public'));
```

### 3. Third-Party Middleware
Installed via npm (e.g., `cors`, `helmet`, `morgan`, `cookie-parser`).

```javascript
const cors = require('cors');
app.use(cors());
```

### 4. Error-Handling Middleware
Defined with **4 parameters**: `(err, req, res, next)`.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
```

---

## ⚠️ Crucial Rule: Always call `next()` or send a response!
If a middleware function does not end the request-response cycle (by calling `res.send()`, `res.json()`, etc.), it **must** call `next()` to pass control to the next middleware. Otherwise, the request will hang indefinitely.

---

## 📌 Summary
* Middleware forms a pipeline through which requests pass sequentially.
* Order of middleware registration (`app.use()`) matters!
