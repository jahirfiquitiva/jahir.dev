/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '~/lib/prisma';
import { NextApiFunc } from '~/types';

const devToEndpoint = 'https://dev.to/api/articles/me';
const { DEV_TO_API_KEY: devToApiKey = '' } = process.env;
const authHeaders =
  devToApiKey && devToApiKey.length > 0
    ? { headers: { 'api-key': devToApiKey } }
    : {};

const devToPosts: Record<string, number> = {
  'blog--download-xcode': 58033,
  'blog--publishing-react-package': 416371,
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const slug: string = req.query.slug.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.counters.upsert({
        where: { slug },
        create: { slug },
        update: {
          views: { increment: 1 },
        },
      });

      return res.status(200).send({
        success: true,
        total: newOrUpdatedViews.views.toString(),
      });
    }

    if (req.method === 'GET') {
      const devToId: number = devToPosts[slug] || 0;
      let devToCount = BigInt(0);
      if (devToId) {
        const devArticlesRequest = await fetch(devToEndpoint, authHeaders);
        const devArticles = await devArticlesRequest.json();
        const article = devArticles.filter(
          (it: { id: number }) => it.id.toString() === devToId.toString(),
        )?.[0];
        if (article) devToCount = BigInt(article.page_views_count || 0);
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
};
