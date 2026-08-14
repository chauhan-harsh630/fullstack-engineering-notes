# 📝 HTML5 Forms & Native Input Validation

## 📖 Overview

HTML forms collect user inputs and submit data to backend API endpoints.

---

## 🛠 Form Validation Syntax

```html
<form action="/api/v1/login" method="POST">
  <label for="username">Username:</label>
  <input 
    type="text" 
    id="username" 
    name="username" 
    required 
    minlength="3" 
    placeholder="Enter username" 
  />

  <label for="email">Email Address:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    required 
    placeholder="name@example.com" 
  />

  <button type="submit">Submit</button>
</form>
```

---

## 📌 Summary
* Use HTML5 native validation attributes (`required`, `type="email"`, `minlength`, `pattern`) as a first layer before JavaScript processing.
