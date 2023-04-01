/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextApiRequest, NextApiResponse } from 'next';

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
      const newCounters = { ...counters, slug: undefined, views: undefined };
      const total = Object.keys(newCounters).reduce(
        // eslint-disable-next-line
        (accumulator: string, key: string): string => {
          return (
            // @ts-ignore
            (BigInt(accumulator) + BigInt(newCounters[key] || 0)).toString()
          );
        },
        '0',
      );

      return res.status(200).send({
        success: true,
        counters: newCounters,
        total,
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
