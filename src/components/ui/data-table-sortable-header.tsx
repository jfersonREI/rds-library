// components/ui/data-table-sortable-header.tsx
import { Column } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

interface DataTableSortableHeaderProps<TData> {
  // Renamed interface
  column: Column<TData, any>;
  title: string;
  className?: string;
}

export function DataTableSortableHeader<TData>({
  column,
  title,
  className,
}: DataTableSortableHeaderProps<TData>) {
  // Renamed component
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      className={`flex items-center space-x-1 font-semibold ${className || ''}`}
    >
      {title}
      {column.getIsSorted() === 'asc' ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : column.getIsSorted() === 'desc' ? (
        <ArrowDown className="ml-2 h-4 w-4" />
      ) : (
        <ArrowUpDown className="text-foreground/30 ml-2 h-4 w-4" />
      )}
    </Button>
  );
}
