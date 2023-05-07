'use server';

import { zact } from 'zact/server';
import { z } from 'zod';

import { type CountersReactions, db, reactionsNames } from '@/lib/planetscale';

const getData = (slug: string) =>
  db
    .selectFrom('counters')
    .where('slug', '=', slug)
    .select(['likes', 'loves', 'awards', 'bookmarks'])
    .execute();

export const incrementReaction = zact(
  z.object({
    slug: z.string().min(1).startsWith('blog--'),
    reaction: z.enum(reactionsNames).optional(),
  }),
)(async (actionData): Promise<CountersReactions> => {
  const { slug, reaction } = actionData;
  const data = await getData(slug).catch(() => [{} as CountersReactions]);
  const [counters] = data;
  if (!reaction) return counters;
  const reactionCount = Number(counters?.[reaction] || 0);

  const results = db
    .insertInto('counters')
    .values({ slug, [reaction]: 1 })
    .onDuplicateKeyUpdate({
      [reaction]: reactionCount + 1,
    })
    .execute();

  console.error({ results });
  return {};
});
