import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { DonateButtons } from '@/components/views/donate/buttons';
import { SponsorsList } from '@/components/views/donate/sponsors-list';
import { Mdx } from '@/components/views/mdx';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';
import { getBlog } from '@/utils/blogs';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

// Update sponsors once per hour
export const revalidate = 3600;

const donate = getBlog('donate');

export default async function DonatePage() {
  if (!donate) return notFound();
  const sponsorsCategories = await getSponsorsAndCategories().catch(null);
  return (
    <Section id={'donate'}>
      <Heading shadow={'brand'} from={'brand'} to={'blue'}>
        Donate
      </Heading>
      <Mdx code={donate?.body?.code} className={'gap-8'} />
      <DonateButtons />
      <SponsorsList
        categories={sponsorsCategories?.categories || []}
        unicorns={sponsorsCategories?.unicorns || []}
      />
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
