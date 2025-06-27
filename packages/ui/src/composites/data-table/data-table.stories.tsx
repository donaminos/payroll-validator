import { Badge } from "@payroll/ui/components/badge/badge";
import { Button } from "@payroll/ui/components/button/button";

import { DataTable } from "./data-table";

export default {
  title: "COMPOSITES/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  // tags: ["autodocs"],
  argTypes: {
    itemsPerPage: {
      control: { type: "number", min: 1, max: 50 },
    },
    data: {
      control: { type: "object" },
    },
    columns: {
      control: { type: "object" },
    },
    searchKey: {
      control: { type: "string" },
    },
    searchPlaceholder: {
      control: { type: "string" },
    },
    className: {
      control: { type: "string" },
    },
    onPageChange: {
      control: { type: "function" },
    },
    currentPage: {
      control: { type: "number", min: 1, max: 50 },
    },
  },
};

const sampleData = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    department: "Engineering",
    salary: 45000,
    status: "active",
    startDate: "2023-01-15",
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie.martin@example.com",
    department: "Marketing",
    salary: 42000,
    status: "active",
    startDate: "2023-03-20",
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "pierre.durand@example.com",
    department: "Sales",
    salary: 48000,
    status: "inactive",
    startDate: "2022-11-10",
  },
  {
    id: "4",
    name: "Sophie Bernard",
    email: "sophie.bernard@example.com",
    department: "Engineering",
    salary: 52000,
    status: "active",
    startDate: "2023-02-05",
  },
  {
    id: "5",
    name: "Lucas Petit",
    email: "lucas.petit@example.com",
    department: "HR",
    salary: 38000,
    status: "active",
    startDate: "2023-04-12",
  },
  {
    id: "6",
    name: "Emma Roux",
    email: "emma.roux@example.com",
    department: "Marketing",
    salary: 41000,
    status: "active",
    startDate: "2023-01-30",
  },
  {
    id: "7",
    name: "Thomas Moreau",
    email: "thomas.moreau@example.com",
    department: "Engineering",
    salary: 55000,
    status: "active",
    startDate: "2022-09-15",
  },
  {
    id: "8",
    name: "Julie Simon",
    email: "julie.simon@example.com",
    department: "Sales",
    salary: 46000,
    status: "inactive",
    startDate: "2023-05-20",
  },
  {
    id: "9",
    name: "Nicolas Michel",
    email: "nicolas.michel@example.com",
    department: "Engineering",
    salary: 49000,
    status: "active",
    startDate: "2023-03-08",
  },
  {
    id: "10",
    name: "Camille Leroy",
    email: "camille.leroy@example.com",
    department: "Marketing",
    salary: 43000,
    status: "active",
    startDate: "2023-02-18",
  },
  {
    id: "11",
    name: "Antoine Girard",
    email: "antoine.girard@example.com",
    department: "Sales",
    salary: 47000,
    status: "active",
    startDate: "2023-01-25",
  },
  {
    id: "12",
    name: "Léa Bonnet",
    email: "lea.bonnet@example.com",
    department: "HR",
    salary: 39000,
    status: "active",
    startDate: "2023-04-05",
  },
];

const columns = [
  {
    key: "name" as const,
    header: "Name",
  },
  {
    key: "email" as const,
    header: "Email",
  },
  {
    key: "department" as const,
    header: "Department",
  },
  {
    key: "salary" as const,
    header: "Salary",
    cell: (item: (typeof sampleData)[0]) => (
      <span className="font-mono">
        {new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(item.salary)}
      </span>
    ),
  },
  {
    key: "status" as const,
    header: "Status",
    cell: (item: (typeof sampleData)[0]) => (
      <Badge variant={item.status === "active" ? "default" : "secondary"}>
        {item.status}
      </Badge>
    ),
  },
  {
    key: "startDate" as const,
    header: "Start Date",
    cell: (item: (typeof sampleData)[0]) => (
      <span>{new Date(item.startDate).toLocaleDateString("fr-FR")}</span>
    ),
  },
  {
    key: "actions" as const,
    header: "Actions",
    cell: () => (
      <div className="flex gap-2">
        <Button size="sm" variant="outline">
          Edit
        </Button>
        <Button size="sm" variant="outline">
          View
        </Button>
      </div>
    ),
  },
];

export const Default = {
  args: {
    data: {
      data: sampleData,
      pagination: {
        page: 1,
        limit: 10,
        totalItems: sampleData.length,
        totalPages: Math.ceil(sampleData.length / 10),
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    columns,
    searchKey: "name",
    searchPlaceholder: "Search employees...",
    currentPage: 1,
    className: "max-w-7xl mx-auto",
  },
};

export const WithoutSearch = {
  args: {
    data: {
      data: sampleData,
      pagination: {
        page: 1,
        limit: 10,
        totalItems: sampleData.length,
        totalPages: Math.ceil(sampleData.length / 10),
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    searchDisabled: true,
    columns,
    currentPage: 1,
    className: "max-w-7xl mx-auto",
  },
};

export const LargeDataset = {
  args: {
    data: {
      data: Array.from({ length: 100 }, (_, i) => ({
        id: String(i + 1),
        name: `Employee ${i + 1}`,
        email: `employee${i + 1}@example.com`,
        department: ["Engineering", "Marketing", "Sales", "HR"][i % 4],
        salary: 35000 + i * 500,
        status: i % 10 === 0 ? "inactive" : "active",
        startDate: new Date(2023, 0, 1 + i).toISOString().split("T")[0],
      })),
      pagination: {
        page: 1,
        limit: 100,
        totalItems: 100,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    columns,
    searchKey: "name",
    searchPlaceholder: "Search by name...",
    currentPage: 1,
    className: "max-w-7xl mx-auto",
  },
};
