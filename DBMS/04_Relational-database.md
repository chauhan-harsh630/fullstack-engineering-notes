# Relational Database


## 1. What is SQL?

**SQL (Structured Query Language)** is a language used to communicate with and manage relational databases.

SQL allows us to:

* Create database structures
* Insert data
* Read data
* Update existing data
* Delete data
* Define constraints
* Manage relationships between tables
* Query and analyze data

### SQL in a database system

```text
Application
    ↓
    SQL
    ↓
PostgreSQL
    ↓
Database
    ↓
Tables
    ↓
Rows + Columns
```

---

# 2. CRUD Operations

CRUD represents the four fundamental operations performed on data.

| CRUD           | SQL      | Purpose              |
| -------------- | -------- | -------------------- |
| **C — Create** | `INSERT` | Add new data         |
| **R — Read**   | `SELECT` | Retrieve data        |
| **U — Update** | `UPDATE` | Modify existing data |
| **D — Delete** | `DELETE` | Remove data          |

---

# 3. Example Database

We will use a `student` table throughout this README.

```sql
CREATE TABLE student (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    course VARCHAR(255) NOT NULL
);
```

### Explanation

| Column   | Data Type | Constraint           | Purpose              |
| -------- | --------- | -------------------- | -------------------- |
| `id`     | `UUID`    | `PRIMARY KEY`        | Identifies a student |
| `name`   | `VARCHAR` | `NOT NULL`           | Student name         |
| `email`  | `VARCHAR` | `UNIQUE`, `NOT NULL` | Student email        |
| `course` | `VARCHAR` | `NOT NULL`           | Student course       |

---

# 4. CREATE — INSERT

The **Create** operation adds new records to a table.

SQL uses the `INSERT INTO` statement.

## Insert one record

```sql
INSERT INTO student (name, email, course)
VALUES (
    'Harsh',
    'harsh@gmail.com',
    'BCA'
);
```

Because `id` has:

```sql
DEFAULT gen_random_uuid()
```

PostgreSQL automatically generates the UUID.

---

## Insert multiple records

```sql
INSERT INTO student (name, email, course)
VALUES
    ('Harsh', 'harsh@gmail.com', 'BCA'),
    ('Rahul', 'rahul@gmail.com', 'BCA'),
    ('Aman', 'aman@gmail.com', 'MCA');
```

---

## Insert and return the created record

PostgreSQL supports `RETURNING`.

```sql
INSERT INTO student (name, email, course)
VALUES ('John', 'john@gmail.com', 'BCA')
RETURNING *;
```

This is particularly useful when working with backend APIs.

---

# 5. READ — SELECT

The **Read** operation retrieves data from the database.

SQL uses the `SELECT` statement.

## Read all records

```sql
SELECT *
FROM student;
```

`*` means all columns.

---

## Read specific columns

```sql
SELECT name, email
FROM student;
```

Only the requested columns are returned.

---

# 6. WHERE — Filtering Data

`WHERE` filters rows based on a condition.

```sql
SELECT *
FROM student
WHERE course = 'BCA';
```

This returns only students whose course is BCA.

### Comparison operators

```text
=       Equal
<>      Not equal
>       Greater than
<       Less than
>=      Greater than or equal
<=      Less than or equal
```

Example:

```sql
SELECT *
FROM student
WHERE name = 'Harsh';
```

---

# 7. AND / OR / NOT

Multiple conditions can be combined.

## AND

Both conditions must be true.

```sql
SELECT *
FROM student
WHERE course = 'BCA'
AND name = 'Harsh';
```

## OR

At least one condition must be true.

```sql
SELECT *
FROM student
WHERE course = 'BCA'
OR course = 'MCA';
```

## NOT

Negates a condition.

```sql
SELECT *
FROM student
WHERE NOT course = 'BCA';
```

---

# 8. DISTINCT

`DISTINCT` removes duplicate values from the result.

```sql
SELECT DISTINCT course
FROM student;
```

Example result:

```text
BCA
MCA
B.Tech
```

Instead of:

```text
BCA
BCA
MCA
BCA
MCA
```

---

# 9. ORDER BY

`ORDER BY` sorts query results.

## Ascending

```sql
SELECT *
FROM student
ORDER BY name ASC;
```

## Descending

```sql
SELECT *
FROM student
ORDER BY name DESC;
```

`ASC` means ascending.

`DESC` means descending.

---

# 10. LIMIT

`LIMIT` restricts the number of returned rows.

```sql
SELECT *
FROM student
LIMIT 5;
```

This returns at most five records.

---

# 11. UPDATE

The **Update** operation modifies existing records.

SQL uses the `UPDATE` statement.

```sql
UPDATE student
SET course = 'MCA'
WHERE email = 'harsh@gmail.com';
```

Only the matching student's course is changed.

---

## Update multiple columns

```sql
UPDATE student
SET
    name = 'Harsh Chauhan',
    course = 'BCA'
WHERE email = 'harsh@gmail.com';
```

---

## Update and return the result

PostgreSQL supports:

```sql
UPDATE student
SET course = 'MCA'
WHERE email = 'harsh@gmail.com'
RETURNING *;
```

---

## ⚠️ Important UPDATE warning

Never blindly execute:

```sql
UPDATE student
SET course = 'MCA';
```

Without a `WHERE` clause, **every row will be updated**.

```text
UPDATE + WHERE
        ↓
Specific rows

UPDATE without WHERE
        ↓
Every row
```

---

# 12. DELETE

The **Delete** operation removes records.

SQL uses the `DELETE` statement.

```sql
DELETE FROM student
WHERE email = 'harsh@gmail.com';
```

Only the matching student is deleted.

---

## Delete and return the deleted record

PostgreSQL supports:

```sql
DELETE FROM student
WHERE email = 'harsh@gmail.com'
RETURNING *;
```

---

## ⚠️ Important DELETE warning

This:

```sql
DELETE FROM student;
```

deletes **all rows** from the table.

However, the table itself still exists.

Compare:

```text
DELETE FROM student
        ↓
Deletes rows

DROP TABLE student
        ↓
Deletes the table structure
```

---

# 13. NULL

`NULL` represents the absence of a value.

It is not the same as:

```text
0
''
FALSE
```

To find NULL values:

```sql
SELECT *
FROM student
WHERE email IS NULL;
```

To find non-NULL values:

```sql
SELECT *
FROM student
WHERE email IS NOT NULL;
```

Do not use:

```sql
WHERE email = NULL;
```

Use:

```sql
WHERE email IS NULL;
```

---

# 14. Aggregate Functions

Aggregate functions perform calculations over multiple rows.

Important aggregate functions:

```text
COUNT()
SUM()
AVG()
MIN()
MAX()
```

## COUNT

```sql
SELECT COUNT(*)
FROM student;
```

Counts the number of rows.

---

# 15. GROUP BY

`GROUP BY` groups rows that have the same value.

```sql
SELECT course, COUNT(*)
FROM student
GROUP BY course;
```

Example:

```text
course    count
----------------
BCA       50
MCA       30
B.Tech    80
```

---

# 16. HAVING

`HAVING` filters groups created by `GROUP BY`.

```sql
SELECT course, COUNT(*)
FROM student
GROUP BY course
HAVING COUNT(*) > 40;
```

### WHERE vs HAVING

```text
WHERE
  ↓
Filters individual rows

GROUP BY
  ↓
Creates groups

HAVING
  ↓
Filters groups
```

---

# 17. JOIN

A `JOIN` combines rows from multiple related tables.

Example:

```sql
CREATE TABLE course (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);
```

Add a relationship:

```sql
ALTER TABLE student
ADD COLUMN course_id INT,
ADD CONSTRAINT fk_student_course
FOREIGN KEY (course_id)
REFERENCES course(course_id);
```

Now:

```text
student
----------------
id
name
email
course_id
      │
      │ FOREIGN KEY
      ▼
course
----------------
course_id
course_name
```

---

## INNER JOIN

Returns matching rows from both tables.

```sql
SELECT
    student.name,
    course.course_name
FROM student
INNER JOIN course
    ON student.course_id = course.course_id;
```

---

## LEFT JOIN

Returns every row from the left table and matching rows from the right table.

```sql
SELECT
    student.name,
    course.course_name
FROM student
LEFT JOIN course
    ON student.course_id = course.course_id;
```

---

# 18. CRUD Summary

```text
             CRUD
              │
     ┌────────┼────────┐
     │        │        │
   CREATE    READ    UPDATE    DELETE
     │        │        │        │
   INSERT   SELECT   UPDATE   DELETE
```

### Create

```sql
INSERT INTO student (name, email, course)
VALUES ('Harsh', 'harsh@gmail.com', 'BCA');
```

### Read

```sql
SELECT *
FROM student;
```

### Update

```sql
UPDATE student
SET course = 'MCA'
WHERE email = 'harsh@gmail.com';
```

### Delete

```sql
DELETE FROM student
WHERE email = 'harsh@gmail.com';
```

---

# 19. Important SQL Constraints

Constraints enforce rules on data.

## PRIMARY KEY

Uniquely identifies a row.

```sql
id UUID PRIMARY KEY
```

Properties:

* Unique
* Cannot be `NULL`
* Identifies a record

---

## FOREIGN KEY

Creates a relationship between tables.

```sql
FOREIGN KEY (course_id)
REFERENCES course(course_id)
```

It maintains **referential integrity**.

---

## UNIQUE

Prevents duplicate values.

```sql
email VARCHAR(255) UNIQUE
```

Example:

```text
harsh@gmail.com
harsh@gmail.com  ❌
```

---

## NOT NULL

Requires a value.

```sql
name VARCHAR(255) NOT NULL
```

---

## CHECK

Enforces a condition.

```sql
age INT CHECK (age >= 18)
```

---

# 20. DDL vs DML

### DDL — Data Definition Language

Used to define or modify database structures.

```sql
CREATE
ALTER
DROP
TRUNCATE
```

Example:

```sql
ALTER TABLE student
ADD COLUMN age INT;
```

---

### DML — Data Manipulation Language

Used to manipulate records.

```sql
INSERT
UPDATE
DELETE
```

---

### DQL — Data Query Language

Used to retrieve data.

```sql
SELECT
```

---

### DCL — Data Control Language

Used to manage permissions.

```sql
GRANT
REVOKE
```

---

### TCL — Transaction Control Language

Used to manage transactions.

```sql
COMMIT
ROLLBACK
SAVEPOINT
```

---

# 21. DELETE vs TRUNCATE vs DROP

These are easy to confuse.

| Command    | Removes Rows | Removes Table | Typical Use             |
| ---------- | -----------: | ------------: | ----------------------- |
| `DELETE`   |          Yes |            No | Delete selected rows    |
| `TRUNCATE` |          Yes |            No | Remove all rows quickly |
| `DROP`     |          Yes |           Yes | Remove table completely |

### DELETE

```sql
DELETE FROM student
WHERE id = 'some-uuid';
```

### TRUNCATE

```sql
TRUNCATE TABLE student;
```

### DROP

```sql
DROP TABLE student;
```

Think:

```text
DELETE
  ↓
Remove selected data

TRUNCATE
  ↓
Empty the table

DROP
  ↓
Destroy the table
```

---

# 22. SQL Execution Concept

A SQL query is not simply "run line by line."

For example:

```sql
SELECT course, COUNT(*)
FROM student
WHERE course IS NOT NULL
GROUP BY course
HAVING COUNT(*) > 10
ORDER BY COUNT(*) DESC;
```

Conceptually, the database processes the query through stages involving:

```text
FROM
 ↓
WHERE
 ↓
GROUP BY
 ↓
HAVING
 ↓
SELECT
 ↓
ORDER BY
```

The exact internal execution is determined by the database's query planner and optimizer.

This becomes important later when studying **query processing and query optimization**.

---

# 23. Practical PostgreSQL CRUD Example

A simple complete workflow:

```sql
-- CREATE TABLE
CREATE TABLE student (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    course VARCHAR(255) NOT NULL
);

-- CREATE DATA
INSERT INTO student (name, email, course)
VALUES
    ('Harsh', 'harsh@gmail.com', 'BCA'),
    ('Rahul', 'rahul@gmail.com', 'BCA'),
    ('Aman', 'aman@gmail.com', 'MCA');

-- READ
SELECT *
FROM student;

-- READ WITH FILTER
SELECT *
FROM student
WHERE course = 'BCA';

-- UPDATE
UPDATE student
SET course = 'MCA'
WHERE email = 'harsh@gmail.com';

-- DELETE
DELETE FROM student
WHERE email = 'aman@gmail.com';
```

---

# 24. What You Should Master From This Chapter

Before moving deeper into database theory, make sure you understand:

* [ ] What SQL is
* [ ] DDL, DML, DQL, DCL, TCL
* [ ] `CREATE TABLE`
* [ ] PostgreSQL data types
* [ ] Primary keys
* [ ] Foreign keys
* [ ] `UNIQUE`
* [ ] `NOT NULL`
* [ ] `CHECK`
* [ ] `INSERT`
* [ ] `SELECT`
* [ ] `WHERE`
* [ ] `AND`, `OR`, `NOT`
* [ ] `NULL`
* [ ] `DISTINCT`
* [ ] `ORDER BY`
* [ ] `LIMIT`
* [ ] `UPDATE`
* [ ] `DELETE`
* [ ] Aggregate functions
* [ ] `GROUP BY`
* [ ] `HAVING`
* [ ] Basic `JOIN`
* [ ] `DELETE` vs `TRUNCATE` vs `DROP`

---

## Final Mental Model

Don't think of SQL as just a collection of commands.

Think:

```text
DATABASE
   │
   ├── Schema
   │    ├── Tables
   │    ├── Columns
   │    ├── Data Types
   │    └── Constraints
   │
   └── Data
        │
        ├── CREATE → INSERT
        ├── READ   → SELECT
        ├── UPDATE → UPDATE
        └── DELETE → DELETE
```

**Your next goal:** become comfortable enough with PostgreSQL that you can design a small schema and perform the complete CRUD workflow without copying queries. Then move into **joins, subqueries, relational algebra, and database design** from the book.
