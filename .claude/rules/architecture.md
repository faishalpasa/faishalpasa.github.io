# Architecture

## Overview

This is a single-page portfolio site. There is no routing, no global state management library, and no API layer.

## Entry Point

```
src/index.tsx        # ReactDOM.createRoot + render App
src/App.tsx          # All sections composed here, top to bottom
src/index.css        # Tailwind base/components/utilities directives
```

## Section Composition (`App.tsx`)

All portfolio sections are rendered in sequence inside `App.tsx`. Each section can be extracted into its own component file if it grows complex.

```
<App>
  ├── Hero / Intro section
  ├── About section
  ├── Skills section
  ├── Portfolio section
  └── Contact section
</App>
```

## Animations

- **Framer Motion** — for entrance animations, scroll-triggered reveals, and layout transitions
- **react-lottie** — for Lottie JSON illustrations (files in `src/lottie/`)

## Styling

All styles use Tailwind CSS utility classes. Global base styles only in `src/index.css` (Tailwind directives). No CSS modules. No styled-components. No inline styles.

## Build & Deploy

```bash
npm run build     # CRA build → build/
npm run deploy    # predeploy (build) → gh-pages -d build
```

Deployed to GitHub Pages. The `gh-pages` branch is managed automatically by the `gh-pages` package.
