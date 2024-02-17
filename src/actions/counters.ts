'use server';

import { eq } from 'drizzle-orm';
import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

import { db, type CounterName, counters, type Counters } from '@/lib/db';

import { canRunAction } from './utils';

export const incrementCounter = cache(
  async (
    slug: string,
    counter: CounterName,
  ): Promise<{ [counter in CounterName]?: number }> => {
    if (!canRunAction) return {};
    noStore();
    try {
      const data = await db
        .select({ [counter]: counters[counter] })
        .from(counters)
        .where(eq(counters.slug, slug))
        .execute();

      const counterCount = !data.length ? 0 : Number(data[0][counter]);
      db.insert(counters)
        .values({ slug, [counter]: 0 })
        .onConflictDoUpdate({
          target: counters.slug,
          set: { [counter]: counterCount + 1 },
        })
        .execute();
      return { [counter]: counterCount + 1 };
    } catch (e) {
      return {};
    }
  },
);

export type IncrementCounterFnType = typeof incrementCounter;

export const getCounters = async (slug: string): Promise<Counters> => {
  noStore();
  try {
    const [result] = await db
      .select()
      .from(counters)
      .where(eq(counters.slug, slug))
      .execute();
    return result as Counters;
  } catch (e) {
    return {};
  }
};
