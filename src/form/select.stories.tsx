import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./select";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const { control } = useForm();
    return (
      <Select
        name="blarg"
        control={control}
        options={[
          { label: "", value: "" },
          { label: "one", value: "one" },
        ]}
      />
    );
  },
};
