import { Link } from '@/components/core/link';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs as generatedBlogs } from 'contentlayer/generated';

import Header from './header';

const allBlogs = generatedBlogs.filter((it) => it.slug !== 'about');

export default function BlogPage() {
  return (
    <>
      <Header />
      <ul>
        {allBlogs.map((blog) => {
          return (
            <li key={blog.slug}>
              <Link title={blog.title} href={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export const metadata = getStaticMetadata({
  title: 'Blog',
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
