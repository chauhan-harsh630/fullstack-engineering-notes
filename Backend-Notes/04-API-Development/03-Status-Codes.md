# 🚦 HTTP Status Codes Reference

## 📖 Overview

HTTP status codes indicate whether a specific HTTP request has been successfully completed. They are grouped into 5 classes:
* **1xx (Informational)**: Request received, continuing process.
* **2xx (Successful)**: Action successfully received, understood, and accepted.
* **3xx (Redirection)**: Further action must be taken to complete request.
* **4xx (Client Error)**: Request contains bad syntax or cannot be fulfilled.
* **5xx (Server Error)**: Server failed to fulfill an apparently valid request.

---

## 📊 Essential Backend Status Codes

### 2xx Success
* **`200 OK`**: Standard successful HTTP request.
* **`201 Created`**: Request fulfilled and new resource created (e.g., after POST).
* **`204 No Content`**: Request successfully processed, but returns no body (e.g., after DELETE).

### 4xx Client Errors
* **`400 Bad Request`**: Server cannot process request due to client error (e.g., malformed JSON body or validation failure).
* **`401 Unauthorized`**: Authentication is required and has failed or missing (e.g., invalid JWT token).
* **`403 Forbidden`**: Authenticated user lacks permissions for this resource (e.g., non-admin accessing admin route).
* **`404 Not Found`**: Requested resource URI does not exist.
* **`409 Conflict`**: Conflict in request state (e.g., registering with an email that already exists).
* **`422 Unprocessable Entity`**: Request format is correct, but payload fails domain validation.
* **`429 Too Many Requests`**: Client exceeded rate limits.

### 5xx Server Errors
* **`500 Internal Server Error`**: Generic unhandled error on the server side.
* **`502 Bad Gateway`**: Server received invalid response from upstream server (e.g., Nginx -> Node.js connection drop).
* **`503 Service Unavailable`**: Server currently unable to handle request due to overload or maintenance.

---

## 📌 Summary
* Using precise status codes allows API consumers to programmatically handle success, validation errors, auth issues, and server failures cleanly.
