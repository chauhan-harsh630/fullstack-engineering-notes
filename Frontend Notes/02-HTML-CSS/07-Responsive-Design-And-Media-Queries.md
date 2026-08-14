# 📱 Responsive Web Design & Media Queries

## 📖 Overview

Responsive design ensures web applications adapt seamlessly across mobile phones, tablets, laptops, and desktop monitors.

---

## 🛠 Mobile-First Media Queries

Always design and write CSS for mobile viewports first, then layer up larger viewport styles using `min-width` media queries.

```css
/* Base Styles: Mobile (Default) */
.container {
  width: 100%;
  padding: 16px;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .container {
    width: 90%;
    margin: 0 auto;
  }
}

/* Desktop (1200px and up) */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
```

---

## 📌 Summary
* Always include `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in `<head>`.
* Use mobile-first `min-width` breakpoints.
