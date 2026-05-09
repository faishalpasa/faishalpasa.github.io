# New Portfolio Section

Add a new section to the portfolio page.

## Usage

```
/project:new-section <section-name>
```

Example: `/project:new-section experience`

Section name from argument: **$ARGUMENTS**

## Steps

1. Create `src/$ARGUMENTS-section.tsx` (or inline in `App.tsx` if small)
   - Functional component, default export
   - All styles via Tailwind CSS
   - Framer Motion for entrance animations (`initial` + `animate`)
   - TypeScript interface for any props

2. Import and render the section in `src/App.tsx` at the correct scroll position

3. If the section has a list of items (e.g. portfolio cards, skill badges), define the data as a typed `const` array at the top of the component file

## Example

```tsx
// src/experience-section.tsx

import { motion } from 'framer-motion'

interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    company: 'Company Name',
    role: 'Frontend Engineer',
    period: '2022 – Present',
    description: 'Brief description of responsibilities.',
  },
]

const ExperienceSection = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
      <ul className="mt-8 space-y-6">
        {experiences.map((item) => (
          <motion.li
            key={item.company}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-gray-200 p-6"
          >
            <p className="font-semibold text-gray-900">{item.role}</p>
            <p className="text-sm text-gray-500">{item.company} · {item.period}</p>
            <p className="mt-2 text-sm text-gray-700">{item.description}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSection
```

## Conventions

- Default export for all section components
- Tailwind CSS for all styles — no inline styles
- Framer Motion for animations — always set both `initial` and `animate`
- TypeScript interfaces for all data shapes — no `any`
