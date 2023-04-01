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
    const slug: string = (req.query.slug || []).toString();
    const devToId: string = (req.query.devToId || '').toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.counters.upsert({
        where: { slug },
        create: { slug, views: 1 },
        update: {
          views: { increment: 1 },
        },
      });

      return res.status(200).send({
        success: true,
        total: (newOrUpdatedViews.views || '0').toString(),
      });
    }

    if (req.method === 'GET') {
      let devToCount = BigInt(0);
      if (devToId) {
        const devArticlesRequest = await getDevToArticles();
        if (devArticlesRequest.ok) {
          const devArticles = await devArticlesRequest.json().catch(() => []);
          const article = devArticles.filter(
            (it: { id: number }) => it.id.toString() === devToId,
          )?.[0];
          // eslint-disable-next-line max-depth
          if (article) devToCount = BigInt(article.page_views_count || 0);
        }
      }

      const counters = await prisma.counters.findUnique({
        where: { slug },
      });

      return res.status(200).send({
        success: true,
        total: ((counters?.views || BigInt(0)) + devToCount).toString(),
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
