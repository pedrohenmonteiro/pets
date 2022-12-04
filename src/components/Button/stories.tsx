import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";
import Button from ".";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Default: Story = (args) => (
  <MemoryRouter>
    <Button {...args}>Teste</Button>
  </MemoryRouter>
);
