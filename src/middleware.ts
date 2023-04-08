import { NextResponse, userAgent } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

const stringToId = (text: string) => {
  const noSpecialChars = text.toLowerCase().replace(/[^a-zA-Z ]/g, '--');
  return noSpecialChars.split(' ').join('-');
};

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const { nextUrl: url, geo } = request;
  const { pathname } = url;
  const country = geo?.country || 'US';
  const city = geo?.city || 'San Francisco';
  const agent = userAgent(request);
  console.error(agent);

  // Ignore files and API calls
  if (pathname.includes('.') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  event.waitUntil(
    (async () => {
      if (!agent.isBot) {
        // Add view to your database
        // ...
        const cityAndCountry = `${city}, ${country}`;
        const entryId = stringToId(cityAndCountry);
        console.log(`New visit from ${cityAndCountry} [${entryId}]`);
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
