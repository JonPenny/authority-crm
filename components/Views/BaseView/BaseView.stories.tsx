import type { Meta, StoryObj } from "@storybook/react"
import { BaseView } from "./BaseView"

const meta: Meta<typeof BaseView> = {
  title: "BaseView",
  component: BaseView,
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

type Story = StoryObj<typeof BaseView>

export const Default: Story = {
  render: (args) => <BaseView {...args} />,
}

export default meta
