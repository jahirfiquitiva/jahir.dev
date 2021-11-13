import { GetStaticProps } from 'next';

import { Page } from '~/new-components/blocks';
import { Blog } from '~/sections/blog';
import { Component, ComponentProps, Post } from '~/types';
import { getAllPosts } from '~/utils/get-posts';

interface BlogProps extends ComponentProps {
  posts?: Post[];
}

const BlogPage: Component<BlogProps> = (props) => {
  const { posts } = props;
  return (
    <Page
      title={'Blog ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/blog'}
    >
      <Blog posts={posts} />
    </Page>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'hero',
    'excerpt',
    'color',
    'link',
    'readingTime',
    'inProgress',
  ]);
  return {
    props: { posts: allPosts },
  };
};
