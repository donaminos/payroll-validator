import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusBadge } from "./status-badge";

const meta: Meta<typeof StatusBadge> = {
  title: "Composites/StatusBadge",
  component: StatusBadge,
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["pending", "in_progress", "unknown"],
      description: "Statut à afficher (pending, in_progress, unknown)",
      table: {
        type: { summary: '"pending" | "in_progress" | string' },
        defaultValue: { summary: "unknown" },
      },
    },
  },
  args: {
    status: "pending",
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Pending: Story = {
  args: { status: "pending" },
};

export const InProgress: Story = {
  args: { status: "in_progress" },
};

export const Unknown: Story = {
  args: { status: "unknown" },
};
