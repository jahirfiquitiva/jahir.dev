import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import { Card } from '~/elements/simple/card/card';
import { Container } from '~/elements/container';

const CardContent = styled.div`
  padding: 0.8rem;
`;

export const Default: Story = (args) => {
  return (
    <Container>
      <Card>
        <CardContent>
          <p>{args.content}</p>
        </CardContent>
      </Card>
    </Container>
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
