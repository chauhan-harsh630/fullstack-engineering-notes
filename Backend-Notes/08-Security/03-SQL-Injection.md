# 💉 SQL Injection (SQLi) Prevention

## 📖 Overview

**SQL Injection (SQLi)** occurs when malicious untrusted input is concatenated directly into SQL queries, allowing an attacker to manipulate the query structure, bypass authentication, read secret data, or drop entire database tables.

---

## 💥 Vulnerable Code Example (Concatenation)

```javascript
// DANGEROUS! DO NOT DO THIS!
const query = `SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
```
If an attacker inputs `admin@example.com' OR '1'='1` into the email field, the executed query becomes:
```sql
SELECT * FROM users WHERE email = 'admin@example.com' OR '1'='1' AND password = '...';
```
This evaluates to `TRUE` and logs the attacker in as admin!

---

## 🛡️ Secure Solution: Parameterized Queries (Prepared Statements)

Parameterized queries treat user input strictly as data parameters, never executable code!

```javascript
// SECURE: Uses parameterized placeholders ($1, $2)
const query = 'SELECT * FROM users WHERE email = $1 AND password_hash = $2';
const values = [req.body.email, hashedPassword];

const result = await pool.query(query, values);
```

---

## 📌 Summary
* NEVER concatenate raw input variables directly into SQL string queries.
* Always use parameterized queries (`$1, $2` in Postgres, `?` in MySQL) or an ORM/Query Builder (Prisma, Knex, TypeORM).
