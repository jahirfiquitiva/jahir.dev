import type { Activity, FC } from '@/old/types';

import { ActivityCard } from './ActivityCard';
import { ActivityItem } from './ActivityItem';

interface DiscordActivityProps {
  activity?: Activity;
}

export const DiscordActivity: FC<DiscordActivityProps> = (props) => {
  const { activity } = props;
  if (!activity) return null;
  return (
    <ActivityItem title={activity.description}>
      <ActivityCard
        title={activity?.name || ''}
        texts={{
          first: activity?.name || '',
          second: `${activity?.details || ''}${
            activity?.state ? ` / ${activity?.state}` : ''
          }`,
        }}
        image={{
          url: activity?.largeImage || '',
          alt: activity?.largeImageText || '',
        }}
      />
    </ActivityItem>
  );
};
