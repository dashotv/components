import type { Meta, StoryObj } from "@storybook/react";

import { FilterSelect } from "./filterSelect";

const meta: Meta<typeof FilterSelect> = {
  component: FilterSelect,
};

export default meta;
type Story = StoryObj<typeof FilterSelect>;

export const Default: Story = {
  render: () => {
    return (
      <FilterSelect
        name="blarg"
        choices={[
          { label: "", value: "" },
          { label: "one", value: "one" },
          { label: "two", value: "two" },
          { label: "three", value: "three" },
        ]}
        choose={(v: string) => console.log(v)}
        selected="three"
      />
    );
  },
};
