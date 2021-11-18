/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiFunc } from '~/types';

const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: githubApiToken } }
    : {};

const fetchRepoData = async (name?: string) => {
  if (!name || !name.length) return null;
  const dataRequest = await fetch(
    `https://api.github.com/repos/jahirfiquitiva/${name}/releases/latest`,
    authHeaders,
  );
  const data = await dataRequest.json();
  const { assets = [] } = data;
  const extraRepoData = {
    success: false,
    url: `https://github.com/jahirfiquitiva/${name}`,
  };
  const defaultDownloadLink = `https://github.com/jahirfiquitiva/${name}/releases/latest/`;
  let downloadLink = defaultDownloadLink;
  if (assets) {
    const [apk] = assets;
    if (apk) {
      extraRepoData.success = true;
      downloadLink = apk.browser_download_url || defaultDownloadLink;
    }
  }
  return { ...extraRepoData, download: downloadLink };
};

export default (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  const { repo } = req.query;
  // @ts-ignore
  return fetchRepoData(repo)
    .then((result) => {
      return res.status(200).json({ ...result });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: err.message || err.stackTrace.toString() || 'Unexpected error',
      });
    });
};
