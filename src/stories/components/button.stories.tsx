import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import { mdiAccessPoint } from '@mdi/js';
import { Container } from '~/components/container';
import Image from 'next/image';
import {
  Button,
  ButtonGroup,
  GitHubButton,
  GitHubIconButton,
  InstagramIconButton,
  LinkedInIconButton,
  PayPalButton,
} from '~/components/button';

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
      <Button>{args.label}</Button>
      <Button icon={mdiAccessPoint}>{args.label}</Button>
      <GitHubButton>GitHub Sponsors</GitHubButton>
      <PayPalButton>PayPal</PayPalButton>

      <ButtonGroup>
        <GitHubIconButton />
        <LinkedInIconButton />
        <InstagramIconButton />
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
