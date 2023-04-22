import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { DonateButtons } from '@/components/views/donate/buttons';
import { Mdx } from '@/components/views/mdx';
import { getBlog } from '@/utils/blogs';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import DynamicDonateContent from './dynamic-content';

const donate = getBlog('donate');

export default async function DonatePage() {
  if (!donate) return notFound();
  return (
    <Section id={'donate'}>
      <Heading shadow={'brand'} from={'brand'} to={'blue'}>
        Donate
      </Heading>
      <Mdx code={donate?.body?.code} className={'gap-8 tablet-sm:-mt-16'} />
      <DonateButtons />
      {/* @ts-expect-error Server Component */}
      <DynamicDonateContent />
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
