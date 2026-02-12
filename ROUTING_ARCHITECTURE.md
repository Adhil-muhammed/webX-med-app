# Routing Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        main.tsx                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │         RouterProvider (router)                       │  │
│  └───────────────────────────────────────────────────────┘  │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   routes/index.tsx                          │
│                 createBrowserRouter                         │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              MainLayout (/)                           │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │           Suspense Boundary                     │  │  │
│  │  │           <Outlet />                            │  │  │
│  │  └────────────────┬────────────────────────────────┘  │  │
│  └──────────────────┬┬───────────────────────────────────┘  │
└────────────────────┬┬┬┬──────────────────────────────────────┘
                     │││││
        ┌────────────┴┴┴┴┴────────────┐
        │                              │
        ▼                              ▼
┌───────────────┐              ┌──────────────┐
│ Public Routes │              │ Protected    │
│               │              │ Routes       │
├───────────────┤              ├──────────────┤
│ / (Home)      │              │ /appointments│
│ /search       │              │ /records     │
│ /doctor/:id   │              │ /profile     │
│ /404          │              └──────────────┘
└───────────────┘                      │
                                       ▼
                              ┌──────────────┐
                              │ ProtectedRoute│
                              │  (Auth Guard) │
                              └──────────────┘
                                       │
                         ┌─────────────┴──────────────┐
                         │                            │
                         ▼                            ▼
                  Authenticated?              Not Authenticated?
                         │                            │
                         ▼                            ▼
                  Render Page                 Redirect to /login
                                              (with return URL)

┌─────────────────────────────────────────────────────────────┐
│                   Code Splitting                            │
├─────────────────────────────────────────────────────────────┤
│  Each route lazy loads its component:                       │
│                                                              │
│  HomePage.js ────────────► Loaded only when visiting /      │
│  SearchResults.js ───────► Loaded only when visiting /search│
│  DoctorProfile.js ───────► Loaded only when visiting /doctor│
│  AppointmentsPage.js ────► Loaded only when visiting /appts │
│  RecordsPage.js ─────────► Loaded only when visiting /rec   │
│  ProfilePage.js ─────────► Loaded only when visiting /prof  │
└─────────────────────────────────────────────────────────────┘
```

## Path Constants Flow

```
routes/paths.ts
    │
    ├─► PATHS (constants object)
    │   ├─ HOME: "/"
    │   ├─ SEARCH: "/search"
    │   ├─ DOCTOR_PROFILE: "/doctor/:id"
    │   ├─ APPOINTMENTS: "/appointments"
    │   └─ ...
    │
    └─► generatePath (helper functions)
        └─ doctorProfile(id) => `/doctor/${id}`

Used in:
- routes/index.tsx (route configuration)
- components (navigation)
- ProtectedRoute.tsx (redirects)
```

## File Dependencies

```
main.tsx
  └─► routes/index.tsx
       ├─► routes/paths.ts
       ├─► routes/ProtectedRoute.tsx
       ├─► layouts/MainLayout.tsx
       └─► pages/* (lazy loaded)
            ├─► Home.tsx
            ├─► SearchResults.tsx
            ├─► DoctorProfile.tsx
            └─► components/* (page-level components)
```

## Navigation Flow Example

```
User clicks "Book Appointment" button
         │
         ▼
navigate(PATHS.APPOINTMENTS)
         │
         ▼
Router checks route config
         │
         ▼
Route is protected? Yes
         │
         ▼
ProtectedRoute checks auth
         │
    ┌────┴────┐
    ▼         ▼
Authenticated  Not Authenticated
    │              │
    ▼              ▼
Show page      Redirect to /login
               (save /appointments
                for post-login
                redirect)
```
