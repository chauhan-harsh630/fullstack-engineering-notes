# 🔄 Props and State Management (`useState`)

## 📖 Overview

* **Props (Properties)**: Immutable data passed down from parent to child components.
* **State**: Component-local, mutable data managed via the `useState` hook. Changing state causes React to re-render the component.

---

## 🛠 `useState` Implementation Example

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Functional state update (Safe for concurrent updates)
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

---

## ⚡ Props vs State Comparison

| Property | Props | State |
| -------- | ----- | ----- |
| **Mutability** | Read-Only (Immutable) | Mutable via setter function (`setX`) |
| **Owner** | Passed by Parent component | Owned & managed internally by component |
| **Triggers Re-render?** | Yes (when parent passes new props) | Yes (when setter is invoked) |

---

## 📌 Summary
* Props pass data down; State manages dynamic local component data.
