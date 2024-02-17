import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { MDX } from '@/components/ui/blog/mdx';
import { allReadableBlogs, allReadableBlogsWithContent } from '@/utils/blog';
import { createMetadata } from '@/utils/metadata';

import type { BlogPostPageContext } from './types';

// export const dynamicParams = false;

export default async function BlogPostPage(context: BlogPostPageContext) {
  const { slug } = context.params;
  const post = allReadableBlogsWithContent.find((b) => b.slug === slug);
  if (!slug || !post) return notFound();
  if (post.link) return redirect(post.link);
  return <MDX code={post.code} />;
}

export const generateStaticParams = () =>
  allReadableBlogs
    .filter((post) => !post.link)
    .map((post) => ({ slug: post.slug }));

export function generateMetadata(
  context: BlogPostPageContext,
): Metadata | undefined {
  const { slug } = context.params;
  if (!slug) return undefined;
  const post = allReadableBlogsWithContent.find((b) => b.slug === slug);
  if (!post) return undefined;

  const { title, date, summary } = post;

  const metadata = createMetadata({
    title: `${title} | Blog – Jahir Fiquitiva`,
    description: summary || 'Blog post by Jahir Fiquitiva',
    exactUrl: `https://jahir.dev/blog/${slug}`,
    keywords: post.seoKeywords,
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  };
}
