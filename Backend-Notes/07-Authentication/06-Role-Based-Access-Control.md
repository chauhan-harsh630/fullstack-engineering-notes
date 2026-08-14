# 🛡️ Role-Based Access Control (RBAC)

## 📖 Overview

**Role-Based Access Control (RBAC)** restricts system access to authorized users based on their assigned roles (e.g., `user`, `editor`, `admin`).

---

## 🛠 Express RBAC Middleware

```javascript
// Authorization Middleware Factory
function restrictTo(...allowedRoles) {
  return (req, res, next) => {
    // req.user is set by authentication middleware beforehand
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'Forbidden: You do not have permission to perform this action'
      });
    }
    next();
  };
}

// Usage in Routes
app.delete('/api/v1/users/:id', authenticateToken, restrictTo('admin'), deleteUserHandler);
app.patch('/api/v1/posts/:id', authenticateToken, restrictTo('admin', 'editor'), updatePostHandler);
```

---

## 📌 Summary
* Combine `authenticateToken` (AuthN) with `restrictTo(...roles)` (AuthZ) to secure Express endpoints.
