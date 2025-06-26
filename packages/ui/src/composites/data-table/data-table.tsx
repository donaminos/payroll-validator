import * as React from "react";

import { cn } from "@payroll/ui/lib/utils";
import { Table } from "../../components/ui/table/table";
import { TableHeader } from "../../components/ui/table/table-header";
import { TableBody } from "../../components/ui/table/table-body";
import { TableHead } from "../../components/ui/table/table-head";
import { TableRow } from "../../components/ui/table/table-row";
import { TableCell } from "../../components/ui/table/table-cell";
import { TableSearch } from "../../components/ui/table/table-search";
import { TablePagination } from "../../components/ui/table/table-pagination";

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
    <div className={cn(" bg-white", className)}>
      {/* Search */}
      {searchKey && (
        <div className="flex items-center justify-between px-6 py-4">
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
      <div className="border">
        <Table className="min-h-96">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={String(column.key)}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={String(column.key)}>
                      {column.cell
                        ? column.cell(item)
                        : String(item[column.key] ?? "")}
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
