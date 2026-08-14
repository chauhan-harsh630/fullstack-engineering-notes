# ⚡ Side Effects & `useEffect` Hook

## 📖 Overview

Side effects (data fetching, subscriptions, manual DOM manipulation, timers) are managed using the **`useEffect`** hook.

---

## 🛠 `useEffect` Dependency Array Modes

### 1. Run on Every Render (No Dependency Array)
```jsx
useEffect(() => {
  console.log('Runs on mount and every update');
});
```

### 2. Run Only Once on Mount (Empty Dependency Array `[]`)
```jsx
useEffect(() => {
  // Fetch initial API data on component mount
  fetchUsers();
}, []);
```

### 3. Run When Specific Dependencies Change (`[dep1, dep2]`)
```jsx
useEffect(() => {
  // Re-fetch data when userId prop changes
  fetchUserProfile(userId);
}, [userId]);
```

### 4. Cleanup Functions (Subscriptions / Timers / WebSockets)
```jsx
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);

  // Return cleanup function executed before unmount or next effect run
  return () => clearInterval(timer);
}, []);
```

---

## 📌 Summary
* Use empty `[]` array for initial data fetching on mount.
* Always return cleanup functions for timers, web sockets, and event listeners.
