# 🔀 PostgreSQL Joins Deep Dive

## 📖 Overview

A `JOIN` clause is used to combine rows from two or more tables based on a related column between them.

---

## 🛠 Types of SQL Joins

```text
  INNER JOIN         LEFT JOIN         RIGHT JOIN        FULL OUTER JOIN
  ┌───┬───┐          ┌───┬───┐         ┌───┬───┐         ┌───┬───┐
  │ A │ B │          │ A │ B │         │ A │ B │         │ A │ B │
  │   ███ │          │██████ │         │ █████ │         │███████│
  └───┴───┘          └───┴───┘         └───┴───┘         └───┴───┘
 Matches in both    All from A +       All from B +     All rows from
  A and B           matching B         matching A       both tables
```

### 1. INNER JOIN
Returns records that have matching values in both tables.
```sql
SELECT users.username, orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

### 2. LEFT (OUTER) JOIN
Returns all records from the left table, and matching records from the right table.
```sql
SELECT users.username, orders.total_amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

### 3. RIGHT (OUTER) JOIN
Returns all records from the right table, and matching records from the left table.

### 4. FULL OUTER JOIN
Returns all records when there is a match in either left or right table.

---

## 📌 Summary
* Choose `INNER JOIN` when only matching records are needed.
* Choose `LEFT JOIN` when you want all parent records regardless of whether child records exist.
