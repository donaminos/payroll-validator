"use client";

import { useRouter } from "next/navigation";
import { DataTable } from "@payroll/ui/composites/data-table/data-table";
import { Badge } from "@payroll/ui/components/badge/badge";
import React from "react";
import { Employee } from "../../../../app/api/employees/data";
import { type EmployeesSearchParams } from "../types";

const columns = [
  { key: "firstName" as const, header: "Prénom" },
  { key: "lastName" as const, header: "Nom" },
  { key: "email" as const, header: "Email" },
  { key: "department" as const, header: "Département" },
  { key: "contractType" as const, header: "Contrat" },
  {
    key: "salary" as const,
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
    key: "weeklyHours" as const,
    header: "Heures/semaine",
    cell: (item: Employee) => <span>{item.weeklyHours}h</span>,
  },
  {
    key: "status" as const,
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
    key: "hireDate" as const,
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
  initialData: Array<Employee>;
  searchParams: EmployeesSearchParams;
}) {
  const router = useRouter();

  const handlePageChange = (nextPage: number) => {
    React.startTransition(() => {
      const params = new URLSearchParams(
        searchParams as unknown as URLSearchParams,
      );
      params.set("page", nextPage.toString());
      console.log("handlePageChange: ", searchParams);
      router.push(`/employees?${params.toString()}`);
    });
  };

  return (
    <DataTable
      data={initialData}
      columns={columns}
      searchPlaceholder="Rechercher un employé..."
      onPageChange={handlePageChange}
      currentPage={searchParams.page || 1}
    />
  );
}
