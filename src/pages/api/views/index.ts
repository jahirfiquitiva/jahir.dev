import type { NextApiRequest, NextApiResponse } from 'next';

import { getDevToArticles } from '@/lib/devto';
import { queryBuilder } from '@/lib/planetscale';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = await queryBuilder
      .selectFrom('counters')
      .select(['slug', 'views'])
      .execute();

    const views: number = data.reduce(
      (acc, item) => acc + Number(item.views || 0),
      0,
    );

    let devToViews = 0;
    const devArticlesRequest = await getDevToArticles();
    if (devArticlesRequest.ok) {
      const devArticles = await devArticlesRequest.json().catch(() => []);

      devToViews = devArticles
        .filter((it: { published?: boolean }) => it.published)
        .reduce(
          (accumulator: number, article: { page_views_count: number }) => {
            const { page_views_count: views = 0 } = article;
            return accumulator + views;
          },
          0,
        );
    }

    return res.status(200).send({
      success: true,
      total: (views + devToViews).toString(),
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
