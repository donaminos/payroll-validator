"use client";

import React from "react";
import { useDebounce } from "@uidotdev/usehooks";

import { DataTable } from "@payroll/ui/composites/data-table/data-table";
import type { Employee, PaginatedResponse } from "@payroll/types";
import { StatusBadge } from "@payroll/ui/composites/status-badge/status-badge";
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
    cell: (item: Employee) => {
      return item.status === "active" ? (
        <StatusBadge status="success" label="Actif" />
      ) : item.status === "on_leave" ? (
        <StatusBadge status="warning" label="congé" />
      ) : (
        <StatusBadge status="error" label="Inactif" />
      );
    },
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
  const currentSearch = searchParams.search || "";
  const currentPage = searchParams.page || 1;

  const [inputValue, setInputValue] = React.useState(currentSearch);
  const debouncedSearch = useDebounce(inputValue, 400);

  const { updateUrlParams } = useURLParams({ searchParams });

  React.useEffect(() => {
    setInputValue(currentSearch);
  }, [currentSearch]);

  React.useEffect(() => {
    // if the debounced search is different from the current search, it means it's pagination of search value results
    if (debouncedSearch !== currentSearch) {
      updateUrlParams({ search: debouncedSearch, page: 1 });
    }
  }, [debouncedSearch, currentSearch, updateUrlParams]);

  const handleSearch = (value: string) => {
    setInputValue(value);
  };

  const handlePageChange = (nextPage: number) => {
    updateUrlParams({ page: nextPage });
  };

  return (
    <DataTable<Employee>
      data={initialData}
      columns={columns}
      searchPlaceholder="Rechercher un employé..."
      onPageChange={handlePageChange}
      currentPage={currentPage}
      searchKey={inputValue}
      onSearchChange={handleSearch}
    />
  );
}
