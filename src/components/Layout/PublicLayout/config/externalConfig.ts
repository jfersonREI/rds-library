// PublicLayout/config/externalConfig.ts

import { NavigationItem } from '../types';

/**
 * @constant MAIN_NAV_LINKS
 * @description Configuration for the main navigation links in the header and footer.
 */
export const MAIN_NAV_LINKS: NavigationItem[] = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

/**
 * @constant LEGAL_NAV_LINKS
 * @description Configuration for the legal navigation links typically found in the footer.
 */
export const LEGAL_NAV_LINKS: NavigationItem[] = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/cookies-settings', label: 'Cookies Settings' },
];

/**
 * @constant CONTACT_NAV_ITEM
 * @description Configuration for the contact navigation item, often a call-to-action.
 */
export const CONTACT_NAV_ITEM: NavigationItem = {
  href: '/contact',
  label: 'Contact us',
};
