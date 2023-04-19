import { mdiHeartOutline, money } from '@/components/icons';
import { StatCard } from '@/components/views/dashboard/stat-card';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';

// Update data once every 12 hours
export const revalidate = 43200;

export const SponsorsStats = async () => {
  const sponsors = await getSponsorsAndCategories().catch(() => null);
  return (
    <>
      <StatCard
        title={'View sponsors'}
        href={'/donate#thanks'}
        text={'sponsors'}
        value={sponsors?.sponsorsCount || 0}
        iconPath={mdiHeartOutline}
        color={'#c94091'}
      />
      <StatCard
        title={'View sponsors'}
        href={'/donate'}
        text={'earned per month'}
        value={`$${(sponsors?.totalEarningsPerMonth || 0).toLocaleString()}`}
        iconPath={money}
        color={'#26de81'}
      />
    </>
  );
};
