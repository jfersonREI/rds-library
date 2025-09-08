// ============================================
// File: components/AdminSidebar.tsx
// ============================================
import { memo, useMemo } from 'react';
import { Link } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  // SidebarProvider is removed from here as it should wrap the root layout
} from '@/components/ui/sidebar';
import { ADMIN_CONFIG, NAVIGATION_CONFIG } from '../config/adminConfig';
import { useActiveRoute } from '../hooks/useActiveRoute';
import NavigationGroup from './NavigationGroup';
import AdminFooter from './AdminFooter';

const AdminSidebar = memo(() => {
  const { isActiveRoute } = useActiveRoute();
  const { branding } = ADMIN_CONFIG;

  const navigationGroups = useMemo(
    () =>
      Object.entries(NAVIGATION_CONFIG).map(([key, group]) => ({ key, group })),
    []
  );

  return (
    // DO NOT wrap SidebarProvider here. It should wrap your main application layout.
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/admin">
                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center">
                  <branding.icon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {branding.title}
                  </span>
                  <span className="truncate text-xs">{branding.subtitle}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {navigationGroups.map(({ key, group }) => (
          <NavigationGroup
            key={key}
            group={group}
            isActiveRoute={isActiveRoute}
          />
        ))}
      </SidebarContent>

      <AdminFooter />
      <SidebarRail />
    </Sidebar>
  );
});

AdminSidebar.displayName = 'AdminSidebar';

export default AdminSidebar;
