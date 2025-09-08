// components/Layout/ErrorLayoutWrapper.tsx
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import PageHeadManager from '@/components/PageHeadManager';

import Header from '../PublicLayout/components/Header/Header';
import Footer from '../PublicLayout/components/Footer/Footer';
import Main from '../PublicLayout/components/Main/Main'; // The Main component for PublicLayout (NO Suspense inside it)
import { ModeToggle } from '@/components/mode-toggle';
import SkipNav from '@/components/SkipNav';

const ErrorLayoutWrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <SkipNav />
      <PageHeadManager />
      <Header />
      <Main>
        {children || <Outlet />} {/* Render children or Outlet */}
      </Main>
      <Footer />
      <span className="fixed right-4 bottom-4 isolate z-50">
        <ModeToggle />
      </span>
      <ScrollRestoration />
    </>
  );
};

export default ErrorLayoutWrapper;
