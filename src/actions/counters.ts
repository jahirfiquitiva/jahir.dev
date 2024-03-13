'use server';

import { and, desc, eq, gt, ne, sql } from 'drizzle-orm';
import { unstable_noStore as noStore } from 'next/cache';

import { db, counters } from '@/lib/db';
import type { CounterName, Counters } from '@/types/db';

import { canRunAction } from './utils';

export const incrementCounter = async (
  slug: string,
  counter: CounterName,
): Promise<{ [counter in CounterName]?: number }> => {
  if (!canRunAction) return {};
  noStore();
  try {
    const [data] = await db
      .insert(counters)
      .values({ slug, [counter]: 0 })
      .onConflictDoUpdate({
        target: counters.slug,
        set: { [counter]: sql`${counters[counter]} + 1` },
      })
      .returning({ [counter]: counters[counter] });
    return data;
  } catch (e) {
    return {};
  }
};

export type IncrementCounterFnType = typeof incrementCounter;

export const getCounters = async (slug: string): Promise<Counters> => {
  noStore();
  try {
    const records = await db
      .select()
      .from(counters)
      .where(eq(counters.slug, slug))
      .execute();
    if (!records.length) return {};
    return records[0] as Counters;
  } catch (e) {
    return {};
  }
};

export const getTopThreeBlogPosts = async (latestBlogPostSlug: string) => {
  noStore();
  try {
    const topThree = await db
      .select({ slug: counters.slug, views: counters.views })
      .from(counters)
      .where(
        and(
          // It isn't "uses" blog post
          ne(counters.slug, 'uses'),
          // It isn't the most recent blog post
          ne(counters.slug, latestBlogPostSlug),
          // Has more than 1 view
          gt(counters.views, 1),
        ),
      )
      .orderBy(desc(counters.views))
      .limit(3)
      .execute();
    return topThree;
  } catch (e) {
    console.error(e);
    return [];
  }
};
