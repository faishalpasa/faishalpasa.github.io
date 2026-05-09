# Tech Stack

- React 18 + TypeScript
- Create React App (react-scripts 5)
- ESLint (airbnb config) + Prettier
- Tailwind CSS 3
- Framer Motion 12
- react-lottie 1.2
- gh-pages (deployment)

## Key Scripts

| Script             | Purpose                              |
| ------------------ | ------------------------------------ |
| `npm start`        | Dev server (localhost:3000)          |
| `npm run build`    | Production build → `build/`         |
| `npm run deploy`   | Build + deploy to GitHub Pages       |
| `npm test`         | Run tests with react-scripts test    |

## No External APIs

This is a fully static site. There are no API calls, no environment variables for endpoints, and no backend dependencies.

## Deployment

Deployed to GitHub Pages via the `gh-pages` npm package. The `gh-pages` branch is auto-managed — do not manually edit it.
