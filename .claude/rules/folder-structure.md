# Folder Structure

```
src/
├── App.tsx              # Thin shell — composes all section components
├── App.css              # Minimal global styles (prefer Tailwind)
├── index.tsx            # Entry point (ReactDOM.createRoot)
├── index.css            # Tailwind directives + base resets only
├── vite-env.d.ts        # Vite type declarations
├── components/          # One file per section/UI component
│   ├── HeroSection.tsx
│   ├── WorkExperiencesSection.tsx
│   ├── SkillsSection.tsx
│   ├── PortfoliosSection.tsx
│   └── Footer.tsx
├── constants/
│   └── app.ts           # All static data (TEXTS, WORK_EXPERIENCES, SKILLS, PORTFOLIOS)
└── lottie/
    └── *.json           # Lottie animation JSON files

public/
└── images/
    └── portfolio-{1-10}.jpeg  # Portfolio thumbnails
```

## Guidelines

- New section components → `src/components/<SectionName>.tsx`
- New static data → add to `src/constants/app.ts` as named exports
- New Lottie animations → `src/lottie/<name>.json`
- Use `@/` alias for all internal imports (e.g. `@/constants/app`, `@/components/Footer`)
- No `pages/`, `routes/`, or `services/` directories — this is a static single-page site
