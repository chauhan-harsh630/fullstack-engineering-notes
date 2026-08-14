# Database Keys — SQL Theory Notes

A **key** is an attribute or set of attributes used to **uniquely identify records or establish relationships between tables**.

---

## 1. Super Key

A **Super Key** is any set of one or more attributes that can uniquely identify a row in a table.

Example:

```text
student
-------------------------
student_id
email
name
```

Possible Super Keys:

```text
{student_id}
{email}
{student_id, name}
{email, name}
```

If the combination can uniquely identify a row, it is a Super Key.

### Key idea

```text
Super Key
    ↓
Can uniquely identify a row
```

---

## 2. Candidate Key

A **Candidate Key** is a **minimal Super Key**.

Minimal means that no unnecessary attribute is included.

Example:

```text
student_id → unique
email      → unique
```

Both can independently identify a student:

```text
{student_id}
{email}
```

Therefore, both are Candidate Keys.

### Relationship

```text
Super Key
    ↓
Remove unnecessary attributes
    ↓
Candidate Key
```

---

## 3. Primary Key

A **Primary Key** is the Candidate Key selected as the **main identifier** of a table.

Example:

```sql
CREATE TABLE student (
    student_id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255)
);
```

Here:

```text
student_id → Primary Key
email      → Candidate Key / Alternate Key
```

### Properties

* Uniquely identifies each row
* Cannot contain `NULL`
* A table has one primary-key constraint
* Can consist of one or multiple columns

### Concept

```text
Candidate Keys
      │
      ├── student_id
      └── email
             │
             ↓
      Choose one
             │
             ↓
       Primary Key
```

---

## 4. Alternate Key

An **Alternate Key** is a Candidate Key that was **not selected as the Primary Key**.

Example:

```text
Candidate Keys:
    student_id
    email

Primary Key:
    student_id

Alternate Key:
    email
```

So:

```text
Candidate Key
      │
      ├── Primary Key
      │
      └── Alternate Key
```

In SQL, an alternate key is commonly enforced using `UNIQUE`.

```sql
email VARCHAR(255) UNIQUE NOT NULL
```

---

## 5. Foreign Key

A **Foreign Key** is an attribute that references a key in another table.

It is mainly used to **establish relationships between tables** and maintain **referential integrity**.

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

SQL:

```sql
CREATE TABLE course (
    course_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE student (
    student_id UUID PRIMARY KEY,
    name VARCHAR(100),
    course_id INT,

    FOREIGN KEY (course_id)
        REFERENCES course(course_id)
);
```

### How it works

Suppose:

```text
course
----------------
course_id
1
2
3
```

Then:

```text
student
----------------
student_id    course_id
101           1
102           2
103           1
```

`course_id = 1` in `student` refers to:

```text
course.course_id = 1
```

This allows multiple students to belong to the same course.

---

## 6. Composite Key

A **Composite Key** is a key made from **two or more attributes**.

Example:

```text
enrollment
---------------------
student_id
course_id
```

Neither column alone is necessarily unique.

But together:

```text
(student_id, course_id)
```

can uniquely identify an enrollment.

```sql
CREATE TABLE enrollment (
    student_id UUID,
    course_id INT,

    PRIMARY KEY (student_id, course_id)
);
```

Example:

```text
student_id    course_id
-----------------------
101           1
101           2
102           1
```

The combination must be unique.

This would be invalid:

```text
101    1
101    1   ← duplicate combination
```

### How it works

```text
student_id + course_id
         ↓
   Composite Key
         ↓
   Unique enrollment
```

---

# Key Types — Summary

| Key               | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| **Super Key**     | Any attribute set that uniquely identifies a row |
| **Candidate Key** | Minimal Super Key                                |
| **Primary Key**   | Candidate Key selected as the main identifier    |
| **Alternate Key** | Candidate Key not selected as Primary Key        |
| **Foreign Key**   | References a key in another table                |
| **Composite Key** | Key consisting of multiple attributes            |

---

# Key Relationship

```text
                    SUPER KEY
                        │
              Remove unnecessary
                 attributes
                        ↓
                 CANDIDATE KEY
                    /       \
                   /         \
          PRIMARY KEY     ALTERNATE KEY
               │
               │
         Main identifier


FOREIGN KEY
     │
     └──────────► References another table


COMPOSITE KEY
     │
     └──────────► Multiple columns
                   identify a row
```

---

# Important Distinction

### Keys for identifying rows

```text
Super Key
    ↓
Candidate Key
    ↓
Primary Key
    ↓
Alternate Key
```

### Key for relationships

```text
Foreign Key
    ↓
Connects tables
    ↓
Maintains referential integrity
```

### Multiple columns

```text
Composite Key
    ↓
Multiple attributes
    ↓
Together identify a row
```

---

## Quick Memory

```text
Super Key      → Can identify
Candidate Key  → Minimal identifier
Primary Key    → Chosen identifier
Alternate Key  → Candidate not chosen
Foreign Key    → Connects tables
Composite Key  → Multiple columns together
```
