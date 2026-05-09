# Type Template

TypeScript declarations for shared data shapes. Inline types in component files when only used once.

---

## Shared types (if extracted to a file)

```ts
// src/types.ts

export interface PortfolioItem {
  id: string
  title: string
  description: string
  thumbnail: string
  url: string
  tags: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}
```

---

## Union types for enums

Prefer union types over TypeScript `enum`:

```ts
// Prefer this
export type SectionId = 'hero' | 'about' | 'skills' | 'portfolio' | 'contact'

// Avoid this
export enum SectionId {
  Hero = 'hero',
  About = 'about',
}
```

## Rules

- Named exports
- Use `interface` for object shapes, `type` for unions and aliases
- No `any` — use `unknown` for genuinely unknown shapes and narrow before use
- No `enum` — use union literals instead
