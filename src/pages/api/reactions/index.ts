/* eslint-disable no-extend-native */
/* eslint-disable no-underscore-dangle */
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
    const totalViews = await prisma.counters.aggregate({
      _sum: {
        likes: true,
        loves: true,
        awards: true,
        bookmarks: true,
      },
    });
    const { _sum: counters } = totalViews;

    return res.status(200).send({
      success: true,
      counters,
      total: Object.keys(counters).reduce(
        // eslint-disable-next-line
        (accumulator: string, key: string): string => {
          return (
            // @ts-ignore
            (BigInt(accumulator) + BigInt(counters[key] || 0)).toString()
          );
        },
        '0',
      ),
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
};
