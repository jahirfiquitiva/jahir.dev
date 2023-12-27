import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { Suspense } from 'react';

import { getBlogPosts } from '@/lib/blog';
import { compileMDX } from '@/lib/mdx';
import styles from '@/styles/article.scss';
import { getReadableBlogs, getBlog } from '@/utils/blog';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Loading from '../../loading';

import type { BlogPostPageContext } from './types';

export default async function BlogPostPage(context: BlogPostPageContext) {
  const { slug } = context.params;
  const post = await getBlog(slug);

  if (!slug || !post) return notFound();
  if (post.link) return redirect(post.link);

  const { content } = await compileMDX(post.content);
  return (
    <Suspense fallback={<Loading />}>
      {/* <Mdx code={post.body.code} /> */}
      <article className={styles.article}>{content}</article>
    </Suspense>
  );
}

export const generateStaticParams = async () =>
  (await getReadableBlogs()).map((post) => ({ slug: post.slug }));

export const dynamicParams = false;

export async function generateMetadata(
  context: BlogPostPageContext,
): Promise<Metadata | undefined> {
  const { slug } = context.params;
  const post = await getBlog(slug);
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
