# Copilot Instructions

## Project Overview

**AnQ** is a portfolio/landing page built with React 19 + TypeScript + Vite. It features advanced motion animations, three.js visualizations, and a component-driven UI using Radix UI primitives styled with Tailwind CSS.

- **Entry point**: [src/main.tsx](src/main.tsx) wraps `<App />` with `ThemeProvider` (next-themes) and `<StrictMode>`
- **Router**: BrowserRouter with `/` home and `/*` not-found routes ([src/App.tsx](src/App.tsx))
- **Theme system**: Dark mode via `next-themes` with CSS custom properties in `:root` ([src/index.css](src/index.css))

## Architecture & Data Flow

### Component Hierarchy

- **Pages**: Single page in [src/pages/Home.tsx](src/pages/Home.tsx) composes all major sections
- **UI Components** ([src/components/ui/](src/components/ui/)): Reusable, animation-heavy elements
  - `TextScramble`: Character-by-character reveal animation (Framer Motion + motion.create)
  - `DottedSurface`: Three.js background visualization with theme-aware colors
  - `Timeline`, `TubelightNavbar`, `FooterSection`: Motion-animated sections
- **Utilities**: `cn()` in [src/lib/utils.ts](src/lib/utils.ts) for className merging (not clsx—simple string join)

### Styling Architecture

- **Tailwind v4** with PostCSS via `@tailwindcss/vite` plugin ([tailwind.config.js](tailwind.config.js))
- **CSS variables** for theming: `hsl(var(--primary))`, `hsl(var(--background))`, etc.
- **Dark mode**: class-based (`[class]`), defaults to `system` preference
- Components use inline Tailwind; minimal CSS files except [src/App.css](src/App.css), [src/index.css](src/index.css)

### Key Dependencies

- **Motion**: `framer-motion` (v12.29+) + `motion` package; use `motion.create()` for dynamic component wrapping
- **Three.js**: Background canvas visualization in `DottedSurface`
- **Radix UI**: Unstyled primitives (@radix-ui/\*) as foundation (Accordion, Dialog, etc.—installed but selectively used)
- **React Router**: DOM v7.13+ for SPA routing
- **Icons**: lucide-react (import individually: `import { Home } from "lucide-react"`)

## Developer Workflows

```bash
npm run dev       # Vite dev server with HMR (port 5173)
npm run build     # tsc -b validation → vite build → dist/
npm run preview   # Static preview of dist/
npm run lint      # eslint . (config: eslint.config.js)
```

- **Fast Refresh** enabled: React component edits rerender without full reload
- **Alias**: `@` resolves to `src/` ([vite.config.ts](vite.config.ts))
- **Build chain**: TypeScript → ES modules → Rolldown (renamed vite package)

## Code Patterns & Conventions

### Components

- Functional `.tsx` components with TypeScript props
- Use `"use client"` only for client-side interactivity (e.g., `TextScramble`, `DottedSurface` use state/effects)
- Compose motion animations with Framer Motion: `motion.<element>` or `motion.create(Component)` for custom tags
- Example: [src/components/ui/text-scramble.tsx](src/components/ui/text-scramble.tsx) shows async animation orchestration + onComplete callback

### Styling

- **Tailwind-first**: Build layouts with utility classes; extend theme in [tailwind.config.js](tailwind.config.js) if new colors needed
- **CSS variables**: Reference as `hsl(var(--color-name))` for theme consistency
- **Responsive**: sm/md/lg/xl breakpoints; use mobile-first (`sm:` prefix for tablets+)
- Example: Home layout uses `lg:grid-cols-[1.1fr_0.9fr]` for desktop 2-column

### Type Safety

- Strict TypeScript: `tsconfig.app.json` with `skipLibCheck: false`, `noUnusedLocals: true`
- Use `type ComponentProps<"div">` + `Omit` for flexible HTML element props (e.g., `DottedSurface`)
- React 19 accepts JSX.Element return types; omit `: React.FC`

### Linting

- ESLint config: [eslint.config.js](eslint.config.js) extends `js.recommended`, `tseslint.recommended`, React hooks + React Refresh
- No type-aware rules yet; focus on basics (unused vars, hooks rules)

## Adding Features

- **New pages**: Create in [src/pages/](src/pages/) and add route in `<Routes>`
- **Animated components**: Use Framer Motion with `motion.div`, `initial/animate/exit` props, and `transition` config
- **Three.js scenes**: Reference [src/components/DottedSurface.tsx](src/components/DottedSurface.tsx)—manage refs, cleanup in useEffect, handle theme changes
- **New dependencies**: Keep bundle lean; prefer Radix UI primitives + Tailwind over heavy component libs

## File Structure Reference

```
src/
  main.tsx              # App mount, theme provider
  App.tsx               # Router, pages
  index.css             # Tailwind directives, root theme vars
  App.css               # (minimal, app-level overrides)
  pages/
    Home.tsx            # Landing page, section composition
  components/
    ui/                 # Reusable, styled components
      text-scramble.tsx, timeline.tsx, etc.
    DottedSurface.tsx   # Three.js background
  lib/
    utils.ts            # Helper fns (cn, etc.)
  assets/               # Images, SVGs
```
