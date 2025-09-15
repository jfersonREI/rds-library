import React, { memo } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

// 1. Updated glob-import using the new `query` syntax
//    Also, explicitly define the type of the imported modules as a Record
const avatarModules: Record<string, string> = import.meta.glob(
  '@/assets/avatars/*.png',
  { eager: true, query: '?url', import: 'default' }
);

/**
 * Resolves the URL for an avatar image based on its filename.
 * @param filename The name of the image file (e.g., '02.png').
 * @returns The resolved URL or undefined if not found.
 */
function resolveAvatarPath(filename: string): string | undefined {
  const fullPathKey = `/src/assets/avatars/${filename}`;
  // The imported module now contains the default export.
  // The Record type ensures the lookup result is `string | undefined`.
  return avatarModules[fullPathKey];
}

const ADMIN_CONFIG = {
  notifications: {
    enabled: true,
  },
};

interface Notification {
  id: string;
  avatarSrc?: string;
  avatarFallback: string;
  title: string;
  subtitle: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    avatarSrc: resolveAvatarPath('02.png'),
    avatarFallback: 'FR',
    title: 'Frances Reed',
    subtitle: 'Cake pie jelly jelly beans. Marz...',
    time: '10am',
    read: false,
  },
  {
    id: '2',
    avatarSrc: resolveAvatarPath('03.png'),
    avatarFallback: 'AG',
    title: 'Amelia Grier',
    subtitle: 'Toffee caramels jelly-o tart gu...',
    time: '11am',
    read: true,
  },
  {
    id: '3',
    avatarSrc: resolveAvatarPath('04.png'),
    avatarFallback: 'JW',
    title: 'Jackson Wyatt',
    subtitle: 'Soufflé soufflé caramels sweet...',
    time: '12pm',
    read: false,
  },
  {
    id: '4',
    avatarSrc: resolveAvatarPath('05.png'),
    avatarFallback: 'VM',
    title: 'Vivian Marie',
    subtitle: 'Chupa chups candy canes cho...',
    time: '1pm',
    read: true,
  },
  {
    id: '5',
    avatarSrc: resolveAvatarPath('06.png'),
    avatarFallback: 'MH',
    title: 'Marcus Hayes',
    subtitle: 'Cake pie jelly jelly beans. Marz...',
    time: '3pm',
    read: true,
  },
  {
    id: '6',
    avatarSrc: resolveAvatarPath('07.png'),
    avatarFallback: 'SP',
    title: 'Stella Paige',
    subtitle: 'Toffee caramels jelly-o tart gu...',
    time: '4pm',
    read: true,
  },
];

const NotificationsButton = memo(() => {
  if (!ADMIN_CONFIG.notifications.enabled) return null;

  const [allNotifications, setAllNotifications] =
    React.useState<Notification[]>(initialNotifications);
  const [unreadCount, setUnreadCount] = React.useState(
    initialNotifications.filter((n) => !n.read).length
  );

  const handleMarkAllAsRead = () => {
    const updatedNotifications = allNotifications.map((n) => ({
      ...n,
      read: true,
    }));
    setAllNotifications(updatedNotifications);
    setUnreadCount(0);
  };

  const handleNotificationClick = (id: string) => {
    const updatedNotifications = allNotifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setAllNotifications(updatedNotifications);
    setUnreadCount(updatedNotifications.filter((n) => !n.read).length);
    console.log(`Notification ${id} clicked!`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 min-w-[20px] justify-center rounded-full p-0 text-xs font-bold"
              aria-label={`You have ${unreadCount} unread notifications`}
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 overflow-hidden rounded-lg p-0 shadow-lg"
        align="end"
      >
        <DropdownMenuLabel className="flex items-center justify-between p-4">
          <span className="text-lg font-semibold">Notifications</span>
          <Button
            variant="link"
            className="text-foreground p-0 text-sm"
            onClick={handleMarkAllAsRead}
          >
            Mark all as read
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-96 overflow-y-auto">
          {allNotifications.length === 0 ? (
            <p className="text-muted-foreground py-4 text-center">
              No new notifications
            </p>
          ) : (
            allNotifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={cn(
                  'hover:bg-accent focus:bg-accent flex cursor-pointer items-center gap-3 p-4 transition',
                  !notification.read && 'bg-sidebar-accent/30'
                )}
                onClick={() => handleNotificationClick(notification.id)}
              >
                <Avatar className="h-10 w-10 self-start">
                  <AvatarImage
                    src={notification.avatarSrc}
                    alt={notification.avatarFallback}
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.src = `https://placehold.co/40x40/cccccc/000000?text=${notification.avatarFallback}`;
                    }}
                  />
                  <AvatarFallback>{notification.avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-0.5">
                    <div className="flex min-w-0 flex-col items-start gap-1">
                      <p className="text-sidebar-foreground max-w-full truncate text-sm font-medium">
                        {notification.title}
                      </p>
                      <p className="text-sidebar-foreground/70 max-w-full truncate text-xs">
                        {notification.subtitle}
                      </p>
                      <span className="text-sidebar-foreground/70 flex-shrink-0 text-xs">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ml-2 flex h-2 w-2 flex-shrink-0 items-center justify-center">
                  <span
                    className={cn(
                      'block h-full w-full rounded-full',
                      !notification.read ? 'bg-primary' : 'bg-transparent'
                    )}
                  ></span>
                </div>
              </DropdownMenuItem>
            ))
          )}
        </div>
        <DropdownMenuSeparator className="bg-sidebar" />
        <div className="p-4">
          <Button
            variant="outline"
            className="w-full rounded-md"
            onClick={() => console.log('View All Notifications clicked!')}
          >
            View All
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

NotificationsButton.displayName = 'NotificationsButton';

export default NotificationsButton;
