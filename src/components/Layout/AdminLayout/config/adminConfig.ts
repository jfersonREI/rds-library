// ============================================
// File: config/adminConfig.ts
// ============================================
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText, // Add FileText for Reports icon
  BarChart3,
  Mail,
  Home,
  Package,
  ShoppingCart,
  CreditCard,
  Calendar,
} from 'lucide-react';
import type { AdminConfig, NavigationConfig } from '../types/admin';

export const ADMIN_CONFIG: AdminConfig = {
  branding: {
    title: 'Admin Panel',
    subtitle: 'Enterprise',
    icon: Home,
  },
  user: {
    name: 'John Doe',
    email: 'john@company.com',
    profileUrl: '/admin/profile',
  },
  search: {
    placeholder: 'Search...',
    enabled: true,
  },
  notifications: {
    enabled: true,
    hasUnread: true,
  },
};

export const NAVIGATION_CONFIG: NavigationConfig = {
  overview: {
    label: 'Overview',
    items: [
      { title: 'Dashboard', url: '/admin', icon: LayoutDashboard },
      { title: 'Analytics', url: '/admin/analytics', icon: BarChart3 },
      { title: 'Calendar', url: '/admin/calendar', icon: Calendar },
      {
        // New Reports section
        title: 'Reports',
        url: '/admin/reports', // A base URL for reports, though sub-items will navigate
        icon: FileText, // Icon for the main Reports entry
        collapsible: true, // Mark as collapsible
        items: [
          // Sub-items for Reports
          { title: 'Yearly', url: '/admin/reports/yearly', icon: null }, // No icon for sub-items
          { title: 'Quarterly', url: '/admin/reports/quarterly', icon: null },
        ],
      },
    ],
  },
  management: {
    label: 'Management',
    items: [
      { title: 'Users', url: '/admin/users', icon: Users },
      { title: 'Products', url: '/admin/products', icon: Package },
      { title: 'Orders', url: '/admin/orders', icon: ShoppingCart },
      { title: 'Billing', url: '/admin/billing', icon: CreditCard },
    ],
  },
  communication: {
    label: 'Communication',
    items: [
      { title: 'Messages', url: '/admin/messages', icon: Mail },
      { title: 'Documents', url: '/admin/documents', icon: FileText },
    ],
  },
  system: {
    label: 'System',
    items: [{ title: 'Settings', url: '/admin/settings', icon: Settings }],
  },
};
