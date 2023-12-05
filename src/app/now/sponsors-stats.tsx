import { getSponsorsAndCategories } from '@/lib/sponsors/all';

import { SimpleSponsorsStats } from '../donate/sponsors-stats';

// Update data once every 12 hours
export const revalidate = 43200;

export const SponsorsStats = async () => {
  const sponsors = await getSponsorsAndCategories().catch(() => null);
  return (
    <SimpleSponsorsStats
      sponsorsCount={sponsors?.sponsorsCount}
      totalEarningsPerMonth={sponsors?.totalEarningsPerMonth}
    />
  );
};
