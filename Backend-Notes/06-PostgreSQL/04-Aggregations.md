# 📈 PostgreSQL Aggregations & Grouping

## 📖 Overview

Aggregate functions perform a calculation on a set of values and return a single value (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`). They are combined with `GROUP BY` and `HAVING` clauses.

---

## 🛠 Aggregation Queries

### `GROUP BY` and `HAVING`
Use `HAVING` to filter aggregated groups (since `WHERE` filters individual rows *before* grouping).

```sql
SELECT 
  user_id,
  COUNT(id) AS total_orders,
  SUM(total_amount) AS lifetime_value
FROM orders
WHERE created_at >= '2026-01-01'
GROUP BY user_id
HAVING SUM(total_amount) > 1000.00
ORDER BY lifetime_value DESC;
```

---

## 📌 Summary
* `WHERE` filters rows before aggregation.
* `HAVING` filters groups after aggregation.
