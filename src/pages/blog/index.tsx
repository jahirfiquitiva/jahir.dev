import type { GetStaticProps, NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { Blog as BlogSection } from '@/sections';
import type { Post } from '@/types';
import { getAllPosts } from '@/utils/posts/get-posts';

interface BlogProps {
  posts?: Array<Post>;
}

const Blog: NextPage<BlogProps> = (props) => {
  const { posts } = props;
  return (
    <Layout>
      <Seo
        title={'Blog – Jahir Fiquitiva'}
        description={
          // eslint-disable-next-line max-len
          'Blog posts by Jahir Fiquitiva. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life'
        }
        exactUrl={'https://jahir.dev/blog'}
        keywords={[
          'tech',
          'software',
          'development',
          'thoughts',
          'blog',
          'content',
          'story',
          'storytelling',
          'news',
        ]}
        siteType={'blog'}
      />
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
  ]).filter((it: { slug: string }) => it.slug !== 'uses');
  return {
    props: { posts: allPosts },
  };
};
