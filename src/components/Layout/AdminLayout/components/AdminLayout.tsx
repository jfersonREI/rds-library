// src/components/AdminLayout.tsx
// THIS IS A CRITICAL FILE FOR YOUR ADMIN SECTION TO RENDER.
// It receives the 'Outlet' from AdminLayoutWrapper as 'children'
// and passes it down to AdminMain, which then handles the Suspense and rendering.
import React, { useMemo } from 'react'; // Removed ReactNode import as it's provided by types/admin
// Assuming you have these components based on your previous config and barrel exports
import AdminHeader from './AdminHeader'; // Your AdminHeader component
import AdminSidebar from './AdminSidebar'; // Your AdminSidebar component
import AdminMain from './AdminMain'; // Your AdminMain component (MUST have Suspense around its children)
// import AdminFooter from './AdminFooter'; // Optional: if you have an AdminFooter

// Ensure these paths are correct for your AdminLayout to function
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminContext from '../context/AdminContext';
import { ADMIN_CONFIG, NAVIGATION_CONFIG } from '../config/adminConfig';
import type { AdminLayoutProps } from '../types/admin'; // AdminLayoutProps correctly imports ReactNode from here

/**
 * @component AdminLayout
 * @description The main structural layout for the admin panel.
 * It orchestrates the header, sidebar, and the main content area.
 * It passes its `children` (which is the React Router Outlet for the current page)
 * down to the `AdminMain` component for rendering.
 * @param {AdminLayoutProps} props - The component props.
 * @param {AdminLayoutProps['children']} props.children - The content (Outlet) to be rendered in the main area.
 * @returns {JSX.Element} The admin layout structure.
 */
const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  defaultSidebarOpen = true,
}) => {
  const adminContextValue = useMemo(
    () => ({
      config: ADMIN_CONFIG,
      navigation: NAVIGATION_CONFIG,
    }),
    []
  );

  return (
    <AdminContext.Provider value={adminContextValue}>
      <SidebarProvider defaultOpen={defaultSidebarOpen}>
        <div className="flex min-h-screen w-full">
          {/* Admin Sidebar */}
          <AdminSidebar />

          <div className="flex flex-1 flex-col">
            {/* Admin Header */}
            <AdminHeader />

            {/* Admin Main Content Area: Renders the current admin page */}
            <AdminMain>
              {children}{' '}
              {/* THIS IS WHERE THE Outlet (from AdminLayoutWrapper) GETS PASSED DOWN */}
            </AdminMain>

            {/* Optional Admin Footer */}
            {/* <AdminFooter /> */}
          </div>
        </div>
      </SidebarProvider>
    </AdminContext.Provider>
  );
};

export default AdminLayout;
