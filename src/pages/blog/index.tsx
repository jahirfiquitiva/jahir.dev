import type { GetStaticProps, NextPage } from 'next';

import substackData from '@/blog/blog.json';
import { Layout, Seo } from '@/components/molecules';
import { Blog as BlogSection } from '@/sections';
import type { Post } from '@/types';
import { getAllPosts } from '@/utils/posts/get-posts';

const substackEnclosureToImage = (enclosure?: string): string | undefined => {
  if (!enclosure) return undefined;
  if (!enclosure.startsWith('https://substackcdn.com/image/fetch'))
    return enclosure;
  const parts = enclosure.split('/');
  const lastPart = parts[parts.length - 1];
  console.error(lastPart)
  return decodeURIComponent(lastPart);

};

const substackPostToWebsitePost = (
  post: (typeof substackData)['items'][number],
): Post => {
  return {
    slug: 'a',
    title: post.title,
    excerpt: post.description,
    date: new Date(post.published).toISOString(),
    hero: substackEnclosureToImage(post.enclosures?.[0]?.url),
  };
};

interface BlogProps {
  posts?: Array<Post>;
  substack?: Array<Post>;
}

const Blog: NextPage<BlogProps> = (props) => {
  const { posts, substack } = props;
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
      <BlogSection posts={substack} />
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
    props: {
      posts: allPosts,
      substack: substackData.items.map(substackPostToWebsitePost),
    },
  };
};
