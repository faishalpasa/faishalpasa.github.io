# Hook Template

Custom hooks for reusable stateful logic. This project rarely needs custom hooks given its static nature, but use when logic is shared across components.

---

## UI state hook

```ts
// src/hooks/useDisclosure.ts

import { useState, useCallback } from 'react'

interface UseDisclosureReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useDisclosure = (initialState = false): UseDisclosureReturn => {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((s) => !s), [])

  return { isOpen, open, close, toggle }
}
```

---

## Scroll/viewport hook

```ts
// src/hooks/useInView.ts

import { useEffect, useRef, useState } from 'react'

export const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
```

## Rules

- Hook name must start with `use`
- Named exports for all hooks
- Return a typed object (not a bare array) unless it's a simple `[value, setter]` pair
- No `any` types
