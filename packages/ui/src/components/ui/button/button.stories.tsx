import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Upload, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Button> = {
  title: "COMPONENTS/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          `
          The Button component is a versatile, accessible, and themeable button for all primary actions. Built with strict TypeScript, Tailwind, and Radix UI for accessibility. Supports variants, sizes, icons, and loading/disabled states.\n\n**Accessibility:**\n- Keyboard and screen reader friendly\n- Proper ARIA attributes\n- Focus ring and disabled state\n\n**Best Practices:**\n- Use semantic labels\n- Prefer type="button" unless submitting a form\n- Use aria-label for icon-only buttons
          `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: '40px auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  name: "All Variants",
};

export const Sizes: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: '40px auto', display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon only">
        <Upload />
      </Button>
    </div>
  ),
  name: "All Sizes",
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: '40px auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Button variant="default">
        <Upload className="mr-2" />
        Upload
      </Button>
      <Button variant="secondary">
        <CheckCircle className="mr-2" />
        Success
      </Button>
      <Button variant="destructive">
        <AlertTriangle className="mr-2" />
        Warning
      </Button>
    </div>
  ),
  name: "With Icons",
};

export const Disabled: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: '40px auto', display: 'flex', gap: 16 }}>
      <Button disabled>Disabled</Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
      <Button variant="destructive" disabled>
        Disabled Destructive
      </Button>
    </div>
  ),
  name: "Disabled State",
};

export const LoadingMock: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    return (
      <div style={{ maxWidth: 400, margin: '40px auto' }}>
        <Button
          onClick={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 1500);
          }}
          disabled={loading}
        >
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="#888"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                />
              </svg>
              Loading...
            </span>
          ) : (
            "Simulate Async Action"
          )}
        </Button>
      </div>
    );
  },
  name: "Loading/Async State (Mock)",
  parameters: {
    docs: {
      description: {
        story:
          `
          This story demonstrates a mock async loading state.\n\n**Testing scenario:**\n- Click the button to simulate a loading state.\n- Button is disabled while loading.\n- Spinner is visible for 1.5s.\n\n**Test:**\n- Use user-event to click and assert disabled state and spinner.\n          `,
      },
    },
  },
};
