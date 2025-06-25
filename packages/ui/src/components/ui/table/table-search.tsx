import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@payroll/ui/lib/utils";
import { Input } from "../input/input";

interface TableSearchProps {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

function TableSearch({ placeholder = "Search...", value, onValueChange, className }: TableSearchProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="pl-8"
      />
    </div>
  );
}

export { TableSearch }; 