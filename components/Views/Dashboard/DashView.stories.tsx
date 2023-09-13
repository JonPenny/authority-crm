import type { Meta, StoryObj } from "@storybook/react"
import {  DashView } from "./DashView"

const meta: Meta<typeof DashView> = {
  title: "DashView",
  component: DashView,
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

type Story = StoryObj<typeof DashView>

export const Default: Story = {
  render: (args) => <DashView {...args} />,
}

export default meta
