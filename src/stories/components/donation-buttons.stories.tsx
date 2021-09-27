import { Meta, Story } from '@storybook/react';

import { GitHubButton, BmacButton, PayPalButton } from '~/components/buttons';
import { ButtonGroup } from '~/elements/simple/button';

export const Default: Story = () => {
  return (
    <ButtonGroup>
      <GitHubButton>GitHub Sponsors</GitHubButton>
      <BmacButton>Buy Me a Pizza</BmacButton>
      <PayPalButton>PayPal</PayPalButton>
    </ButtonGroup>
  );
};

export default {
  title: 'Components/Donation buttons',
} as Meta;
