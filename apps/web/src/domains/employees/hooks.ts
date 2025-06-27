import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { type EmployeeQueryParams } from "./types";

export function useURLParams() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const updateUrlParams = React.useCallback(
    (params: Partial<EmployeeQueryParams>) => {
      const newParams = { ...searchParams, ...params };
      const query = new URLSearchParams(
        newParams as unknown as URLSearchParams,
      );
      router.push(`/employees?${query.toString()}`);
    },
    [router, searchParams],
  );

  return { updateUrlParams };
}
