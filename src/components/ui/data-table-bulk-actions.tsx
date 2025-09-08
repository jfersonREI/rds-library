// components/ui/data-table-bulk-actions.tsx

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface DataTableBulkActionsProps {
  selectedRowsCount: number;
  onClearSelection: () => void;
  children?: React.ReactNode;
  className?: string;
  active: boolean; // Indicates if the bar is active (rows selected)
}

export function DataTableBulkActions({
  selectedRowsCount,
  onClearSelection,
  children,
  className,
  active,
}: DataTableBulkActionsProps) {
  const [showBulkActionsAnimator, setShowBulkActionsAnimator] = useState(false);
  const [isBulkActionsContentTrulyHidden, setIsBulkActionsContentTrulyHidden] =
    useState(true);

  useEffect(() => {
    if (active) {
      // When 'active' is true (bar should be visible):
      // 1. Ensure the element is 'display: flex' immediately.
      setIsBulkActionsContentTrulyHidden(false);
      // 2. A tiny delay (50ms) before starting the max-height/opacity transition.
      // This ensures the browser has time to apply 'display: flex' before starting the animation.
      const delayShow = setTimeout(() => {
        setShowBulkActionsAnimator(true);
      }, 50);
      return () => clearTimeout(delayShow);
    } else {
      // When 'active' is false (bar should be hidden):
      // 1. Start the max-height/opacity transition to shrink/fade out.
      setShowBulkActionsAnimator(false);
      // 2. After the CSS transition duration (300ms), apply 'display: none' to truly hide it.
      const timer = setTimeout(() => {
        setIsBulkActionsContentTrulyHidden(true);
      }, 300); // This duration (300ms) MUST match your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [active]);

  const animatorClasses = `
    flex items-center justify-between rounded-md px-4 py-3 mb-6
    bg-accent text-accent-foreground dark:bg-blue-800/20 dark:text-blue-200
    transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden
    ${showBulkActionsAnimator ? 'max-h-14 opacity-100' : 'max-h-0 opacity-0'} // Changed max-h-16 to max-h-14 for potentially smoother animation
    ${isBulkActionsContentTrulyHidden ? 'hidden' : 'flex'} // Toggles 'display: none' after animation
    ${className || ''}
  `;

  return (
    <div
      className={animatorClasses}
      aria-hidden={!showBulkActionsAnimator || isBulkActionsContentTrulyHidden}
    >
      <div className="flex items-center gap-2">
        <span className="font-medium">
          {selectedRowsCount} item{selectedRowsCount > 1 ? 's' : ''} selected
        </span>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2">{children}</div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onClearSelection}
          className=""
          aria-label="Clear selection"
        >
          <X />
        </Button>
      </div>
    </div>
  );
}
