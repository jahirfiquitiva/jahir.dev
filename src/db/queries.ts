import { unstable_noStore as noStore } from 'next/cache';

import { db, type ReactionsCounters } from '@/lib/planetscale';

export const getReactions = async (
  slug: string,
): Promise<ReactionsCounters> => {
  noStore();
  try {
    const data = await db
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['likes', 'loves', 'awards', 'bookmarks'])
      .execute();
    const [counters] = data;
    if (!counters) return {};
    return {
      likes: counters.likes || 0,
      loves: counters.loves || 0,
      awards: counters.awards || 0,
      bookmarks: counters.bookmarks || 0,
    };
  } catch (e) {
    return {};
  }
};

export const getViews = async (slug: string): Promise<number> => {
  noStore();
  try {
    const data = await db
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['slug', 'views'])
      .execute();
    return Number(data?.[0]?.views || 0);
  } catch (e) {
    return 0;
  }
};
