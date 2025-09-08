// ============================================
// File: hooks/useActiveRoute.ts
// ============================================
import { useLocation } from 'react-router';
import { useMemo } from 'react';
import { NAVIGATION_CONFIG } from '../config/adminConfig';

interface UseActiveRouteReturn {
  isActiveRoute: (url: string) => boolean;
  pageTitle: string;
}

export const useActiveRoute = (): UseActiveRouteReturn => {
  const location = useLocation();

  return useMemo(() => {
    const isActiveRoute = (url: string): boolean => {
      if (url === '/admin') {
        return (
          location.pathname === '/admin' || location.pathname === '/admin/'
        );
      }
      return location.pathname.startsWith(url);
    };

    const getPageTitle = (): string => {
      const allItems = Object.values(NAVIGATION_CONFIG).flatMap(
        (group) => group.items
      );
      const currentItem = allItems.find((item) => isActiveRoute(item.url));
      return currentItem ? currentItem.title : 'Admin Panel';
    };

    return { isActiveRoute, pageTitle: getPageTitle() };
  }, [location.pathname]);
};
