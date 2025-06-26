import { DataTable } from "@payroll/ui/components/ui/table/data-table";
import { Badge } from "@payroll/ui/components/ui/badge/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/ui/card/card";
import Link from "next/link";

interface Employee {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  hireDate: string;
  contractType: "CDI" | "CDD" | "Interim" | "Stage";
  salary: number;
  weeklyHours: number;
  status: "active" | "inactive" | "on_leave";
  managerId?: string;
  employeeNumber: string;
  socialSecurityNumber: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  lastUpdated: string;
}

interface EmployeesResponse {
  data: Employee[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  filters: {
    search: string;
    slug: string;
    department: string;
    status: string;
    contractType: string;
  };
}

interface EmployeesTableProps {
  searchParams: Record<string, string | string[] | undefined>;
}

async function fetchEmployees({
  page = 1,
  limit = 50,
  search = "",
}: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<EmployeesResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    ...(search ? { search } : {}),
  });
  const response = await fetch(
    `${baseUrl}/api/employees?${params.toString()}`,
    {
      next: { revalidate: 300 }, // Cache for 5 minutes
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
}

function getStatusBadge(status: Employee["status"]) {
  const variants: Record<
    Employee["status"],
    "default" | "secondary" | "outline"
  > = {
    active: "default",
    inactive: "secondary",
    on_leave: "outline",
  };

  const labels: Record<Employee["status"], string> = {
    active: "Actif",
    inactive: "Inactif",
    on_leave: "En congé",
  };

  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}

function getContractTypeBadge(contractType: Employee["contractType"]) {
  const variants: Record<
    Employee["contractType"],
    "default" | "secondary" | "outline"
  > = {
    CDI: "default",
    CDD: "secondary",
    Interim: "outline",
    Stage: "outline",
  };

  return <Badge variant={variants[contractType]}>{contractType}</Badge>;
}

function formatSalary(salary: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(salary);
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export async function EmployeesTable({ searchParams }: EmployeesTableProps) {
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";
  const employeesData = await fetchEmployees({ page, search });

  const columns = [
    {
      key: "employeeNumber" as keyof Employee,
      header: "N° Employé",
    },
    {
      key: "firstName" as keyof Employee,
      header: "Prénom",
    },
    {
      key: "lastName" as keyof Employee,
      header: "Nom",
    },
    {
      key: "email" as keyof Employee,
      header: "Email",
    },
    {
      key: "department" as keyof Employee,
      header: "Département",
    },
    {
      key: "position" as keyof Employee,
      header: "Poste",
    },
    {
      key: "contractType" as keyof Employee,
      header: "Contrat",
      cell: (employee: Employee) => getContractTypeBadge(employee.contractType),
    },
    {
      key: "salary" as keyof Employee,
      header: "Salaire",
      cell: (employee: Employee) => formatSalary(employee.salary),
    },
    {
      key: "weeklyHours" as keyof Employee,
      header: "H/semaine",
      cell: (employee: Employee) => `${employee.weeklyHours}h`,
    },
    {
      key: "status" as keyof Employee,
      header: "Statut",
      cell: (employee: Employee) => getStatusBadge(employee.status),
    },
    {
      key: "hireDate" as keyof Employee,
      header: "Date d'embauche",
      cell: (employee: Employee) => formatDate(employee.hireDate),
    },
  ];

  // Pagination controls
  const {
    page: currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  } = employeesData.pagination;
  const searchValue = search;

  function getPageHref(page: number) {
    const params = new URLSearchParams();
    if (searchValue) params.set("search", searchValue);
    params.set("page", String(page));
    return `?${params.toString()}`;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Liste des employés ({employeesData.pagination.totalItems} employés)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Search form */}
        <form className="mb-4 flex gap-2" method="get">
          <input
            type="text"
            name="search"
            defaultValue={searchValue}
            placeholder="Rechercher un employé..."
            className="border rounded px-3 py-2 w-64"
            aria-label="Rechercher un employé"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-primary text-white"
          >
            Rechercher
          </button>
        </form>
        <DataTable
          data={employeesData.data}
          columns={columns}
          itemsPerPage={employeesData.pagination.limit}
        />
        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {hasPreviousPage && (
            <Link
              href={getPageHref(currentPage - 1)}
              className="px-3 py-1 border rounded"
            >
              Précédent
            </Link>
          )}
          <span className="px-3 py-1">
            Page {currentPage} / {totalPages}
          </span>
          {hasNextPage && (
            <Link
              href={getPageHref(currentPage + 1)}
              className="px-3 py-1 border rounded"
            >
              Suivant
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
