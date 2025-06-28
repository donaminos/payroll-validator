import { Suspense } from "react";

import { EmployeesTableFetcher } from "@/domains/employees/components/employees-table-fetcher";
import { DataTableSkeleton } from "@payroll/ui/composites/data-table-skeleton/data-table-skeleton";
import { PageTitle } from "@/shared/components/page-title/page-title";
import { type EmployeeQueryParams } from "@/domains/employees/types";
import { Button } from "@payroll/ui/components/button/button";
import { AddEmployeeDrawer } from "@/domains/employees/components/add-employee-drawer";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function EmployeesView(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const params = {
    page: Number(searchParams?.page) || 1,
    limit: Number(searchParams?.limit) || 10,
    search: searchParams?.search,
  } as EmployeeQueryParams;

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle
          title="Liste des employés"
          description="Gérez vos employés en toute simplicité."
        />
        <AddEmployeeDrawer />
      </div>

      <Suspense fallback={<DataTableSkeleton />}>
        <EmployeesTableFetcher searchParams={params} />
      </Suspense>
    </>
  );
}
