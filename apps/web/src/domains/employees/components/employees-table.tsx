"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";

import { DataTable } from "@payroll/ui/composites/data-table/data-table";
import { Badge } from "@payroll/ui/components/badge/badge";
import type { Employee, PaginatedResponse } from "@payroll/types";

import { type EmployeeQueryParams } from "../types";

const columns = [
  { key: "firstName", header: "Prénom" },
  { key: "lastName", header: "Nom" },
  { key: "email", header: "Email" },
  { key: "department", header: "Département" },
  { key: "contractType", header: "Contrat" },
  {
    key: "salary",
    header: "Salaire brut (€)",
    cell: (item: Employee) => (
      <span className="font-mono">
        {item.salary.toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
        })}
      </span>
    ),
  },
  {
    key: "weeklyHours",
    header: "Heures/semaine",
    cell: (item: Employee) => <span>{item.weeklyHours}h</span>,
  },
  {
    key: "status",
    header: "Statut",
    cell: (item: Employee) => (
      <Badge variant={item.status === "active" ? "default" : "secondary"}>
        {item.status === "active"
          ? "Actif"
          : item.status === "on_leave"
            ? "En congé"
            : "Inactif"}
      </Badge>
    ),
  },
  {
    key: "hireDate",
    header: "Date d'embauche",
    cell: (item: Employee) => (
      <span>{new Date(item.hireDate).toLocaleDateString("fr-FR")}</span>
    ),
  },
];

export function EmployeesTable({
  initialData,
  searchParams,
}: {
  initialData: PaginatedResponse<Employee>;
  searchParams: EmployeeQueryParams;
}) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 500);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const params = new URLSearchParams(
    searchParams as unknown as URLSearchParams,
  );

  React.useEffect(() => {
    console.log("debouncedSearch: ", debouncedSearch);
    React.startTransition(() => {
      params.set("search", debouncedSearch);
      router.push(`/employees?${params.toString()}`);
    });
  }, [debouncedSearch, router]);

  const handlePageChange = (nextPage: number) => {
    React.startTransition(() => {
      params.set("page", nextPage.toString());
      router.push(`/employees?${params.toString()}`);
    });
  };

  return (
    <DataTable<Employee>
      data={initialData}
      columns={columns}
      searchPlaceholder="Rechercher un employé..."
      onPageChange={handlePageChange}
      currentPage={searchParams.page || 1}
      searchKey={debouncedSearch}
      onSearchChange={handleSearch}
    />
  );
}
