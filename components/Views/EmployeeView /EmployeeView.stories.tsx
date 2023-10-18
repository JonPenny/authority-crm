import type { Meta, StoryObj } from "@storybook/react"
import {  EmployeeView } from "./EmployeeView"

const meta: Meta<typeof EmployeeView> = {
  title: "EmployeeView",
  component: EmployeeView,
  args: {
    intent: "primary",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },

  },
}

type Story = StoryObj<typeof EmployeeView>

export const Default: Story = {
  render: (args) => <EmployeeView {...args} />,
}

export default meta
