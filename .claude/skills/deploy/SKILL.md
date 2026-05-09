# Deploy Skill

Auto-invoked when the user asks to deploy or publish the portfolio.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `predeploy` (which runs `npm run build`) then `gh-pages -d build`.

## Before Deploying

1. Ensure all changes are committed: `git status`
2. Run a local build to catch errors: `npm run build`
3. Verify the build output looks correct: check `build/index.html`

## Troubleshooting

- **Build fails** — fix TypeScript errors or import issues first, then retry
- **gh-pages branch conflict** — run `git fetch origin gh-pages` and check for stale state
- **Site not updating** — GitHub Pages cache can take a few minutes; hard-refresh the browser

## Rules

- Always run `npm run build` locally before deploying if there are TypeScript changes
- Do not manually edit the `gh-pages` branch — it is managed by the `gh-pages` package
- Deploy only from the `master` branch
