# ⚠️ Error Handling in Express.js

## 📖 Overview

Error handling refers to how Express catches and processes errors that occur synchronously and asynchronously. Express comes with a default error handler, but production applications require custom global error handling middleware to ensure graceful degradation and informative JSON responses.

---

## 🛠 Synchronous vs Asynchronous Errors

### Synchronous Errors
Express automatically catches errors thrown inside route handlers and middleware.

```javascript
app.get('/sync-error', (req, res) => {
  throw new Error('Something went wrong!'); // Express catches this automatically
});
```

### Asynchronous Errors
For async functions, you must pass errors to `next(err)` or use an async handler wrapper!

```javascript
// Manual next(err)
app.get('/async-error', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      const err = new Error('User not found');
      err.statusCode = 404;
      return next(err);
    }
    res.json(user);
  } catch (error) {
    next(error); // Forward to global error handler
  }
});
```

---

## 🌐 Custom Global Error Handling Middleware

Error middleware **must** accept 4 parameters: `(err, req, res, next)`. Place this middleware **after** all other `app.use()` and route calls.

```javascript
// Custom AppError class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// Global Error Handler (server.js)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});
```

---

## 📌 Summary
* Global error handling prevents unhandled exceptions from crashing the server process.
* Always handle async errors with `try/catch` + `next(err)` or `express-async-errors`.
* Do not expose detailed stack traces in production environment responses!
