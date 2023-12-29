import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { Suspense } from 'react';

import { Mdx } from '@/components/views/blog/mdx';
import { allReadableBlogs, getBlog } from '@/utils/blog';
import { createMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Loading from '../../loading';

import type { BlogPostPageContext } from './types';

export default function BlogPostPage(context: BlogPostPageContext) {
  const { slug } = context.params;
  const post = getBlog(slug);

  if (!slug || !post) return notFound();
  if (post.link) return redirect(post.link);

  return (
    <Suspense fallback={<Loading />}>
      <Mdx code={post.body.code} />
    </Suspense>
  );
}

export const generateStaticParams = () =>
  allReadableBlogs.map((post) => ({ slug: post.slug }));

export const dynamicParams = false;

export function generateMetadata(
  context: BlogPostPageContext,
): Metadata | undefined {
  const { slug } = context.params;
  const post = getBlog(slug);
  if (!slug || !post) return undefined;

  const { title, date, excerpt, hero } = post;

  const ogImage = buildOgImageUrl('blog', title, hero);

  const metadata = createMetadata({
    title: `${title} | Blog – Jahir Fiquitiva`,
    description: excerpt || 'Blog post by Jahir Fiquitiva',
    image: ogImage,
    exactUrl: `https://jahir.dev/blog/${slug}`,
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  };
}
