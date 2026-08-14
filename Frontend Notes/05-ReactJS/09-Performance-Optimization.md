# 🚀 React Performance Optimization (`React.memo`, `useMemo`, `useCallback`)

## 📖 Overview

By default, when a parent component re-renders, **all** of its child components re-render automatically. Unnecessary re-renders of heavy components degrade UI performance and responsiveness.

---

## 🛠 Optimization Techniques

### 1. `React.memo`
Memoizes a functional component so it only re-renders if its `props` have actually changed.

```jsx
import { memo } from 'react';

const ExpensiveChild = memo(function ExpensiveChild({ title }) {
  console.log('Child Rendered');
  return <h3>{title}</h3>;
});
```

### 2. `useMemo`
Memoizes the **result of a calculation** between renders.

```jsx
const sortedList = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

### 3. `useCallback`
Memoizes a **function definition** between renders to prevent breaking `React.memo` on child components when passing callbacks down.

```jsx
const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);
```

### 4. Code-Splitting with `React.lazy` & `Suspense`
Splits large bundle sizes into smaller chunks loaded on demand.

```jsx
import { lazy, Suspense } from 'react';

const AdminDashboard = lazy(() => import('./AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <AdminDashboard />
    </Suspense>
  );
}
```

---

## 📌 Summary
* Use `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders.
* Use `React.lazy` + `Suspense` for lazy loading routes and heavy components.
