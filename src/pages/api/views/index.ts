/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextApiRequest, NextApiResponse } from 'next';

import { getDevToArticles } from '@/lib/devto';
import prisma from '@/lib/prisma';

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const totalViews = await prisma.counters.aggregate({
      _sum: {
        views: true,
      },
    });

    let devToViews = 0;
    const devArticlesRequest = await getDevToArticles();
    if (devArticlesRequest.ok) {
      const devArticles = await devArticlesRequest.json().catch(() => []);

      devToViews = devArticles
        .filter((it: { published?: boolean }) => it.published)
        .reduce(
          // eslint-disable-next-line
          (accumulator: number, article: { page_views_count: number }) => {
            const { page_views_count: views = 0 } = article;
            return accumulator + views;
          },
          0,
        );
    }

    return res.status(200).send({
      success: true,
      total: (
        // eslint-disable-next-line no-underscore-dangle
        (totalViews?._sum?.views || BigInt(0)) + BigInt(devToViews)
      ).toString(),
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
