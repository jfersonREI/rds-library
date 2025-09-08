import React from 'react'; // Removed useState, useEffect as delay logic is removed

interface SpinnerProps {
  fullScreen?: boolean;
  size?: 'small' | 'default' | 'large';
  // delay?: number; // Removed delay prop as it was causing issues for fast loads
}

/**
 * A reusable spinner loader component.
 * Displays a simple spinning circle as a loading indicator.
 * It is styled using Tailwind CSS and can optionally cover the full screen.
 * This version appears immediately when rendered by Suspense.
 */
const Spinner: React.FC<SpinnerProps> = ({
  fullScreen = false,
  size = 'default',
}) => {
  // Determine the container classes based on the fullScreen prop.
  // If fullScreen is true, apply fixed positioning to cover the entire viewport,
  // add a background overlay, and set a high z-index.
  // Otherwise, use the default flex centering and padding.
  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50'
    : 'flex items-center justify-center p-4';

  // Determine the spinner size classes based on the 'size' prop.
  // This object maps size options to specific Tailwind CSS classes for height, width,
  // and border thickness, ensuring the spinner scales appropriately.
  const spinnerSizeClasses = {
    small: 'h-8 w-8 border-3', // Smaller spinner with slightly thinner border
    default: 'h-12 w-12 border-4', // Original size
    large: 'h-16 w-16 border-5', // Larger spinner with thicker border
  };

  // Get the appropriate size classes based on the 'size' prop value.
  const currentSpinnerSizeClass =
    spinnerSizeClasses[size] || spinnerSizeClasses.default;

  return (
    <div
      // The spinner container is always present and visible immediately upon mounting.
      // This addresses the "no spinner shows up at all" issue.
      className={`${containerClasses}`}
      // Removed style={{ pointerEvents: showSpinnerContent ? 'auto' : 'none' }}
      // and transition-opacity as the content is now always immediately visible.
    >
      <div
        className={`animate-spin ${currentSpinnerSizeClass} rounded-full border-blue-500 border-b-transparent`}
        role="status" // Accessibility role for screen readers
        aria-label="Loading..." // Accessibility label
      >
        {/*
          Visually hidden span for accessibility purposes.
          Screen readers will read this text while the spinner is visible.
        */}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
