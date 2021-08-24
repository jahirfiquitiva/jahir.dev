import { Meta, Story } from '@storybook/react';

import { SocialLinks } from '~/blocks/social-links';
import { Container } from '~/elements/container';

export const Default: Story = (args) => {
  return (
    <Container>
      <SocialLinks iconSize={args.iconSize} />
    </Container>
  );
};

export default {
  title: 'Blocks/Social links',
  argTypes: {
    iconSize: {
      control: {
        type: 'range',
        min: 0.5,
        max: 1.5,
        step: 0.1,
      },
      defaultValue: 0.9,
    },
  },
} as Meta;
