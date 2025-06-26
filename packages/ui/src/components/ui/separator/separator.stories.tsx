import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "COMPONENTS/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Separator component provides accessible visual dividers for layouts and groups. Built on Radix UI Separator.\n\n**Accessibility:**\n- Uses role="separator"\n- Supports horizontal and vertical orientation\n- Use decorative for purely visual separators\n\n**Best Practices:**\n- Use to separate sections or actions\n- Use vertical for side-by-side layouts\n- Avoid overusing for minor spacing
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", height: 40 }}>
      <span>Gauche</span>
      <Separator orientation="vertical" style={{ margin: "0 16px" }} />
      <span>Droite</span>
    </div>
  ),
  name: "Vertical Separator",
};

export const InCardLayout: Story = {
  render: () => (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 16,
        maxWidth: 320,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Nom: Jean Dupont</span>
        <span>Salaire: 2 500 €</span>
      </div>
      <Separator style={{ margin: "12px 0" }} />
      <div>
        Statut: <span style={{ color: "#16a34a" }}>Validé</span>
      </div>
    </div>
  ),
  name: "In Mock Payroll Card Layout",
};

export const AccessibilityTest: Story = {
  render: () => (
    <div>
      <span>Section 1</span>
      <Separator aria-orientation="horizontal" />
      <span>Section 2</span>
    </div>
  ),
  name: "Orientation & Accessibility",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Separator uses correct role and orientation.\n- Inspect accessibility tree\n- Use for both horizontal and vertical
        `,
      },
    },
  },
};
