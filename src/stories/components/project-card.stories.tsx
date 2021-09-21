import { Meta, Story } from '@storybook/react';

import { ProjectCard } from '~/components/cards';

const projectData = {
    title: 'Blueprint',
    description: 'Dashboard for creating Android icon packs.',
    icon: 'https://jahir.dev/_next/image?url=%2Fassets%2Fimages%2Fprojects%2Fandroid%2Fblueprint.png&w=96&q=75',
    preview: 'https://jahir.dev/_next/image?url=%2Fassets%2Fimages%2Fprojects%2Fandroid%2Fblueprint-preview.png&w=750&q=75',
    link: 'https://github.com/jahirfiquitiva/Blueprint/',
    color: '#4d8af0',
    tag: 'android',
    stack: ['android', 'kotlin', 'material design'],
  }

export const Default: Story = () => {
  return <ProjectCard {...projectData} />;
};

export default {
  title: 'Components/Project card',
} as Meta;
