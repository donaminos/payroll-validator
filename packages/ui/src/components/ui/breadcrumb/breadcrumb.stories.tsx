import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "COMPONENTS/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Breadcrumb component provides accessible, semantic navigation for multi-level pages. Composed of subcomponents for full flexibility.\n\n**Accessibility:**\n- Uses <nav aria-label="breadcrumb">\n- Current page uses aria-current\n- Keyboard and screen reader friendly\n\n**Best Practices:**\n- Use for navigation, not for progress\n- Keep labels short and descriptive\n- Use ellipsis for long paths
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/employes">Employés</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/employes/123">Jean Dupont</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Fiche de paie</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  name: "Default (Mock Navigation)",
};

export const WithEllipsis: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/employes/123">Jean Dupont</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Fiche de paie</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  name: "With Ellipsis (Long Path)",
  parameters: {
    docs: {
      description: {
        story: `
Use BreadcrumbEllipsis for long navigation paths.\n- Ellipsis is aria-hidden and screen reader friendly.
        `,
      },
    },
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage aria-label="Page courante">
            Fiche de paie
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  name: "Accessibility & Keyboard Navigation",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Tab through breadcrumb links and verify aria attributes.\n- Current page uses aria-current\n- All links are focusable
        `,
      },
    },
  },
};
