# 📊 SQL Basics Cheat Sheet

## 📖 Overview

**SQL (Structured Query Language)** is the standard language for querying, manipulating, and managing relational databases.

---

## 🛠 Core SQL Commands

### 1. DDL (Data Definition Language)
* `CREATE TABLE`: Define new table structure.
* `ALTER TABLE`: Modify existing columns or constraints.
* `DROP TABLE`: Delete table completely.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. DML (Data Manipulation Language)
* `INSERT`: Add new rows.
* `SELECT`: Query data.
* `UPDATE`: Modify existing rows.
* `DELETE`: Remove rows.

```sql
-- Insert
INSERT INTO users (username, email) VALUES ('harsh', 'harsh@example.com');

-- Select with Filtering & Sorting
SELECT id, username, email 
FROM users 
WHERE created_at >= '2026-01-01'
ORDER BY created_at DESC 
LIMIT 10;

-- Update
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;

-- Delete
DELETE FROM users WHERE id = 1;
```

---

## 📌 Summary
* SQL uses SELECT, INSERT, UPDATE, and DELETE for daily data operations.
