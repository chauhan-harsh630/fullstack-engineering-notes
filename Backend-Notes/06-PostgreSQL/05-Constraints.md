# 🔒 PostgreSQL Constraints & Validation

## 📖 Overview

Constraints enforce data rules at the database engine level, preventing invalid data entry into tables regardless of application-level validation bugs.

---

## 🛠 Standard SQL Constraints

* **`NOT NULL`**: Prevents NULL values in a column.
* **`UNIQUE`**: Guarantees distinct values across all rows.
* **`PRIMARY KEY`**: Combination of `NOT NULL` + `UNIQUE`.
* **`FOREIGN KEY`**: Enforces referential integrity between tables.
* **`CHECK`**: Evaluates a boolean expression before inserting/updating rows.

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) CHECK (price > 0),
  discounted_price DECIMAL(10, 2),
  stock_quantity INT DEFAULT 0 CHECK (stock_quantity >= 0),
  CONSTRAINT check_discount CHECK (discounted_price < price)
);
```

---

## 📌 Summary
* Define domain validation directly in SQL using `CHECK` constraints to protect database data integrity.
