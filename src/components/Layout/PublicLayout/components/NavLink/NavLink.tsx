// PublicLayout/components/NavLink/NavLink.tsx
import React from 'react';
import { NavLinkProps } from '../../types';
// Assuming you have Shadcn UI Button component
import { Button } from '@/components/ui/button'; // Adjust this import path based on your Shadcn setup, e.g., '@/components/ui/button'

/**
 * @component NavLink
 * @description A reusable navigation link component that wraps a Shadcn UI Button.
 * It's designed to be used within navigation menus. Uses a simple <a> tag.
 * @param {NavLinkProps} props - The component props.
 * @param {string} props.href - The destination URL for the link.
 * @param {React.ReactNode} props.children - The content to be rendered inside the link.
 * @param {'ghost' | 'default'} [props.variant='ghost'] - The visual variant of the button.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {() => void} [props.onClick] - Optional click handler.
 * @returns {JSX.Element} An anchor tag containing a Shadcn UI Button.
 */
const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  variant = 'ghost',
  className = '',
  onClick,
}) => {
  // Using a simple <a> tag here. In a full React Router setup,
  // this would typically be <Link to={href}>. For this external navigation,
  // we'll stick to <a> assuming these are direct navigations or top-level.
  // If SPA-like transitions are needed for these, you'd change <a> to <Link>
  // and handle clicks with useNavigate in a parent like Header if needed.
  return (
    <a href={href} onClick={onClick}>
      <Button
        variant={variant}
        className={`cursor-pointer justify-center ${className}`}
      >
        {children}
      </Button>
    </a>
  );
};

export default NavLink;
