import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "COMPONENTS/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Badge component is used to highlight status, categories, or metadata. It supports multiple variants and is accessible by default.\n\n**Accessibility:**\n- Uses semantic <span>\n- Keyboard and screen reader friendly\n- Proper color contrast\n\n**Best Practices:**\n- Use for short, descriptive labels\n- Use variant="destructive" for errors\n- Combine with icons for clarity
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
    children: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  name: "All Variants",
};

export const StatusBadges: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Badge variant="default"><CheckCircle className="text-green-600" /> Validé</Badge>
      <Badge variant="destructive"><XCircle className="text-red-600" /> Erreur</Badge>
      <Badge variant="secondary"><AlertTriangle className="text-yellow-600" /> Avertissement</Badge>
    </div>
  ),
  name: "Status Badges (Mock Data)",
  parameters: {
    docs: {
      description: {
        story: `
Mock data example: Use badges to indicate payroll validation status.\n- Green: Validé\n- Red: Erreur\n- Yellow: Avertissement
        `,
      },
    },
  },
};

export const FocusAndAria: Story = {
  render: () => (
    <Badge tabIndex={0} aria-label="Important badge" variant="outline">
      Focusable Badge
    </Badge>
  ),
  name: "Focus & ARIA",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Badge is focusable and has an ARIA label for screen readers.\n- Tab to focus\n- Inspect accessibility tree
        `,
      },
    },
  },
}; 