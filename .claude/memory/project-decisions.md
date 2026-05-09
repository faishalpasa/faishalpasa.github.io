# Project Decisions

Architectural and product decisions that are not obvious from the code.
Record the decision, the reason, and any rejected alternatives.

---

## Template

```
### [Decision Title]
- **Date:** YYYY-MM-DD
- **Status:** accepted | superseded | deprecated
- **Decision:** What was decided
- **Why:** The constraint, tradeoff, or stakeholder requirement that drove it
- **Alternatives rejected:** What else was considered and why it lost
- **Applies to:** Which parts of the codebase this affects
```

---

## Decisions

### Single-file App component
- **Date:** project inception
- **Status:** accepted
- **Decision:** All portfolio sections live in `src/App.tsx` as a single scrolling page — no routing
- **Why:** Portfolio is a single-page document; routing adds complexity with no UX benefit
- **Alternatives rejected:** React Router — unnecessary for a static portfolio
- **Applies to:** `src/App.tsx`

### Tailwind CSS for all styling
- **Date:** project inception
- **Status:** accepted
- **Decision:** All styles use Tailwind CSS utility classes — no CSS modules, no styled-components
- **Why:** Keeps styling co-located with markup; no context-switching between files
- **Alternatives rejected:** CSS modules — extra files without benefit for a simple portfolio
- **Applies to:** All components in `src/`

### Framer Motion for animations
- **Date:** project inception
- **Status:** accepted
- **Decision:** Use `framer-motion` for entrance animations and transitions
- **Why:** Declarative API fits React well; better than CSS keyframes for complex sequences
- **Alternatives rejected:** CSS animations — harder to sequence and coordinate
- **Applies to:** Section components

### Lottie for icon/illustration animations
- **Date:** project inception
- **Status:** accepted
- **Decision:** Use `react-lottie` for animated illustrations (e.g. keyboard animation)
- **Why:** Designer-exported JSON animations that can't be replicated with CSS
- **Alternatives rejected:** GIF — larger file size and no programmatic control
- **Applies to:** `src/lottie/`, animated illustration usage in `App.tsx`

### Deploy via gh-pages
- **Date:** project inception
- **Status:** accepted
- **Decision:** Deploy with `npm run deploy` which runs `gh-pages -d dist`
- **Why:** Free hosting via GitHub Pages; zero infra to manage
- **Alternatives rejected:** Vercel/Netlify — unnecessary for a static site already on GitHub
- **Applies to:** Deployment workflow
