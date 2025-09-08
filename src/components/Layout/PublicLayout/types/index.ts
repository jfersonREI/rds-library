// PublicLayout/types/index.ts

import { ReactNode } from 'react';

/**
 * @interface NavigationItem
 * @description Defines the structure for a navigation link item.
 * @property {string} href - The URL path for the link.
 * @property {string} label - The display text for the link.
 */
export interface NavigationItem {
  href: string;
  label: string;
}

/**
 * @interface NavLinkProps
 * @description Props for the NavLink component.
 * @property {string} href - The destination URL for the link.
 * @property {ReactNode} children - The content to be rendered inside the link (e.g., text, icon).
 * @property {'ghost' | 'default'} [variant='ghost'] - The visual variant of the button (from Shadcn UI).
 * @property {string} [className=''] - Additional CSS classes to apply.
 * @property {() => void} [onClick] - Optional click handler for the link.
 */
export interface NavLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'ghost' | 'default';
  className?: string;
  onClick?: () => void;
}

/**
 * @interface NavigationProps
 * @description Props for the Header/Footer Navigation components.
 * @property {NavigationItem[]} links - An array of navigation items.
 * @property {string} ariaLabel - An ARIA label for accessibility.
 * @property {string} [className=''] - Additional CSS classes to apply.
 */
export interface NavigationProps {
  links: NavigationItem[];
  ariaLabel: string;
  className?: string;
}

/**
 * @interface LogoProps
 * @description Props for the Logo component.
 * @property {string} [className=''] - Additional CSS classes to apply.
 */
export interface LogoProps {
  className?: string;
}

/**
 * @interface PublicLayoutProps
 * @description Props for the PublicLayout component.
 * @property {ReactNode} children - The content to be rendered within the main section of the layout.
 */
export interface PublicLayoutProps {
  children: ReactNode;
}
