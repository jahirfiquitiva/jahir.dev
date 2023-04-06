/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextApiRequest, NextApiResponse } from 'next';

import { getDevToArticles } from '@/lib/devto';
import { queryBuilder } from '@/lib/planetscale';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const slug = req.query?.slug as string;
    if (!slug) {
      return res.status(400).json({ message: 'Slug is required.' });
    }

    const devToId: string = (req.query.devToId || '').toString();

    const data = await queryBuilder
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['views'])
      .execute();

    const views = !data.length ? 0 : Number(data[0].views);

    if (req.method === 'POST') {
      await queryBuilder
        .insertInto('counters')
        .values({ slug, views: 1 })
        .onDuplicateKeyUpdate({ views: views + 1 })
        .execute();

      return res.status(200).send({
        success: true,
        total: (views + 1).toString(),
      });
    }

    if (req.method === 'GET') {
      let devToCount = 0;
      if (devToId) {
        const devArticlesRequest = await getDevToArticles();
        if (devArticlesRequest.ok) {
          const devArticles = await devArticlesRequest.json().catch(() => []);
          const article = devArticles.filter(
            (it: { id: number }) => it.id.toString() === devToId,
          )?.[0];
          // eslint-disable-next-line max-depth
          if (article) devToCount = Number(article.page_views_count || 0);
        }
      }

      return res.status(200).send({
        success: true,
        total: (views + devToCount).toString(),
      });
    }

    return res.status(405).send({
      success: false,
      error: 'Method not allowed!',
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
