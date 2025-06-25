# Table Component

A comprehensive table component with search and pagination functionality, designed for the French payroll validation system.

## Features

- **Search**: Real-time filtering by any column
- **Pagination**: Configurable items per page with navigation controls
- **Responsive**: Mobile-first design with horizontal scrolling
- **Customizable**: Flexible column definitions with custom cell renderers
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels
- **TypeScript**: Full type safety with generic data support

## Basic Usage

```tsx
import { DataTable } from "@payroll/ui/components/ui/table";

interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
  status: "active" | "inactive";
}

const data: Employee[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    department: "Engineering",
    salary: 45000,
    status: "active",
  },
  // ... more data
];

const columns = [
  {
    key: "name" as keyof Employee,
    header: "Name",
  },
  {
    key: "email" as keyof Employee,
    header: "Email",
  },
  {
    key: "department" as keyof Employee,
    header: "Department",
  },
  {
    key: "salary" as keyof Employee,
    header: "Salary",
    cell: (item: Employee) => (
      <span className="font-mono">
        {new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(item.salary)}
      </span>
    ),
  },
  {
    key: "status" as keyof Employee,
    header: "Status",
    cell: (item: Employee) => (
      <Badge variant={item.status === "active" ? "default" : "secondary"}>
        {item.status}
      </Badge>
    ),
  },
];

function EmployeeTable() {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchKey="name"
      searchPlaceholder="Search employees..."
      itemsPerPage={10}
    />
  );
}
```

## Props

### DataTable Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | - | Array of data items to display |
| `columns` | `Column<T>[]` | - | Column definitions |
| `searchKey` | `keyof T` | - | Key to search by (optional) |
| `searchPlaceholder` | `string` | "Search..." | Placeholder text for search input |
| `itemsPerPage` | `number` | `10` | Number of items per page |
| `className` | `string` | - | Additional CSS classes |

### Column Definition

```tsx
interface Column<T> {
  key: keyof T;
  header: string;
  cell?: (item: T) => React.ReactNode;
}
```

- `key`: The property key from your data object
- `header`: The column header text
- `cell`: Optional custom renderer for the cell content

## Individual Components

You can also use the individual table components for more custom layouts:

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableSearch,
  TablePagination,
} from "@payroll/ui/components/ui/table";

function CustomTable() {
  return (
    <div className="space-y-4">
      <TableSearch
        placeholder="Search..."
        value={searchValue}
        onValueChange={setSearchValue}
      />
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
```

## French Payroll Context

The table component is specifically designed for French payroll validation with:

- **Currency formatting**: Euro (€) with French locale
- **Date formatting**: French date format (DD/MM/YYYY)
- **French labels**: Default placeholders and text in French
- **Legal compliance**: Support for French labor law data structures

## Accessibility

- Keyboard navigation support
- Screen reader friendly with proper ARIA labels
- Focus management for pagination controls
- High contrast support
- Responsive design for mobile devices

## Performance

- Virtual scrolling support for large datasets
- Debounced search input
- Memoized filtering and pagination
- Efficient re-rendering with React.memo

## Examples

See the Storybook stories for complete examples:
- Basic table with search and pagination
- Table without search functionality
- Large dataset handling
- Custom styling and layout 