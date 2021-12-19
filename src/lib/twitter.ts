import querystring from 'querystring';

import { TwitterResponse } from '~/types';

const twitterUserId = '328125793';
const {
  TWITTER_CONSUMER_TOKEN: consumerToken = '',
  TWITTER_CONSUMER_SECRET: consumerSecret = '',
} = process.env;

const basic = Buffer.from(`${consumerToken}:${consumerSecret}`).toString(
  'base64',
);
const TOKEN_ENDPOINT = 'https://api.twitter.com/oauth2/token';
const FOLLOWERS_ENDPOINT = `https://api.twitter.com/2/users/${twitterUserId}/followers?max_results=1000`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset:utf-8',
    },
    body: querystring.stringify({
      grant_type: 'client_credentials',
    }),
  });

  return response.json();
};

const internalGetAllFollowers = async (
  firstRequest: boolean,
  accessToken: string,
  lastCount: number = 0,
  nextPageToken: string | undefined | null = null,
): Promise<TwitterResponse> => {
  if (!accessToken) {
    return { count: 0, status: 400, error: 'Missing access token' };
  }

  if (!nextPageToken && !firstRequest) {
    return { count: lastCount, status: 200 };
  }

  let url = FOLLOWERS_ENDPOINT;
  if (nextPageToken) {
    url += `&pagination_token=${nextPageToken}`;
  }

  const request = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const { meta, detail, status } = await request.json();

  if (!meta) {
    return {
      count: lastCount,
      status: status || request.status || 400,
      error: detail || 'Unexpected error',
    };
  }

  const { result_count: count = 0, next_token: nextToken = '' } = meta;

  if (nextToken) {
    return internalGetAllFollowers(false, accessToken, count, nextToken);
  }
  return { count: count + lastCount, status: request.status || 200 };
};

export const getFollowers = async () => {
  const { access_token: accessToken } = await getAccessToken();
  return internalGetAllFollowers(true, accessToken);
};
