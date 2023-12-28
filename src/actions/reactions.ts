'use server';

import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

import { db, type ReactionName } from '@/lib/planetscale';

const url = process.env.VERCEL_URL || '';
export const incrementReaction = cache(
  async (slug: string, reaction: ReactionName) => {
    if (process.env.NODE_ENV === 'development') return;
    console.error(`Running action from ${url}`);
    if (url !== 'jahir.dev') return;
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
    } catch (e) {}
  },
);

const defaultCounters: Record<ReactionName, number> = {
  likes: 0,
  loves: 0,
  awards: 0,
  bookmarks: 0,
};

export const getReactions = cache(
  async (slug: string): Promise<Record<ReactionName, number>> => {
    try {
      const data = await db
        .selectFrom('counters')
        .where('slug', '=', slug)
        .select(['likes', 'loves', 'awards', 'bookmarks'])
        .execute();
      const [counters] = data;
      if (!counters) return defaultCounters;
      return {
        likes: counters.likes || 0,
        loves: counters.loves || 0,
        awards: counters.awards || 0,
        bookmarks: counters.bookmarks || 0,
      };
    } catch (e) {
      return defaultCounters;
    }
  },
);
