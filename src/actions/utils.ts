const PROD_ENV = 'production';
export const canRunAction =
  process.env.NODE_ENV === PROD_ENV || process.env.VERCEL_ENV === PROD_ENV;
