// src/routes/index.tsx
// Removed: import React, { Suspense } from 'react'; // React is no longer directly used in this file
import { publicRoutes } from './public.routes';
import { authRoutes } from './auth.routes';
import { adminRoutes } from './admin.routes';
import { AppRouteObject } from '../App'; // Import the AppRouteObject type from App.tsx

// Import the shared default error element from the renamed file
import { defaultErrorElement } from './error.routes';

/**
 * The main array combining all route configurations for the application.
 * This array is passed to createBrowserRouter in App.tsx.
 */
export const routes: AppRouteObject[] = [
  publicRoutes, // Include all public-facing routes
  authRoutes, // Include all authentication-related routes
  adminRoutes, // Include all admin-specific routes
  // Catch-all route for 404 Not Found pages.
  // This should always be the last route in the array.
  {
    path: '*', // Matches any unmatched path
    element: defaultErrorElement, // Use the centralized error element
    handle: {
      meta: {
        title: 'Page Not Found',
        description: 'The page you are looking for does not exist on REIApp.',
      },
    },
  } as AppRouteObject,
];
