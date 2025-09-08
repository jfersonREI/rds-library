// ============================================
// File: types/admin.ts
// ============================================
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface NavigationItem {
  title: string;
  url: string;
  icon?: LucideIcon | null; // Made optional for sub-items
  collapsible?: boolean; // New: indicates if this item can be collapsed/expanded
  items?: NavigationItem[]; // New: for nested navigation items
}

export interface NavigationGroup {
  label: string;
  items: NavigationItem[];
}

export interface NavigationConfig {
  [key: string]: NavigationGroup;
}

export interface BrandingConfig {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export interface UserConfig {
  name: string;
  email: string;
  profileUrl: string;
}

export interface SearchConfig {
  placeholder: string;
  enabled: boolean;
}

export interface NotificationsConfig {
  enabled: boolean;
  hasUnread: boolean;
}

export interface AdminConfig {
  branding: BrandingConfig;
  user: UserConfig;
  search: SearchConfig;
  notifications: NotificationsConfig;
}

export interface AdminContextValue {
  config: AdminConfig;
  navigation: NavigationConfig;
}

export interface AdminLayoutProps {
  children?: ReactNode;
  defaultSidebarOpen?: boolean;
}

export interface NavigationGroupProps {
  group: NavigationGroup;
  isActiveRoute: (url: string) => boolean;
}
