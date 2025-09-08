// ============================================
// File: components/AdminFooter.tsx
// ============================================
import { memo } from 'react';
import { Link } from 'react-router';
import { User, ChevronUp } from 'lucide-react';
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ADMIN_CONFIG } from '../config/adminConfig';

const AdminFooter = memo(() => {
  const { user } = ADMIN_CONFIG;

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild tooltip={user.name}>
            <Link to={user.profileUrl} className="flex items-center gap-2">
              <div className="bg-sidebar-accent text-sidebar-accent-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <User className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronUp className="ml-auto size-4" />
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
});

AdminFooter.displayName = 'AdminFooter';

export default AdminFooter;
