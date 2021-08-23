import { Meta, Story } from '@storybook/react';
import { Button } from '~/components/button';

export const Default: Story = (args) => {
  return <Button>{args.label}</Button>;
};

export default {
  title: 'Components/Button',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button',
    },
  },
} as Meta;
