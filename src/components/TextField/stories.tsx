import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";
import { FiMail } from "react-icons/fi";

import TextField from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    icon: <FiMail />,
    placeholder: "Email",
  },
} as Meta;

export const Default: Story = (args) => (
  <MemoryRouter>
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  </MemoryRouter>
);
