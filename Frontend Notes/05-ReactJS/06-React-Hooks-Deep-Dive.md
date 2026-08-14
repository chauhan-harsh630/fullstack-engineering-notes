# 🪝 React Hooks Deep Dive (`useRef`, `useReducer`, Custom Hooks)

## 📖 Overview

In addition to `useState` and `useEffect`, React provides specialized hooks for refs, complex state transitions, and custom logic encapsulation.

---

## 🛠 Advanced Built-in Hooks

### 1. `useRef`
* Access DOM elements directly.
* Store mutable values that persist across renders **without** triggering a re-render.

```jsx
import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Direct DOM focus
  }, []);

  return <input ref={inputRef} placeholder="Focuses automatically" />;
}
```

### 2. Custom Hooks
Extract and reuse component state logic across multiple components.

```jsx
// useFetch.js (Custom Hook)
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    getData();
  }, [url]);

  return { data, loading };
}
```

---

## 📌 Summary
* `useRef` holds persistent values without triggering re-renders.
* Custom hooks start with `use` and package reusable stateful logic.
