import type { Meta, StoryObj } from "@storybook/react"
import { Loader2, Mail } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

/**
 * Displays a button or a component that looks like a button.
 */
const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
}
export default meta

type Story = StoryObj<typeof Button>

/**
 * The default form of the button, used for primary actions and commands.
 */
export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "default",
  },
}

/**
 * Use the `outline` button to reduce emphasis on secondary actions, such as
 * canceling or dismissing a dialog.
 */
export const Outline: Story = {
  render: Default.render,
  args: {
    variant: "outline",
  },
}

/**
 * Use the `ghost` button is minimalistic and subtle, for less intrusive
 * actions.
 */
export const Ghost: Story = {
  render: Default.render,
  args: {
    variant: "ghost",
  },
}

/**
 * Use the `secondary` button to call for less emphasized actions, styled to
 * complement the primary button while being less conspicuous.
 */
export const Secondary: Story = {
  render: Default.render,
  args: {
    variant: "secondary",
  },
}

/**
 * Use the `destructive` button to indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Destructive: Story = {
  render: Default.render,
  args: {
    variant: "destructive",
  },
}

/**
 * Use the `link` button to reduce emphasis on tertiary actions, such as
 * hyperlink or navigation, providing a text-only interactive element.
 */
export const Link: Story = {
  render: Default.render,
  args: {
    variant: "link",
  },
}

/**
 * Add the `disabled` prop to a button to prevent interactions and add a
 * loading indicator, such as a spinner, to signify an in-progress action.
 */
export const Loading: Story = {
  render: (args) => (
    <Button {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>
  ),
  args: {
    ...Outline.args,
    disabled: true,
  },
}

/**
 * Add an icon element to a button to enhance visual communication and
 * providing additional context for the action.
 */
export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email Button
    </Button>
  ),
  args: {
    ...Secondary.args,
  },
}
