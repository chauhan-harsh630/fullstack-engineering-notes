# 🍪 HTTP-Only Cookie Authentication

## 📖 Overview

Storing access tokens in browser `localStorage` or `sessionStorage` exposes applications to **Cross-Site Scripting (XSS)** attacks. If an attacker injects malicious JavaScript, they can steal tokens from `localStorage`.

Setting JWTs inside **`HttpOnly` cookies** prevents client-side JavaScript from accessing the token entirely.

---

## 🛠 Cookie Security Flags

* **`HttpOnly`**: Prevents client-side JS (`document.cookie`) from reading the cookie.
* **`Secure`**: Ensures cookie is sent *only* over encrypted HTTPS connections.
* **`SameSite=Strict` / `Lax`**: Prevents the browser from sending the cookie in cross-site requests, mitigating **CSRF** attacks.

```javascript
res.cookie('token', accessToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 3600000 // 1 hour in ms
});
```

---

## 📌 Summary
* Store sensitive authentication tokens in `HttpOnly`, `Secure`, `SameSite=Strict` cookies for maximum browser security.
