import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import { ToolbarButton, ToolbarMenuToggle } from '~/elements/toolbar-button';
import { ToolbarLink } from '~/elements/toolbar-link';

const LinksContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const Default: Story = (args) => {
  return (
    <LinksContainer>
      <ToolbarLink to={args.url} title={args.a11yTitle}>
        {args.label}
      </ToolbarLink>
      <ToolbarLink
        to={args.url}
        title={args.a11yTitle}
        gradientColor={'green-to-yellow'}
        emoji={'🎧'}
        label={args.label}
        active
      />

      <ToolbarButton>🌚</ToolbarButton>

      <ToolbarMenuToggle />
    </LinksContainer>
  );
};

export default {
  title: 'Elements/Toolbar link',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Toolbar Link',
    },
    url: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://jahir.dev',
    },
    a11yTitle: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;
