/* eslint-disable max-len */
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com *.gstatic.com;
    child-src *.google.com *.unsplash.com *.scdn.co *.spotify.com *.jahir.dev unavatar.now.sh *.unavatar.io cdn.discordapp.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src *.gstatic.com * blob: data:;
    frame-src www.google.com;
    object-src 'none';
    base-uri 'none';
    media-src 'self';
    connect-src *;
    font-src 'self' *.gstatic.com;
  `;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  const response = NextResponse.next();
  securityHeaders.forEach((header) => {
    response.headers.set(header.key, header.value);
  });
  return response;
};
