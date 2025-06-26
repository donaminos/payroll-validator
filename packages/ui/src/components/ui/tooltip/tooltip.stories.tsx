import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import { Button } from "../button/button";

const meta: Meta<typeof Tooltip> = {
  title: "COMPONENTS/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Tooltip component provides accessible, contextual hints for UI elements. Built on Radix UI Tooltip.\n\n**Accessibility:**\n- Keyboard and screen reader friendly\n- ARIA attributes and focus management\n- Delayed open for usability\n\n**Best Practices:**\n- Use for brief, helpful hints\n- Avoid for critical information\n- Ensure content is concise
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Survolez-moi</Button>
      </TooltipTrigger>
      <TooltipContent>Info contextuelle</TooltipContent>
    </Tooltip>
  ),
};

export const WithMockAction: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Supprimer fiche</Button>
      </TooltipTrigger>
      <TooltipContent>Supprimer définitivement la fiche de paie</TooltipContent>
    </Tooltip>
  ),
  name: "With Mock Payroll Action",
};

export const AccessibilityTest: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Test accessibilité</Button>
      </TooltipTrigger>
      <TooltipContent>Accessible via clavier et lecteur d'écran</TooltipContent>
    </Tooltip>
  ),
  name: "Accessibility & Keyboard Navigation",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Tooltip is accessible via keyboard and screen reader.\n- Tab to button, focus triggers tooltip\n- Inspect ARIA attributes
        `,
      },
    },
  },
};
