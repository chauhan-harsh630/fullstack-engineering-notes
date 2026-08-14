# 🖥️ Client-Server Architecture

## 📖 Overview

The **Client-Server Model** is the core architecture of the web. Workloads are partitioned between service providers called **Servers** and service requesters called **Clients**.

```text
┌────────────────┐                HTTP Request               ┌────────────────┐
│     Client     │ ────────────────────────────────────────► │     Server     │
│ (Web Browser / │                                           │ (Node.js /     │
│   Mobile App)  │ ◄──────────────────────────────────────── │  Express API)  │
└────────────────┘               HTTP Response               └────────────────┘
```

---

## 🛠 Responsibilities

### Client (Frontend)
* Renders user interfaces (HTML/CSS/JS).
* Handles user input and UI state.
* Sends HTTP requests to APIs.

### Server (Backend)
* Receives requests and runs business logic.
* Interacts with databases.
* Enforces authentication and authorization.
* Returns structured responses (JSON/HTML).

---

## 📌 Summary
* Clients request services; Servers process requests and return data.
