import type { GetStaticProps, NextPage } from 'next';

import { Layout, Seo } from '@/old/components/molecules';
import { Blog as BlogSection } from '@/old/components/views';
import type { Post } from '@/old/types';
import { buildOgImageUrl } from '@/old/utils/og';
import { getAllPosts } from '@/old/utils/posts/get-posts';

interface BlogProps {
  posts?: Array<Post>;
  ogImageUrl?: string;
}

const Blog: NextPage<BlogProps> = (props) => {
  const { posts, ogImageUrl } = props;
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
          'opinions',
          'blog',
          'content',
          'story',
          'storytelling',
          'news',
        ]}
        siteType={'blog'}
        image={ogImageUrl}
      />
      <BlogSection posts={posts} />
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts().filter((it: { slug: string }) => it.slug !== 'uses'),
      ogImageUrl: buildOgImageUrl('blog', 'Blog'),
    },
  };
};
