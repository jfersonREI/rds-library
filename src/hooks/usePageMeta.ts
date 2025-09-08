// src/hooks/usePageMeta.ts

import { useEffect } from 'react';

// Define the shape of your application's global configuration
interface AppConfig {
  appName: string;
  defaultDescription: string;
  titleSeparator: string;
}

// A private variable to store the app configuration
// Initialize with sensible defaults
let _appConfig: AppConfig = {
  appName: 'My App', // Default app name
  defaultDescription: 'A modern web application built with React.',
  titleSeparator: ' | ', // Separator for title: "Page Title | App Name"
};

/**
 * Sets the global application configuration.
 * Call this once at your application's entry point (e.g., App.tsx or main.tsx).
 * @param config - An object containing partial AppConfig properties to set.
 */
export const setAppConfig = (config: Partial<AppConfig>) => {
  _appConfig = { ..._appConfig, ...config };
};

/**
 * A React hook to access the global application configuration.
 * @returns The current AppConfig object.
 */
export const useAppConfig = (): AppConfig => {
  // For a truly static config, returning _appConfig directly is fine.
  // For dynamic configs (rare for appName), you might use React Context.
  return _appConfig;
};

/**
 * Optional: A hook for page-specific side effects, e.g., analytics.
 * This can remain separate from title/meta management.
 * @param pageName - The name of the current page.
 * @param description - The description of the current page (optional).
 */
export const usePage = (pageName: string, description?: string) => {
  useEffect(() => {
    // Example: console.log for analytics or other page-specific logic
    // console.log(`Page visited: ${pageName}${description ? ` - ${description}` : ''}`);
  }, [pageName, description]);
};
