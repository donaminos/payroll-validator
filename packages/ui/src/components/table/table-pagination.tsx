"use client";

import React from "react";
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
  // For announcing page changes
  const liveRegionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = `Page ${currentPage} sur ${totalPages}`;
    }
  }, [currentPage, totalPages]);

  return (
    <nav
      aria-label="Pagination navigation"
      className={cn(
        "flex items-center justify-between text-xs px-4 py-2 border-t",
        className,
      )}
    >
      <div className="flex-1 text-muted-foreground">
        <span
          aria-live="polite"
          aria-atomic="true"
          ref={liveRegionRef}
          className="sr-only"
        />
        Page {currentPage} sur {totalPages}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="xs"
          onClick={() => onPageChange(1)}
          aria-label="Première page"
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="h-2 w-2" />
          <span className="sr-only">Première page</span>
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Page précédente"
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-2 w-2" />
          <span className="sr-only">Page précédente</span>
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Page suivante"
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-2 w-2" />
          <span className="sr-only">Page suivante</span>
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => onPageChange(totalPages)}
          aria-label="Dernière page"
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-2 w-2" />
          <span className="sr-only">Dernière page</span>
        </Button>
      </div>
    </nav>
  );
}

export { TablePagination };
