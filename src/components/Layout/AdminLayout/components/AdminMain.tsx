// src/components/AdminMain.tsx
// This component provides the semantic <main> tag and common styling for the admin site's content.
// It DOES include a Suspense boundary around its children, as it's the direct parent
// rendering the lazy-loaded admin pages via the AdminLayout's children prop.
import { memo, ReactNode, Suspense } from 'react'; // Suspense is imported here
import Spinner from '../../Spinner/Spinner';

interface AdminMainProps {
  children?: ReactNode;
}

/**
 * @component AdminMain
 * @description The main content area component for the AdminLayout.
 * It's responsible for rendering the primary content of the current admin page,
 * which is passed as children from the parent layout.
 * It now correctly includes a Suspense boundary for lazy-loaded children.
 * @param {AdminMainProps} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered within the main area (your actual page component).
 * @returns {JSX.Element} The main HTML element.
 */
const AdminMain = memo(({ children }: AdminMainProps) => {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto max-w-7xl">
        {/* Suspense boundary for lazy-loaded pages within the Admin layout */}
        <Suspense fallback={<Spinner fullScreen size="default" />}>
          {children}{' '}
          {/* This is where the lazy-loaded admin page components are rendered */}
        </Suspense>
      </div>
    </main>
  );
});

AdminMain.displayName = 'AdminMain';

export default AdminMain;
