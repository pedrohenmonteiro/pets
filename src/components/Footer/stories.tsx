import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";
import Footer from ".";

export default {
  title: "Footer",
  component: Footer,
} as Meta;

export const Default: Story = () => (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
);
