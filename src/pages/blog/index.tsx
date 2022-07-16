import type { GetStaticProps } from 'next';
import Head from 'next/head';

// import { About as AboutSection } from '@/sections';
import type { Post } from '@/types/post';
import { getAllPosts } from '@/utils';

import { type NextPageWithLayout } from './../_app';

interface BlogProps {
  posts?: Array<Post>;
}

const Blog: NextPageWithLayout<BlogProps> = (props) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>About | Jahir Fiquitiva</title>
      </Head>
      <pre>
        <code>{JSON.stringify(posts, null, 2)}</code>
      </pre>
    </>
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
    'readingTime',
    'inProgress',
    'year',
    'devToId',
    'heroMeta',
  ]);
  return {
    props: { posts: allPosts },
  };
};
