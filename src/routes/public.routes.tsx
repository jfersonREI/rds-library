// src/routes/public.routes.tsx
import React from 'react'; // React is needed for React.lazy
import { AppRouteObject } from '../App'; // Import the AppRouteObject type from App.tsx

import PublicLayout from '@/components/Layout/PublicLayout/PublicLayout';
// Import the shared default error element
import { defaultErrorElement } from './error.routes'; // Corrected import path

// Lazy-load public pages
const Home = React.lazy(() => import('@/pages/public/Home'));
const About = React.lazy(() => import('@/pages/public/About'));
const Contact = React.lazy(() => import('@/pages/public/Contact'));

/**
 * Defines the public-facing routes for the application.
 * These routes use the PublicLayout and are accessible without authentication.
 */
export const publicRoutes: AppRouteObject = {
  path: '/', // Base path for public routes
  element: <PublicLayout />, // Layout for public pages
  errorElement: defaultErrorElement, // Use the centralized error element
  children: [
    {
      index: true, // This makes Home the default page for '/'
      element: <Home />,
      handle: {
        meta: {
          title: 'Home',
          description:
            'Welcome to the REIApp - Your ultimate government solution!',
        },
      },
    } as AppRouteObject, // Type assertion for custom handle
    {
      path: 'about', // Full path will be /about
      element: <About />,
      handle: {
        meta: {
          title: 'About Us',
          description:
            'Learn more about REIApp and our mission to simplify government.',
        },
      },
    } as AppRouteObject,
    {
      path: 'contact', // Full path will be /contact
      element: <Contact />,
      handle: {
        meta: {
          title: 'Contact Us',
          description:
            'Get in touch with the REIApp team for support or inquiries.',
        },
      },
    } as AppRouteObject,
    // Add other public routes as needed here
  ],
};
