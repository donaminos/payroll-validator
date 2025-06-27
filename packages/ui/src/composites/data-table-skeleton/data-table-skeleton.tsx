import * as React from "react";

import { cn } from "@payroll/ui/lib/utils";
import { Skeleton } from "@payroll/ui/components/skeleton/skeleton";
import { Table } from "@payroll/ui/components/table/table";
import { TableBody } from "@payroll/ui/components/table/table-body";
import { TableCell } from "@payroll/ui/components/table/table-cell";
import { TableHead } from "@payroll/ui/components/table/table-head";
import { TableHeader } from "@payroll/ui/components/table/table-header";
import { TableRow } from "@payroll/ui/components/table/table-row";

export interface DataTableSkeletonProps {
  /**
   * Number of skeleton rows to display
   * @default 5
   */
  rowCount?: number;
  /**
   * Number of columns to display
   * @default 4
   */
  columnCount?: number;
  /**
   * Whether to show header skeleton
   * @default true
   */
  showHeader?: boolean;
  /**
   * Whether to show search bar skeleton
   * @default true
   */
  showSearch?: boolean;
  /**
   * Whether to show pagination skeleton
   * @default true
   */
  showPagination?: boolean;
  /**
   * Custom column widths (array of CSS width values)
   * @default undefined (auto-width)
   */
  columnWidths?: string[];
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * DataTableSkeleton component provides a professional loading state for data tables.
 * It mimics the structure of a real data table with skeleton placeholders.
 */
export function DataTableSkeleton({
  rowCount = 5,
  columnCount = 4,
  showHeader = true,
  showSearch = true,
  showPagination = true,
  columnWidths,
  className,
}: DataTableSkeletonProps) {
  const renderSkeletonCell = (index: number) => {
    const width = columnWidths?.[index];
    return (
      <TableCell key={index}>
        <Skeleton className={cn("h-4 w-full", width && { width })} />
      </TableCell>
    );
  };

  const renderSkeletonRow = (rowIndex: number) => (
    <TableRow key={rowIndex}>
      {Array.from({ length: columnCount }).map((_, colIndex) =>
        renderSkeletonCell(colIndex),
      )}
    </TableRow>
  );

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search Bar Skeleton */}
      {showSearch && (
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-80" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      )}

      {/* Table Skeleton */}
      <div className="rounded-md border">
        <Table>
          {/* Header Skeleton */}
          {showHeader && (
            <TableHeader>
              <TableRow>
                {Array.from({ length: columnCount }).map((_, index) => (
                  <TableHead key={index}>
                    <Skeleton
                      className={cn(
                        "h-4 w-20",
                        columnWidths?.[index] && { width: columnWidths[index] },
                      )}
                    />
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
          )}

          {/* Body Skeleton */}
          <TableBody>
            {Array.from({ length: rowCount }).map((_, index) =>
              renderSkeletonRow(index),
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Skeleton */}
      {showPagination && (
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-32" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      )}
    </div>
  );
}
