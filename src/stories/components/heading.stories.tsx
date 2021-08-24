import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import { Container } from '~/elements/container';
import { Heading } from '~/elements/heading';

const HeadingsContainer = styled(Container)`
  & > .text-gradient {
    align-self: flex-start;
  }
`;

export const Default: Story = (args) => {
  return (
    <HeadingsContainer>
      <Heading
        size="1"
        shadowColor={args.shadow}
        gradientColor={args.gradient}
        forceGradient={args.forceGradient}
      >
        {args.label} 1
      </Heading>
      <Heading
        size="2"
        shadowColor={args.shadow}
        gradientColor={args.gradient}
        forceGradient={args.forceGradient}
      >
        {args.label} 2
      </Heading>
      <Heading
        size="3"
        shadowColor={args.shadow}
        gradientColor={args.gradient}
        forceGradient={args.forceGradient}
      >
        {args.label} 3
      </Heading>
      <Heading
        size="4"
        shadowColor={args.shadow}
        gradientColor={args.gradient}
        forceGradient={args.forceGradient}
      >
        {args.label} 4
      </Heading>
      <Heading
        size="5"
        shadowColor={args.shadow}
        gradientColor={args.gradient}
        forceGradient={args.forceGradient}
      >
        {args.label} 5
      </Heading>
      <Heading
        size="6"
        shadowColor={args.shadow}
        gradientColor={args.gradient}
        forceGradient={args.forceGradient}
      >
        {args.label} 6
      </Heading>
    </HeadingsContainer>
  );
};

export default {
  title: 'Components/Heading',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Heading',
    },
    shadow: {
      description: 'Only visible in light theme',
      options: [
        'none',
        'brand',
        'blue',
        'green',
        'yellow',
        'orange',
        'red',
        'purple',
      ],
      control: { type: 'select' },
    },
    gradient: {
      description: 'Only visible in dark theme, unless force is enabled',
      options: [
        'none',
        'brand-to-blue',
        'blue-to-green',
        'green-to-yellow',
        'yellow-to-orange',
        'orange-to-red',
        'red-to-purple',
        'purple-to-brand',
      ],
      control: { type: 'select' },
    },
    forceGradient: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta;
