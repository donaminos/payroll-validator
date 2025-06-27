import { Suspense } from "react";

import { EmployeesTableFetcher } from "@/domains/employees/components/employees-table-fetcher";
import { DataTableSkeleton } from "@payroll/ui/composites/data-table-skeleton/data-table-skeleton";
import { PageTitle } from "@/shared/components/page-title/page-title";
import { type EmployeesSearchParams } from "@/domains/employees/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function EmployeesView(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;
  const search = searchParams?.search || "";
  const sortBy = searchParams?.sortBy || "lastName";
  const order = searchParams?.order || "asc";
  const slug = searchParams?.slug || "";

  const params = {
    page,
    limit,
    search,
    sortBy,
    order,
    slug,
  } as EmployeesSearchParams;

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
