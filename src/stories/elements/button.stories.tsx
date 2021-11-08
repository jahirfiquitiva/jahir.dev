import styled from '@emotion/styled';
import { mdiAccessPoint } from '@mdi/js';
import { Meta, Story } from '@storybook/react';

import ButtonGroup from '~/new-components/elements/complex/button-group';
import Button from '~/new-components/elements/simple/button';

const ButtonsContainer = styled(ButtonGroup)`
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
    </ButtonsContainer>
  );
};

export default {
  title: 'Elements/Button',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button',
    },
  },
} as Meta;
