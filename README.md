# Personal Developer Portfolio Website — Anurag Chaurasia

> **A professional, cinematic, and responsive personal portfolio crafted using pure HTML5, CSS3, and vanilla JavaScript.**  
> Built by **Anurag Chaurasia**, a 2nd-Year B.Tech Computer Science and Engineering student at **DSEU GB Pant Engineering College**.

---

## 1. Student Identity & Contact

- **Student Name**: Anurag Chaurasia
- **Degree / Branch**: B.Tech in Computer Science and Engineering (CSE)
- **Current Year**: 2nd Year Undergraduate
- **College / University**: DSEU GB Pant Engineering College (Delhi Skill and Entrepreneurship University)
- **Email**: [anuragh112005@gmail.com](mailto:anuragh112005@gmail.com)
- **GitHub**: [github.com/anuragh112005](https://github.com/anuragh112005)
- **LinkedIn**: [linkedin.com/in/anurag-chaurasia-174434394/](https://www.linkedin.com/in/anurag-chaurasia-174434394/)

---

## 2. Project Overview

This portfolio website represents my first hands-on Web Development project. It showcases my foundational knowledge in programming languages, core computer science subjects, and frontend development principles.

Taking creative inspiration from the futuristic, dark, and editorial aesthetic of high-end digital platforms (such as the *Nexon Digital Kensei* showcase), this website blends:
- Deep obsidian dark backgrounds (`#050505`) with a high-contrast off-white editorial section (`#F4F4F2`).
- Crimson red accents (`#E52432`) symbolizing energy and technical focus.
- Oversized typography, asymmetric layouts, and subtle gaming HUD elements.
- Strict **authenticity and honesty** — zero fabricated work experiences, fake percentages, or dummy statistics.

---

## 3. Tech Stack

Strictly developed **without** external frameworks, libraries, or build steps:

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), ARIA attributes, skip links for accessibility. |
| **Styling** | CSS3 | Custom Properties (variables), Flexbox, CSS Grid, Fluid clamp typography, `@media (prefers-reduced-motion)`. |
| **Logic** | Vanilla JavaScript (ES6+) | `IntersectionObserver` for scroll reveals & active navigation, dynamic project data structures, DOM event handling, clipboard API. |

---

## 4. Directory Structure

```text
my profile/
│
├── index.html          # Main HTML5 document containing all 9 website sections
├── css/
│   └── style.css       # Complete design tokens, responsive styles, animations
├── js/
│   └── script.js       # Modular vanilla JS logic, navigation, project system
├── assets/
│   ├── images/         # Directory for local image assets
│   └── icons/          # Directory for vector icons
└── README.md           # Project documentation and submission guide
```

---

## 5. How to Run the Website Locally

You can run this website on any desktop, laptop, or mobile browser using either of the two methods below:

### Method A: Direct Browser Open (Simplest & Offline-Ready)
1. Navigate to the project folder (`my profile`).
2. Double-click `index.html` (or right-click -> **Open With** -> **Google Chrome** / **Microsoft Edge** / **Firefox**).
3. The portfolio will launch immediately in your default browser.

### Method B: Using VS Code & Live Server Extension (Recommended for Development)
1. Open Visual Studio Code.
2. Go to **File** -> **Open Folder...** and select the `my profile` folder.
3. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions marketplace if not already installed.
4. Right-click `index.html` in the explorer sidebar and select **Open with Live Server** (or click **Go Live** on the bottom right status bar).
5. Your browser will automatically open at `http://127.0.0.1:5500/index.html`. Any code changes you make will instantly reload the page!

---

## 6. Website Sections Breakdown

The page is structured sequentially into 9 sections:

1. **Navigation Bar (`#header`)**:
   - Fixed top bar with brand mark `<ANURAG./>`.
   - Dynamic blur and border when scrolling past the hero.
   - Mobile-responsive sliding drawer with accessible ARIA toggle.
   - Active section highlighting as the user scrolls.

2. **Hero Section (`#hero`)**:
   - Full-screen cinematic presentation with ambient crimson lighting.
   - Oversized bold headline: `CODE. CREATE. EXPLORE.` with outline text treatment.
   - Student status indicator: `B.TECH CSE STUDENT | ASPIRING DEVELOPER` and HUD coordinates `SYS_ID: 2ND_YEAR_CSE // DSEU_GB_PANT`.
   - Honest introduction: *"Hey, I'm Anurag Chaurasia. I'm a second-year Computer Science student, a curious coder and a gaming enthusiast..."*
   - Dual action buttons (`Explore My Work` & `Get In Touch`) and subtle animated scroll indicator.

3. **About Me (`#about`)**:
   - Dramatic transition into a light off-white section (`#F4F4F2`) with rounded upper corners (`border-radius: 48px 48px 0 0`).
   - Editorial typography highlighting B.Tech CSE at **DSEU GB Pant Engineering College**.
   - Mentions studied languages, curiosity for tech, drawing, gaming, and the **Tug of War trophy**.
   - Original abstract vector developer graphic representing foundational logic and algorithms (no fake stock photos).

4. **Technical Skills (`#skills`)**:
   - Seamless transition back to the dark obsidian theme (`#050505`).
   - Grouped into three honest categories:
     - **Programming Languages**: Java, C, C++, Python.
     - **Computer Science Subjects**: Database Management Systems (DBMS), Software Engineering.
     - **Web Development**: HTML, CSS, JavaScript.
   - Zero fake percentage bars or exaggerated claims.

5. **Projects (`#projects`)**:
   - Flagship showcase of **Project 01: Personal Developer Portfolio**.
   - Outlines the purpose, technologies used, GitHub profile/repo link (`https://github.com/anuragh112005`), and live demo.
   - Dynamic JavaScript data structure (`projectsData`) ready to dynamically append future academic projects while automatically hiding empty entries.

6. **Beyond Coding (`#beyond-coding`)**:
   - Three dedicated cards highlighting multidimensional interests:
     - **01 — Gaming**: Strategy and exploration outside academics.
     - **02 — Drawing**: Visual creativity and personal expression.
     - **03 — Teamwork**: Tug of War trophy, highlighting collaboration, resilience, and coordination.

7. **Learning Mindset (`#mindset`)**:
   - Deep black section with bold typography: `Still Learning. Always Building.`
   - 5 core philosophy pills: *Curiosity, Consistency, Creativity, Problem Solving, Growth*.

8. **Contact (`#contact`)**:
   - Direct communication channels:
     - **Email**: `anuragh112005@gmail.com` with a one-click copy button and toast alert.
     - **GitHub**: Direct link to `github.com/anuragh112005`.
     - **LinkedIn**: Direct link to `linkedin.com/in/anurag-chaurasia-174434394/`.

9. **Footer (`#footer`)**:
   - Branding, quick site navigation, copyright notice with **dynamic year auto-calculated by JavaScript**, and closing statement:
     *"Designed and built with curiosity, creativity and code."*

---

## 7. Viva & Academic Explanation Guide

If asked to explain your project code during evaluation, here are key technical points to highlight:

### HTML5 Concepts Used:
- **Semantic HTML**: Using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` rather than generic `<div>` tags improves SEO and web accessibility.
- **Accessibility (a11y)**: Added `aria-label`, `aria-expanded`, `aria-hidden="true"` on decorative SVGs, and a visible `.skip-link` for keyboard navigation.

### CSS3 Concepts Used:
- **CSS Custom Properties (Variables)**: Centralized design tokens for colors, fonts, spacing, and transitions at the `:root` level. This allows instant global theme adjustments.
- **Fluid Typography**: Used `clamp(min, preferred, max)` to ensure headings scale proportionally across phones, tablets, and 4K displays without jumping.
- **CSS Grid & Flexbox**: Flexbox for 1D alignments (navbar, buttons, tags); CSS Grid for 2D card layouts and asymmetrical hero/about structures.
- **Accessibility with Media Queries**: Included `@media (prefers-reduced-motion: reduce)` to disable heavy transforms for users with motion sensitivity.

### JavaScript Concepts Used:
- **IntersectionObserver API**: Used instead of bulky scroll event listeners to monitor when sections enter the viewport, triggering animations and updating the active navbar link efficiently.
- **Modern ES6+ Syntax**: Arrow functions, template literals, `async/await` with `navigator.clipboard`, `const`/`let` scoping, and strict mode (`'use strict'`).
- **Data-Driven Architecture**: The `projectsData` array decouples project data from DOM presentation, demonstrating basic MVC/component-like separation in pure vanilla JS.

---

## 8. Author & Academic Context

- **Author**: Anurag Chaurasia
- **Institution**: DSEU GB Pant Engineering College
- **Program**: B.Tech Computer Science and Engineering
- **Current Academic Year**: 2nd Year (Semester IV)
- **Course**: Web Development
