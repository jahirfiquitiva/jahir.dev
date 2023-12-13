import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { DonateButtons } from '@/components/views/donate/buttons/buttons';
import { Mdx } from '@/components/views/mdx/mdx';
import { getBlog } from '@/utils/blog';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Loading from '../loading';

import DynamicDonateContent from './dynamic-content';

const DonatePageContent = async () => {
  const donate = await getBlog('donate');
  if (!donate) return notFound();
  return (
    <Mdx code={donate.body.code || ''} className={'gap-8 tablet-sm:-mt-16'} />
  );
};

export default async function DonatePage() {
  return (
    <Section id={'donate'}>
      <Heading shadow={'purple'} from={'purple'} to={'brand'}>
        Donate
      </Heading>
      <DonatePageContent />
      <DonateButtons />
      <Suspense fallback={<Loading />}>
        <DynamicDonateContent />
      </Suspense>
    </Section>
  );
}

export const metadata = getStaticMetadata({
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
