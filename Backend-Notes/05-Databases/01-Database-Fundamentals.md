# 🗄️ Database Fundamentals

## 📖 Overview

A **Database** is an organized collection of data stored and accessed electronically. A **Database Management System (DBMS)** is the software that interacts with end users, applications, and the database itself to capture and analyze data.

---

## ⚡ SQL (Relational) vs NoSQL (Non-Relational)

| Feature | Relational Databases (SQL) | Non-Relational Databases (NoSQL) |
| ------- | -------------------------- | -------------------------------- |
| **Data Model** | Structured tables with rows & columns | Documents (JSON), Key-Value, Graphs, Columnar |
| **Schema** | Rigid, predefined schema | Flexible, dynamic schema |
| **Scaling** | Vertical scaling (bigger hardware) | Horizontal scaling (sharding across servers) |
| **ACID Compliance** | Strong native guarantees | Eventual consistency (BASE) |
| **Examples** | PostgreSQL, MySQL, SQLite | MongoDB, Redis, Cassandra, DynamoDB |

---

## 🔒 ACID Properties

Reliable database systems guarantee **ACID** properties for transactions:
* **Atomicity**: "All or nothing". Either all statements in a transaction complete successfully, or the entire transaction is rolled back.
* **Consistency**: Ensures data transforms from one valid state to another, preserving constraints.
* **Isolation**: Concurrent transactions execute independently without interfering with each other.
* **Durability**: Once a transaction is committed, its changes survive system crashes/reboots.

---

## 📌 Summary
* Choose relational databases (e.g., PostgreSQL) when strong ACID compliance, complex joins, and structured schemas are required.
* Choose NoSQL when dealing with unstructured data or ultra-high throughput horizontal scaling needs.
