/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from 'next';

import { getFollowers } from '~/lib/twitter';
import { NextApiFunc } from '~/types';

export default async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const { status, error, count } = await getFollowers();

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=1800',
    );

    return res.status(+status).json({
      success: status >= 200 && status < 300,
      followers: count,
      error,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
};
