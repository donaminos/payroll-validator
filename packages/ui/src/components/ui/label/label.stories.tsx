import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";
import { Input } from "../input/input";

const meta: Meta<typeof Label> = {
  title: "COMPONENTS/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Label component provides accessible, styled labels for form fields. Built on Radix UI Label.\n\n**Accessibility:**\n- Uses <label> with htmlFor\n- Keyboard and screen reader friendly\n- Works with disabled and required fields\n\n**Best Practices:**\n- Always use with a form field\n- Use htmlFor to associate with input\n- Indicate required fields visually
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args: any) => (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <Label {...args} />
    </div>
  ),
  args: {
    children: "Nom de l'employé",
  },
};

export const WithInput: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: '40px auto', display: "flex", flexDirection: "column", gap: 8 }}>
      <Label htmlFor="employee-name">Nom de l'employé</Label>
      <Input id="employee-name" placeholder="Jean Dupont" />
    </div>
  ),
  name: "With Input (Mock Payroll Field)",
};

export const Disabled: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: '40px auto', display: "flex", flexDirection: "column", gap: 8 }}>
      <Label htmlFor="disabled-input">Champ désactivé</Label>
      <Input id="disabled-input" placeholder="Désactivé" disabled />
    </div>
  ),
};

export const AccessibilityTest: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: '40px auto', display: "flex", flexDirection: "column", gap: 8 }}>
      <Label htmlFor="test-access">Champ accessible</Label>
      <Input id="test-access" aria-required placeholder="Test" />
    </div>
  ),
  name: "Association & Accessibility",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Label is associated with input via htmlFor.\n- Click label to focus input\n- Input is required (aria-required)
        `,
      },
    },
  },
}; 