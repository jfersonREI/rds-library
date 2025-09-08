// components/ui/data-table-toolbar.tsx
import { Table, Column } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Printer, Columns, CloudDownload, XIcon } from 'lucide-react';
import React from 'react'; // Reverted: Removed useState and useEffect imports
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  children?: React.ReactNode;
  enableGlobalFilter?: boolean;
  excludedPrintColumnIds?: string[];
  showPrintButton?: boolean;
  showExportCsvButton?: boolean;
  showViewColumnsButton?: boolean;
}

export function DataTableToolbar<TData>({
  table,
  children,
  enableGlobalFilter = false,
  excludedPrintColumnIds = [],
  showPrintButton = true,
  showExportCsvButton = true,
  showViewColumnsButton = true,
}: DataTableToolbarProps<TData>) {
  // Helper function to get the display header name for print/CSV
  const getColumnPrintHeader = (column: Column<TData>): string => {
    // Try to get from meta.columnTitle first
    if (column.columnDef.meta && (column.columnDef.meta as any).columnTitle) {
      return (column.columnDef.meta as any).columnTitle;
    }
    // Fallback to string header directly from columnDef
    if (typeof column.columnDef.header === 'string') {
      return column.columnDef.header;
    }
    // Fallback to accessorKey or id
    return String(column.id);
  };

  const handlePrint = () => {
    const allRows = table.getCoreRowModel().rows;
    const allLeafColumns = table.getAllLeafColumns();

    const printableColumns = allLeafColumns.filter(
      (column) =>
        !excludedPrintColumnIds.includes(column.id) &&
        (!column.columnDef.meta ||
          (column.columnDef.meta as any).printable !== false)
    );

    let tableHtml = '<table style="width:100%; border-collapse: collapse;">';
    tableHtml += '<thead><tr>';
    printableColumns.forEach((column) => {
      const headerText = getColumnPrintHeader(column);
      tableHtml += `<th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2; font-weight: bold;">${headerText}</th>`;
    });
    tableHtml += '</tr></thead>';

    tableHtml += '<tbody>';
    allRows.forEach((row) => {
      tableHtml += '<tr>';
      printableColumns.forEach((column) => {
        const cellValue = row.getValue(column.id);
        tableHtml += `<td style="border: 1px solid #ddd; padding: 8px; text-align: left; word-break: break-word; white-space: normal;">${String(cellValue ?? '')}</td>`;
      });
      tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table>';

    const printWindow = window.open('', '_blank', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print Table</title>');
      const styles = `
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; word-break: break-word; white-space: normal; }
        th { background-color: #f2f2f2; font-weight: bold; }
      `;
      printWindow.document.write(`<style>${styles}</style>`);
      printWindow.document.write('</head><body>');
      printWindow.document.write(tableHtml);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  const handleExportCsv = () => {
    const allRows = table.getCoreRowModel().rows;
    const allLeafColumns = table.getAllLeafColumns();

    const printableColumns = allLeafColumns.filter(
      (column) =>
        !excludedPrintColumnIds.includes(column.id) &&
        (!column.columnDef.meta ||
          (column.columnDef.meta as any).printable !== false)
    );

    // CSV Header
    const csvHeader = printableColumns
      .map((column) => {
        const headerText = getColumnPrintHeader(column);
        // Escape double quotes by replacing them with two double quotes, then enclose in double quotes
        return `"${headerText.replace(/"/g, '""')}"`;
      })
      .join(',');

    // CSV Body
    const csvBody = allRows
      .map((row) => {
        return printableColumns
          .map((column) => {
            let cellValue = row.getValue(column.id);
            // Ensure values are strings and handle null/undefined
            const formattedValue = String(cellValue ?? '');
            // Escape double quotes and enclose in double quotes if it contains commas or double quotes
            return `"${formattedValue.replace(/"/g, '""')}"`;
          })
          .join(',');
      })
      .join('\n');

    const csvContent = `${csvHeader}\n${csvBody}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    // Generate dynamic filename with current date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const filename = `table_data_${year}-${month}-${day}.csv`;

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const globalFilterValue = table.getState().globalFilter ?? '';

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        {enableGlobalFilter && (
          <div className="relative w-full max-w-sm">
            <Input
              placeholder="Search all columns..."
              value={globalFilterValue}
              onChange={(event) => table.setGlobalFilter(event.target.value)}
              className="pr-8"
            />
            {globalFilterValue && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                onClick={() => table.setGlobalFilter('')}
              >
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>
        )}

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex gap-2">
            {children}

            {/* Print Button (Icon only) */}
            {showPrintButton && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePrint}
                      aria-label="Print table"
                    >
                      <Printer className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Print</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {/* Export CSV Button (Icon only) */}
            {showExportCsvButton && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleExportCsv}
                      aria-label="Export as CSV"
                    >
                      <CloudDownload className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Export as CSV</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {/* Column Visibility Dropdown with Tooltip */}
            {showViewColumnsButton && (
              <DropdownMenu>
                <TooltipProvider>
                  <Tooltip>
                    <DropdownMenuTrigger asChild>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="ml-auto"
                          aria-label="View columns"
                        >
                          <Columns className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                    </DropdownMenuTrigger>
                    <TooltipContent>
                      <p>View columns</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <DropdownMenuContent align="end" className="shadow-lg">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {getColumnPrintHeader(column)}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
