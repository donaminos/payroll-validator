import type { Meta, StoryObj } from "@storybook/react";
import { SidebarProvider } from "./sidebar";
import { Sidebar } from "./sidebar";
import { Button } from "../button/button";

const meta: Meta<typeof Sidebar> = {
  title: "COMPONENTS/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Sidebar component provides a responsive, accessible navigation panel. Supports mobile, keyboard shortcuts, and contextual actions.\n\n**Accessibility:**\n- Keyboard and screen reader friendly\n- ARIA roles and focus management\n- Collapsible and mobile support\n\n**Best Practices:**\n- Use for main navigation\n- Group related links\n- Provide clear active state
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <div style={{ padding: 16 }}>
          <strong>Navigation</strong>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            <li><Button variant="link">Accueil</Button></li>
            <li><Button variant="link">Employés</Button></li>
            <li><Button variant="link">Fiches de paie</Button></li>
          </ul>
        </div>
      </Sidebar>
    </SidebarProvider>
  ),
  name: "Default (Mock Navigation)",
};

export const WithActions: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <div style={{ padding: 16 }}>
          <strong>Actions</strong>
          <Button size="sm" style={{ marginRight: 8 }}>Ajouter employé</Button>
          <Button size="sm" variant="destructive">Supprimer</Button>
        </div>
      </Sidebar>
    </SidebarProvider>
  ),
  name: "With Actions",
  parameters: {
    docs: {
      description: {
        story: `
Sidebar with action buttons for contextual workflows.\n- Use for add, edit, or delete actions
        `,
      },
    },
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <div style={{ padding: 16 }}>Tab to focus, keyboard shortcuts enabled, mobile support.</div>
      </Sidebar>
    </SidebarProvider>
  ),
  name: "Accessibility, Keyboard & Mobile",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Sidebar supports keyboard navigation, shortcuts, and mobile.\n- Tab through elements\n- Use Cmd/Ctrl+B to toggle\n- Responsive on mobile
        `,
      },
    },
  },
}; 