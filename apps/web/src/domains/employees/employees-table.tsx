import { DataTable } from "@payroll/ui/composites/data-table/data-table";
import { Badge } from "@payroll/ui/components/ui/badge/badge";
import React from "react";
import { Employee } from "../../../app/api/employees/data";

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

export async function EmployeesTable({
  initialData,
}: {
  initialData: Employee[];
}) {
  return (
    <DataTable
      data={initialData}
      columns={columns}
      searchPlaceholder="Rechercher un employé..."
      itemsPerPage={10}
    />
  );
}
