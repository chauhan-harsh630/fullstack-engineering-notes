# 🎨 CSS Box Model & Selectors

## 📖 Overview

Every element rendered on a web page is enclosed inside a rectangular box. The **CSS Box Model** consists of 4 layers:
`Content` $\rightarrow$ `Padding` $\rightarrow$ `Border` $\rightarrow$ `Margin`.

```text
┌──────────────────────────────────────────────┐
│ Margin                                       │
│  ┌────────────────────────────────────────┐  │
│  │ Border                                 │  │
│  │  ┌──────────────────────────────────┐  │  │
│  │  │ Padding                          │  │  │
│  │  │  ┌────────────────────────────┐  │  │  │
│  │  │  │ Content (width x height)   │  │  │  │
│  │  │  └────────────────────────────┘  │  │  │
│  │  └──────────────────────────────────┘  │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

---

## ⚡ Global Rule: Always use `box-sizing: border-box`

By default, standard CSS adds padding and borders on top of element `width`, causing unexpected layout overflows. Setting `box-sizing: border-box` forces padding and border to be included inside the specified width.

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

---

## 📌 Summary
* Apply `box-sizing: border-box` globally in CSS stylesheets to prevent layout dimension bugs.
