# Centralized Routing System Documentation

## Overview

A type-safe, centralized routing system has been implemented using `react-router-dom` v6+ with the modern `createBrowserRouter` API. This system provides code splitting, protected routes, and centralized path management.

## File Structure

```
src/
├── routes/
│   ├── paths.ts              # Centralized path constants
│   ├── index.tsx             # Router configuration
│   └── ProtectedRoute.tsx    # Authentication guard
├── layouts/
│   └── MainLayout.tsx        # Root layout with Suspense
└── pages/
    ├── Home.tsx
    ├── SearchResults.tsx
    └── DoctorProfile.tsx
```

## Key Features

✅ **Type-Safe Routing** - All paths defined as constants with TypeScript types  
✅ **Code Splitting** - Lazy-loaded components for optimal performance  
✅ **Protected Routes** - Authentication guard with automatic redirects  
✅ **Centralized Configuration** - Single source of truth for all routes  
✅ **Modern API** - Using `createBrowserRouter` (not legacy `<Routes>`)  
✅ **Loading States** - Suspense boundaries with custom loading UI  
✅ **404 Handling** - Catch-all route with custom error page  

## Usage Guide

### 1. Navigation with Type-Safe Paths

**❌ BAD (hardcoded strings):**
```tsx
<Link to="/search">Search</Link>
navigate("/doctor/123");
```

**✅ GOOD (using constants):**
```tsx
import { PATHS, generatePath } from "@/routes/paths";

<Link to={PATHS.SEARCH}>Search</Link>
navigate(generatePath.doctorProfile("123"));
```

### 2. Adding New Routes

**Step 1:** Add path constant to `src/routes/paths.ts`
```typescript
export const PATHS = {
  // ... existing paths
  NEW_PAGE: "/new-page",
} as const;
```

**Step 2:** Create lazy import in `src/routes/index.tsx`
```typescript
const NewPage = lazy(() =>
  import("@/pages/NewPage").then((module) => ({
    default: module.NewPage,
  }))
);
```

**Step 3:** Add route to router configuration
```typescript
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // ... existing routes
      {
        path: PATHS.NEW_PAGE,
        element: <NewPage />,
      },
    ],
  },
]);
```

### 3. Protected Routes

Wrap any route that requires authentication:

```typescript
{
  path: PATHS.APPOINTMENTS,
  element: (
    <ProtectedRoute>
      <AppointmentsPage />
    </ProtectedRoute>
  ),
}
```

**Customize authentication logic** in `src/routes/ProtectedRoute.tsx`:

```typescript
const checkAuth = (): boolean => {
  // Option 1: Check localStorage
  return !!localStorage.getItem("authToken");
  
  // Option 2: Use auth context
  // const { isAuthenticated } = useAuth();
  // return isAuthenticated;
  
  // Option 3: Check Redux state
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // return isAuthenticated;
};
```

### 4. Dynamic Routes

For routes with parameters (e.g., `/doctor/:id`):

**Define in paths.ts:**
```typescript
export const PATHS = {
  DOCTOR_PROFILE: "/doctor/:id",
} as const;

export const generatePath = {
  doctorProfile: (id: string | number) => `/doctor/${id}`,
} as const;
```

**Navigate programmatically:**
```typescript
import { useNavigate } from "react-router-dom";
import { generatePath } from "@/routes/paths";

const navigate = useNavigate();
navigate(generatePath.doctorProfile(doctorId));
```

**Access parameters in component:**
```typescript
import { useParams } from "react-router-dom";

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  // Use id to fetch doctor data
};
```

### 5. Programmatic Navigation

```typescript
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/routes/paths";

const MyComponent = () => {
  const navigate = useNavigate();
  
  // Navigate to a path
  navigate(PATHS.SEARCH);
  
  // Navigate with state
  navigate(PATHS.SEARCH, { state: { query: "cardiologist" } });
  
  // Go back
  navigate(-1);
  
  // Replace current entry (no back navigation)
  navigate(PATHS.HOME, { replace: true });
};
```

### 6. Custom Loading UI

Customize the loading spinner in `src/layouts/MainLayout.tsx`:

```typescript
const LoadingFallback = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <YourCustomSpinner />
    </div>
  );
};
```

## Code Splitting Benefits

The build now generates separate chunks for each page:

```
dist/assets/Home-Cnm2-TYQ.js              5.56 kB
dist/assets/SearchResults-Dt7bfRxS.js    3.76 kB
dist/assets/DoctorProfile-AXOv4iZd.js    7.68 kB
dist/assets/AppointmentsPage-BUoeGl7g.js 0.86 kB
dist/assets/RecordsPage-DMm3QjRp.js      0.85 kB
dist/assets/ProfilePage-CRKxQOEc.js      0.84 kB
```

**Benefits:**
- Faster initial page load
- Only loads JavaScript for the current page
- Automatic code splitting per route
- Better caching strategy

## Migration Notes

### Old Code (App.tsx)
```tsx
// ❌ Legacy approach - REPLACED
import { Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/search" element={<SearchResultsPage />} />
  </Routes>
</BrowserRouter>
```

### New Code (main.tsx)
```tsx
// ✅ Modern approach - CURRENT
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

<RouterProvider router={router} />
```

## Best Practices

1. **Always use path constants** - Never hardcode route strings
2. **Lazy load all pages** - Improves initial load performance
3. **Group related routes** - Keep public/protected routes organized
4. **Document custom routes** - Add comments for complex routing logic
5. **Handle loading states** - Always wrap lazy routes in Suspense
6. **Test protected routes** - Verify authentication redirects work correctly

## TODO

- [ ] Create Login and Register pages
- [ ] Implement actual authentication logic in `ProtectedRoute.tsx`
- [ ] Create custom error page component for 404
- [ ] Add route transitions/animations (optional)
- [ ] Add meta tags for SEO (react-helmet or similar)
- [ ] Implement breadcrumbs navigation (optional)

## Troubleshooting

**Issue:** "Cannot find module" error after adding new route  
**Solution:** Ensure the page component exists and is exported properly

**Issue:** Infinite redirect loop  
**Solution:** Check authentication logic in `ProtectedRoute.tsx`

**Issue:** Lazy component not loading  
**Solution:** Verify the import path and that component is exported

**Issue:** 404 page not showing  
**Solution:** Ensure wildcard route (`*`) is last in the children array

## Additional Resources

- [React Router v6 Documentation](https://reactrouter.com/en/main)
- [createBrowserRouter API](https://reactrouter.com/en/main/routers/create-browser-router)
- [Code Splitting with React.lazy](https://react.dev/reference/react/lazy)
