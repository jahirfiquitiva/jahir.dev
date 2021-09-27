/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createClient } from '@formium/client';

export const formium = createClient(
  // @ts-ignore
  process.env.FORMIUM_PROJECT_ID || process.env.NEXT_PUBLIC_FORMIUM_PROJECTID,
  {
    apiToken: process.env.FORMIUM_TOKEN,
  },
);
