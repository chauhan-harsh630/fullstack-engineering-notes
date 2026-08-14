# 💳 Database Transactions

## 📖 Overview

A **Transaction** is a logical unit of work consisting of one or more SQL operations. All operations within a transaction either complete successfully together or fail completely together.

---

## 🛠 Bank Transfer Example in SQL

```sql
BEGIN TRANSACTION;

-- Step 1: Deduct $100 from Account A
UPDATE accounts SET balance = balance - 100 WHERE id = 1;

-- Step 2: Add $100 to Account B
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If both steps succeed:
COMMIT;

-- If an error occurs:
-- ROLLBACK;
```

---

## 🔒 Transaction Isolation Levels

1. **Read Uncommitted**: Lowest isolation level; allows dirty reads.
2. **Read Committed**: Default in PostgreSQL; prevents dirty reads.
3. **Repeatable Read**: Prevents non-repeatable reads.
4. **Serializable**: Highest level; prevents phantom reads by simulating serial execution.

---

## 📌 Summary
* Use `BEGIN`, `COMMIT`, and `ROLLBACK` to maintain financial and critical data integrity.
