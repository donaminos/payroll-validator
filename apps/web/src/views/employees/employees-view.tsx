import { Suspense } from "react";

import { EmployeesTableFetcher } from "@/domains/employees/components/employees-table-fetcher";
import { DataTableSkeleton } from "@payroll/ui/composites/data-table-skeleton/data-table-skeleton";
import { PageTitle } from "@/shared/components/page-title/page-title";
import { type EmployeeQueryParams } from "@/domains/employees/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function EmployeesView(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  console.log("EmployeesView searchParams: ", JSON.stringify(searchParams));
  console.log("--------------------------------");
  const params = {
    page: Number(searchParams?.page) || 1,
    limit: Number(searchParams?.limit) || 10,
    search: searchParams?.search,
  } as EmployeeQueryParams;

  return (
    <>
      <PageTitle
        title="Liste des employés"
        description="Gérez vos employés et leurs informations."
      />

      <Suspense fallback={<DataTableSkeleton />}>
        <EmployeesTableFetcher searchParams={params} />
      </Suspense>
    </>
  );
}
