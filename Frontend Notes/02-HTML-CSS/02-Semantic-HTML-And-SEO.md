# 🏗️ Semantic HTML5 & Accessibility (SEO)

## 📖 Overview

Semantic HTML tags clearly describe their meaning to both browser rendering engines, screen readers, and search engine crawlers (SEO). Avoid using generic `<div>` tags for everything ("Divitis").

---

## 🛠 Semantic Layout Anatomy

```text
┌─────────────────────────────────┐
│            <header>             │
├─────────────────────────────────┤
│              <nav>              │
├─────────────────────────────────┤
│             <main>              │
│  ┌──────────────┐ ┌──────────┐  │
│  │  <section>   │ │ <aside>  │  │
│  │  <article>   │ │          │  │
│  └──────────────┘ └──────────┘  │
├─────────────────────────────────┤
│            <footer>             │
└─────────────────────────────────┘
```

---

## ♿ Accessibility (a11y) & SEO Best Practices
1. **One `<h1>` per page**: Essential for search engine content hierarchy indexing.
2. **`alt` attributes on images**: Required for screen readers and SEO indexing (`<img src="logo.png" alt="Company Logo" />`).
3. **Explicit Form Labels**: Always pair `<label for="email">` with `<input id="email">`.

---

## 📌 Summary
* Semantic tags improve SEO rankings and screen reader accessibility.
