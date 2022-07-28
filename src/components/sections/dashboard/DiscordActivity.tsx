import { mdiAbTesting } from '@mdi/js';

import { useActivity } from '@/hooks';

import { ActivityCard } from './activity/ActivityCard';
import { ActivityItem } from './activity/ActivityItem';

export const DiscordActivity = () => {
  const { data, loading } = useActivity();
  const [activity] = data?.activities || [];
  if (!loading && !data) return null;
  return (
    <ActivityItem title={'Programming…'}>
      <ActivityCard
        title={'Test'}
        texts={{
          first: activity?.name || '',
          second: activity?.details || '',
          third: activity?.state,
        }}
        empty={{
          is: data == null || !Object.keys(data).length,
          text: 'Nothing',
          iconPath: mdiAbTesting,
        }}
      />
    </ActivityItem>
  );
};
