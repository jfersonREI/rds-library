// src/routes/error.routes.tsx
import React, { Suspense } from 'react';

import Spinner from '@/components/common/Spinner';

// Lazy-load the error-related components once here
const ErrorLayoutWrapper = React.lazy(
  () => import('@/components/Layout/ErrorLayout/ErrorLayoutWrapper')
);
const NotFound = React.lazy(() => import('@/pages/error/NotFound'));

/**
 * A reusable error element for React Router.
 * This component wraps the NotFound page within a Suspense boundary
 * and an ErrorLayoutWrapper, providing a consistent error display.
 * It is named to align with other .routes.tsx files for consistency.
 */
export const defaultErrorElement = (
  <Suspense fallback={<Spinner fullScreen size="default" />}>
    <ErrorLayoutWrapper>
      <NotFound />
    </ErrorLayoutWrapper>
  </Suspense>
);
