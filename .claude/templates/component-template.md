# Component Template

Use for any reusable or section-level component extracted from `App.tsx`.

```tsx
// src/HeroSection.tsx

interface HeroSectionProps {
  name: string
  title: string
}

const HeroSection = ({ name, title }: HeroSectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center py-24">
      <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
      <p className="mt-2 text-lg text-gray-500">{title}</p>
    </section>
  )
}

export default HeroSection
```

## With Framer Motion

```tsx
// src/SkillsSection.tsx

import { motion } from 'framer-motion'

interface SkillsSectionProps {
  skills: string[]
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsSection
```

## Rules

- Default export
- `interface` or `type` for all props
- Tailwind CSS only — no inline styles
- No `any` types
- No nested ternaries — use early returns or `if/else`
