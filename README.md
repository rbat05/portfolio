# Raaghav Batra's Portfolio

Welcome to my personal portfolio website! This project showcases my work, skills, and background as a Mechatronics Engineer, built with a modern, minimalist black-and-white wireframe theme and custom animated effects.

## Features

- **Black & White Wireframe Theme:** Clean, accessible design with custom wireframe effects for buttons, cards, navigation, and terminal blocks.
- **Animated Background:** VHS-style animated grid using Three.js, responsive to all screen sizes.
- **Custom Font:** Nippo font family imported and used throughout the site.
- **Responsive Design:** Mobile-friendly layout with adaptive navigation and content.
- **Splash Screen:** Mechatronics-themed splash with gear animation.
- **Terminal UI:** Profile and quick-access info displayed in a retro terminal style.
- **Flashing Buttons & Hover Effects:** Interactive elements with animated transitions.
- **Accessible:** High contrast, keyboard-friendly, and screen reader support.
- **Meta Tags:** Open Graph and Twitter meta tags for social sharing.

## Tech Stack

- **React** (with functional components and hooks)
- **Vite** (fast build tool)
- **TypeScript**
- **Tailwind CSS** (utility-first styling)
- **Three.js** (animated background)
- **SVG** (gear animation)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open [http://localhost:5173](http://localhost:5173) in your browser.**

## Deployment

You can deploy this site on [Cloudflare Pages](https://pages.cloudflare.com/):

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Vite

For single-page app routing, add a `_redirects` file with:
```
/*    /index.html   200
```

## Customization

- **Change theme colors:** Edit `src/index.css` and Tailwind config.
- **Edit animated background:** See `src/components/AnimatedBackground.tsx`.
- **Update profile/info:** Edit `src/pages/Home.tsx` and `src/pages/Contact.tsx`.

## License

This project is open source and available under the MIT License.

---

Made with ❤️ by Raaghav Batra