import React from "react";
import { Badge } from "../badge/badge";
import { Button } from "../button/button";
import { DataTable } from "./data-table";

// Example data type for French payroll employees
interface PayrollEmployee {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
  status: "active" | "inactive";
  startDate: string;
  hoursWorked: number;
  overtimeHours: number;
}

// Example data
const payrollData: PayrollEmployee[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@entreprise.fr",
    department: "Ingénierie",
    salary: 45000,
    status: "active",
    startDate: "2023-01-15",
    hoursWorked: 160,
    overtimeHours: 8,
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie.martin@entreprise.fr",
    department: "Marketing",
    salary: 42000,
    status: "active",
    startDate: "2023-03-20",
    hoursWorked: 152,
    overtimeHours: 0,
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "pierre.durand@entreprise.fr",
    department: "Ventes",
    salary: 48000,
    status: "inactive",
    startDate: "2022-11-10",
    hoursWorked: 0,
    overtimeHours: 0,
  },
  {
    id: "4",
    name: "Sophie Bernard",
    email: "sophie.bernard@entreprise.fr",
    department: "Ingénierie",
    salary: 52000,
    status: "active",
    startDate: "2023-02-05",
    hoursWorked: 168,
    overtimeHours: 12,
  },
  {
    id: "5",
    name: "Lucas Petit",
    email: "lucas.petit@entreprise.fr",
    department: "RH",
    salary: 38000,
    status: "active",
    startDate: "2023-04-12",
    hoursWorked: 160,
    overtimeHours: 0,
  },
];

// Column definitions
const columns = [
  {
    key: "name" as keyof PayrollEmployee,
    header: "Nom",
  },
  {
    key: "email" as keyof PayrollEmployee,
    header: "Email",
  },
  {
    key: "department" as keyof PayrollEmployee,
    header: "Département",
  },
  {
    key: "salary" as keyof PayrollEmployee,
    header: "Salaire",
    cell: (item: PayrollEmployee) => (
      <span className="font-mono">
        {new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(item.salary)}
      </span>
    ),
  },
  {
    key: "hoursWorked" as keyof PayrollEmployee,
    header: "Heures travaillées",
    cell: (item: PayrollEmployee) => (
      <span className="font-mono">
        {item.hoursWorked}h
      </span>
    ),
  },
  {
    key: "overtimeHours" as keyof PayrollEmployee,
    header: "Heures supplémentaires",
    cell: (item: PayrollEmployee) => (
      <span className={item.overtimeHours > 0 ? "text-orange-600 font-medium" : "text-muted-foreground"}>
        {item.overtimeHours}h
      </span>
    ),
  },
  {
    key: "status" as keyof PayrollEmployee,
    header: "Statut",
    cell: (item: PayrollEmployee) => (
      <Badge variant={item.status === "active" ? "default" : "secondary"}>
        {item.status === "active" ? "Actif" : "Inactif"}
      </Badge>
    ),
  },
  {
    key: "startDate" as keyof PayrollEmployee,
    header: "Date de début",
    cell: (item: PayrollEmployee) => (
      <span>
        {new Date(item.startDate).toLocaleDateString("fr-FR")}
      </span>
    ),
  },
  {
    key: "actions" as keyof PayrollEmployee,
    header: "Actions",
    cell: (item: PayrollEmployee) => (
      <div className="flex gap-2">
        <Button size="sm" variant="outline">
          Modifier
        </Button>
        <Button size="sm" variant="outline">
          Voir
        </Button>
      </div>
    ),
  },
];

export function PayrollTableExample() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Validation des Paies</h2>
        <p className="text-muted-foreground">
          Tableau des employés avec validation des heures et salaires selon la législation française.
        </p>
      </div>
      
      <DataTable
        data={payrollData}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Rechercher un employé..."
        itemsPerPage={5}
        className="max-w-7xl"
      />
    </div>
  );
} 