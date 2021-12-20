/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '~/lib/prisma';
import { NextApiFunc } from '~/types';

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const slug: string = req.query.slug.toString();

    if (req.method === 'POST') {
      const objectToUpdate = {};
      const { body } = req;
      if (body) {
        const { reaction } = body;
        if (reaction) {
          // @ts-ignore
          objectToUpdate[reaction] = { increment: 1 };
        }
      }

      const newOrUpdatedCounters = await prisma.counters.upsert({
        where: { slug },
        create: { slug },
        update: objectToUpdate,
      });

      return res.status(200).send({
        success: true,
        counters: newOrUpdatedCounters,
      });
    }

    if (req.method === 'GET') {
      const counters = await prisma.counters.findUnique({
        where: { slug },
      });

      return res.status(200).send({
        success: true,
        counters: { ...counters, slug: undefined, views: undefined },
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
