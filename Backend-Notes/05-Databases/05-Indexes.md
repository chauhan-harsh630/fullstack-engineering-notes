# 🚀 Database Indexing

## 📖 Overview

A **Database Index** is a data structure (typically a **B-Tree**) that speeds up data retrieval operations on a database table at the cost of additional write overhead and storage space.

Without an index, the database engine performs a **Full Table Scan** (O(N) time complexity) to find matching rows. With an index, lookup time drops to **O(log N)**.

---

## 🛠 Creating Indexes in SQL

```sql
-- Single-Column Index
CREATE INDEX idx_users_email ON users(email);

-- Composite Index (Multi-Column)
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Unique Index
CREATE UNIQUE INDEX idx_users_username ON users(username);
```

---

## ⚠️ When NOT to Index
1. **Small Tables**: Full table scans are already extremely fast.
2. **Write-Heavy Tables**: Every `INSERT`, `UPDATE`, and `DELETE` requires updating the index B-Tree, slowing down writes.
3. **Columns with Low Selectivity**: E.g., boolean flags (`is_active: true/false`) or gender columns.

---

## 📌 Summary
* Index columns frequently used in `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY` clauses.
