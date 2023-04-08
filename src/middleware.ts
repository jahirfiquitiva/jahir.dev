import { NextResponse, userAgent } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

import { queryBuilder } from './lib/planetscale';

const stringToId = (text: string) => {
  const noSpecialChars = text.toLowerCase().replace(/[^a-zA-Z ]/g, '--');
  return noSpecialChars.split(' ').join('-');
};

const dev = process.env.NODE_ENV === 'development';

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const { nextUrl: url, geo } = request;
  const { pathname } = url;
  const country = geo?.country || 'US';
  const city = geo?.city || 'San Francisco';
  const agent = userAgent(request);
  const validEngine = Boolean(agent.engine?.name);

  // Ignore files and API calls
  if (pathname.includes('.') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  console.log('is dev?', dev);
  event.waitUntil(
    (async () => {
      if (!agent.isBot && validEngine && !dev) {
        // Add visit to database
        const entryId = stringToId(`${city}, ${country}`);

        const currentData = await queryBuilder
          .selectFrom('visits')
          .where('id', '=', entryId)
          .select(['hits'])
          .execute();

        console.log(
          `New visit from ${city}, ${country} [${currentData[0]?.hits || 0}]`,
        );
        await queryBuilder
          .insertInto('visits')
          .values({ id: entryId, city, country, hits: BigInt(1) })
          .onDuplicateKeyUpdate({
            hits: BigInt(Number(`${currentData[0]?.hits || 0}`) + 1),
          })
          .execute();
      }
    })(),
  );

  // Ignore if not in the home page
  if (pathname !== '/') return NextResponse.next();
  url.searchParams.set('country', country);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
