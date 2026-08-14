# 📝 Event Handling & Controlled Forms

## 📖 Overview

In React, forms are typically managed as **Controlled Components**, where input values are bound directly to React `state`.

---

## 🛠 Controlled Form Component Example

```jsx
import { useState } from 'react';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser reload
    onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        name="password" 
        value={formData.password} 
        onChange={handleChange} 
        placeholder="Password" 
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
```

---

## 📌 Summary
* Bind inputs with `value={state}` and `onChange={handler}` to maintain controlled component state.
