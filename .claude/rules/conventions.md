# Conventions

## Components

- Functional components only, arrow function syntax
- **Default exports** for components
- TypeScript `interface` or `type` for all props
- No inline styles — Tailwind CSS classes only

---

## Animations

- Use `framer-motion` for entrance and transition animations
- Always set both `initial` and `animate` on `motion.*` elements
- Extract reusable animation variants to a shared constant if used in 2+ places

```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

<motion.div {...fadeInUp} transition={{ duration: 0.4 }}>
  ...
</motion.div>
```

- Use `react-lottie` for Lottie JSON animations
- Lottie JSON files live in `src/lottie/`

---

## Styling

- **Tailwind CSS** for all new code
- No inline `style` prop unless truly unavoidable (e.g. dynamic values not expressible as classes)
- No global CSS except `@tailwind` directives and base resets in `index.css`

---

## TypeScript

- No `any` types
- Use `interface` for object shapes, `type` for unions and aliases
- Named exports for types and utilities

---

## Section Data

- Hardcoded content (portfolio items, skills, etc.) lives in the component or a co-located `const` array
- No external data fetching — this is a static site
