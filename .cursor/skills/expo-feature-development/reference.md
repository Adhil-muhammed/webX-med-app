# Stack Reference — webX-med-app

## Provider tree (`src/app/_layout.tsx`)

```tsx
<SafeAreaProvider>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  </Provider>
</SafeAreaProvider>
```

Import `@/styles/global.css` at the top of `_layout.tsx`.

## Folder layout

```
src/
  app/           # Expo Router routes (thin wrappers)
  components/    # UI components
  hooks/         # Custom hooks (useXxx.ts)
  store/         # RTK store, slices, typed hooks
  config/        # queryClient.ts, API client
  styles/        # global.css, tokens.ts
  types/         # Shared interfaces
  i18n/          # Localization (future)
```

## New feature checklist

- [ ] Types in `src/types/` if shared
- [ ] Hook in `src/hooks/use<Feature>.ts` for logic
- [ ] Component in `src/components/<Feature>/`
- [ ] Route in `src/app/<route>/index.tsx` if new screen
- [ ] RTK slice in `src/store/slices/` if client state needed
- [ ] TanStack query in hook if server data needed
- [ ] Loading, error, and empty states in UI

## TanStack Query defaults (`src/config/queryClient.ts`)

- `staleTime`: 60_000 (1 min)
- `retry`: 2
- `refetchOnWindowFocus`: true

## Redux typed hooks (`src/store/hooks.ts`)

```tsx
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## NativeWind

- Use `className` on RN components
- Extend theme in `tailwind.config.js` with tokens from `src/styles/tokens.ts`
- Global CSS at `src/styles/global.css`

## Expo docs

Always verify APIs against https://docs.expo.dev/versions/v56.0.0/
