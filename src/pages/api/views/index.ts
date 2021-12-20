/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextApiRequest, NextApiResponse } from 'next';

import { getDevToArticles } from '~/lib/devto';
import prisma from '~/lib/prisma';
import { NextApiFunc } from '~/types';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const totalViews = await prisma.counters.aggregate({
      _sum: {
        views: true,
      },
    });

    const devArticlesRequest = await getDevToArticles();
    const devArticles = await devArticlesRequest.json();

    const devToViews = devArticles
      .filter((it: { published?: boolean }) => it.published)
      .reduce(
        // eslint-disable-next-line
        (accumulator: number, article: { page_views_count: number }) => {
          const { page_views_count: views = 0 } = article;
          return accumulator + views;
        },
        0,
      );

    return res.status(200).send({
      success: true,
      total: (
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
};
