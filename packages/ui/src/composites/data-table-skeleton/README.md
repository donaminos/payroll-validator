# DataTableSkeleton

A professional loading skeleton component for data tables that provides a realistic loading state while data is being fetched.

## Features

- **Realistic Structure**: Mimics actual data table layout with headers, rows, and cells
- **Customizable**: Configurable number of rows, columns, and UI elements
- **Responsive**: Works well on mobile and desktop layouts
- **Accessible**: Proper ARIA attributes and semantic HTML structure
- **Professional**: Smooth animations and consistent styling

## Usage

```tsx
import { DataTableSkeleton } from "@payroll/ui/components/composites/data-table-skeleton";

// Basic usage
<DataTableSkeleton />

// Custom configuration
<DataTableSkeleton
  rowCount={10}
  columnCount={6}
  showSearch={false}
  columnWidths={["200px", "150px", "300px", "100px"]}
/>
```

## Props

| Prop             | Type       | Default     | Description                             |
| ---------------- | ---------- | ----------- | --------------------------------------- |
| `rowCount`       | `number`   | `5`         | Number of skeleton rows to display      |
| `columnCount`    | `number`   | `4`         | Number of columns to display            |
| `showHeader`     | `boolean`  | `true`      | Whether to show header skeleton         |
| `showSearch`     | `boolean`  | `true`      | Whether to show search bar skeleton     |
| `showPagination` | `boolean`  | `true`      | Whether to show pagination skeleton     |
| `columnWidths`   | `string[]` | `undefined` | Custom column widths (CSS width values) |
| `className`      | `string`   | `undefined` | Additional CSS classes                  |

## Examples

### Default Skeleton

```tsx
<DataTableSkeleton />
```

### Compact Mobile Layout

```tsx
<DataTableSkeleton rowCount={3} columnCount={3} showSearch={false} />
```

### Large Desktop Table

```tsx
<DataTableSkeleton
  rowCount={15}
  columnCount={8}
  showHeader={true}
  showSearch={true}
  showPagination={true}
/>
```

### Custom Column Widths

```tsx
<DataTableSkeleton
  columnWidths={["120px", "200px", "150px", "100px", "180px"]}
  columnCount={5}
/>
```

### Table Only (No Search/Pagination)

```tsx
<DataTableSkeleton showSearch={false} showPagination={false} />
```

## Best Practices

1. **Match Real Table Structure**: Use the same number of columns as your actual data table
2. **Custom Widths**: Use `columnWidths` to match your table's column layout
3. **Mobile Optimization**: Reduce `rowCount` and `columnCount` for mobile layouts
4. **Consistent Loading**: Use the same skeleton configuration across similar tables
5. **Performance**: Keep `rowCount` reasonable (5-15 rows) to avoid performance issues

## Accessibility

- Uses semantic HTML table structure
- Includes proper ARIA attributes
- Maintains keyboard navigation support
- Provides visual feedback through animations

## Styling

The component uses Tailwind CSS classes and follows the design system's color scheme. The skeleton elements use the `bg-accent` color with `animate-pulse` for the loading animation.

## Integration with Suspense

Perfect for use with React Suspense boundaries:

```tsx
import { Suspense } from "react";
import { DataTableSkeleton } from "@payroll/ui/components/composites/data-table-skeleton";
import { EmployeesTable } from "./employees-table";

function EmployeesPage() {
  return (
    <Suspense fallback={<DataTableSkeleton />}>
      <EmployeesTable />
    </Suspense>
  );
}
```
