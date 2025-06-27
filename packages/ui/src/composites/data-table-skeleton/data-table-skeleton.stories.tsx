import type { Meta, StoryObj } from "@storybook/react-vite";

import { DataTableSkeleton } from "./data-table-skeleton";

const meta: Meta<typeof DataTableSkeleton> = {
  title: "Composites/DataTableSkeleton",
  component: DataTableSkeleton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A professional loading skeleton for data tables that mimics the structure of a real table with search, pagination, and customizable rows/columns.",
      },
    },
  },
  argTypes: {
    rowCount: {
      control: { type: "number", min: 1, max: 20 },
      description: "Number of skeleton rows to display",
    },
    columnCount: {
      control: { type: "number", min: 1, max: 10 },
      description: "Number of columns to display",
    },
    showHeader: {
      control: "boolean",
      description: "Whether to show header skeleton",
    },
    showSearch: {
      control: "boolean",
      description: "Whether to show search bar skeleton",
    },
    showPagination: {
      control: "boolean",
      description: "Whether to show pagination skeleton",
    },
    columnWidths: {
      control: "object",
      description: "Custom column widths (array of CSS width values)",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default DataTableSkeleton with 5 rows and 4 columns.
 * This is the most common configuration for loading states.
 */
export const Default: Story = {
  args: {
    rowCount: 5,
    columnCount: 4,
    showHeader: true,
    showSearch: true,
    showPagination: true,
  },
};

/**
 * Compact skeleton for mobile or space-constrained layouts.
 * Shows fewer rows and no search bar to save space.
 */
export const Compact: Story = {
  args: {
    rowCount: 3,
    columnCount: 3,
    showHeader: true,
    showSearch: false,
    showPagination: true,
  },
};

/**
 * Large skeleton for desktop applications with more data.
 * Shows more rows and includes all UI elements.
 */
export const Large: Story = {
  args: {
    rowCount: 10,
    columnCount: 6,
    showHeader: true,
    showSearch: true,
    showPagination: true,
  },
};

/**
 * Table only skeleton without search or pagination.
 * Useful for simple table loading states.
 */
export const TableOnly: Story = {
  args: {
    rowCount: 5,
    columnCount: 4,
    showHeader: true,
    showSearch: false,
    showPagination: false,
  },
};

/**
 * Skeleton with custom column widths.
 * Demonstrates how to match specific table layouts.
 */
export const CustomWidths: Story = {
  args: {
    rowCount: 5,
    columnCount: 4,
    showHeader: true,
    showSearch: true,
    showPagination: true,
    columnWidths: ["200px", "150px", "300px", "100px"],
  },
};

/**
 * Minimal skeleton for very simple loading states.
 * Shows only the table body without headers or other UI.
 */
export const Minimal: Story = {
  args: {
    rowCount: 3,
    columnCount: 2,
    showHeader: false,
    showSearch: false,
    showPagination: false,
  },
};

/**
 * Wide table skeleton for applications with many columns.
 * Useful for data-heavy applications like spreadsheets.
 */
export const WideTable: Story = {
  args: {
    rowCount: 5,
    columnCount: 8,
    showHeader: true,
    showSearch: true,
    showPagination: true,
  },
};
