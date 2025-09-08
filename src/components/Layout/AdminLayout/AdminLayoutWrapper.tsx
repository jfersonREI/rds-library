// src/components/Layout/AdminLayoutWrapper.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminLayout } from '.';
import PageHeadManager from '@/components/PageHeadManager';

/**
 * @component AdminLayoutWrapper
 * @description This wrapper component passes the React Router Outlet to the AdminLayout.
 * It's responsible for making the child routes available to the AdminLayout.
 * @returns {JSX.Element} The AdminLayout with the current route's Outlet as its children.
 */
export const AdminLayoutWrapper: React.FC = () => {
  return (
    <>
      <PageHeadManager />
      <AdminLayout defaultSidebarOpen={true}>
        <Outlet /> {/* This Outlet renders the specific admin page component */}
      </AdminLayout>
    </>
  );
};
