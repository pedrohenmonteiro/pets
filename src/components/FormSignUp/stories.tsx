import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import FormSignUp from ".";

export default {
  title: "Form/FormSignUp",
  component: FormSignUp,
} as Meta;

export const Default: Story = () => (
  <MemoryRouter>
    <div style={{ width: 300, margin: "auto" }}>
      <FormSignUp />
    </div>
  </MemoryRouter>
);
