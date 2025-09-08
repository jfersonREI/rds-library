// src/components/Layout/AuthLayout/AuthLayout.tsx
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import PageHeadManager from '@/components/PageHeadManager';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ModeToggle } from '@/components/mode-toggle';
import { AuthLayoutProps } from './types'; // Import types from its barrel file

/**
 * AuthLayout Component
 *
 * This layout component provides a consistent structure and styling for authentication pages
 * like login and registration. It centers content within a Card component from shadcn/ui,
 * and includes a suspense fallback for lazily loaded children.
 * It also integrates a ThemeToggle for switching between light/dark modes.
 *
 * @param {React.ReactNode} children - The child components (e.g., LoginPage, RegisterPage) to be rendered within the layout.
 * @param {string} cardTitle - Optional title for the authentication card.
 * @param {string} cardDescription - Optional description for the authentication card.
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  cardTitle,
  cardDescription,
}) => {
  return (
    <>
      <PageHeadManager />

      <div className="bg-accent flex min-h-screen items-center justify-center p-4">
        <Card className="animate-fade-in-up mx-auto w-full max-w-md overflow-hidden rounded-lg pt-0 shadow-xl">
          <CardHeader className="bg-primary rounded-t-lg p-6 text-center text-white">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              REIApp
            </h1>
            <CardTitle className="mt-2 text-xl font-semibold">
              {cardTitle || 'Welcome'}
            </CardTitle>
            {cardDescription && (
              <CardDescription className="mt-1 text-indigo-200">
                {cardDescription}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="p-8">
            <Suspense fallback={<Spinner size="default" />}>
              {children || <Outlet />}
            </Suspense>
          </CardContent>
        </Card>

        <div className="absolute right-4 bottom-4">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
