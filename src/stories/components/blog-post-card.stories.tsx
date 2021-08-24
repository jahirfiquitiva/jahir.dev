import { Meta, Story } from '@storybook/react';

import { BlogPostCard } from '~/components/cards';

export const Default: Story = () => {
  return <BlogPostCard />;
};

export default {
  title: 'Components/Blog post card',
} as Meta;
