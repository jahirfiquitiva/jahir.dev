import { mdiHeartOutline, money } from '@/components/icons';
import { StatCard } from '@/components/views/dashboard/stat-card';

interface SimpleSponsorsStatsProps {
  sponsorsCount?: number;
  totalEarningsPerMonth?: number;
  small?: boolean;
}

export const SimpleSponsorsStats = (props: SimpleSponsorsStatsProps) => {
  const { sponsorsCount = 0, totalEarningsPerMonth = 0, small } = props;
  return (
    <>
      <StatCard
        title={'View sponsors'}
        href={'/donate#thanks'}
        text={'sponsors'}
        value={sponsorsCount || 0}
        iconPath={mdiHeartOutline}
        color={'#c94091'}
        className={small ? 'tablet-sm:aspect-auto' : ''}
      />
      <StatCard
        title={'View sponsors'}
        href={'/donate'}
        text={'earned per month'}
        value={`$${(totalEarningsPerMonth || 0).toLocaleString()}`}
        iconPath={money}
        color={'#26de81'}
        className={small ? 'tablet-sm:aspect-auto' : ''}
      />
    </>
  );
};
