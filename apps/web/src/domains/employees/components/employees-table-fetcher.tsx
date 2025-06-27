import { getEmployees } from "../service";
import { EmployeeQuerySchema } from "@payroll/schemas/employee";
import { type EmployeeQueryParams } from "../types";

import { EmployeesTable } from "./employees-table";

export async function EmployeesTableFetcher({
  searchParams,
}: {
  searchParams: EmployeeQueryParams;
}) {
  try {
    const validatedParams = EmployeeQuerySchema.parse(searchParams);
    console.log(
      "EmployeesTableFetcher validatedParams: ",
      JSON.stringify(validatedParams),
    );
    console.log("--------------------------------");
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
