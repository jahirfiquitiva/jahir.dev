/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiFunc } from '~/types';

const userApiUrl = 'https://api.github.com/users/dohyongcorp';
const { GITHUB_API_TOKEN: githubApiToken = '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' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: githubApiToken } }
    : {};

export default async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const userRequest = await fetch(userApiUrl, authHeaders);
    const userReposRequest = await fetch(`${userApiUrl}/repos`, authHeaders);

    const user = await userRequest.json();
    const repositories = await userReposRequest.json();

    const mine = repositories.filter((repo: { fork: boolean }) => !repo.fork);
    const stars = mine.reduce(
      // eslint-disable-next-line
      (accumulator: number, repository: { stargazers_count: number }) => {
        const { stargazers_count: stargazers = 0 } = repository;
        return accumulator + stargazers;
      },
      0,
    );

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=1800',
    );

    return res.status(200).json({
      success: true,
      followers: user.followers,
      stars,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
};
