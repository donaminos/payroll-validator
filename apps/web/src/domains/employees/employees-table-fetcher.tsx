import { getEmployees } from "./service";
import { EmployeesTable } from "./employees-table";
import {
  EmployeesSearchParamsSchema,
  type EmployeesSearchParams,
} from "./types";

export async function EmployeesTableFetcher({
  searchParams,
}: {
  searchParams: EmployeesSearchParams;
}) {
  try {
    const validatedParams = EmployeesSearchParamsSchema.parse(searchParams);
    const { data } = await getEmployees({ searchParams: validatedParams });

    return <EmployeesTable initialData={data} />;
  } catch (error) {
    if (error) {
      console.error(error);
    }
    throw error;
  }
}
