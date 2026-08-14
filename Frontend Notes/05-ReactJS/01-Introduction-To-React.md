# ⚛️ Introduction to React.js

## 📖 Overview

**React.js** is an open-source JavaScript library developed by Meta for building dynamic, high-performance User Interfaces (UIs).

---

## 🎯 Key Architectural Pillars

1. **Component-Based**: UI is split into reusable, independent building blocks (e.g., `Navbar`, `Button`, `UserCard`).
2. **Declarative**: Developers describe *what* the UI should look like based on state, and React handles DOM updates automatically.
3. **Virtual DOM**: React keeps an in-memory copy of the DOM, performs **Diffing** when state changes, and applies minimal **Reconciliation** updates to the real browser DOM.
4. **Unidirectional Data Flow**: Data flows strictly downwards from parent to child components via `props`.

---

## ⚡ Scaffolding a React Project with Vite
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

---

## 📌 Summary
* React simplifies UI creation with components, state, and Virtual DOM reconciliation.
