# Akshit Sachdeva — Personal Portfolio Website

A premium, fast-loading, single-page personal portfolio website designed for **Akshit Sachdeva**, a Computer Science undergraduate. 

This portfolio is built entirely using **Vanilla HTML5, CSS3, and JavaScript**, prioritizing typography, layout grids, and visual harmony over heavy external libraries or stock photography.

---

## 🚀 Key Features

*   **Premium Dark Theme**: Built with a charcoal background (`#0D0D0D`), warm off-white typography (`#F5F1E8`), and minimal gold/amber accents (`#D4A24C`).
*   **Floating Pill Navbar**: A glassmorphism navbar fixed at the top of the page. It automatically updates active highlight indicators as sections scroll into view.
*   **Interactive Scroll Reveal**: Section components smoothly fade and slide into view as the user scrolls down the page.
*   **Direct Details Copying**: Click-to-copy utility for direct contact details (Email) with interactive checkmark feedback.
*   **Grid Layouts**: Fully responsive layouts featuring custom animations, gold card highlights, and linked SVG assets.
*   **SEO Optimized**: Fully integrated meta descriptions, search tags, responsive viewport setups, and clean semantic structures.

---

## 🛠️ Technology Stack & Styling Accents

*   **Structure**: Semantic HTML5.
*   **Styling**: Vanilla CSS3 Custom Properties (CSS variables), CSS Grid, and Flexbox layouts.
*   **Typography**: Google Fonts:
    *   *Interface & Headers*: **Outfit** (modern geometric sans-serif).
    *   *Technical Detail & Accents*: **JetBrains Mono** (sleek monospace font).
*   **Interactivity**: Vanilla ES6 JS (using `IntersectionObserver` API for viewport monitoring).
*   **Icons**: Hand-picked inline SVGs for zero layout shift and instant, offline loading.

---

## 📁 Project Directory Structure

```text
portfolio/
├── .gitignore         # Excludes OS cache and IDE configurations
├── index.html         # Main page markup and structures
├── style.css          # Color tokens, styles, grids, and media queries
├── main.js           # Scroll triggers, navbar controls, and clipboard copier
├── package.json       # Development script configurations
└── README.md          # Project documentation (this file)
```

---

## 💻 Local Setup & Deployment

Since the website is completely static, you have two simple ways to run it:

### Option 1: Direct Run (No installation required)
Simply clone the repository and double-click **`index.html`** to open it directly in any modern web browser.

### Option 2: Live Server (With live-reloading)
Make sure you have [Node.js](https://nodejs.org) installed, and run:

1.  Open your terminal inside the project folder.
2.  Launch the development server:
    ```bash
    npm run dev
    ```
3.  Open `http://localhost:3000` in your web browser. The server will automatically reload whenever you make changes to `index.html`, `style.css`, or `main.js`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
