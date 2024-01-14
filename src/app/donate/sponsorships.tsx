import { Suspense } from 'react';

import { SponsorsList } from '@/components/views/donate/sponsors-list';
import { Testimonials } from '@/components/views/donate/testimonials';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';

import Loading from '../loading';

export default async function Sponsorships() {
  const sponsors = await getSponsorsAndCategories();
  return (
    <Suspense fallback={<Loading />}>
      <SponsorsList
        categories={sponsors?.categories || []}
        unicorns={sponsors?.unicorns || []}
        sponsorsCount={sponsors.sponsorsCount}
        totalEarningsPerMonth={sponsors.totalEarningsPerMonth}
      />
      <Testimonials
        categories={sponsors?.categories || []}
        unicorns={sponsors?.unicorns || []}
      />
    </Suspense>
  );
}
