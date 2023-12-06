import { ReactionsStats as StatsCard } from '@/components/views/dashboard/reactions/reactions';
import { getPostsReactions } from '@/lib/reactions';

export const revalidate = 3600;

export const ReactionsStats = async () => {
  const reactions = await getPostsReactions();
  return (
    <StatsCard
      title={'View blog posts'}
      href={'/blog'}
      text={'all-time reactions'}
      value={reactions?.total}
    />
  );
};
