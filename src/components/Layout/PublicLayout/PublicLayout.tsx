// PublicLayout/PublicLayout.tsx
import React, { Suspense } from 'react'; // Suspense is imported here
import { Outlet, ScrollRestoration } from 'react-router';
import PageHeadManager from '@/components/PageHeadManager';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main'; // The Main component for PublicLayout (NO Suspense inside it)
import { ModeToggle } from '@/components/mode-toggle';
import SkipNav from '@/components/SkipNav';
import Spinner from '../Spinner/Spinner';

/**
 * @component PublicLayout
 * @description The main layout for the public-facing side of the application.
 * It provides the overall structure (header, main content, footer) and includes
 * a Suspense boundary for its child routes rendered via `Outlet`.
 * @returns {JSX.Element} The full external layout structure.
 */
const PublicLayout: React.FC = () => {
  return (
    <>
      <SkipNav />
      <PageHeadManager />
      <Header />
      <Main>
        {/* Suspense boundary for lazy-loaded pages within the PublicLayout */}
        {/* This Suspense will catch all lazy-loaded components rendered by the Outlet */}
        <Suspense fallback={<Spinner fullScreen size="default" />}>
          <Outlet />
          {/* This is where child routes (like Home, About) are rendered */}
        </Suspense>
      </Main>
      <Footer />
      <span className="fixed right-4 bottom-4 isolate z-50">
        <ModeToggle />
      </span>
      <ScrollRestoration />
    </>
  );
};

export default PublicLayout;
