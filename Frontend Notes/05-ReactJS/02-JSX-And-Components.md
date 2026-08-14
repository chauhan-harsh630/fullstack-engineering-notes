# 🧩 JSX & React Functional Components

## 📖 Overview

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows developers to write HTML-like elements directly inside JavaScript files.

---

## 🛠 Functional Component Example

```jsx
// UserCard.jsx
function UserCard({ name, role, isActive }) {
  return (
    <div className={`card ${isActive ? 'active' : ''}`}>
      <h2>{name.toUpperCase()}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserCard;
```

---

## ⚠️ Key Rules of JSX
1. **Return a Single Root Element**: Wrap siblings in a Fragment (`<>...</>`) or `<div>`.
2. **Use `className` instead of `class`**: `class` is a reserved JavaScript keyword.
3. **Embed Expressions with `{}`**: Inject variables, ternary operators, or array `.map()` calls inside curly braces.
4. **Self-Close Empty Tags**: `<img />`, `<input />`, `<br />`.

---

## 📌 Summary
* JSX compiles down to `React.createElement()` calls behind the scenes.
