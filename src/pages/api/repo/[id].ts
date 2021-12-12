/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiFunc } from '~/types';

const repoApiUrl = 'https://api.github.com/repos/jahirfiquitiva';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  try {
    const { id: repo } = req.query;

    if (!repo) {
      return res.status(400).json({
        success: false,
        error: 'Missing repo name',
      });
    }

    const repoRequest = await fetch(`${repoApiUrl}/${repo}`, authHeaders);

    const repository = await repoRequest.json();
    const { stargazers_count: stargazers = 0 } = repository;

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=1800',
    );

    return res.status(200).json({
      success: true,
      stars: stargazers,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
};
