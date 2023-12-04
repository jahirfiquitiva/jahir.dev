import { Suspense } from 'react';

import { Section } from '@/components/core/section';
import { BlogPosts } from '@/components/views/blog/posts';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { type Blog, getBlogPosts } from 'config/blog/blog';

// import Loading from '../loading';

import Header from './header';
import { groupBlogPosts } from './utils';

const allowInProgress = process.env.NODE_ENV === 'development';
const loadingBlogPostsGroups = [
  { year: new Date().getFullYear(), posts: [{}, {}] as Array<Blog> },
];

const BlogList = async () => {
  const allBlogs = (await getBlogPosts())
    .filter((it) => allowInProgress || !it.inProgress)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  return (
    <Suspense fallback={<BlogPosts posts={loadingBlogPostsGroups} />}>
      <BlogPosts posts={groupBlogPosts(allBlogs)} />
    </Suspense>
  );
};

export default function BlogPage() {
  return (
    <Section id={'blog'}>
      <Header />
      <BlogList />
    </Section>
  );
}

export const metadata = getStaticMetadata({
  title: 'Blog – Jahir Fiquitiva',
  description:
    // eslint-disable-next-line max-len
    'Blog posts by Jahir Fiquitiva. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life',
  exactUrl: 'https://jahir.dev/blog',
  keywords: [
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
  ],
  image: buildOgImageUrl('blog'),
});
