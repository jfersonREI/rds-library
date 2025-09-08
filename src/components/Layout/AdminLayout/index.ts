// ============================================
// File: index.ts (Barrel Export)
// ============================================
export { default as AdminLayout } from './components/AdminLayout';
export { default as AdminSidebar } from './components/AdminSidebar';
export { default as AdminHeader } from './components/AdminHeader';
export { default as AdminMain } from './components/AdminMain';
export { default as AdminFooter } from './components/AdminFooter';
export { default as SearchComponent } from './components/SearchComponent';
export { default as NotificationsButton } from './components/NotificationsButton';
export { default as UserMenu } from './components/UserMenu';
export { default as NavigationGroup } from './components/NavigationGroup';

// Context and hooks
export {
  default as AdminContext,
  useAdminContext,
} from './context/AdminContext';
export { useActiveRoute } from './hooks/useActiveRoute';

// Configuration
export { ADMIN_CONFIG, NAVIGATION_CONFIG } from './config/adminConfig';

// Types
export type * from './types/admin';
