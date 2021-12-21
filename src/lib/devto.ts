const devToEndpoint = 'https://dev.to/api/articles/me';
const { DEV_TO_API_KEY: devToApiKey = '' } = process.env;
const authHeaders =
  devToApiKey && devToApiKey.length > 0
    ? { headers: { 'api-key': devToApiKey } }
    : {};

export const getDevToArticles = async () => {
  return fetch(devToEndpoint, authHeaders);
};
