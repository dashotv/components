import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => {
    const { control } = useForm();
    return <Text name="blarg" label="b" placeholder="b" control={control} />;
  },
};
