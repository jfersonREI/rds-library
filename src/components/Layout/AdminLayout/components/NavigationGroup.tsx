// src/components/NavigationGroup.tsx
// This file handles the navigation clicks programmatically using useNavigate
// to ensure React Router performs client-side navigation within the ADMIN sidebar.
import { memo } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'; // Ensure this path is correct
import type { NavigationGroupProps } from '../types/admin'; // Ensure this path is correct

const NavigationGroup = memo<NavigationGroupProps>(
  ({ group, isActiveRoute }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleNavigationClick = (url: string) => {
      navigate(url); // Programmatically navigate to the URL
    };

    return (
      <SidebarGroup>
        <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {group.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={isActiveRoute(item.url)}
                  tooltip={item.title}
                  type="button" // Explicitly set type="button"
                  onClick={() => handleNavigationClick(item.url)} // Handle click programmatically
                  className="flex h-full w-full items-center gap-3"
                >
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  }
);

NavigationGroup.displayName = 'NavigationGroup';

export default NavigationGroup;
