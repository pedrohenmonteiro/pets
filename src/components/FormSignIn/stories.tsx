import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import FormSignIn from ".";

export default {
  title: "Form/FormSignIn",
  component: FormSignIn,
} as Meta;

export const Default: Story = () => (
  <MemoryRouter>
    <div style={{ width: 300, margin: "auto" }}>
      <FormSignIn />
    </div>
  </MemoryRouter>
);
