/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiFunc } from '~/types';

const followesApiUrl =
  'https://api.twitter.com/1.1/followers/ids.json?screen_name=jahirfiquitiva&skip_status=true&include_user_entities=false';
const { TWITTER_BEARER_TOKEN: twitterApiToken = '' } = process.env;
const authHeaders =
  twitterApiToken && twitterApiToken.length > 0
    ? { headers: { Authorization: `Bearer ${twitterApiToken}` } }
    : {};

export default async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const followersRequest = await fetch(followesApiUrl, authHeaders);

    const followersData = await followersRequest.json();

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=1800',
    );

    return res.status(followersRequest.status || 200).json({
      success: followersRequest.status >= 200 && followersRequest.status < 300,
      followers: (followersData.ids || []).length,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
};
