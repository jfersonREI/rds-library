// ============================================
// File: components/AdminHeader.tsx
// ============================================
import { memo } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useActiveRoute } from '../hooks/useActiveRoute';
import SearchComponent from './SearchComponent';
import NotificationsButton from './NotificationsButton';
import UserMenu from './UserMenu';
import { ModeToggle } from '@/components/mode-toggle';

const AdminHeader = memo(() => {
  const { pageTitle } = useActiveRoute();

  return (
    <header className="bg-accent text-accent-foreground sticky top-0 isolate z-9 flex h-16 shrink-0 items-center gap-2 border-b px-4 backdrop-blur-md">
      <SidebarTrigger />

      <div className="flex flex-1 items-center justify-between">
        <h1 className="text-lg font-semibold">{pageTitle}</h1>

        <div className="flex items-center gap-4">
          <SearchComponent />
          <ModeToggle />
          <NotificationsButton />
          <UserMenu />
        </div>
      </div>
    </header>
  );
});

AdminHeader.displayName = 'AdminHeader';

export default AdminHeader;
