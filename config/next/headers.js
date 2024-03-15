/* eslint-disable max-len */
const ContentSecurityPolicy = `
  default-src 'self' vercel.live;
  worker-src 'self' blob:;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.jahir.dev;
  child-src *.scdn.co *.spotify.com *.jahir.dev unavatar.now.sh *.unavatar.io;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  object-src 'none';
  base-uri 'none';
  media-src 'self';
  connect-src *;
  font-src 'self' data:;
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

const headers = [
  {
    source: '/(.*)',
    headers: securityHeaders,
  },
  {
    source: '/feed.xml',
    headers: [
      {
        key: 'Content-Type',
        value: 'application/rss+xml;charset=utf-8',
      },
    ],
  },
];

module.exports = headers;
