# ⚡ PostgreSQL Query Optimization

## 📖 Overview

As databases grow to millions of rows, unoptimized queries cause slow API response times and high CPU usage. Optimizing PostgreSQL performance involves analyzing execution plans using `EXPLAIN ANALYZE` and leveraging connection pooling.

---

## 🛠 Analyzing Queries (`EXPLAIN ANALYZE`)

Prepend `EXPLAIN ANALYZE` to any SQL query to view its actual execution plan, cost estimate, and elapsed time.

```sql
EXPLAIN ANALYZE 
SELECT * FROM orders WHERE user_id = 42 AND status = 'COMPLETED';
```

### Output Insights to Look For:
* **`Seq Scan`**: Sequential full table scan (Indicates a missing index!).
* **`Index Scan` / `Bitmap Index Scan`**: Efficient index usage.

---

## 🏊 Connection Pooling (`pg.Pool` or `PgBouncer`)
Opening a raw database TCP connection for every incoming HTTP request is expensive. **Connection Pools** maintain a pool of reusable open connections.

---

## 📌 Summary
* Run `EXPLAIN ANALYZE` on slow queries to identify missing indexes or inefficient JOINs.
* Always use connection pooling in backend applications.
