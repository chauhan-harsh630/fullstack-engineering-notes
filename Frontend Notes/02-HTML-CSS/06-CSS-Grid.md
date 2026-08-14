# 🏁 CSS Grid (2D Layouts)

## 📖 Overview

**CSS Grid** is a 2-dimensional layout system designed to manage rows AND columns simultaneously.

---

## 🛠 Auto-Responsive Card Grid (No Media Queries Required!)

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
```
* `auto-fit`: Automatically creates as many columns as will fit inside the container.
* `minmax(280px, 1fr)`: Ensures each card is at least `280px` wide, but flexes up to fill remaining free space evenly (`1fr`).

---

## 📌 Summary
* Use CSS Grid for 2D macro layouts (page structures, product grids) and Flexbox for 1D micro alignments.
