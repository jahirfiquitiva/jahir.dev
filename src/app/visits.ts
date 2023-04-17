'use server';

import { headers as nextHeaders } from 'next/headers';

import { db } from '@/lib/planetscale';

const stringToId = (text: string) => {
  const noSpecialChars = text.toLowerCase().replace(/[^a-zA-Z ]/g, '--');
  return noSpecialChars.split(' ').join('-');
};

const recordVisitInDb = async (
  city?: string | null,
  country?: string | null,
) => {
  if (!city || !country) return;
  try {
    const entryId = stringToId(`${city}, ${country}`);
    const currentData = await db
      .selectFrom('visits')
      .where('id', '=', entryId)
      .select(['hits'])
      .execute();

    await db
      .insertInto('visits')
      .values({ id: entryId, city, country, hits: 1 })
      .onDuplicateKeyUpdate({
        hits: currentData[0]?.hits || 0 + 1,
      })
      .execute();
  } catch (e) {}
};

export const trackVisit = async (headers: ReturnType<typeof nextHeaders>) => {
  try {
    const platform = headers.get('sec-ch-ua-platform');
    if (!platform) return;
    const host = headers.get('host');
    console.error({ host });
    // Only track visit in production site
    if (!host || !host.includes('jahir.dev')) return;
    const city = headers.get('x-vercel-ip-city');
    const country = headers.get('x-vercel-ip-country');
    await recordVisitInDb(city, country);
  } catch (e) {}
};
