import type { Employee } from "../../../app/api/employees/data";
import { EmployeesSearchParamsSchema } from "./types";
import { API_EMPLOYEES_URL } from "@/shared/constants/routes";

async function getEmployees({ searchParams }: { searchParams: unknown }) {
  const params = EmployeesSearchParamsSchema.parse(searchParams);
  const url = new URL(API_EMPLOYEES_URL);

  if (params.search) url.searchParams.set("search", params.search);
  if (params.slug) url.searchParams.set("slug", params.slug);
  if (params.sort) url.searchParams.set("sort", params.sort);
  if (params.order) url.searchParams.set("order", params.order);
  url.searchParams.set("page", params.page.toString());
  url.searchParams.set("limit", params.limit.toString());

  const res = await fetch(url.toString());

  if (!res.ok) throw new Error("Server error: cannot fetch employees");

  return res.json() as Promise<{
    data: Employee[];
    pagination: {
      page: number;
      limit: number;
      totalItems: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    filters: Record<string, string>;
  }>;
}

export type { Employee };
export { getEmployees };
