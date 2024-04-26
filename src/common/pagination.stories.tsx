import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "./pagination";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => <Pagination total={345} count={3} page={2} />,
};
