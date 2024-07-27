import type { Meta, StoryObj } from "@storybook/react";

import { FilterBoolean } from "./filterBoolean";

const meta: Meta<typeof FilterBoolean> = {
  component: FilterBoolean,
};

export default meta;
type Story = StoryObj<typeof FilterBoolean>;

export const Default: Story = {
  render: () => {
    return (
      <FilterBoolean
        name="blarg"
        choose={(v: string) => console.log(v)}
        selected="unset"
      />
    );
  },
};
