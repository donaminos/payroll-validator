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

type DataTableProps<T> = {
  data: {
    data: Array<T>;
    pagination: {
      page: number;
      limit: number;
      totalItems: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
  columns: Array<{
    key: string;
    header: string;
    cell?: (item: T) => React.ReactNode;
    /**
     * Tailwind classes for column styling and width.
     * Common width classes: w-24 (96px), w-32 (128px), w-40 (160px),
     * w-48 (192px), w-64 (256px), w-72 (288px), w-96 (384px)
     * Example: "w-48 text-center" for fixed width with center alignment
     */
    className?: string;
  }>;
  searchKey: string;
  searchPlaceholder?: string;
  className?: string;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  currentPage: number;
  searchDisabled?: boolean;
};

export function DataTable<T>({
  data,
  columns,
  searchPlaceholder,
  className,
  onPageChange,
  onSearchChange,
  searchKey,
  currentPage,
  searchDisabled,
}: DataTableProps<T>) {
  const { data: paginatedData, pagination } = data;
  const totalPages = pagination.totalPages;

  return (
    <div className={cn("bg-white rounded-xl shadow-xs", className)}>
      <div className="flex items-center justify-between px-6 py-4">
        {!searchDisabled && (
          <SearchInput
            placeholder={searchPlaceholder}
            value={searchKey}
            onValueChange={onSearchChange}
            className="w-72"
          />
        )}
        <div className="text-xs text-muted-foreground text-right w-full">
          {paginatedData.length} of {pagination.totalItems} items
        </div>
      </div>

      <div className="">
        <Table className="min-h-96">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={String(column.key)}
                  className={cn("whitespace-nowrap", column.className)}
                >
                  {column.header}
                </TableHead>
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
                    <TableCell
                      key={String(column.key)}
                      className={cn("whitespace-nowrap", column.className)}
                    >
                      {column.cell
                        ? column.cell(item)
                        : String(item[column.key as keyof T] ?? "")}
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
