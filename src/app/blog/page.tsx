import { Suspense } from 'react';

import { Section } from '@/components/core/section';
// import { BlogPosts } from '@/components/views/blog/posts';
import { getBlogPosts } from '@/lib/blog';
// import { allReadableBlogs } from '@/utils/blog';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Loading from '../loading';

import { Header } from './header';
// import { groupBlogPosts } from './utils';

// const allowInProgress = process.env.NODE_ENV === 'development';
// const groupedBlogPosts = groupBlogPosts(
//   allReadableBlogs
//     .filter((it) => allowInProgress || !it.inProgress)
//     .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))),
// );

export default function BlogPage() {
  const newBlogs = getBlogPosts();
  return (
    <Section id={'blog'}>
      <Header />
      <Suspense fallback={<Loading />}>
        {/* <BlogPosts groupedPosts={groupedBlogPosts} /> */}
        <ul>
          {newBlogs.map((post) => {
            return (
              <li key={post.slug}>
                <a href={`/blog/${post.slug}`}>{post.metadata.title}</a>
              </li>
            );
          })}
        </ul>
      </Suspense>
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
