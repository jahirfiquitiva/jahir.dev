import { GetStaticProps } from 'next';

import { Hello } from '~/blocks/home/hello';
import { Page } from '~/blocks/page';
import { BlogPostCard } from '~/components/cards';
import { Component, ComponentProps } from '~/elements/fc';
import { BlogPost } from '~/types/blog-post';
import { getAllPosts } from '~/utils/get-posts';

interface BlogProps extends ComponentProps {
  posts?: BlogPost[];
}

const Blog: Component<BlogProps> = (props) => {
  const { posts } = props;
  return (
    <Page>
      {(posts || []).map((post, i) => {
        return <BlogPostCard key={i} {...post} />;
      })}
    </Page>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'hero',
    'excerpt',
    'color',
    'link',
    'time',
    'inProgress',
  ]);
  return {
    props: { posts: allPosts },
  };
};
