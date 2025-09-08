// PublicLayout/components/Header/Header.tsx
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Adjust import path for Shadcn Button
import Logo from '../Logo/Logo'; // Adjust path
import NavLink from '../NavLink/NavLink'; // Adjust path
import { useNavigation } from '../../hooks/useNavigation'; // This hook for mobile menu logic
import { MAIN_NAV_LINKS, CONTACT_NAV_ITEM } from '../../config/externalConfig'; // External config for navigation items
import { Link } from 'react-router';

/**
 * @component Header
 * @description The main header component for the public-facing layout.
 * It includes the logo, desktop navigation, and a mobile menu toggle.
 * It uses the `useNavigation` hook for mobile menu state and imports
 * navigation items from `externalConfig`.
 * @returns {JSX.Element} The header element.
 */
const Header: React.FC = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useNavigation();

  // Navigation items are now directly imported from config
  const navigationItems = MAIN_NAV_LINKS;
  const contactItem = CONTACT_NAV_ITEM;

  return (
    <>
      <nav className="dark:bg-background/80 sticky top-0 isolate z-50 bg-white/60 py-3.5 backdrop-blur-md md:py-4">
        <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
          {/* Logo and Mobile Menu Toggle */}
          <div className="-mt-1 flex items-center justify-between">
            <Link to="/" aria-label="Go to homepage">
              <Logo />
            </Link>
            <Button
              variant="ghost"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden w-full flex-row justify-end gap-5 md:flex">
            <div className="flex flex-col gap-1 md:flex-row">
              {navigationItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <NavLink href={contactItem.href} variant="default">
              {contactItem.label}
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <div key={item.href} className="w-full">
                    <NavLink
                      href={item.href}
                      className="w-full justify-center font-medium"
                      onClick={closeMobileMenu} // Close menu on link click
                    >
                      {item.label}
                    </NavLink>
                  </div>
                ))}
                <div className="mt-2 w-full">
                  <NavLink
                    href={contactItem.href}
                    variant="default"
                    className="w-full justify-center font-medium"
                    onClick={closeMobileMenu} // Close menu on link click
                  >
                    {contactItem.label}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
