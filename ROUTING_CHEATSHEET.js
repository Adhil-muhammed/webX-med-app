// // ==========================================
// // ROUTING SYSTEM CHEAT SHEET
// // Quick reference for common routing tasks
// // ==========================================

// // ─────────────────────────────────────────
// // 1. NAVIGATION
// // ─────────────────────────────────────────

// // Import paths
// import { PATHS, generatePath } from "@/routes/paths";
// import { useNavigate, Link } from "react-router-dom";

// // Navigate to static route
// const navigate = useNavigate();
// navigate(PATHS.HOME);
// navigate(PATHS.SEARCH);
// navigate(PATHS.APPOINTMENTS);

// // Navigate to dynamic route
// navigate(generatePath.doctorProfile("123"));

// // Navigate with options
// navigate(PATHS.SEARCH, { 
//   replace: true,           // Replace history entry
//   state: { from: "home" }  // Pass state data
// });

// // Go back/forward
// navigate(-1);  // Back
// navigate(1);   // Forward

// // Using Link component
// <Link to={PATHS.SEARCH}>Search</Link>
// <Link to={generatePath.doctorProfile("123")}>View Doctor</Link>

// // ─────────────────────────────────────────
// // 2. ADD NEW ROUTE
// // ─────────────────────────────────────────

// // Step 1: Add to src/routes/paths.ts
// export const PATHS = {
//   MY_NEW_PAGE: "/my-new-page",
//   // For dynamic routes:
//   USER_PROFILE: "/user/:userId",
// } as const;

// // Add helper if dynamic
// export const generatePath = {
//   userProfile: (userId: string) => `/user/${userId}`,
// } as const;

// // Step 2: Add lazy import in src/routes/index.tsx
// const MyNewPage = lazy(() =>
//   import("@/pages/MyNewPage").then((m) => ({
//     default: m.MyNewPage,
//   }))
// );

// // Step 3: Add route config
// {
//   path: PATHS.MY_NEW_PAGE,
//   element: <MyNewPage />,
// }

// // For protected route:
// {
//   path: PATHS.MY_NEW_PAGE,
//   element: (
//     <ProtectedRoute>
//       <MyNewPage />
//     </ProtectedRoute>
//   ),
// }

// // ─────────────────────────────────────────
// // 3. ACCESS ROUTE DATA
// // ─────────────────────────────────────────

// import { useParams, useSearchParams, useLocation } from "react-router-dom";

// // Get URL parameters
// const { id, userId } = useParams<{ id: string; userId: string }>();

// // Get query parameters
// const [searchParams, setSearchParams] = useSearchParams();
// const query = searchParams.get("q");
// const page = searchParams.get("page");

// // Set query parameters
// setSearchParams({ q: "cardiologist", page: "1" });

// // Get location info
// const location = useLocation();
// console.log(location.pathname);  // "/search"
// console.log(location.state);     // Passed state data
// console.log(location.search);    // "?q=doctor"

// // ─────────────────────────────────────────
// // 4. PROTECT ROUTES
// // ─────────────────────────────────────────

// // Wrap in ProtectedRoute component
// {
//   path: PATHS.APPOINTMENTS,
//   element: (
//     <ProtectedRoute>
//       <AppointmentsPage />
//     </ProtectedRoute>
//   ),
// }

// // Customize auth check in src/routes/ProtectedRoute.tsx
// const checkAuth = (): boolean => {
//   // Your auth logic here
//   return !!localStorage.getItem("authToken");
// };

// // ─────────────────────────────────────────
// // 5. NESTED ROUTES
// // ─────────────────────────────────────────

// {
//   path: "/dashboard",
//   element: <DashboardLayout />,
//   children: [
//     {
//       index: true,
//       element: <DashboardHome />,
//     },
//     {
//       path: "stats",
//       element: <DashboardStats />,
//     },
//   ],
// }

// // Use <Outlet /> in parent component
// const DashboardLayout = () => (
//   <div>
//     <DashboardNav />
//     <Outlet /> {/* Child routes render here */}
//   </div>
// );

// // ─────────────────────────────────────────
// // 6. CUSTOM LOADING UI
// // ─────────────────────────────────────────

// // Edit src/layouts/MainLayout.tsx
// const LoadingFallback = () => (
//   <div className="flex items-center justify-center min-h-screen">
//     <YourCustomSpinner />
//   </div>
// );

// // ─────────────────────────────────────────
// // 7. ERROR HANDLING
// // ─────────────────────────────────────────

// // 404 - Automatic via wildcard route
// {
//   path: "*",
//   element: <Navigate to={PATHS.NOT_FOUND} replace />,
// }

// // Custom error page
// {
//   path: PATHS.NOT_FOUND,
//   element: <NotFoundPage />,
// }

// // ─────────────────────────────────────────
// // 8. REDIRECT
// // ─────────────────────────────────────────

// import { Navigate } from "react-router-dom";

// // In route config
// {
//   path: "/old-path",
//   element: <Navigate to={PATHS.NEW_PATH} replace />,
// }

// // In component
// const MyComponent = () => {
//   const shouldRedirect = true;
  
//   if (shouldRedirect) {
//     return <Navigate to={PATHS.HOME} replace />;
//   }
  
//   return <div>Content</div>;
// };

// // ─────────────────────────────────────────
// // 9. COMMON PATTERNS
// // ─────────────────────────────────────────

// // Conditional navigation
// const handleClick = () => {
//   if (isLoggedIn) {
//     navigate(PATHS.PROFILE);
//   } else {
//     navigate(PATHS.LOGIN, { 
//       state: { from: location.pathname } 
//     });
//   }
// };

// // Navigate after async action
// const handleSubmit = async () => {
//   await submitForm();
//   navigate(PATHS.SUCCESS);
// };

// // Confirm before navigation
// const handleNavigate = () => {
//   if (hasUnsavedChanges) {
//     if (confirm("You have unsaved changes. Continue?")) {
//       navigate(PATHS.HOME);
//     }
//   } else {
//     navigate(PATHS.HOME);
//   }
// };

// // ─────────────────────────────────────────
// // 10. TESTING ROUTES
// // ─────────────────────────────────────────

// // Check code splitting in Network tab
// // 1. Open DevTools → Network tab
// // 2. Navigate between routes
// // 3. Look for individual chunk files loading

// // Test protected routes
// // 1. Navigate to protected route while logged out
// // 2. Should redirect to login
// // 3. Login and should redirect back

// // Test 404
// // 1. Visit invalid URL
// // 2. Should show 404 page

// // ─────────────────────────────────────────
// // FILE LOCATIONS
// // ─────────────────────────────────────────

// // Path constants:      src/routes/paths.ts
// // Router config:       src/routes/index.tsx
// // Auth guard:          src/routes/ProtectedRoute.tsx
// // Main layout:         src/layouts/MainLayout.tsx
// // Pages:               src/pages/
// // Entry point:         src/main.tsx
