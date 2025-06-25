import * as React from "react";

import { cn } from "@payroll/ui/lib/utils";
import { Table } from "./table";
import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";
import { TableHead } from "./table-head";
import { TableRow } from "./table-row";
import { TableCell } from "./table-cell";
import { TableSearch } from "./table-search";
import { TablePagination } from "./table-pagination";

interface DataTableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    header: string;
    cell?: (item: T) => React.ReactNode;
  }[];
  searchKey?: keyof T;
  searchPlaceholder?: string;
  itemsPerPage?: number;
  className?: string;
}

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  searchKey,
  searchPlaceholder,
  itemsPerPage = 10,
  className,
}: DataTableProps<T>) {
  const [searchValue, setSearchValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  // Filter data based on search
  const filteredData = React.useMemo(() => {
    if (!searchValue || !searchKey) return data;
    
    return data.filter((item) => {
      const value = item[searchKey];
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchValue.toLowerCase());
      }
      if (typeof value === "number") {
        return value.toString().includes(searchValue);
      }
      return false;
    });
  }, [data, searchValue, searchKey]);

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search */}
      {searchKey && (
        <div className="flex items-center justify-between">
          <TableSearch
            placeholder={searchPlaceholder}
            value={searchValue}
            onValueChange={setSearchValue}
            className="w-[300px]"
          />
          <div className="text-sm text-muted-foreground">
            {filteredData.length} of {data.length} items
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={String(column.key)}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={String(column.key)}>
                      {column.cell ? column.cell(item) : String(item[column.key] ?? "")}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export { DataTable }; 