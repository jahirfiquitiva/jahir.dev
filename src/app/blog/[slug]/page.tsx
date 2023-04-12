import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { Mdx } from '@/components/views/mdx/mdx';
import { RequestData } from '@/types/request';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs } from 'contentlayer/generated';

type BlogPageData = RequestData<{ slug?: string }>;

export default async function Blog(data: BlogPageData) {
  if (data.params.slug === 'about') return redirect('/about');
  const post = allBlogs.find((post) => post.slug === data.params.slug);
  if (!post) return notFound();
  if (post.link) return redirect(post.link);

  return (
    <div>
      <h1>{post.title}</h1>
      <Mdx code={post?.body?.code} />
    </div>
  );
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  data: BlogPageData,
): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === data.params.slug);
  if (!post) return undefined;

  const { title, date, excerpt, hero, slug } = post;

  const ogImage =
    buildOgImageUrl('blog', title, `blog/${hero}`) ||
    `https://jahir.dev${hero || '/static/images/brand/banner.png'}`;

  const metadata = getStaticMetadata({
    title,
    description: excerpt || 'Blog post by Jahir Fiquitiva',
    image: ogImage,
    exactUrl: `https://jahir.dev/blog/${slug}`,
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  };
}
