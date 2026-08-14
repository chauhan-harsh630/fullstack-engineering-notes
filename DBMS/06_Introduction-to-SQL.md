# Introduction to SQL

## 1. What is SQL?

**SQL (Structured Query Language)** is a standard language used to interact with **relational database management systems (RDBMS)**.

SQL is used to:

* Define database structures
* Insert data
* Retrieve data
* Update data
* Delete data
* Define constraints
* Establish relationships between tables
* Query and analyze data

In this chapter, PostgreSQL is used for practical examples.

---

# 2. SQL and Database

The basic interaction looks like:

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

SQL provides the instructions, while PostgreSQL is the database management system that interprets and executes those instructions.

---

# 3. SQL Command Categories

SQL commands can be divided into several categories.

| Category | Full Form                    | Purpose                    | Examples                              |
| -------- | ---------------------------- | -------------------------- | ------------------------------------- |
| **DDL**  | Data Definition Language     | Defines database structure | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| **DML**  | Data Manipulation Language   | Manipulates data           | `INSERT`, `UPDATE`, `DELETE`          |
| **DQL**  | Data Query Language          | Retrieves data             | `SELECT`                              |
| **DCL**  | Data Control Language        | Controls permissions       | `GRANT`, `REVOKE`                     |
| **TCL**  | Transaction Control Language | Controls transactions      | `COMMIT`, `ROLLBACK`, `SAVEPOINT`     |

---

# 4. DDL — Data Definition Language

DDL is used to define and modify the **structure of database objects** such as tables.

## CREATE

Creates a database object.

```sql
CREATE TABLE student (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
```

## ALTER

Changes an existing database structure.

```sql
ALTER TABLE student
ADD COLUMN course VARCHAR(255);
```

## DROP

Removes a database object.

```sql
DROP TABLE student;
```

## TRUNCATE

Removes all rows from a table while keeping the table structure.

```sql
TRUNCATE TABLE student;
```

---

# 5. DML — Data Manipulation Language

DML is used to manipulate the **data stored inside tables**.

The main DML commands are:

```text
INSERT
UPDATE
DELETE
```

---

# 6. CRUD Operations

CRUD represents the four fundamental operations on data.

```text
C → Create → INSERT
R → Read   → SELECT
U → Update → UPDATE
D → Delete → DELETE
```

---

# 7. CREATE — INSERT

`INSERT` adds new rows to a table.

```sql
INSERT INTO student (id, name, email, course)
VALUES (
    gen_random_uuid(),
    'Harsh',
    'harsh@gmail.com',
    'BCA'
);
```

### Insert multiple rows

```sql
INSERT INTO student (id, name, email, course)
VALUES
    (gen_random_uuid(), 'Harsh', 'harsh@gmail.com', 'BCA'),
    (gen_random_uuid(), 'Rahul', 'rahul@gmail.com', 'BCA'),
    (gen_random_uuid(), 'Aman', 'aman@gmail.com', 'MCA');
```

### PostgreSQL `RETURNING`

PostgreSQL allows us to return the inserted row:

```sql
INSERT INTO student (id, name, email, course)
VALUES (
    gen_random_uuid(),
    'John',
    'john@gmail.com',
    'BCA'
)
RETURNING *;
```

---

# 8. READ — SELECT

`SELECT` retrieves data from the database.

### Select all columns

```sql
SELECT *
FROM student;
```

### Select specific columns

```sql
SELECT name, email
FROM student;
```

---

# 9. WHERE

`WHERE` filters rows based on a condition.

```sql
SELECT *
FROM student
WHERE course = 'BCA';
```

### Comparison operators

```text
=       Equal
<>      Not equal
>       Greater than
<       Less than
>=      Greater than or equal
<=      Less than or equal
```

---

# 10. AND, OR, NOT

Used to combine conditions.

### AND

Both conditions must be true.

```sql
SELECT *
FROM student
WHERE course = 'BCA'
AND name = 'Harsh';
```

### OR

At least one condition must be true.

```sql
SELECT *
FROM student
WHERE course = 'BCA'
OR course = 'MCA';
```

### NOT

Negates a condition.

```sql
SELECT *
FROM student
WHERE NOT course = 'BCA';
```

---

# 11. NULL

`NULL` represents the **absence of a value**.

It is different from:

```text
0
''
FALSE
```

### Check for NULL

```sql
SELECT *
FROM student
WHERE email IS NULL;
```

### Check for non-NULL

```sql
SELECT *
FROM student
WHERE email IS NOT NULL;
```

Do not use:

```sql
WHERE email = NULL;
```

---

# 12. DISTINCT

`DISTINCT` removes duplicate values from the query result.

```sql
SELECT DISTINCT course
FROM student;
```

Example:

```text
BCA
BCA
MCA
BCA
```

becomes:

```text
BCA
MCA
```

---

# 13. ORDER BY

`ORDER BY` sorts the result.

### Ascending

```sql
SELECT *
FROM student
ORDER BY name ASC;
```

### Descending

```sql
SELECT *
FROM student
ORDER BY name DESC;
```

---

# 14. LIMIT

`LIMIT` restricts the number of rows returned.

```sql
SELECT *
FROM student
LIMIT 10;
```

---

# 15. UPDATE

`UPDATE` modifies existing rows.

```sql
UPDATE student
SET course = 'MCA'
WHERE email = 'harsh@gmail.com';
```

### Update multiple columns

```sql
UPDATE student
SET
    name = 'Harsh Chauhan',
    course = 'MCA'
WHERE email = 'harsh@gmail.com';
```

### PostgreSQL `RETURNING`

```sql
UPDATE student
SET course = 'MCA'
WHERE email = 'harsh@gmail.com'
RETURNING *;
```

### Important

Avoid accidentally updating every row:

```sql
UPDATE student
SET course = 'MCA';
```

Without a `WHERE` clause, **all rows are updated**.

---

# 16. DELETE

`DELETE` removes rows from a table.

```sql
DELETE FROM student
WHERE email = 'harsh@gmail.com';
```

### PostgreSQL `RETURNING`

```sql
DELETE FROM student
WHERE email = 'harsh@gmail.com'
RETURNING *;
```

### Important

```sql
DELETE FROM student;
```

deletes **all rows**, but the table itself remains.

---

# 17. Aggregate Functions

Aggregate functions perform calculations over multiple rows.

Common functions:

```text
COUNT()
SUM()
AVG()
MIN()
MAX()
```

Example:

```sql
SELECT COUNT(*)
FROM student;
```

---

# 18. GROUP BY

`GROUP BY` groups rows that have the same value.

```sql
SELECT course, COUNT(*)
FROM student
GROUP BY course;
```

Example result:

```text
course    count
----------------
BCA       50
MCA       30
B.Tech    80
```

---

# 19. HAVING

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

# 20. JOIN

A `JOIN` combines related data from multiple tables.

Example:

```text
course
----------------
course_id (PK)
name

student
----------------
student_id (PK)
name
course_id (FK)
```

Relationship:

```text
student.course_id
       │
       │ references
       ▼
course.course_id
```

### INNER JOIN

Returns matching rows from both tables.

```sql
SELECT
    student.name,
    course.name
FROM student
INNER JOIN course
    ON student.course_id = course.course_id;
```

### LEFT JOIN

Returns all rows from the left table and matching rows from the right table.

```sql
SELECT
    student.name,
    course.name
FROM student
LEFT JOIN course
    ON student.course_id = course.course_id;
```

Other important JOIN types:

```text
INNER JOIN
LEFT JOIN
RIGHT JOIN
FULL OUTER JOIN
```

---

# 21. SQL Constraints

Constraints are **rules that control what data can be stored**.

### PRIMARY KEY

Uniquely identifies each row.

```sql
id UUID PRIMARY KEY
```

Properties:

* Unique
* Cannot be `NULL`

### FOREIGN KEY

Creates a relationship between tables.

```sql
FOREIGN KEY (course_id)
REFERENCES course(course_id)
```

### UNIQUE

Prevents duplicate values.

```sql
email VARCHAR(255) UNIQUE
```

### NOT NULL

Requires a value.

```sql
name VARCHAR(255) NOT NULL
```

### CHECK

Enforces a condition.

```sql
age INT CHECK (age >= 18)
```

---

# 22. DELETE vs TRUNCATE vs DROP

| Command    | Removes Rows | Removes Table Structure |
| ---------- | -----------: | ----------------------: |
| `DELETE`   |          Yes |                      No |
| `TRUNCATE` |          Yes |                      No |
| `DROP`     |          Yes |                     Yes |

### DELETE

```sql
DELETE FROM student
WHERE id = 'some-uuid';
```

Removes selected rows.

### TRUNCATE

```sql
TRUNCATE TABLE student;
```

Removes all rows.

### DROP

```sql
DROP TABLE student;
```

Removes the table itself.

---

# 23. Basic SQL Query Structure

A common query structure is:

```sql
SELECT column
FROM table
WHERE condition
GROUP BY column
HAVING condition
ORDER BY column
LIMIT number;
```

Example:

```sql
SELECT course, COUNT(*)
FROM student
WHERE course IS NOT NULL
GROUP BY course
HAVING COUNT(*) > 10
ORDER BY COUNT(*) DESC
LIMIT 5;
```

---

# 24. SQL Query Processing — Basic Idea

A SQL query is given to the DBMS, which determines how to execute it.

Conceptually:

```text
SQL Query
    ↓
Parser
    ↓
Query Analysis
    ↓
Query Optimizer
    ↓
Execution Plan
    ↓
Database Execution
    ↓
Result
```

The exact internal execution depends on the database system and query plan.

PostgreSQL provides tools such as:

```sql
EXPLAIN
```

and:

```sql
EXPLAIN ANALYZE
```

to inspect query execution.

---

# 25. SQL and Relational Model

SQL works with the **relational model**, where data is represented using relations (tables).

Important relational concepts include:

```text
Relation
Tuple
Attribute
Primary Key
Foreign Key
Constraints
```

SQL provides operations for working with these relations.

---

# 26. Important SQL Concepts to Master

Before moving deeper into database theory, understand:

* SQL and RDBMS
* DDL
* DML
* DQL
* DCL
* TCL
* CRUD
* `CREATE TABLE`
* Data types
* Constraints
* `INSERT`
* `SELECT`
* `WHERE`
* `NULL`
* `DISTINCT`
* `ORDER BY`
* `LIMIT`
* `UPDATE`
* `DELETE`
* Aggregate functions
* `GROUP BY`
* `HAVING`
* JOINs
* Basic query processing

---

# Quick Revision

```text
                 SQL
                  │
        ┌─────────┼─────────┐
        │         │         │
       DDL       DML       DQL
        │         │         │
 CREATE/ALTER   INSERT    SELECT
 DROP           UPDATE
 TRUNCATE       DELETE
```

### CRUD

```text
CREATE → INSERT
READ   → SELECT
UPDATE → UPDATE
DELETE → DELETE
```

### Query flow

```text
SELECT
  ↓
FROM
  ↓
WHERE
  ↓
GROUP BY
  ↓
HAVING
  ↓
ORDER BY
  ↓
LIMIT
```

**Core idea:** SQL is the language; PostgreSQL is the DBMS that executes SQL against your relational database.
