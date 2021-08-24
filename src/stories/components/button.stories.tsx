import styled from '@emotion/styled';
import { mdiAccessPoint } from '@mdi/js';
import { Meta, Story } from '@storybook/react';

import {
  GitHubButton,
  BmacButton,
  PayPalButton,
  TwitterIconButton,
  GitHubIconButton,
  InstagramIconButton,
  LinkedInIconButton,
  PolyworkIconButton,
} from '~/components/buttons';
import { Button, ButtonGroup } from '~/elements/button';
import { Container } from '~/elements/container';

const ButtonsContainer = styled(Container)`
  & > button {
    align-self: flex-start;
  }
  & > button:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Default: Story = (args) => {
  return (
    <ButtonsContainer>
      <Button
        onClick={() => {
          alert(args.label);
        }}
      >
        {args.label}
      </Button>
      <Button icon={mdiAccessPoint}>{args.label}</Button>

      <ButtonGroup>
        <GitHubButton>GitHub Sponsors</GitHubButton>
        <BmacButton>Buy Me a Pizza</BmacButton>
        <PayPalButton>PayPal</PayPalButton>
      </ButtonGroup>

      <br />

      <ButtonGroup>
        <GitHubIconButton />
        <LinkedInIconButton />
        <TwitterIconButton />
        <InstagramIconButton />
        <PolyworkIconButton />
      </ButtonGroup>
    </ButtonsContainer>
  );
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
