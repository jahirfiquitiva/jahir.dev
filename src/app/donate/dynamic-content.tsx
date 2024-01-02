import { SponsorsList } from '@/components/views/donate/sponsors-list';
import { Testimonials } from '@/components/views/donate/testimonials';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';

// Update data once every 12 hours
export const revalidate = 43200;

export default async function DynamicDonateContent() {
  const sponsors = await getSponsorsAndCategories().catch(null);
  return (
    <>
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
    </>
  );
}
