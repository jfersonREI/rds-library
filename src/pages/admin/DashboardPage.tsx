// src/pages/admin/DashboardPage.tsx
import React from 'react';

/**
 * @component DashboardPage
 * @description A minimal, highly visible placeholder for the Admin Dashboard page.
 * Designed to confirm successful lazy loading and rendering.
 */
const DashboardPage: React.FC = () => {
  console.log('DashboardPage component is rendering.'); // Add console log to confirm render
  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f0f9ff' /* very light blue */,
        color: '#0284c7' /* sky blue dark text */,
        border: '3px solid #38bdf8' /* sky blue border */,
        borderRadius: '10px',
        textAlign: 'center',
        fontSize: '2em',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        margin: '20px',
      }}
    >
      <p>✅ DASHBOARD PAGE LOADED SUCCESSFULLY! ✅</p>
      <p style={{ fontSize: '0.6em', marginTop: '10px' }}>
        This content is from DashboardPage.tsx
      </p>
    </div>
  );
};

export default DashboardPage;
