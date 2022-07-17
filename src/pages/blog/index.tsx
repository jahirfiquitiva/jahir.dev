import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

// import { About as AboutSection } from '@/sections';
import { Layout } from '@/components/elements';
import { Blog as BlogSection } from '@/sections';
import type { Post } from '@/types';
import { getAllPosts } from '@/utils';

interface BlogProps {
  posts?: Array<Post>;
}

const Blog: NextPage<BlogProps> = (props) => {
  const { posts } = props;
  return (
    <Layout>
      <Head>
        <title>Blog | Jahir Fiquitiva</title>
      </Head>
      <BlogSection posts={posts} />
    </Layout>
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
