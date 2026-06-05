---
name: expo-feature-development
description: Guides feature, screen, and bugfix work through analyze-plan-confirm-implement-review workflow for this Expo SDK 56 app. Use when building features, fixing bugs, adding screens, or any multi-file change in webX-med-app.
---

# Expo Feature Development

Follow this workflow for every feature, screen, or bugfix.

## 1. Analysis & clarification

- Read relevant files under `src/` before proposing changes
- Check `AGENTS.md` and applicable `.cursor/rules/` files
- If requirements are ambiguous, ask 1–2 specific questions — do not guess

## 2. Architecture & step plan

Before writing code:

- List files to **create** and **modify** with one-line purpose each
- Describe data flow (component → hook → query/slice → API)
- Save the plan to `docs/plans/YYYY-MM-DD-<feature>.md` using [TEMPLATE.md](../../docs/plans/TEMPLATE.md)
- Wait for user confirmation (Plan mode approval or explicit "go ahead")

## 3. Modular implementation

- Implement in small, reviewable chunks
- Route files stay thin; logic lives in hooks
- Provide complete file contents when implementing — not fragmented snippets
- Use markdown headers and bullets in explanations (no tables in prose)

## 4. Review & edge cases

Before marking complete, verify:

- Slow network → loading skeleton or fallback UI
- Font scaling → avoid fixed heights that clip text
- Dark/light mode → token-based NativeWind classes
- Background/foreground → TanStack Query `refetchOnWindowFocus` behavior
- TypeScript strict mode passes (`npx tsc --noEmit`)

## Stack reference

For provider wiring, file templates, and folder layout, see [reference.md](reference.md).

## Output format

When implementing, output full copy-pasteable files. When planning, use the plan template structure.
