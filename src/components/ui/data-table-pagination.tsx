import { Table } from '@tanstack/react-table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  useNavigate,
  useLocation,
  createSearchParams,
  useSearchParams,
} from 'react-router';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  showFirstLastPageButtons?: boolean;
  showDisplayCount?: boolean;
  showPagination?: boolean;
}

export function DataTablePagination<TData>({
  table,
  showFirstLastPageButtons = false,
  showDisplayCount = false,
  showPagination = true,
}: DataTablePaginationProps<TData>) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (!showPagination) {
    return null;
  }

  const currentPage = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const totalRows = table.getFilteredRowModel().rows.length;
  const totalPages = table.getPageCount();
  const firstRowOnPage = totalRows > 0 ? currentPage * pageSize + 1 : 0;
  const lastRowOnPage = Math.min((currentPage + 1) * pageSize, totalRows);

  const getPageNumbers = () => {
    const totalPages = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex;

    const firstPageIndex = 0;
    const lastPageIndex = totalPages - 1;

    const numPagesToShowAtEdges = 5;
    const numSiblingsAroundCurrent = 1;

    if (totalPages <= numPagesToShowAtEdges + 2) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    const showStartBlock = currentPage < numPagesToShowAtEdges - 1;
    const showEndBlock = currentPage >= totalPages - numPagesToShowAtEdges;

    if (showStartBlock) {
      const pages = Array.from({ length: numPagesToShowAtEdges }, (_, i) => i);
      return [...pages, 'ellipsis', lastPageIndex];
    } else if (showEndBlock) {
      const pages = Array.from(
        { length: numPagesToShowAtEdges },
        (_, i) => lastPageIndex - numPagesToShowAtEdges + 1 + i
      );
      return [firstPageIndex, 'ellipsis', ...pages];
    } else {
      const pages = Array.from(
        { length: numSiblingsAroundCurrent * 2 + 1 },
        (_, i) => currentPage - numSiblingsAroundCurrent + i
      );
      return [firstPageIndex, 'ellipsis', ...pages, 'ellipsis', lastPageIndex];
    }
  };

  return (
    <div className="flex flex-col space-y-4 py-4">
      {/* Row Selection Status - Only displays if one or more rows are selected */}
      {table.getFilteredSelectedRowModel().rows.length > 0 && (
        <div className="text-muted-foreground text-sm font-semibold">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getCoreRowModel().rows.length} rows selected
        </div>
      )}

      <div className="flex flex-col-reverse space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        {/* Display Count */}
        {showDisplayCount && (
          <div className="text-muted-foreground text-sm lg:mr-auto">
            {totalRows > 0
              ? `Showing ${firstRowOnPage}–${lastRowOnPage} of ${totalRows}`
              : '0 of 0'}
          </div>
        )}

        {/* Right-aligned group: Rows per page and Pagination controls */}
        <div className="flex flex-col-reverse items-center space-y-4 space-x-2 lg:flex-row lg:space-y-0 lg:space-x-4">
          {/* Rows per page dropdown */}
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${pageSize}`}
              onValueChange={(value) => {
                navigate({
                  pathname: location.pathname,
                  search: createSearchParams({
                    ...Object.fromEntries(searchParams.entries()),
                    page: String(1),
                    size: String(value),
                  }).toString(),
                });
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((sizeOption) => (
                  <SelectItem key={sizeOption} value={`${sizeOption}`}>
                    {sizeOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Full Pagination Controls */}
          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              {showFirstLastPageButtons && (
                <PaginationItem>
                  <PaginationLink
                    to={{
                      pathname: location.pathname,
                      search: createSearchParams({
                        ...Object.fromEntries(searchParams.entries()),
                        page: '1',
                        size: String(pageSize),
                      }).toString(),
                    }}
                    aria-disabled={!table.getCanPreviousPage()}
                    className={
                      !table.getCanPreviousPage()
                        ? 'pointer-events-none opacity-50'
                        : ''
                    }
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationPrevious
                  to={{
                    pathname: location.pathname,
                    search: createSearchParams({
                      ...Object.fromEntries(searchParams.entries()),
                      page: String(currentPage),
                      size: String(pageSize),
                    }).toString(),
                  }}
                  aria-disabled={!table.getCanPreviousPage()}
                  className={
                    !table.getCanPreviousPage()
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }
                />
              </PaginationItem>

              {/* Individual Page Numbers with Ellipsis Logic */}
              {getPageNumbers().map((pageNumberOrEllipsis, index) => (
                <PaginationItem key={index}>
                  {typeof pageNumberOrEllipsis === 'number' ? (
                    <PaginationLink
                      to={{
                        pathname: location.pathname,
                        search: createSearchParams({
                          ...Object.fromEntries(searchParams.entries()),
                          page: String(pageNumberOrEllipsis + 1),
                          size: String(pageSize),
                        }).toString(),
                      }}
                      isActive={currentPage === pageNumberOrEllipsis}
                    >
                      {pageNumberOrEllipsis + 1}
                    </PaginationLink>
                  ) : (
                    <PaginationEllipsis />
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  to={{
                    pathname: location.pathname,
                    search: createSearchParams({
                      ...Object.fromEntries(searchParams.entries()),
                      page: String(currentPage + 2),
                      size: String(pageSize),
                    }).toString(),
                  }}
                  aria-disabled={!table.getCanNextPage()}
                  className={
                    !table.getCanNextPage()
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }
                />
              </PaginationItem>

              {showFirstLastPageButtons && (
                <PaginationItem>
                  <PaginationLink
                    to={{
                      pathname: location.pathname,
                      search: createSearchParams({
                        ...Object.fromEntries(searchParams.entries()),
                        page: String(totalPages),
                        size: String(pageSize),
                      }).toString(),
                    }}
                    aria-disabled={!table.getCanNextPage()}
                    className={
                      !table.getCanNextPage()
                        ? 'pointer-events-none opacity-50'
                        : ''
                    }
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </PaginationLink>
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
