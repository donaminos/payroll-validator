import * as React from "react";

import { cn } from "@payroll/ui/lib/utils";

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-14 px-4 text-left text-xs uppercase align-middle font-medium bg-secondary text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

export { TableHead };
