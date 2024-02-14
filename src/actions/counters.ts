'use server';

import {
  db,
  type CounterName,
  type Counters,
  reactionsNames,
} from '@/lib/planetscale';

import { canRunAction } from './utils';

export const incrementCounter = async (
  slug: string,
  counter: CounterName,
): Promise<{ [counter in CounterName]?: number }> => {
  if (!canRunAction) return {};
  try {
    const data = await db
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select([counter])
      .execute();

    const counterCount = !data.length ? 0 : Number(data[0][counter]);
    db.insertInto('counters')
      .values({ slug, [counter]: 1 })
      .onDuplicateKeyUpdate({ [counter]: counterCount + 1 })
      .execute();
    return { [counter]: counterCount + 1 };
  } catch (e) {
    return {};
  }
};

export type IncrementCounterFnType = typeof incrementCounter;

export const getCounters = async (
  slug: string,
  counter?: CounterName,
): Promise<Counters> => {
  try {
    const [counters] = await db
      .selectFrom('counters')
      .where('slug', '=', `blog--${slug}`)
      .select(counter ? [counter] : reactionsNames)
      .execute();
    return counters;
  } catch (e) {
    return {};
  }
};
