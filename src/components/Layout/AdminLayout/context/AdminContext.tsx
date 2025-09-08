// ============================================
// File: context/AdminContext.tsx
// ============================================
import { createContext, useContext } from 'react';
import type { AdminContextValue } from '../types/admin';

const AdminContext = createContext<AdminContextValue | null>(null);

export const useAdminContext = (): AdminContextValue => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminContext must be used within AdminLayout');
  }
  return context;
};

export default AdminContext;
