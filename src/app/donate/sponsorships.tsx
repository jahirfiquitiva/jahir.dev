import { Suspense } from 'react';

import { SponsorsList } from '@/components/ui/donate/sponsors-list';
import { Testimonials } from '@/components/ui/donate/testimonials';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';

import Loading from '../loading';

const Lists = async () => {
  const sponsors = await getSponsorsAndCategories();
  return (
    <>
      <SponsorsList
        categories={sponsors.categories}
        unicorns={sponsors.unicorns}
        sponsorsCount={sponsors.sponsorsCount}
        totalEarningsPerMonth={sponsors.totalEarningsPerMonth}
      />
      <Testimonials
        categories={sponsors.categories}
        unicorns={sponsors.unicorns}
      />
    </>
  );
};

export default function Sponsorships() {
  return (
    <Suspense fallback={<Loading sm />}>
      <Lists />
    </Suspense>
  );
}
