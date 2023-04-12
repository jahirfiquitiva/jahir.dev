import { notFound } from 'next/navigation';

import { Mdx } from '@/components/views/mdx/mdx';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs } from 'contentlayer/generated';

const about = allBlogs.find((post) => post.slug === 'about');

export default async function AboutPage() {
  if (!about) return notFound();
  return (
    <>
      <Mdx code={about?.body?.code} />
    </>
  );
}

export const metadata = getStaticMetadata({
  title: 'About',
  description: 'Learn more about me (Jahir Fiquitiva), my career and more',
  exactUrl: 'https://jahir.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
  image: buildOgImageUrl('about'),
});
