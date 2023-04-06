import type { GetStaticProps, NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { Blog as BlogSection } from '@/components/views';
import type { Post } from '@/types';
import { buildOgImageUrl } from '@/utils/og';
import { getAllPosts } from '@/utils/posts/get-posts';

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
