import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./sheet";
import { Button } from "../button/button";
import { useState } from "react";

const meta: Meta<typeof Sheet> = {
  title: "COMPONENTS/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Sheet component is a responsive, accessible side panel for dialogs, details, or actions. Built on Radix UI Dialog.\n\n**Accessibility:**\n- Focus trap and keyboard navigation\n- ARIA roles and labels\n- Close on Escape and overlay click\n\n**Best Practices:**\n- Use for editing, details, or workflows\n- Place actions in SheetFooter\n- Use SheetTitle and SheetDescription for context
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button onClick={() => setOpen(true)}>Voir fiche de paie</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Fiche de paie</SheetTitle>
            <SheetDescription>Résumé du mois de juin 2024</SheetDescription>
          </SheetHeader>
          <div style={{ padding: 16 }}>
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
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="secondary">Fermer</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
  name: "Default (Mock Payroll Details)",
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button onClick={() => setOpen(true)}>Ouvrir panneau</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Actions employé</SheetTitle>
          </SheetHeader>
          <div style={{ padding: 16 }}>
            <Button size="sm" style={{ marginRight: 8 }}>
              Télécharger PDF
            </Button>
            <Button size="sm" variant="destructive">
              Supprimer
            </Button>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="secondary">Fermer</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
  name: "With Actions",
  parameters: {
    docs: {
      description: {
        story: `
Sheet with action buttons for contextual workflows.\n- Use for edit, download, or delete actions
        `,
      },
    },
  },
};

export const AccessibilityTest: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button onClick={() => setOpen(true)}>Test accessibilité</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Test accessibilité</SheetTitle>
          </SheetHeader>
          <div style={{ padding: 16 }}>
            Tab to focus, Esc to close, focus trap enabled.
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="secondary">Fermer</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
  name: "Accessibility & Keyboard Navigation",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Sheet traps focus, closes on Esc, and uses correct ARIA roles.\n- Tab through elements\n- Press Esc to close
        `,
      },
    },
  },
};
