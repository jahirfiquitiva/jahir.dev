import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import Link from '~/new-components/atoms/simple/link';

const LinksContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const Default: Story = (args) => {
  return (
    <LinksContainer>
      <Link
        href={args.url}
        underline={args.underline}
        title={args.a11yTitle || args.label}
      >
        {args.label}
      </Link>
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
