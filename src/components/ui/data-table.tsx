// data-table.tsx
import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  VisibilityState,
  SortingState,
  ColumnFiltersState,
  FilterFn,
  PaginationState,
} from '@tanstack/react-table';
import { useReactTable } from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useSearchParams } from 'react-router';

import { DataTableToolbar } from '@/components/ui/data-table-toolbar';
import { DataTablePagination } from '@/components/ui/data-table-pagination';
import { DataTableBulkActions } from '@/components/ui/data-table-bulk-actions';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showFirstLastPageButtons?: boolean;
  showToolbar?: boolean;
  showDisplayCount?: boolean;
  striped?: boolean;
  showPagination?: boolean;
  enableGlobalFilter?: boolean;
  tableId?: string;
  excludedPrintColumnIds?: string[];
  showPrintButtonInToolbar?: boolean;
  showExportCsvButtonInToolbar?: boolean;
  showViewColumnsButtonInToolbar?: boolean;
  bulkActionButtons?: React.ReactNode;
}

const fuzzyFilter: FilterFn<any> = (row, _columnId, filterValue) => {
  const lowerFilterValue = String(filterValue).toLowerCase().trim();
  if (!lowerFilterValue) {
    return true;
  }
  const rowContent = JSON.stringify(row.original).toLowerCase();
  const isMatch = rowContent.includes(lowerFilterValue);
  return isMatch;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  showFirstLastPageButtons = false,
  showToolbar = true,
  showDisplayCount = false,
  striped = false,
  showPagination = true,
  enableGlobalFilter = false,
  tableId,
  excludedPrintColumnIds = [],
  showPrintButtonInToolbar = true,
  showExportCsvButtonInToolbar = true,
  showViewColumnsButtonInToolbar = true,
  bulkActionButtons,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState('');

  const [searchParams] = useSearchParams();

  const [paginationState, setPaginationState] = React.useState<PaginationState>(
    () => {
      const initialPageIndex = showPagination
        ? parseInt(searchParams.get('page') || '1') - 1
        : 0;
      const initialPageSize = showPagination
        ? parseInt(searchParams.get('size') || '10')
        : data.length;
      return { pageIndex: initialPageIndex, pageSize: initialPageSize };
    }
  );

  React.useEffect(() => {
    if (!showPagination) return;

    const urlPageIndex = parseInt(searchParams.get('page') || '1') - 1;
    const urlPageSize = parseInt(searchParams.get('size') || '10');

    const newPageIndex = Math.max(0, urlPageIndex);
    const newPageSize = Math.max(1, urlPageSize);

    if (
      paginationState.pageIndex !== newPageIndex ||
      paginationState.pageSize !== newPageSize
    ) {
      setPaginationState({
        pageIndex: newPageIndex,
        pageSize: newPageSize,
      });
    }
  }, [searchParams, showPagination, paginationState]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: showPagination ? getPaginationRowModel() : undefined,

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: (updater) => {
      setGlobalFilter(updater);
      if (showPagination) {
        table.setPageIndex(0);
      }
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPaginationState,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: paginationState,
      globalFilter,
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
  });

  const showBulkActions = table.getFilteredSelectedRowModel().rows.length > 0;

  return (
    <div className="w-full">
      {showToolbar && (
        <DataTableToolbar
          table={table}
          enableGlobalFilter={enableGlobalFilter}
          excludedPrintColumnIds={excludedPrintColumnIds}
          showPrintButton={showPrintButtonInToolbar}
          showExportCsvButton={showExportCsvButtonInToolbar}
          showViewColumnsButton={showViewColumnsButtonInToolbar}
        >
          {/* Add custom filters or buttons here if needed */}
        </DataTableToolbar>
      )}

      {/* Conditionally render DataTableBulkActions only when rows are selected */}
      {showBulkActions && bulkActionButtons !== undefined && (
        <DataTableBulkActions
          selectedRowsCount={table.getFilteredSelectedRowModel().rows.length}
          onClearSelection={() => table.toggleAllRowsSelected(false)}
          active={showBulkActions}
        >
          {bulkActionButtons}
        </DataTableBulkActions>
      )}

      <div className="rounded-md border">
        <Table id={tableId}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="font-semibold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={
                    striped && row.index % 2 === 1 ? 'bg-accent/50' : ''
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 p-4 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination
        table={table}
        showFirstLastPageButtons={showFirstLastPageButtons}
        showDisplayCount={showDisplayCount}
        showPagination={showPagination}
      />
    </div>
  );
}
