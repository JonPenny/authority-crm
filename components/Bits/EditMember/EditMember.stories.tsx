import type { Meta, StoryObj } from "@storybook/react"
import { EditMember } from "./EditMember"

const meta: Meta<typeof EditMember> = {
  title: "editMember",
  component: EditMember,
  args: {
    intent: "primary",
    underline: false,
    children: "editMember",
    size: "lg",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof EditMember>

export const Default: Story = {
  render: (args) => <EditMember {...args} />,
}

export default meta
