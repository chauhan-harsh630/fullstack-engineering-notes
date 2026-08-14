# 📦 CSS Flexbox (1D Layouts)

## 📖 Overview

**Flexible Box Layout (Flexbox)** is a 1-dimensional layout module designed for aligning items in rows OR columns.

---

## 🛠 Flexbox Axes & Properties

```css
.container {
  display: flex;
  flex-direction: row; /* Main Axis = Horizontal, Cross Axis = Vertical */
  justify-content: center; /* Aligns along Main Axis */
  align-items: center;    /* Aligns along Cross Axis */
  gap: 16px;
}
```

### Perfect Centering Snippet:
```css
.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## 📌 Summary
* Flexbox excels at 1D component alignments (navbars, card item alignment, action button rows).
