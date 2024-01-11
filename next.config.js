/* eslint-disable @typescript-eslint/no-var-requires */
// NOTE
// Do not change this file to .mjs
// https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1305424923
const path = require('path');

const million = require('million/compiler');
const { withContentlayer } = require('next-contentlayer');

const appHeaders = require('./config/next/headers');
const redirects = require('./config/next/redirects');

/**
 * @type {import('next').NextConfig}
 */
const defaultNextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  crossOrigin: 'anonymous',
  experimental: {
    typedRoutes: true,
    ppr: true,
    useLightningcss: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'i.scdn.co' },
      { hostname: 'spotify.com' },
      { hostname: 'jahir.dev' },
      { hostname: 'unavatar.io' },
      { hostname: 'source.boringavatars.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'cdn.discordapp.com' },
      { hostname: 'raw.githubusercontent.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: '**.cdninstagram.com' },
      { hostname: '**.pixpa.com' },
      { hostname: '**.fbcdn.net' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  headers: () => appHeaders,
  redirects: () => redirects,
};

const millionConfig = {
  // mute: true,
  auto: { rsc: true },
};

module.exports = million.next(
  withContentlayer(defaultNextConfig),
  millionConfig,
);
