import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { Mdx } from '@/components/views/blog/mdx';
import { getBlogPosts } from '@/lib/blog';
import { createMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import type { BlogPostPageContext } from './types';

export default function BlogPostPage(context: BlogPostPageContext) {
  const { slug } = context.params;
  const post = getBlogPosts().find((b) => b.slug === slug);

  if (!slug || !post) return notFound();
  if (post.link) return redirect(post.link);
  return (
    <article>
      <Mdx source={post.content} />
    </article>
  );
}

const allowInProgress = process.env.NODE_ENV === 'development';
export const generateStaticParams = () =>
  getBlogPosts()
    .filter((post) => (allowInProgress || !post.inProgress) && !post.link)
    .map((post) => ({ slug: post.slug }));

export const dynamicParams = false;

export function generateMetadata(
  context: BlogPostPageContext,
): Metadata | undefined {
  const { slug } = context.params;
  const post = getBlogPosts().find((b) => b.slug === slug);
  if (!slug || !post) return undefined;

  const { title, date, summary, hero } = post;

  const ogImage = buildOgImageUrl('blog', title, hero);

  const metadata = createMetadata({
    title: `${title} | Blog – Jahir Fiquitiva`,
    description: summary || 'Blog post by Jahir Fiquitiva',
    image: ogImage,
    exactUrl: `https://jahir.dev/blog/${slug}`,
    keywords: post.keywords,
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  };
}
