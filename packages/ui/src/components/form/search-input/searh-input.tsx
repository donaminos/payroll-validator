"use client";

import { Search } from "lucide-react";

import { cn } from "@payroll/ui/lib/utils";
import { Input } from "@payroll/ui/components/form/input/input";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

function SearchInput({
  placeholder = "Search...",
  value,
  onValueChange,
  className,
  ...props
}: SearchInputProps & React.ComponentProps<typeof Input>) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="pl-8 rounded-4xl h-8.5"
        {...props}
      />
    </div>
  );
}

export { SearchInput };
