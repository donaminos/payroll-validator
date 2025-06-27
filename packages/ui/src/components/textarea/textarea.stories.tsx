import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";
import { useState } from "react";

const meta: Meta<typeof Textarea> = {
  title: "COMPONENTS/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Textarea component is a styled, accessible multiline input for forms.\n\n**Accessibility:**\n- Keyboard and screen reader friendly\n- Proper focus ring and aria-invalid\n- Use with <label> for best results\n\n**Best Practices:**\n- Use for notes or comments\n- Use aria-invalid for validation\n- Use placeholder for hints, not labels
        `,
      },
    },
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Ajouter une note...",
  },
  render: (args: any) => (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <Textarea {...args} />
    </div>
  ),
};

export const WithMockData: Story = {
  render: () => {
    const [value, setValue] = useState("Prime exceptionnelle de juin validée.");
    return (
      <div style={{ maxWidth: 400, margin: "40px auto" }}>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ajouter une note..."
        />
      </div>
    );
  },
  name: "With Mock Payroll Note",
};

export const Disabled: Story = {
  args: {
    placeholder: "Champ désactivé",
    disabled: true,
  },
  render: (args: any) => (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <Textarea {...args} />
    </div>
  ),
};

export const ValidationTest: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const isInvalid = value.length > 0 && value.length < 10;
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
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Note (min 10 caractères)"
          aria-invalid={isInvalid}
        />
        {isInvalid && (
          <span style={{ color: "#dc2626", fontSize: 12 }}>
            La note doit comporter au moins 10 caractères.
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
Testing scenario: Shows validation error and aria-invalid.\n- Try less than 10 characters\n- Error message appears\n- Textarea has aria-invalid=true
        `,
      },
    },
  },
};
