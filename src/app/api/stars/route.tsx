import { NextResponse } from 'next/server';

export const runtime = 'edge';

const userApiUrl = 'https://api.github.com/users/jahirfiquitiva';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

export async function GET() {
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

    return NextResponse.json({
      followers: user.followers,
      stars,
    });
  } catch (err) {
    return NextResponse.json({
      followers: -1,
      stars: -1,
    });
  }
}
