// src/routes/auth.routes.tsx
import React, { Suspense } from 'react'; // React is used for Suspense and lazy
import { AppRouteObject } from '../App'; // Import the AppRouteObject type from App.tsx

// Import the shared default error element from the renamed file
import { defaultErrorElement } from './error.routes';

// Lazy-load authentication layouts and pages
import Spinner from '@/components/Layout/Spinner/Spinner';
const AuthLayout = React.lazy(
  () => import('@/components/Layout/AuthLayout/AuthLayout')
);
const LoginPage = React.lazy(() => import('@/pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('@/pages/auth/RegisterPage'));
const ForgotPasswordPage = React.lazy(
  () => import('@/pages/auth/ForgotPasswordPage')
);

/**
 * Defines the authentication-related routes for the application.
 * These routes use the AuthLayout.
 */
export const authRoutes: AppRouteObject = {
  path: '/', // Keep the parent path as '/' so children paths become /login, /register, etc.
  element: (
    // Wrap AuthLayout in Suspense for lazy loading
    <Suspense fallback={<Spinner fullScreen size="default" />}>
      <AuthLayout /> {/* Using the dedicated authentication layout */}
    </Suspense>
  ),
  errorElement: defaultErrorElement, // Use the centralized error element
  children: [
    {
      path: 'login', // Full path will be /login
      element: <LoginPage />,
      handle: {
        meta: {
          title: 'Login',
          description: 'Log in to your REIApp account.',
        },
      },
    } as AppRouteObject,
    {
      path: 'register', // Full path will be /register
      element: <RegisterPage />,
      handle: {
        meta: {
          title: 'Register',
          description: 'Create a new REIApp account.',
        },
      },
    } as AppRouteObject,
    {
      path: 'forgot-password', // Full path will be /forgot-password
      element: <ForgotPasswordPage />,
      handle: {
        meta: {
          title: 'Forgot Password',
          description: 'Reset your REIApp account password.',
        },
      },
    } as AppRouteObject,
  ],
};
