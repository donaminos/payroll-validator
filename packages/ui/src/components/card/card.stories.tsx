import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./card";
import { Button } from "../button/button";

const meta: Meta<typeof Card> = {
  title: "COMPONENTS/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Card component is a flexible container for grouping related content. Use subcomponents for headers, actions, content, and footers.\n\n**Accessibility:**\n- Semantic <div> structure\n- Use ARIA roles if card is interactive\n- Keyboard and screen reader friendly\n\n**Best Practices:**\n- Use for dashboards, summaries, or grouped actions\n- Keep content concise\n- Use CardAction for buttons or menus
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <Card>
        <CardHeader>
          <CardTitle>Fiche de paie</CardTitle>
          <CardDescription>Résumé du mois de juin 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div>
              <strong>Employé:</strong> Jean Dupont
            </div>
            <div>
              <strong>Salaire brut:</strong> 2 500,00 €
            </div>
            <div>
              <strong>Heures travaillées:</strong> 151,67
            </div>
            <div>
              <strong>Statut:</strong>{" "}
              <span style={{ color: "#16a34a" }}>Validé</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <span style={{ fontSize: 12, color: "#888" }}>
            Dernière mise à jour : 28/06/2024
          </span>
        </CardFooter>
      </Card>
    </div>
  ),
  name: "Default (Mock Payroll Data)",
};

export const WithAction: Story = {
  render: () => (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <Card>
        <CardHeader>
          <CardTitle>Employé</CardTitle>
          <CardAction>
            <Button size="sm">Télécharger PDF</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div>
            <strong>Nom:</strong> Marie Curie
          </div>
          <div>
            <strong>Salaire brut:</strong> 3 200,00 €
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  name: "With Action Button",
  parameters: {
    docs: {
      description: {
        story: `
Use CardAction for contextual actions (e.g., download, edit, menu).\n- Action is visually aligned in the header
        `,
      },
    },
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <Card tabIndex={0} aria-label="Résumé fiche de paie">
        <CardHeader>
          <CardTitle>Résumé</CardTitle>
        </CardHeader>
        <CardContent>
          <div>Ce card est focusable et lisible par les lecteurs d'écran.</div>
        </CardContent>
      </Card>
    </div>
  ),
  name: "Accessibility & Keyboard Navigation",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Card is focusable and has an ARIA label.\n- Tab to focus\n- Inspect accessibility tree
        `,
      },
    },
  },
};
