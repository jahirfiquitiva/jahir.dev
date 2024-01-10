import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

import {
  db,
  type ReactionName,
  type ReactionsCounters,
} from '@/lib/planetscale';

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

export const getReactions = cache(
  async (slug: string): Promise<ReactionsCounters> => {
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
  },
);
