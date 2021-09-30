import { Meta, Story } from '@storybook/react';

import { BlogPostCard } from '~/components/cards';

const examplePostData = {
  title: 'What I use',
  date: '2018-10-02',
  hero: 'https://jahir.dev/static/images/posts/react-package.jpg',
};

export const Default: Story = () => {
  return <BlogPostCard {...examplePostData} color={'#fff'} slug={'uses'} />;
};

export default {
  title: 'Components/Blog post card',
} as Meta;
