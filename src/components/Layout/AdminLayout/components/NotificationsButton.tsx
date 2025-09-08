// ============================================
// File: components/NotificationsButton.tsx
// ============================================
import { memo } from 'react';
import { Bell } from 'lucide-react';
import { ADMIN_CONFIG } from '../config/adminConfig';

const NotificationsButton = memo(() => {
  if (!ADMIN_CONFIG.notifications.enabled) return null;

  return (
    <button
      className="hover:bg-accent relative rounded-full p-2"
      aria-label="Notifications"
    >
      <Bell className="h-4 w-4" />
      {ADMIN_CONFIG.notifications.hasUnread && (
        <span
          className="bg-destructive absolute -top-1 -right-1 h-2 w-2 rounded-full"
          aria-label="Unread notifications"
        />
      )}
    </button>
  );
});

NotificationsButton.displayName = 'NotificationsButton';

export default NotificationsButton;
