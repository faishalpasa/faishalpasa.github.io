# Folder Structure

```
src/
├── App.tsx              # Root component — all sections composed here
├── App.css              # Component-scoped styles (minimal — prefer Tailwind)
├── App.test.tsx         # App-level tests
├── index.tsx            # Entry point (ReactDOM.createRoot)
├── index.css            # Tailwind directives + global base resets only
├── react-app-env.d.ts   # CRA type declarations
├── reportWebVitals.ts   # Web Vitals reporting
├── setupTests.ts        # Test setup
├── styles/
│   └── tailwind.css     # Additional Tailwind config styles
└── lottie/
    └── *.json           # Lottie animation JSON files
```

## Guidelines

- New reusable components → `src/<ComponentName>.tsx`
- New Lottie animations → `src/lottie/<name>.json`
- Section-specific logic that grows large → extract from `App.tsx` into its own file
- No `pages/`, `routes/`, or `services/` directories — this is a static single-page site
