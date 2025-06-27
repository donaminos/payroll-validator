import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "COMPONENTS/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Skeleton component provides a loading placeholder for content.\n\n**Accessibility:**\n- Use aria-busy or aria-hidden for screen readers\n- Use with visible labels for context\n\n**Best Practices:**\n- Use for loading states\n- Match shape and size to content\n- Avoid using as a permanent placeholder
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    style: { width: 120, height: 24 },
  },
};

export const InCard: Story = {
  render: () => (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 16,
        maxWidth: 320,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton style={{ width: 120, height: 24 }} />
        <Skeleton style={{ width: 80, height: 16 }} />
        <Skeleton style={{ width: 160, height: 16 }} />
      </div>
    </div>
  ),
  name: "In Mock Payroll Card",
};

export const AccessibilityTest: Story = {
  render: () => (
    <div>
      <span id="skeleton-label">Chargement...</span>
      <Skeleton
        aria-labelledby="skeleton-label"
        style={{ width: 120, height: 24 }}
      />
    </div>
  ),
  name: "Accessibility & Color Contrast",
  parameters: {
    docs: {
      description: {
        story: `
Testing scenario: Skeleton is labelled for screen readers and has sufficient color contrast.\n- Inspect accessibility tree\n- Check color contrast
        `,
      },
    },
  },
};
