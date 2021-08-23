import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import { mdiAccessPoint } from '@mdi/js';
import { Container } from '~/components/container';
import { Button, IconButton, GitHubButton } from '~/components/button';

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
      <IconButton icon={mdiAccessPoint}>{args.label}</IconButton>
      <GitHubButton>GitHub</GitHubButton>
      <GitHubButton />
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
