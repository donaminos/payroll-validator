"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { cn } from "@payroll/ui/lib/utils";

import { Button } from "../button/button";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: TablePaginationProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between text-xs px-4 py-2 border-t border-secondary",
        className,
      )}
    >
      <div className="flex-1text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="xs"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="h-2 w-2" />
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-2 w-2" />
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-2 w-2" />
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-2 w-2" />
        </Button>
      </div>
    </div>
  );
}

export { TablePagination };
