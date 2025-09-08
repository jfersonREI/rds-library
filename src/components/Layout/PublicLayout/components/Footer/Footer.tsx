// PublicLayout/components/Footer/Footer.tsx
import React from 'react';
import Logo from '../Logo/Logo'; // Adjust path
import { NavigationProps } from '../../types'; // Adjust path
import { MAIN_NAV_LINKS, LEGAL_NAV_LINKS } from '../../config/externalConfig'; // Adjust path

/**
 * @component FooterNavigation
 * @description A sub-component for rendering navigation links within the footer.
 * @param {NavigationProps} props - The component props.
 * @param {NavigationItem[]} props.links - The array of navigation items to display.
 * @param {string} props.ariaLabel - An ARIA label for accessibility.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} A navigation (`<nav>`) element with links.
 */
const FooterNavigation: React.FC<NavigationProps> = ({
  links,
  ariaLabel,
  className = '',
}) => (
  <nav
    className={`flex flex-col items-center gap-6 md:flex-row md:gap-8 ${className}`}
    aria-label={ariaLabel}
  >
    {links.map(({ href, label }) => (
      // Using a simple <a> for links in the footer, as they might not always trigger full page navigation in SPAs
      <a
        key={href + label} // Unique key for list items
        href={href}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
      </a>
    ))}
  </nav>
);

/**
 * @component Footer
 * @description The main footer component for the public-facing layout.
 * It includes the logo, main navigation links, legal links, and copyright information.
 * @returns {JSX.Element} The footer element.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-background section-padding-y border-border border-t border-dashed"
      role="contentinfo" // Semantic role for accessibility
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Header Section (within footer) - typically for logo and main nav */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          <a href="/" aria-label="Go to homepage">
            <Logo />
          </a>
          <FooterNavigation
            links={MAIN_NAV_LINKS}
            ariaLabel="Footer navigation"
          />
        </div>

        {/* Divider */}
        <div className="border-border h-px border-t border-dashed" />

        {/* Bottom Section - copyright and legal links */}
        <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-6">
          <p className="text-muted-foreground text-center lg:text-left">
            <span>Copyright {currentYear} ©</span>{' '}
            <a
              className="hover:underline"
              href="https://reisystems.com"
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
            >
              reisystems.com
            </a>
          </p>
          <FooterNavigation links={LEGAL_NAV_LINKS} ariaLabel="Legal links" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
