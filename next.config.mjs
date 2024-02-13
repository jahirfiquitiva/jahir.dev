import path from 'path';
import { fileURLToPath } from 'url';

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
    // ppr: true,
    // useLightningcss: true,
    optimizePackageImports: ['react-tweet'],
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
      { hostname: 'assets.literal.club' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    // Same breakpoints as Tailwind CSS config
    deviceSizes: [375, 425, 596, 768, 960],
  },
  headers: () => appHeaders,
  redirects: () => redirects,
};

const millionConfig = {
  mute: true,
  auto: { rsc: true },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config = million.next(defaultNextConfig, millionConfig);
export default defaultNextConfig;
