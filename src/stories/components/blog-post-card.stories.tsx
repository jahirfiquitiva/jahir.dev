import { Meta, Story } from '@storybook/react';

import { BlogPostCard } from '~/components/cards';

export const Default: Story = () => {
  return (
    <BlogPostCard
      frontmatter={{ title: 'What I use', date: '2018-10-02', hero: 'https://jahir.dev/assets/images/posts/react-package.jpg' }}
      color={'#fff'}
      slug={'uses'}
    />
  );
};

export default {
  title: 'Components/Blog post card',
} as Meta;
