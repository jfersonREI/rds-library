// ============================================
// File: components/UserMenu.tsx
// ============================================
import { memo } from 'react';
import { Link } from 'react-router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// If you are using Next.js, you would import Link like this:
// import Link from 'next/link';

const UserMenu = memo(() => {
  // Set the base URL from your Vite configuration here to ensure assets load correctly.
  const BASE_URL = '/rds-library/';
  // You would typically get this from an authentication context or prop
  const userName = 'Admin User';
  const userEmail = 'admin.user.very.long.email.address@example.com'; // Example long email
  const userAvatarSrc = `${BASE_URL}avatars/01.png`; // Make sure this path exists in your public folder

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="hover:bg-accent flex items-center gap-2 rounded-full p-2"
          aria-label="User menu"
        >
          <Avatar>
            <AvatarImage src={userAvatarSrc} alt="User Avatar" />
            <AvatarFallback>AU</AvatarFallback> {/* Initials if no image */}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        {/* New section for Avatar, Username, and Email */}
        <div className="flex items-center gap-2 p-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={userAvatarSrc} alt="User Avatar" />
            <AvatarFallback>AU</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1 overflow-hidden">
            {/* Added overflow-hidden here */}
            <p className="text-sm leading-none font-medium">{userName}</p>
            <p className="text-muted-foreground truncate overflow-hidden text-xs leading-none whitespace-nowrap">
              {userEmail}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />

        {/* Existing menu items */}
        <DropdownMenuItem asChild>
          <Link to="/profile" className="cursor-pointer">
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link to="settings" className="cursor-pointer">
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => console.log('Logging out...')}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

UserMenu.displayName = 'UserMenu';

export default UserMenu;
