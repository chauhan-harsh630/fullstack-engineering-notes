# 🐘 Introduction to PostgreSQL

## 📖 Overview

**PostgreSQL** (Postgres) is a powerful, open-source object-relational database system (ORDBMS) known for reliability, feature robustness, standards compliance, and performance under heavy enterprise workloads.

---

## 🎯 Key Features of PostgreSQL

* **Native JSONB Support**: Store semi-structured JSON documents with indexing capability (`GIN` index).
* **Advanced Data Types**: Support for arrays, UUIDs, ENUMs, network addresses, and spatial data (`PostGIS`).
* **MVCC (Multi-Version Concurrency Control)**: Allows concurrent reads and writes without locking.
* **Extensibility**: Custom types, functions (PL/pgSQL), and extensions (`pg_trgm`, `uuid-ossp`).

---

## 🛠 Connecting in Node.js (`pg` library)

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function queryUser(userId) {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
  return res.rows[0];
}
```

---

## 📌 Summary
* PostgreSQL provides battle-tested reliability and combines relational tables with NoSQL JSONB capabilities.
