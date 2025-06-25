import * as React from "react";

import { cn } from "@payroll/ui/lib/utils";

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("bg-primary font-medium text-primary-foreground", className)}
      {...props}
    />
  );
}

export { TableFooter }; 