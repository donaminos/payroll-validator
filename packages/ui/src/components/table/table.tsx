import * as React from "react";

import { cn } from "@payroll/ui/lib/utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="w-full overflow-hidden">
      <table
        data-slot="table"
        className={cn(
          "w-full caption-bottom text-sm bg-white table-fixed",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Table };
