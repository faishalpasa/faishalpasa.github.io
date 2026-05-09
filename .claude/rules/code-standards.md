# Code Standards

- TypeScript — avoid `any`
- No nested ternary expressions — use `if/else` or early returns instead
- Readability over cleverness
- No comments unless the WHY is non-obvious

## Avoid

- Inline `style` props — use Tailwind classes instead
- `any` types — define proper interfaces
- Nested ternaries — flatten with early returns
- Large monolithic components — extract when a section exceeds ~80 lines

## AI Instructions

When generating or modifying code:

- Use Tailwind CSS for all styles — no inline styles unless a dynamic value cannot be expressed as a class
- Default export for all components
- No `any` types — define TypeScript interfaces for all props and data shapes
- Never use nested ternary expressions — use `if/else` or early returns instead
- Keep `App.tsx` clean by extracting complex sections into dedicated component files
- Framer Motion for animations; react-lottie for Lottie JSON files
- Run `npm run build` to verify no TypeScript or build errors before reporting a task done
