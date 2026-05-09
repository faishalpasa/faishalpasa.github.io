# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at localhost:5173
npm run build      # tsc --noEmit && vite build (type check first, then bundle)
npm run preview    # preview production build locally
npm run deploy     # build + deploy to GitHub Pages (gh-pages -d dist)
```

There are no tests. Do not add a test runner unless explicitly requested.

## Architecture

Single-page portfolio site — no routing, no API calls, no global state.

**Entry point:** `src/index.tsx` → renders `src/App.tsx`

**App.tsx** is a thin shell that composes five section components in order:

```
HeroSection          ← typewriter animation + Lottie + social links
WorkExperiencesSection
SkillsSection
PortfoliosSection
Footer
```

All components live in `src/components/`. All static data (text, work history, skills, portfolio items) lives in `src/constants/app.ts` as named exports.

## Key Constraints

**Lottie workaround** — `react-lottie` is a legacy CommonJS package. In `HeroSection.tsx`, the default export is resolved manually to handle Vite's ESM/CJS interop:
```ts
const Lottie = (LottieLib as unknown as { default: typeof LottieLib }).default ?? LottieLib
```
Do not simplify this import — it will break at runtime.

**Tailwind CSS** requires PostCSS. The config chain is: `postcss.config.js` → `tailwind.config.js`. Both use ES module syntax (`export default`) because `package.json` has `"type": "module"`.

**Portfolio images** are served from `public/images/portfolio-{1-10}.jpeg`. Vite serves `public/` at the root, so paths in code are `/images/portfolio-N.jpeg`.

**Deploy output** goes to `dist/` (not `build/`). The `gh-pages` package pushes `dist/` to the `gh-pages` branch automatically.

## TypeScript

`tsconfig.json` uses `moduleResolution: "bundler"` — do not change to `"node"`. No `baseUrl` is set; all imports use relative paths or npm package names.
