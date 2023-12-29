import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// import { Heading } from '@/components/core/heading';
// import { Section } from '@/components/core/section';
// import { DonateButtons } from '@/components/views/donate/buttons/buttons';
import { Section } from '@/components/section';
import { Mdx } from '@/components/views/blog/mdx';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs } from 'contentlayer/generated';

import Loading from '../loading';

import DynamicDonateContent from './dynamic-content';

const DonatePageContent = () => {
  const donate = allBlogs.find((it) => it.slug === 'donate');
  if (!donate) return notFound();
  return (
    <Mdx code={donate.body.code || ''} className={'gap-2 tablet-sm:-mt-4'} />
  );
};

export default function DonatePage() {
  return (
    <Section id={'donate'}>
      <h1 className={getColoredTextClasses('purple', 'purple', 'brand')}>
        Donate
      </h1>
      <DonatePageContent />
      {/* <DonateButtons />
      <Suspense fallback={<Loading />}>
        <DynamicDonateContent />
      </Suspense> */}
    </Section>
  );
}

export const metadata = createMetadata({
  title: 'Donate – Jahir Fiquitiva',
  description:
    // eslint-disable-next-line max-len
    'Support Jahir Fiquitiva. Donate or sponsor him as a recognition for his work on different projects.',
  exactUrl: 'https://jahir.dev/donate',
  keywords: [
    'donate',
    'support',
    'sponsor',
    'open-source',
    'supporter',
    'sponsorship',
  ],
  image: buildOgImageUrl('donate'),
});
