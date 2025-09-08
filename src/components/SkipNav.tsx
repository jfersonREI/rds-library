import React from 'react';

const SkipNav: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:transition-all"
    >
      Skip to main content
    </a>
  );
};

export default SkipNav;
