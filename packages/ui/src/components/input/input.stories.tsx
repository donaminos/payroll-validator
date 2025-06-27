import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "COMPONENTS/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Input component is a styled, accessible input for forms. Supports all native input types and states.\n\n**Accessibility:**\n- Keyboard and screen reader friendly\n- Proper focus ring and aria-invalid\n- Use with <label> for best results\n\n**Best Practices:**\n- Use type="text" for general input\n- Use aria-invalid for validation\n- Use placeholder for hints, not labels
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Nom de l'employé",
  },
  render: (args: any) => (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <Input {...args} />
    </div>
  ),
};

export const WithMockData: Story = {
  render: () => {
    const [value, setValue] = useState("Jean Dupont");
    return (
      <div style={{ maxWidth: 400, margin: "40px auto" }}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nom de l'employé"
        />
      </div>
    );
  },
  name: "With Mock Payroll Data",
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Mot de passe...",
  },
  render: (args: any) => (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <Input {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Champ désactivé",
    disabled: true,
  },
  render: (args: any) => (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <Input {...args} />
    </div>
  ),
};

export const ValidationTest: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const isInvalid = value.length > 0 && value.length < 3;
    return (
      <div
        style={{
          maxWidth: 400,
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Code employé (min 3 caractères)"
          aria-invalid={isInvalid}
        />
        {isInvalid && (
          <span style={{ color: "#dc2626", fontSize: 12 }}>
            Le code doit comporter au moins 3 caractères.
          </span>
        )}
      </div>
    );
  },
  name: "Validation & Accessibility",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Shows validation error and aria-invalid.\n- Try less than 3 characters\n- Error message appears\n- Input has aria-invalid=true
        `,
      },
    },
  },
};
