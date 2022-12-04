import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

export default {
  title: "Header",
  component: Header,
} as Meta;

export const Default: Story = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
