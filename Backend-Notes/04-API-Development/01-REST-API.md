# 📡 REST API Design Principles

## 📖 Overview

A **RESTful API** is an Application Programming Interface that conforms to the constraints of the REST architectural style. It enables interaction with RESTful web services using standard HTTP methods and resource-oriented URIs.

---

## 🎯 Key Design Rules for REST APIs

### 1. Use Nouns, Not Verbs in Endpoints
URLs should represent **resources** (things), not actions.

| Bad (Action-oriented) | Good (Resource-oriented) |
| --------------------- | ------------------------ |
| `/getUsers`           | `GET /api/v1/users`      |
| `/createNewProduct`   | `POST /api/v1/products`  |
| `/deleteOrder?id=5`   | `DELETE /api/v1/orders/5`|

### 2. Use Plural Nouns for Resource Collections
```http
GET /api/v1/users       (Get list of users)
GET /api/v1/users/42    (Get user with ID 42)
```

### 3. Model Nested Resource Relationships
Represent sub-resources belonging to a parent resource intuitively:
```http
GET /api/v1/users/42/orders     (Get all orders placed by user 42)
GET /api/v1/users/42/orders/5   (Get specific order 5 for user 42)
```

### 4. Consistent JSON Response Formatting
Standardize success and error structures across all endpoints:

```json
// Success Response
{
  "status": "success",
  "data": {
    "user": { "id": 42, "name": "Alice" }
  }
}

// Error Response
{
  "status": "fail",
  "message": "User not found with ID 42",
  "errorCode": "USER_NOT_FOUND"
}
```

---

## 📌 Summary
* REST APIs prioritize predictability and clear resource naming conventions.
* Standardize URLs, HTTP methods, and response payload JSON structures.
