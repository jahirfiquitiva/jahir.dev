import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { Mdx } from '@/components/views/mdx/mdx';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs } from 'contentlayer/generated';

import Photo from './photo';

const about = allBlogs.find((post) => post.slug === 'about');

export default async function AboutPage() {
  if (!about) return notFound();
  return (
    <Section id={'about'}>
      <Heading shadow={'blue'} from={'blue'} to={'green'}>
        About
      </Heading>
      {/* @ts-expect-error Server Component */}
      <Photo />
      <Mdx code={about?.body?.code} />
    </Section>
  );
}

export const metadata = getStaticMetadata({
  title: 'About',
  description: 'Learn more about me (Jahir Fiquitiva), my career and more',
  exactUrl: 'https://jahir.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
  image: buildOgImageUrl('about'),
});
