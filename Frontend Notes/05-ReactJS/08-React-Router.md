# 🛣️ Client-Side Routing with React Router v6

## 📖 Overview

React is a Single Page Application (SPA) framework. **React Router** enables client-side routing, changing the visible view and browser URL dynamically without requiring a full page refresh from the server.

---

## 🛠 React Router v6 Setup

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <h2>User Profile ID: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📌 Summary
* Use `<Link>` instead of `<a href>` to prevent page reloads during routing.
* Use `useParams()` to extract URL parameters.
