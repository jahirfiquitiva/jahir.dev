/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import { fileURLToPath } from 'url';

import withPlaiceholder from '@plaiceholder/next';
import million from 'million/compiler';

import appHeaders from './config/next/headers.mjs';
import redirects from './config/next/redirects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    // ppr: true,
    // useLightningcss: true,
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
    formats: ['image/avif', 'image/webp'],
  },
  headers: () => appHeaders,
  redirects: () => redirects,
};

const millionConfig = {
  mute: true,
  auto: { rsc: true },
};

const config = million.next(withPlaiceholder(defaultNextConfig), millionConfig);
export default config;
