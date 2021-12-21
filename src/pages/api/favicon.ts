/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from 'next';

import { getWebsiteFavicon } from '~/lib/favicons';
import { NextApiFunc } from '~/types';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  const { domain } = req.query;

  if (!domain) {
    return res.status(400).send({
      success: false,
      error: 'Missing website domain',
    });
  }

  try {
    let favicon = '';
    try {
      favicon = await getWebsiteFavicon(domain.toString());
    } catch (e) {}

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=1800',
    );

    return res.status(200).json({
      success: true,
      favicon,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
};
