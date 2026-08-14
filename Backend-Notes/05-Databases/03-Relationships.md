# 🔗 Database Relationships

## 📖 Overview

In relational databases, relationships link tables together using **Primary Keys (PK)** and **Foreign Keys (FK)**.

---

## 🛠 Types of Relationships

### 1. One-to-One (1:1)
A record in Table A is associated with exactly one record in Table B.
* *Example*: `users` and `user_profiles`.

```sql
CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT
);
```

### 2. One-to-Many (1:N)
A record in Table A can be associated with multiple records in Table B.
* *Example*: A `user` has many `orders`.

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  total_amount DECIMAL(10, 2) NOT NULL
);
```

### 3. Many-to-Many (N:M)
Multiple records in Table A are associated with multiple records in Table B. Requires a **Junction / Pivot Table**.
* *Example*: `students` and `courses`.

```sql
CREATE TABLE student_courses (
  student_id INT REFERENCES students(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  PRIMARY KEY (student_id, course_id)
);
```

---

## 📌 Summary
* Foreign keys maintain referential integrity.
* Many-to-many relationships require a junction table storing pair IDs.
