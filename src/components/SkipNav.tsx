import React from 'react';
import { Link } from 'react-router';

const SkipNav: React.FC = () => {
  return (
    <Link
      to="#main-content"
      className="focus:bg-primary focus:text-primary-foreground focus:ring-ring sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:px-4 focus:py-2 focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-offset-2 focus:transition-all"
    >
      Skip to main content
    </Link>
  );
};

export default SkipNav;
