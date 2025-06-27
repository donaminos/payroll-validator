import type { Employee } from "@payroll/types";
import { EmployeeQuerySchema } from "@payroll/schemas/employee";
import { API_EMPLOYEES_URL } from "@/shared/constants/routes";

async function getEmployees({ searchParams }: { searchParams: unknown }) {
  const params = EmployeeQuerySchema.parse(searchParams);
  const url = new URL(API_EMPLOYEES_URL);

  url.searchParams.set("page", params.page.toString());
  url.searchParams.set("limit", params.limit.toString());
  url.searchParams.set("search", params.search?.toString() ?? "");

  const res = await fetch(url.toString());

  if (!res.ok) throw new Error("Server error: cannot fetch employees");

  return res.json() as Promise<{
    data: Array<Employee>;
    pagination: {
      page: number;
      limit: number;
      totalItems: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  }>;
}

export type { Employee };
export { getEmployees };
