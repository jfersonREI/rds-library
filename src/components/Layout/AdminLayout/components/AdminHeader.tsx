// ============================================
// File: components/AdminHeader.tsx
// ============================================
import { memo } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useActiveRoute } from '../hooks/useActiveRoute';
import SearchComponent from './SearchComponent';
import NotificationsButton from './NotificationsButton';
import UserMenu from './UserMenu';

const AdminHeader = memo(() => {
  const { pageTitle } = useActiveRoute();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="bg-sidebar-border h-4 w-px" />

      <div className="flex flex-1 items-center justify-between">
        <h1 className="text-lg font-semibold">{pageTitle}</h1>

        <div className="flex items-center gap-4">
          <SearchComponent />
          <NotificationsButton />
          <UserMenu />
        </div>
      </div>
    </header>
  );
});

AdminHeader.displayName = 'AdminHeader';

export default AdminHeader;
