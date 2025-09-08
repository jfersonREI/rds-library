// PublicLayout/index.ts (Barrel Export)

// Export main layout component
export { default as PublicLayout } from './PublicLayout';

// Export components
export { default as Footer } from './components/Footer/Footer';
export { default as Header } from './components/Header/Header';
export { default as Logo } from './components/Logo/Logo';
export { default as Main } from './components/Main/Main';
export { default as NavLink } from './components/NavLink/NavLink';

// Export configuration
export * from './config/externalConfig';

// Export hooks
export * from './hooks/useNavigation';

// Export types
export * from './types';
