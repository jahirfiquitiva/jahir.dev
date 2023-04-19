import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { SponsorsList } from '@/components/views/donate/sponsors-list';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

export default async function DonatePage() {
  const sponsorsCategories = await getSponsorsAndCategories().catch(null);
  return (
    <Section id={'donate'}>
      <Heading>Donate</Heading>
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
