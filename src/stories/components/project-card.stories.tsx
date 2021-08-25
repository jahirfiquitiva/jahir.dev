import { Meta, Story } from '@storybook/react';

import { ProjectCard } from '~/components/cards';
import { projects } from '~/types/project';

export const Default: Story = () => {
  return <ProjectCard {...projects[0]} />;
};

export default {
  title: 'Components/Project card',
} as Meta;
