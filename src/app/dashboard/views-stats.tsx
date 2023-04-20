import { mdiEyeOutline } from '@/components/icons';
import { StatCard } from '@/components/views/dashboard/stat-card';
import { db } from '@/lib/planetscale';

export const revalidate = 3600;

const getPostsViews = async (): Promise<number> => {
  try {
    const data =
      (await db.selectFrom('counters').select(['views']).execute()) || [];
    return (data || []).reduce((p, c) => p + Number(c.views || 0), 0);
  } catch (e) {
    return 0;
  }
};

export const ViewsStats = async () => {
  const views = await getPostsViews();
  return (
    <StatCard
      title={'View blog posts'}
      href={'/blog'}
      text={'all-time views'}
      value={views}
      iconPath={mdiEyeOutline}
      color={'#fa8231'}
    />
  );
};
