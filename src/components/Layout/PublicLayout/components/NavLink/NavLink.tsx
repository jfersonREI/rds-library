// PublicLayout/components/NavLink/NavLink.tsx
import React from 'react';
import { NavLinkProps } from '../../types';
// Assuming you have Shadcn UI Button component
import { Button } from '@/components/ui/button'; // Adjust this import path based on your Shadcn setup, e.g., '@/components/ui/button'
import { Link } from 'react-router';
/**
 * @component NavLink
 * @description A reusable navigation link component that wraps a Shadcn UI Button.
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
  return (
    <Link to={href} onClick={onClick}>
      <Button variant={variant} className={`justify-center ${className}`}>
        {children}
      </Button>
    </Link>
  );
};

export default NavLink;
