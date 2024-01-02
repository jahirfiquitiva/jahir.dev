const PROD_ENV = 'production';

const {
  NODE_ENV = 'development',
  VERCEL_ENV = 'development',
  VERCEL_GIT_REPO_SLUG = '',
  VERCEL_GIT_REPO_OWNER = '',
} = process.env;

export const canRunAction =
  (NODE_ENV === PROD_ENV || VERCEL_ENV === PROD_ENV) &&
  VERCEL_GIT_REPO_OWNER === 'jahirfiquitiva' &&
  VERCEL_GIT_REPO_SLUG === 'jahir.dev';
