import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

import { db, type ReactionName } from '@/lib/planetscale';

import { canRunAction } from './utils';

export const incrementReaction = cache(
  async (slug: string, reaction: ReactionName) => {
    if (!canRunAction) return {};
    noStore();
    try {
      const data = await db
        .selectFrom('counters')
        .where('slug', '=', slug)
        .select([reaction])
        .execute();

      const reactionCount = !data.length ? 0 : Number(data[0][reaction]);
      db.insertInto('counters')
        .values({ slug, [reaction]: 1 })
        .onDuplicateKeyUpdate({ [reaction]: reactionCount + 1 })
        .execute();
      return { [reaction]: reactionCount + 1 };
    } catch (e) {
      return {};
    }
  },
);

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
