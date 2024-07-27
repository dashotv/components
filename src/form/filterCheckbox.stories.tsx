import type { Meta, StoryObj } from "@storybook/react";

import { FilterCheckbox } from "./filterCheckbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const meta: Meta<typeof FilterCheckbox> = {
  component: FilterCheckbox,
};

export default meta;
type Story = StoryObj<typeof FilterCheckbox>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <FilterCheckbox
          checked={false}
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon />}
          change={(checked) => console.log(checked)}
        />
        <FilterCheckbox
          checked={true}
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon />}
          change={(checked) => console.log(checked)}
        />
      </>
    );
  },
};
