// dashboard-columns.tsx
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { Data } from './dashboard-data';
import { DataTableSortableHeader } from '@/components/ui/data-table-sortable-header';

export const dashboardColumns: ColumnDef<Data>[] = [
  // Selection Column
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className=" "
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className=" "
      />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      printable: false, // Exclude from print/CSV
    },
  },
  // Email Column
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableSortableHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
    meta: {
      columnTitle: 'Email', // Used for print/CSV header
    },
  },
  // Status Column
  {
    accessorKey: 'status',
    header: 'Status', // This is already a string
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
    meta: {
      columnTitle: 'Status', // Used for print/CSV header (for consistency)
    },
  },
  // Amount Column
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <DataTableSortableHeader
        column={column}
        title="Amount"
        className="w-full justify-end"
      />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
    meta: {
      columnTitle: 'Amount', // Used for print/CSV header
    },
  },
  // Actions Column
  {
    id: 'actions',
    enableHiding: false,
    header: () => <div className="text-right"></div>,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 rounded-md p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-md shadow-lg">
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(data.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    meta: {
      printable: false, // Exclude from print/CSV
    },
  },
];
