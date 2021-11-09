import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import { Card } from '~/new-components/atoms/simple';

const CardContent = styled.div`
  padding: 0.8rem;
`;

export const Default: Story = (args) => {
  return (
    <div>
      <Card>
        <CardContent>
          <p>{args.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default {
  title: 'Elements/Card',
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
      defaultValue: 'Hola mundo',
    },
  },
} as Meta;
