# webX-med-app — Agent Guide

## Expo docs (mandatory)

Read the exact versioned docs at https://docs.expo.dev/versions/v56.0.0/ before writing any code.

## Stack

- **Framework:** Expo SDK 56 + Expo Router
- **Language:** TypeScript (strict, no `any`)
- **Styling:** NativeWind (Tailwind) + design tokens in `src/styles/tokens.ts`
- **Client state:** Redux Toolkit (`src/store/`)
- **Server state:** TanStack Query (`src/config/queryClient.ts`, hooks in `src/hooks/`)
- **Path alias:** `@/*` → `src/*`

## Mandatory workflow

Every feature, screen, or bugfix follows these steps:

1. **Analyze & clarify** — inspect existing files; ask targeted questions if ambiguous
2. **Architecture & plan** — list files to create/modify and data flow; save plan to `docs/plans/`; wait for confirmation
3. **Modular implementation** — incremental, focused changes; no monolithic dumps
4. **Review & edge cases** — slow network, font scaling, dark/light mode, background transitions

Use the `expo-feature-development` skill (`.cursor/skills/expo-feature-development/`) for the full workflow.

## Folder responsibilities

- `src/app/` — Expo Router routes and layouts only (no business logic)
- `src/components/` — presentational UI components
- `src/hooks/` — custom hooks (data fetching, derived state, side effects)
- `src/store/` — Redux Toolkit slices and store config
- `src/config/` — app config, QueryClient, API client
- `src/styles/` — global CSS, design tokens
- `src/types/` — shared TypeScript types
- `src/i18n/` — localization resources

## Cursor guidance

- **Rules:** `.cursor/rules/` — always-on and file-scoped standards
- **Skills:** `.cursor/skills/` — multi-step workflows (feature development, screen scaffold)
- **Plans:** `docs/plans/` — feature plans saved as `YYYY-MM-DD-<feature>.md`

## Conventions

- Functional arrow components; separate UI from logic via hooks
- Use `@/` imports, not relative paths crossing module boundaries
- Do not create git commits unless explicitly asked
