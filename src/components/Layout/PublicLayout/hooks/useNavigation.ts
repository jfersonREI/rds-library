// PublicLayout/hooks/useNavigation.ts

import { useState, useCallback } from 'react';

/**
 * @interface UseNavigationReturn
 * @description Defines the return type for the useNavigation hook.
 * @property {boolean} isMobileMenuOpen - Indicates if the mobile menu is currently open.
 * @property {() => void} toggleMobileMenu - Function to toggle the mobile menu's open state.
 * @property {() => void} closeMobileMenu - Function to explicitly close the mobile menu.
 */
interface UseNavigationReturn {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

/**
 * @function useNavigation
 * @description A custom hook for managing UI state related to mobile navigation menus.
 * It provides state for mobile menu visibility and functions to control it.
 * Navigation items themselves are expected to be managed externally (e.g., via config).
 * @returns {UseNavigationReturn} An object containing mobile menu state and handlers.
 */
export const useNavigation = (): UseNavigationReturn => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen(false);
  }, []);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
