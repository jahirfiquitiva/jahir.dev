import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { Suspense } from 'react';

import { compileMDX } from '@/components/views/blog/mdx';
import { getBlogPosts } from '@/lib/blog';
import { createMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Loading from '../../loading';

import type { BlogPostPageContext } from './types';

export default async function BlogPostPage(context: BlogPostPageContext) {
  const { slug } = context.params;
  const post = getBlogPosts().find((b) => b.slug === slug);

  if (!slug || !post) return notFound();
  if (post.link) return redirect(post.link);

  const { content } = await compileMDX(post.content);
  return (
    <Suspense fallback={<Loading />}>
      <article>{content}</article>
    </Suspense>
  );
}

export const generateStaticParams = () =>
  getBlogPosts().map((post) => ({ slug: post.slug }));

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
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  };
}
