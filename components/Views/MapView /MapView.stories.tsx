import type { Meta, StoryObj } from "@storybook/react"
import { MapView } from "./MapView"

const meta: Meta<typeof MapView> = {
  title: "MapView",
  component: MapView,
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

type Story = StoryObj<typeof MapView>

export const Default: Story = {
  render: (args) => <MapView {...args} />,
}

export default meta
