# New Portfolio Section

Add a new section to the portfolio page.

## Usage

```
/project:new-section <section-name>
```

Example: `/project:new-section experience`

Section name from argument: **$ARGUMENTS**

## Steps

1. Add the section's static data to `src/constants/app.ts` as a named export

2. Create `src/components/$ARGUMENTSSection.tsx`
   - Functional component, default export
   - Import data from `@/constants/app`
   - All styles via Tailwind CSS
   - Framer Motion for entrance animations (`initial` + `animate` or `whileInView`)

3. Import and render the section in `src/App.tsx` inside `<main>` at the correct position

## Example

```ts
// src/constants/app.ts — add:

export interface ExperienceItem {
  company: string
  role: string
  period: string
}

export const EXPERIENCES: ExperienceItem[] = [
  { company: 'Company Name', role: 'Frontend Engineer', period: '2022 – Present' },
]
```

```tsx
// src/components/ExperienceSection.tsx

import { motion } from 'framer-motion'

import { EXPERIENCES } from '@/constants/app'

const ExperienceSection = () => (
  <section className="mb-24">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
        Experience
      </span>
    </h2>
    <ul className="space-y-6">
      {EXPERIENCES.map((item) => (
        <motion.li
          key={item.company}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-xl bg-gray-700/80 border border-gray-600/30 p-6"
        >
          <p className="font-semibold text-white">{item.role}</p>
          <p className="text-sm text-blue-400">{item.company} · {item.period}</p>
        </motion.li>
      ))}
    </ul>
  </section>
)

export default ExperienceSection
```

## Conventions

- Default export for all section components
- Data in `@/constants/app` — not hardcoded inside the component
- Tailwind CSS for all styles — no inline styles
- `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations
- No `any` types — define TypeScript interfaces in `src/constants/app.ts`
