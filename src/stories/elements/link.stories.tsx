import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import { ExtLink } from '~/elements/ext-link';

const LinksContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const Default: Story = (args) => {
  return (
    <LinksContainer>
      <ExtLink
        to={args.url}
        underline={args.underline}
        title={args.a11yTitle || args.label}
      >
        {args.label}
      </ExtLink>
    </LinksContainer>
  );
};

export default {
  title: 'Elements/Link',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Link',
    },
    url: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://jahir.dev',
    },
    underline: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    a11yTitle: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;
