import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

import { db } from '@/lib/planetscale';

import { canRunAction } from './utils';

export const recordView = cache(async (slug: string) => {
  if (!canRunAction) return;
  noStore();
  try {
    const data = await db
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['views'])
      .execute();

    const views = !data.length ? 0 : Number(data[0].views);
    db.insertInto('counters')
      .values({ slug, views: 1 })
      .onDuplicateKeyUpdate({ views: views + 1 })
      .execute();
  } catch (e) {}
});

export const getViews = cache(async (slug: string): Promise<number> => {
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
});
