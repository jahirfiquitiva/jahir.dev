import type { NextConfig } from 'next';

import path from 'node:path';

import million from '@million/lint';

import appHeaders from './config/next/headers';
import redirects from './config/next/redirects';

/*
class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === 'development';
      const { build } = await import('velite');
      await build({ watch: dev, clean: !dev });
    });
  }
}
*/

const defaultNextConfig: NextConfig = {
  // swcMinify: true,
  reactStrictMode: true,
  compress: true,
  crossOrigin: 'anonymous',
  experimental: {
    ppr: true,
    // useLightningcss: true,
    // optimizePackageImports: ['react-tweet'],
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
      { hostname: 'i.scdn.co' },
      { hostname: 'spotify.com' },
      { hostname: 'jahir.dev' },
      { hostname: 'unavatar.io' },
      { hostname: 'source.boringavatars.com' },
      { hostname: 'raw.githubusercontent.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'assets.literal.club' },
      { hostname: 'books.google.com' },
      { hostname: '**.pixpa.com' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
  },
  headers: () => appHeaders,
  redirects: () => redirects,
  // webpack: (config) => {
  //   config.plugins.push(new VeliteWebpackPlugin());
  //   return config;
  // },
};

const millionConfig = {
  mute: true,
  auto: { rsc: true },
  rsc: true,
};

const config = million.next(millionConfig)(defaultNextConfig);
module.exports = config;
