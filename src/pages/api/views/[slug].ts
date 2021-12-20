/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '~/lib/prisma';
import { NextApiFunc } from '~/types';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.counters.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          views: {
            increment: 1,
          },
        },
      });

      return res.status(200).send({
        success: true,
        total: newOrUpdatedViews.views.toString(),
      });
    }

    if (req.method === 'GET') {
      const counters = await prisma.counters.findUnique({
        where: {
          slug,
        },
      });

      return res.status(200).send({
        success: true,
        total: counters?.views.toString(),
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
