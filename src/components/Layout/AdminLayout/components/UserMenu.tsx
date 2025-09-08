// ============================================
// File: components/UserMenu.tsx
// ============================================
import { memo } from 'react';

const UserMenu = memo(() => {
  return (
    <button
      className="hover:bg-accent flex items-center gap-2 rounded-lg p-2"
      aria-label="User menu"
    >
      <div className="bg-muted h-6 w-6 rounded-full" />
      <span className="text-sm font-medium">Admin</span>
    </button>
  );
});

UserMenu.displayName = 'UserMenu';

export default UserMenu;
