# 🌐 How Browsers Render Web Pages

## 📖 Overview

Understanding the Critical Rendering Path (CRP) explains how browser engines convert HTML, CSS, and JavaScript into interactive visual pixels on screen.

---

## 🔄 Critical Rendering Path (CRP) Steps

```text
HTML ──► DOM Tree ──┐
                    ├──► Render Tree ──► Layout (Reflow) ──► Paint ──► Composite
CSS  ──► CSSOM    ──┘
```

1. **DOM Tree**: Parses raw HTML bytes into a Document Object Model tree.
2. **CSSOM Tree**: Parses CSS rules into a CSS Object Model tree.
3. **Render Tree**: Combines DOM + CSSOM (excludes hidden elements like `display: none`).
4. **Layout (Reflow)**: Calculates exact screen position and dimensions for each visible node.
5. **Paint**: Fills pixels on screen (colors, text, borders, images).
6. **Composite**: Draws layers to screen in correct stacking order.

---

## 📌 Summary
* Avoid frequent layout reflows by minimizing direct style mutations on animated DOM elements.
