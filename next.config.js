/* eslint-disable @typescript-eslint/no-var-requires */
// NOTE
// Do not change this file to .mjs
// https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1305424923
const path = require('path');

const bundleAnalyzer = require('@next/bundle-analyzer');
const million = require('million/compiler');

const appHeaders = require('./config/next/headers');
const redirects = require('./config/next/redirects');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

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

/**
 * @type {import('next').NextConfig}
 */
const defaultNextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  crossOrigin: 'anonymous',
  experimental: {
    ppr: true,
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

const config = withBundleAnalyzer(
  million.next(defaultNextConfig, millionConfig),
);
module.exports = config;
