"use client";

import React from "react";
import { useDebounce } from "@uidotdev/usehooks";

import { DataTable } from "@payroll/ui/composites/data-table/data-table";
import { Badge } from "@payroll/ui/components/badge/badge";
import type { Employee, PaginatedResponse } from "@payroll/types";

import { type EmployeeQueryParams } from "../types";
import { useURLParams } from "../hooks";

const columns = [
  {
    key: "firstName",
    header: "Prénom",
    className: "w-48",
    cell: (item: Employee) => (
      <span className="truncate block">{item.firstName}</span>
    ),
  },
  {
    key: "lastName",
    header: "Nom",
    className: "w-48",
    cell: (item: Employee) => (
      <span className="truncate block">{item.lastName}</span>
    ),
  },
  {
    key: "email",
    header: "Email",
    className: "w-64",
    cell: (item: Employee) => (
      <span className="truncate block">{item.email}</span>
    ),
  },
  {
    key: "department",
    header: "Département",
    className: "w-40",
    cell: (item: Employee) => (
      <span className="truncate block">{item.department}</span>
    ),
  },
  {
    key: "contractType",
    header: "Contrat",
    className: "w-32",
    cell: (item: Employee) => (
      <span className="truncate block">{item.contractType}</span>
    ),
  },
  {
    key: "salary",
    header: "Salaire brut (€)",
    className: "w-36",
    cell: (item: Employee) => (
      <span className="font-mono truncate block">
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
    className: "w-32",
    cell: (item: Employee) => (
      <span className="truncate block">{item.weeklyHours}h</span>
    ),
  },
  {
    key: "status",
    header: "Statut",
    className: "w-24",
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
    className: "w-36",
    cell: (item: Employee) => (
      <span className="truncate block">
        {new Date(item.hireDate).toLocaleDateString("fr-FR")}
      </span>
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
  const [search, setSearch] = React.useState(searchParams.search || "");
  const debouncedSearch = useDebounce(search, 400);
  const { updateUrlParams } = useURLParams();

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handlePageChange = (nextPage: number) => {
    updateUrlParams({ page: nextPage });
  };

  const searchQuery = React.useMemo(() => {
    return searchParams.search?.toString() || "";
  }, [searchParams.search]);

  React.useEffect(() => {
    if (debouncedSearch.toString() !== searchQuery) {
      updateUrlParams({ search: debouncedSearch, page: 1 });
    }
  }, [debouncedSearch, searchQuery, updateUrlParams]);

  return (
    <DataTable<Employee>
      data={initialData}
      columns={columns}
      searchPlaceholder="Rechercher un employé..."
      onPageChange={handlePageChange}
      currentPage={searchParams.page || 1}
      searchKey={search}
      onSearchChange={handleSearch}
    />
  );
}
