import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./checkbox";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const { control } = useForm();
    return <Checkbox name="blarg" control={control} />;
  },
};
