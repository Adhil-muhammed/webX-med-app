---
name: expo-screen-scaffold
description: Scaffolds a new Expo Router screen with component, hook, safe area, and optional TanStack Query wiring. Use when the user asks to add a screen, route, or page.
disable-model-invocation: true
---

# Expo Screen Scaffold

Use when adding a new screen or route.

## Steps

### 1. Create route file

`src/app/<route-name>/index.tsx` — thin wrapper only:

```tsx
import { ScreenName } from '@/components/ScreenName/ScreenName';

export default function ScreenNameRoute(): React.ReactElement {
  return <ScreenName />;
}
```

For tab or stack layouts, add `src/app/<route-name>/_layout.tsx` if needed.

### 2. Create screen component

`src/components/<ScreenName>/<ScreenName>.tsx`:

- Wrap content in `SafeAreaView` (from `react-native-safe-area-context`)
- Use NativeWind `className` for layout
- Handle loading, error, and empty states

### 3. Create data hook (if data-driven)

`src/hooks/use<ScreenName>.ts`:

- TanStack `useQuery` for server data
- Return `{ data, isLoading, isError, error, refetch }`

### 4. Wire navigation

- Link: `<Link href="/route-name">`
- Programmatic: `router.push('/route-name')` from `expo-router`

## Checklist

- [ ] Route file has no business logic
- [ ] SafeAreaView applied
- [ ] Loading and error fallback UI present
- [ ] Query hook uses stable `queryKey`
- [ ] Types exported from `src/types/` if reused
- [ ] `npx tsc --noEmit` passes

## Reference

See [expo-feature-development/reference.md](../expo-feature-development/reference.md) for provider and folder conventions.
