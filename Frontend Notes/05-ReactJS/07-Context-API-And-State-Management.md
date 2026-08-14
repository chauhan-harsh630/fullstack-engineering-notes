# 🌐 Context API & Global State Management

## 📖 Overview

Passing props down through 5+ intermediate layers of nested components is called **Prop Drilling**. The **Context API** provides a way to share global state (like user authentication, theme modes, language preferences) across the component tree without prop drilling.

---

## 🛠 Context API Implementation

```jsx
// AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for consuming auth context
export const useAuth = () => useContext(AuthContext);
```

---

## ⚡ External State Management Libraries (Zustand / Redux Toolkit)
For large applications with high-frequency global updates, specialized state management libraries like **Zustand** or **Redux Toolkit** prevent unnecessary re-renders of un-subscribed components.

---

## 📌 Summary
* Use Context API for low-frequency global data (themes, auth user).
* Use Zustand or Redux Toolkit for complex, high-frequency application state.
