import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { Mdx } from '@/components/views/mdx/mdx';
import { allReadableBlogs, getBlog } from '@/utils/blog';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import type { BlogPostPageContext } from './types';

export default function BlogPostPage(context: BlogPostPageContext) {
  const { slug } = context.params;
  const post = getBlog(slug);

  if (!slug || !post) return notFound();
  if (post.link) return redirect(post.link);

  return <Mdx code={post.body.code} />;
}

export const generateStaticParams = () =>
  allReadableBlogs.map((post) => ({ slug: post.slug, post }));

export function generateMetadata(
  context: BlogPostPageContext,
): Metadata | undefined {
  const { slug, post } = context.params;
  if (!slug || !post) return undefined;

  const { title, date, excerpt, hero } = post;

  const ogImage = buildOgImageUrl('blog', title, hero);

  const metadata = getStaticMetadata({
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
