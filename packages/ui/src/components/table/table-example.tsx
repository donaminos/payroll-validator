import { Badge } from "../badge/badge";
import { Button } from "../button/button";
import { DataTable } from "../../composites/data-table/data-table";
import type { Employee } from "@payroll/types";
import React from "react";

const payrollData: Array<Employee> = [
  {
    id: "1",
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@entreprise.fr",
    department: "Ingénierie",
    salary: 45000,
    status: "active",
    hireDate: "2023-01-15",
    weeklyHours: 35,
    contractType: "CDI",
    slug: "jean-dupont",
    phone: "06 12 34 56 78",
    address: {
      street: "123 Rue de la Paix",
      city: "Paris",
      postalCode: "75000",
      country: "France",
    },
    lastUpdated: "2023-01-15",
  },
  {
    id: "2",
    firstName: "Marie",
    lastName: "Martin",
    email: "marie.martin@entreprise.fr",
    department: "Marketing",
    salary: 42000,
    status: "active",
    hireDate: "2023-03-20",
    weeklyHours: 35,
    contractType: "CDI",
    slug: "marie-martin",
    phone: "06 12 34 56 78",
  },
  {
    id: "3",
    firstName: "Pierre",
    lastName: "Durand",
    email: "pierre.durand@entreprise.fr",
    department: "Ventes",
    salary: 48000,
    status: "inactive",
    hireDate: "2022-11-10",
    weeklyHours: 35,
    contractType: "CDI",
    slug: "pierre-durand",
    phone: "06 12 34 56 78",
  },
  {
    id: "4",
    firstName: "Sophie",
    lastName: "Bernard",
    email: "sophie.bernard@entreprise.fr",
    department: "Ingénierie",
    salary: 52000,
    status: "active",
    hireDate: "2023-02-05",
    weeklyHours: 35,
    contractType: "CDI",
    slug: "sophie-bernard",
    phone: "06 12 34 56 78",
  },
  {
    id: "5",
    firstName: "Lucas",
    lastName: "Petit",
    email: "lucas.petit@entreprise.fr",
    department: "RH",
    salary: 38000,
    status: "active",
    hireDate: "2023-04-12",
    position: "Développeur Full-Stack",
    slug: "lucas-petit",
    phone: "06 12 34 56 78",
    contractType: "CDD",
  },
];

const columns: Array<{
  key: keyof Employee;
  header: string;
  cell?: (item: Employee) => React.ReactNode;
}> = [
  {
    key: "firstName",
    header: "Nom",
  },
  {
    key: "email",
    header: "Email",
  },
  {
    key: "department",
    header: "Département",
  },
  {
    key: "salary",
    header: "Salaire",
    cell: (item: Employee) => (
      <span className="font-mono">
        {new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(item.salary ?? 0)}
      </span>
    ),
  },
  {
    key: "weeklyHours",
    header: "Heures travaillées",
    cell: (item: Employee) => (
      <span className="font-mono">{item.weeklyHours}h</span>
    ),
  },
  {
    key: "weeklyHours",
    header: "Heures supplémentaires",
    cell: (item: Employee) => (
      <span
        className={
          item.weeklyHours && item.weeklyHours > 0
            ? "text-orange-600 font-medium"
            : "text-muted-foreground"
        }
      >
        {item.weeklyHours && item.weeklyHours > 0 ? item.weeklyHours - 35 : 0}h
      </span>
    ),
  },
  {
    key: "status",
    header: "Statut",
    cell: (item: Employee) => (
      <Badge variant={item.status === "active" ? "default" : "secondary"}>
        {item.status === "active" ? "Actif" : "Inactif"}
      </Badge>
    ),
  },
  {
    key: "hireDate",
    header: "Date de début",
    cell: (item: Employee) => (
      <span>{new Date(item.hireDate).toLocaleDateString("fr-FR")}</span>
    ),
  },
  {
    key: "id",
    header: "Actions",
    cell: () => (
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

const pagination = {
  page: 1,
  limit: 5,
  totalItems: payrollData.length,
  totalPages: 1,
  hasNextPage: false,
  hasPreviousPage: false,
};

export function PayrollTableExample() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Validation des Paies</h2>
        <p className="text-muted-foreground">
          Tableau des employés avec validation des heures et salaires selon la
          législation française.
        </p>
      </div>

      <DataTable<Employee>
        data={{
          data: payrollData,
          pagination,
        }}
        columns={columns}
        searchKey={searchValue}
        searchPlaceholder="Rechercher un employé..."
        className="max-w-7xl"
        onPageChange={setCurrentPage}
        onSearchChange={setSearchValue}
        currentPage={currentPage}
      />
    </div>
  );
}
