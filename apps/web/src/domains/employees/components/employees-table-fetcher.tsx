import { getEmployees } from "../service";
import {
  EmployeesSearchParamsSchema,
  type EmployeesSearchParams,
} from "../types";

import { EmployeesTable } from "./employees-table";

export async function EmployeesTableFetcher({
  searchParams,
}: {
  searchParams: EmployeesSearchParams;
}) {
  try {
    const validatedParams = EmployeesSearchParamsSchema.parse(searchParams);
    const data = await getEmployees({ searchParams: validatedParams });

    return <EmployeesTable initialData={data} searchParams={searchParams} />;
  } catch (error) {
    if (error) {
      // TODO: Handle error
      console.error(error);
    }
    throw error;
  }
}
