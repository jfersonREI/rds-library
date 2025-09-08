// src/App.tsx
import { createBrowserRouter, type RouteObject } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ThemeProvider } from '@/components/theme-provider';

// Import the combined routes from your new routes directory
import { routes } from './routes';

// Import setAppConfig from your hooks file
import { setAppConfig } from '@/hooks/usePageMeta';

// --- Global App Configuration ---
setAppConfig({
  appName: 'REIApp',
  defaultDescription: "The best app you've ever used.",
  titleSeparator: ' | ',
});
// --- End Global App Configuration ---

// --- CORRECTED TYPE DEFINITIONS for App.tsx ---
// This interface defines the structure for metadata associated with each route.
interface RouteMeta {
  title?: string;
  description?: string;
}

// This type extends the standard React Router `RouteObject` to include
// a custom `handle` property, which in turn contains our `meta` data.
// This provides type safety when accessing route-specific metadata.
// It's crucial to export this type if other files (like your route modules)
// need to import and use it.
export type AppRouteObject = RouteObject & {
  handle?: {
    meta?: RouteMeta; // The custom meta object for title and description
    // Additional custom properties (e.g., auth roles) could be added here if needed
  };
};
// --- END CORRECTED TYPE DEFINITIONS ---

// Create the router using the data router API.
// We are adding the 'basename' option to the createBrowserRouter call to
// correctly handle routing when deployed to a subdirectory on a web server,
// such as GitHub Pages.
const router = createBrowserRouter(routes, {
  basename: '/rds-library',
});

// Main App component responsible for providing theming and routing.
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
