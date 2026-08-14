# 📐 PostgreSQL Schema Design

## 📖 Overview

Designing clean, scalable PostgreSQL database schemas involves selecting optimal data types, auto-generating primary keys, and establishing proper foreign key cascade rules.

---

## 🛠 Schema DDL Example

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Define Custom Enum Type
CREATE TYPE user_role AS ENUM ('admin', 'customer', 'moderator');

-- Create Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role user_role DEFAULT 'customer',
  tags TEXT[], -- Native Array Type
  metadata JSONB, -- Binary JSON Format
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📌 Summary
* Prefer `UUID` or `BIGINT` over standard `INT` for primary keys in distributed or high-growth production applications.
* Use `TIMESTAMPTZ` (timestamp with time zone) for reliable global time representation.
