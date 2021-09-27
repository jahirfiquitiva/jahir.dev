import { NextApiRequest, NextApiResponse } from 'next';

const userApiUrl = 'https://api.github.com/users/jahirfiquitiva';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: githubApiToken } }
    : {};

// Code copied from 'https://github.com/leerob/leerob.io/blob/master/pages/api/github.js'
export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const userRequest = await fetch(userApiUrl, authHeaders);
    const userReposRequest = await fetch(`${userApiUrl}/repos`, authHeaders);

    const user = await userRequest.json();
    const repositories = await userReposRequest.json();

    const mine = repositories.filter((repo: { fork: boolean }) => !repo.fork);
    const stars = mine.reduce(
      (accumulator: number, repository: { stargazers_count: number }) => {
        const { stargazers_count: stargazers = 0 } = repository;
        return accumulator + stargazers;
      },
      0,
    );

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=1200',
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
