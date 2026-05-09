# Tech Stack

- React 18 + TypeScript
- Vite 8 + @vitejs/plugin-react
- ESLint + Prettier
- Tailwind CSS 3 (via PostCSS — requires `postcss.config.js`)
- Framer Motion 12
- react-lottie 1.2
- gh-pages (deployment)

## Key Scripts

| Script             | Purpose                                      |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Dev server (localhost:5173)                  |
| `npm run build`    | `tsc --noEmit && vite build` → `dist/`       |
| `npm run preview`  | Preview production build locally             |
| `npm run deploy`   | Build + deploy to GitHub Pages (`dist/`)     |

## No External APIs

This is a fully static site. There are no API calls, no environment variables for endpoints, and no backend dependencies.

## Deployment

Deployed to GitHub Pages via the `gh-pages` npm package. Output dir is `dist/`. The `gh-pages` branch is auto-managed — do not manually edit it.

## Path Alias

`@/` maps to `src/` — configured in both `vite.config.ts` (runtime) and `tsconfig.json` (type checking). Use it for all internal imports.
