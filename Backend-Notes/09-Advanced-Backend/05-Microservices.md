# 🧩 Microservices Architecture

## 📖 Overview

In a **Monolithic Architecture**, all software modules (Auth, Payments, Inventory, Notifications) are compiled and deployed together as a single service. In a **Microservices Architecture**, the system is decomposed into small, loosely coupled, independently deployable domain services.

---

## ⚡ Monolith vs Microservices

```text
       MONOLITH ARCHITECTURE                    MICROSERVICES ARCHITECTURE

  ┌───────────────────────────────┐        ┌──────────┐  ┌──────────┐  ┌──────────┐
  │ Single Deployment Unit        │        │ Auth     │  │ Payment  │  │ Order    │
  │  [Auth] [Orders] [Payments]   │        │ Service  │  │ Service  │  │ Service  │
  └───────────────┬───────────────┘        └────┬─────┘  └────┬─────┘  └────┬─────┘
                  │                             │             │             │
          Single Database                 DB 1 (Auth)   DB 2 (Pay)    DB 3 (Order)
```

---

## 📌 Summary
* Start with a clean Monolith first; transition to Microservices when team organizational scale or isolated domain scalability demands it.
