import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./dropdown-menu";
import { Button } from "../button/button";
import { useState } from "react";

const meta: Meta<typeof DropdownMenu> = {
  title: "COMPONENTS/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The DropdownMenu component provides accessible, composable menus for actions and navigation. Built on Radix UI primitives.\n\n**Accessibility:**\n- Keyboard and screen reader friendly\n- ARIA roles and focus management\n- Supports checkboxes, radios, and submenus\n\n**Best Practices:**\n- Use for contextual actions\n- Group related actions\n- Use separators and labels for clarity
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Actions fiche de paie</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Voir</DropdownMenuItem>
        <DropdownMenuItem>Dupliquer</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Supprimer</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Exporter PDF</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  name: "Default (Mock Payroll Actions)",
};

export const WithCheckboxAndRadio: Story = {
  render: () => {
    const [showSalary, setShowSalary] = useState(true);
    const [view, setView] = useState("mois");
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Options d'affichage</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Colonnes</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showSalary}
            onCheckedChange={setShowSalary}
          >
            Afficher salaire
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Vue</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={view} onValueChange={setView}>
            <DropdownMenuRadioItem value="mois">Par mois</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="annee">
              Par année
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  name: "Checkbox & Radio Items",
  parameters: {
    docs: {
      description: {
        story: `
Checkbox and radio items for user preferences.\n- Use for toggles and mutually exclusive options
        `,
      },
    },
  },
};

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Plus d'options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Imprimer</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Exporter</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>PDF</DropdownMenuItem>
            <DropdownMenuItem>Excel</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  name: "With Submenu",
  parameters: {
    docs: {
      description: {
        story: `
Submenus for grouped actions.\n- Use for export, share, or advanced actions
        `,
      },
    },
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Test accessibilité</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Action 1</DropdownMenuItem>
        <DropdownMenuItem>Action 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  name: "Accessibility & Keyboard Navigation",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Open menu with keyboard, navigate with arrows, and verify focus/aria.\n- All items are focusable\n- Menu closes on Escape
        `,
      },
    },
  },
};
