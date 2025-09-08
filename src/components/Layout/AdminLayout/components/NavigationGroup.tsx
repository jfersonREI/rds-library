// ============================================
// File: components/NavigationGroup.tsx
// ============================================
import { memo } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar, // This hook is available from your sidebar.tsx
} from '@/components/ui/sidebar';
import type { NavigationGroupProps } from '../types/admin';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Utility for conditional classnames

const NavigationGroup = memo<NavigationGroupProps>(
  ({ group, isActiveRoute }) => {
    const navigate = useNavigate();
    // Using 'state' from useSidebar context to determine if sidebar is collapsed
    const { state } = useSidebar();
    const isCollapsed = state === 'collapsed';

    const handleNavigationClick = (url: string) => {
      navigate(url);
    };

    return (
      <SidebarGroup>
        <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {group.items.map((item) => {
              // Check if the item is collapsible and has sub-items
              if (item.collapsible && item.items && item.items.length > 0) {
                // Render as DropdownMenu if sidebar is collapsed
                if (isCollapsed) {
                  return (
                    <DropdownMenu key={item.title}>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            tooltip={item.title}
                            type="button"
                            className="flex h-full w-full items-center justify-center" // Center icon when collapsed
                          >
                            {item.icon && <item.icon className="size-4" />}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        side="right"
                        align="start"
                        className="w-48"
                      >
                        {item.items.map((subItem) => (
                          <DropdownMenuItem
                            key={subItem.title}
                            onClick={() => handleNavigationClick(subItem.url)}
                            className={cn(
                              isActiveRoute(subItem.url) &&
                                'bg-accent text-accent-foreground'
                            )}
                          >
                            {subItem.title}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                // Render as Collapsible when sidebar is expanded
                return (
                  <Collapsible key={item.title} asChild>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          type="button"
                          className="group/collapsible flex h-full w-full items-center justify-between gap-3"
                          tooltip={item.title}
                          isActive={
                            isActiveRoute(item.url) ||
                            item.items.some((sub) => isActiveRoute(sub.url))
                          } // Active if parent or any child is active
                        >
                          <div className="flex items-center gap-3">
                            {item.icon && <item.icon className="size-4" />}
                            <span>{item.title}</span>
                          </div>
                          {/* Apply rotation class for ChevronRight icon */}
                          <ChevronRight className="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent
                        // Apply animation classes for content
                        className="data-[state=closed] collapsible-slide flex"
                      >
                        <SidebarMenu className="border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5">
                          {item.items.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton
                                asChild
                                isActive={isActiveRoute(subItem.url)}
                                tooltip={subItem.title}
                                className="flex h-full min-w-0 items-center gap-3"
                              >
                                <Link to={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              }

              // Render non-collapsible items
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={isActiveRoute(item.url)}
                    tooltip={item.title}
                    type="button"
                    onClick={() => handleNavigationClick(item.url)}
                    className="flex h-full w-full items-center gap-3"
                  >
                    {item.icon && <item.icon className="size-4" />}
                    {!isCollapsed && <span>{item.title}</span>}{' '}
                    {/* Only show text when not collapsed */}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  }
);

NavigationGroup.displayName = 'NavigationGroup';

export default NavigationGroup;
