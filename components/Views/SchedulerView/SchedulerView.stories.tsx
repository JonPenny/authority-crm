import type { Meta, StoryObj } from "@storybook/react"
import { SchedulerView } from "./SchedulerView"

const meta: Meta<typeof SchedulerView> = {
  title: "SchedulerView",
  component: SchedulerView,
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

type Story = StoryObj<typeof SchedulerView>

export const Default: Story = {
  render: (args) => <SchedulerView {...args} />,
}

export default meta
