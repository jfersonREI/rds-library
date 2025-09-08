// PublicLayout/components/Main/Main.tsx
// This component provides the semantic <main> tag and common styling for the public site's content.
// It DOES NOT include Suspense. Suspense is handled in PublicLayout.tsx.
import { memo, ReactNode } from 'react'; // NO Suspense import here

interface MainProps {
  children?: ReactNode;
}

/**
 * @component Main
 * @description A structural component that wraps the main content area for the PublicLayout.
 * It provides semantic HTML and basic layout classes.
 * It expects its children (which will include the the Suspense-wrapped Outlet from PublicLayout) to be rendered.
 * @param {MainProps} props - The component props.
 * @param {React.ReactNode} props.children - The actual content to be displayed within the main area.
 * @returns {JSX.Element} The main HTML element.
 */
const Main = memo(({ children }: MainProps) => {
  return (
    <main id="main-content" className="flex-grow">
      <>
        {children}{' '}
        {/* Render the children passed from PublicLayout (which is the Suspense block) */}
      </>
    </main>
  );
});

Main.displayName = 'Main';

export default Main;
