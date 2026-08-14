# 📐 Database Normalization

## 📖 Overview

**Normalization** is the process of structuring relational tables to eliminate data redundancy and prevent insertion, update, and deletion anomalies.

---

## 🛠 Normal Forms (1NF, 2NF, 3NF, BCNF)

### 1. First Normal Form (1NF)
* Each table cell must contain a single **atomic** value (no arrays or comma-separated lists).
* Each record must be uniquely identifiable (Primary Key).

### 2. Second Normal Form (2NF)
* Meets 1NF requirement.
* All non-key attributes must be **fully functionally dependent** on the primary key (eliminates partial key dependencies).

### 3. Third Normal Form (3NF)
* Meets 2NF requirement.
* No **transitive dependencies**: Non-key attributes must depend *only* on the primary key, not on other non-key attributes.

---

## ⚡ Denormalization
Intentionally adding redundancy or grouping data to avoid expensive JOINs in read-heavy production applications.

---

## 📌 Summary
* Normalize to 3NF to avoid data anomalies and data duplication.
* Denormalize selectively when read performance optimization is necessary.
