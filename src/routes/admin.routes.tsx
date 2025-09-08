// src/routes/admin.routes.tsx
import React from 'react'; // React is still needed for React.lazy
import { AppRouteObject } from '../App'; // Import the AppRouteObject type from App.tsx

import { AdminLayoutWrapper } from '@/components/Layout/AdminLayout/AdminLayoutWrapper';
// Import the shared default error element from the renamed file
import { defaultErrorElement } from './error.routes';

// Lazy-load admin pages
const AdminDashboardPage = React.lazy(
  () => import('@/pages/admin/DashboardPage')
);
const AdminUsersPage = React.lazy(() => import('@/pages/admin/UsersPage'));
const AdminProductsPage = React.lazy(
  () => import('@/pages/admin/ProductsPage')
);
const AdminOrdersPage = React.lazy(() => import('@/pages/admin/OrdersPage'));
const AdminBillingPage = React.lazy(() => import('@/pages/admin/BillingPage'));
const AdminAnalyticsPage = React.lazy(
  () => import('@/pages/admin/AnalyticsPage')
);
const AdminCalendarPage = React.lazy(
  () => import('@/pages/admin/CalendarPage')
);
const AdminMessagesPage = React.lazy(
  () => import('@/pages/admin/MessagesPage')
);
const AdminDocumentsPage = React.lazy(
  () => import('@/pages/admin/DocumentsPage')
);
const AdminSettingsPage = React.lazy(
  () => import('@/pages/admin/SettingsPage')
);
const AdminProfilePage = React.lazy(() => import('@/pages/admin/ProfilePage'));
// Keep AdminProductDetailsPage for the GSA route as per your request
const AdminProductDetailsPage = React.lazy(
  () => import('@/pages/admin/ProductDetailsPage')
);

/**
 * Defines the admin section routes for the application.
 * These routes use the AdminLayoutWrapper and typically require authentication/authorization.
 */
export const adminRoutes: AppRouteObject = {
  path: '/admin', // Base path for admin routes
  element: <AdminLayoutWrapper />, // Layout for admin pages
  errorElement: defaultErrorElement, // Use the centralized error element
  children: [
    {
      index: true, // This makes AdminDashboardPage the default for /admin
      element: <AdminDashboardPage />,
      handle: {
        meta: {
          title: 'Dashboard',
          description: 'Overview of your REIApp admin panel.',
        },
      },
    } as AppRouteObject,
    {
      path: 'users', // Full path will be /admin/users
      element: <AdminUsersPage />,
      handle: {
        meta: {
          title: 'Users Management',
          description:
            'Manage users and their permissions within REIApp administration.',
        },
      },
    } as AppRouteObject,
    {
      path: 'products', // Full path will be /admin/products
      // Removed the direct element from the parent 'products' route.
      // The 'index: true' child will now handle the default '/admin/products' path.
      handle: {
        meta: {
          title: 'Products',
          description: 'Manage products in your REIApp.',
        },
      },
      // Nested children for products, including the new GSA page
      children: [
        {
          index: true, // This makes AdminProductsPage the default for /admin/products
          element: <AdminProductsPage />,
          handle: {
            meta: {
              title: 'Products',
              description: 'Manage products in your REIApp.',
            },
          },
        } as AppRouteObject,
        {
          path: 'gsa', // Full path will be /admin/products/gsa
          element: <AdminProductDetailsPage />, // Corrected to use AdminProductDetailsPage
          handle: {
            meta: {
              title: 'GSA Products',
              description: 'Manage GSA specific products.',
            },
          },
        } as AppRouteObject,
      ],
    } as AppRouteObject,
    {
      path: 'orders', // Full path will be /admin/orders
      element: <AdminOrdersPage />,
      handle: {
        meta: {
          title: 'Orders',
          description: 'View and manage customer orders.',
        },
      },
    } as AppRouteObject,
    {
      path: 'billing', // Full path will be /admin/billing
      element: <AdminBillingPage />,
      handle: {
        meta: {
          title: 'Billing',
          description: 'Manage billing information and invoices.',
        },
      },
    } as AppRouteObject,
    {
      path: 'analytics', // Full path will be /admin/analytics
      element: <AdminAnalyticsPage />,
      handle: {
        meta: {
          title: 'Analytics',
          description: 'View application usage and performance analytics.',
        },
      },
    } as AppRouteObject,
    {
      path: 'calendar', // Full path will be /admin/calendar
      element: <AdminCalendarPage />,
      handle: {
        meta: {
          title: 'Calendar',
          description: 'Manage your schedule and events.',
        },
      },
    } as AppRouteObject,
    {
      path: 'messages', // Full path will be /admin/messages
      element: <AdminMessagesPage />,
      handle: {
        meta: {
          title: 'Messages',
          description: 'View and respond to messages from users.',
        },
      },
    } as AppRouteObject,
    {
      path: 'documents', // Full path will be /admin/documents
      element: <AdminDocumentsPage />,
      handle: {
        meta: {
          title: 'Documents',
          description: 'Manage application documents.',
        },
      },
    } as AppRouteObject,
    {
      path: 'settings', // Full path will be /admin/settings
      element: <AdminSettingsPage />,
      handle: {
        meta: {
          title: 'Settings',
          description: 'Configure application settings.',
        },
      },
    } as AppRouteObject,
    {
      path: 'profile', // Full path will be /admin/profile
      element: <AdminProfilePage />,
      handle: {
        meta: {
          title: 'Profile',
          description: 'Manage your admin profile.',
        },
      },
    } as AppRouteObject,
  ],
};
