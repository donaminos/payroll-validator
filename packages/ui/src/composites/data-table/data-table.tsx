"use client";

import * as React from "react";

import { cn } from "@payroll/ui/lib/utils";
import { Table } from "@payroll/ui/components/table/table";
import { TableHeader } from "@payroll/ui/components/table/table-header";
import { TableBody } from "@payroll/ui/components/table/table-body";
import { TableHead } from "@payroll/ui/components/table/table-head";
import { TableRow } from "@payroll/ui/components/table/table-row";
import { TableCell } from "@payroll/ui/components/table/table-cell";
import { SearchInput } from "@payroll/ui/components/form/search-input/searh-input";
import { TablePagination } from "@payroll/ui/components/table/table-pagination";

interface DataTableProps<T> {
  data: {
    data: T[];
    pagination: {
      page: number;
      limit: number;
      totalItems: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
  columns: {
    key: keyof T;
    header: string;
    cell?: (item: T) => React.ReactNode;
  }[];
  searchKey?: keyof T;
  searchPlaceholder?: string;
  className?: string;
  onPageChange: (page: number) => void;
  currentPage: number;
  searchDisabled?: boolean;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  searchPlaceholder,
  className,
  onPageChange,
  currentPage,
  searchDisabled,
}: DataTableProps<T>) {
  let searchValue = "";
  console.log("data: ", data);
  // Paginate data
  const { data: paginatedData, pagination } = data;
  const totalPages = pagination.totalPages;

  return (
    <div className={cn("bg-white rounded-xl shadow-sm", className)}>
      <div className="flex items-center justify-between px-6 py-4">
        {!searchDisabled && (
          <SearchInput
            placeholder={searchPlaceholder}
            value={searchValue}
            //  onValueChange={setSearchValue}
            className="w-72"
          />
        )}
        <div className="text-sm text-muted-foreground text-right w-full">
          {paginatedData.length} of {pagination.totalItems} items
        </div>
      </div>

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

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
