import type { NextApiRequest, NextApiResponse } from 'next';

import { queryBuilder, type ReactionName } from '@/lib/planetscale';

// eslint-disable-next-line max-lines-per-function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const slug = req.query?.slug as string;
    if (!slug) {
      return res.status(400).json({ message: 'Slug is required.' });
    }

    const data = await queryBuilder
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['slug', 'likes', 'loves', 'awards', 'bookmarks'])
      .execute();

    if (req.method === 'POST') {
      const reaction = req?.body?.reaction as ReactionName;
      if (!reaction) {
        return res.status(400).json({ message: 'Reaction key is required.' });
      }

      const reactionCount: number = !data.length
        ? 0
        : Number(data[0]?.[reaction] || 0);

      await queryBuilder
        .insertInto('counters')
        .values({ slug, [reaction as string]: 1 })
        .onDuplicateKeyUpdate({ [reaction as string]: reactionCount + 1 })
        .execute();

      return res.status(200).send({
        success: true,
        counters: { ...data, [reaction as string]: reactionCount + 1 },
      });
    }

    if (req.method === 'GET') {
      // const total = Object.keys(data).reduce((accumulator, key): string => {
      //   return (
      //     accumulator +
      //     Number(newCounters[key as keyof typeof newCounters] || 0)
      //   );
      // }, 0);

      return res.status(200).send({
        success: true,
        counters: data,
        total: 0,
      });
    }

    return res.status(405).send({
      success: false,
      error: 'Method not allowed!',
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
