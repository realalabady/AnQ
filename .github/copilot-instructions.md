# Copilot instructions

## Project overview

- Single-page React 19 + TypeScript app bootstrapped with Vite (ESM). Entry is [src/main.tsx](src/main.tsx), which mounts `App` into `#root` from [index.html](index.html).
- UI starts in [src/App.tsx](src/App.tsx); component styles live in [src/App.css](src/App.css) and global styles in [src/index.css](src/index.css).
- Static assets are stored in [src/assets](src/assets); Vite also serves public root assets (e.g., `/vite.svg`).
- Build tooling uses Vite replaced by `rolldown-vite` via `package.json` overrides.

## Developer workflows

- Dev server: `npm run dev`
- Production build: `npm run build` (runs `tsc -b` then `vite build`)
- Preview build: `npm run preview`
- Lint: `npm run lint` (uses [eslint.config.js](eslint.config.js))

## Conventions & patterns

- React root uses `createRoot` with `<StrictMode>` in [src/main.tsx](src/main.tsx).
- Components are functional and written in `.tsx`. Local assets are imported via ES modules (e.g., `import reactLogo from './assets/react.svg'` in [src/App.tsx](src/App.tsx)).
- No routing, state management library, or backend integration is present yet; keep new code within the existing single-app structure unless adding new dependencies.

## Key files

- Vite config: [vite.config.ts](vite.config.ts)
- TypeScript configs: [tsconfig.json](tsconfig.json), [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json)
- Lint rules: [eslint.config.js](eslint.config.js)
