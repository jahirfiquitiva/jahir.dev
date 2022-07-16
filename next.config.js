/* eslint-disable @typescript-eslint/no-var-requires */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
const { withContentlayer } = require('next-contentlayer');

const appHeaders = require('./headers');

const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

/**
 * @type {import('next').NextConfig}
 */
const defaultNextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
    newNextLinkBehavior: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  images: {
    domains: [
      'images.unsplash.com',
      'i.scdn.co',
      'spotify.com',
      'jahir.dev',
      'unavatar.now.sh',
      'unavatar.io',
      'lh3.googleusercontent.com',
      'cdn.discordapp.com',
      'raw.githubusercontent.com',
      'scontent-atl3-1.cdninstagram.com',
      '*.cdninstagram.com',
      'www.markdownguide.org',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash:8][ext]',
      },
    });
    return config;
  },
  async headers() {
    return appHeaders;
  },
  async redirects() {
    return [
      /* Blog posts redirections */
      buildRedirect(
        '/blog/a-priori-care',
        'https://medium.com/@jahirfiquitiva/taking-a-priori-care-of-your-future-job-7ed24cf18ed2',
      ),
      buildRedirect(
        '/blog/md-iconography-guidelines',
        'https://stories.uplabs.com/what-google-missed-in-their-guidelines-for-material-design-iconography-daf9f88000ec',
      ),
      buildRedirect('/blog/post-of-fame', '/donate#thanks'),
      /* Old static assets paths to news */
      buildRedirect('/assets/:path*', '/static/:path*'),
      /* Needed for android dashboards */
      buildRedirect(
        '/static/images/me/me.jpg',
        '/static/images/jahir/jahir.jpg',
      ),
      /* Dashbud links */
      buildRedirect('/dashbud', 'https://dashbud.dev'),
      buildRedirect('/dashbud/:path*', 'https://dashbud.dev'),
      buildRedirect('/dashsetup', 'https://dashbud.dev'),
      buildRedirect('/dashsetup/:path*', 'https://dashbud.dev'),
      /* Other redirections */
      buildRedirect('/links', '/'),
      buildRedirect('/music', '/dashboard'),
      buildRedirect('/now', '/dashboard'),
      buildRedirect('/support', '/donate'),
      buildRedirect('/thanks', '/donate#thanks'),
      buildRedirect('/uses', '/blog/uses'),
      buildRedirect('/releases', '/gh-releases'),
      buildRedirect('/feed', '/feed.xml'),
      buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
    ];
  },
};

module.exports = withContentlayer(defaultNextConfig);
// module.exports = withBundleAnalyzer(...);
