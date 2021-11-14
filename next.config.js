/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
require('dotenv').config();
const { withContentlayer } = require('next-contentlayer');

const { getPostsToRedirect } = require('./scripts/posts-to-redirect');

const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

const buildExternalBlogPostsRedirects = async () => {
  const matters = await getPostsToRedirect().catch(() => []);
  return matters.map((it) => {
    return buildRedirect(`/blog/${it.slug}`, it.link);
  });
};

const defaultNextConfig = {
  swcMinify: true,
  reactStrictMode: true,
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
    ],
  },
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
  async redirects() {
    const postsRedirects = await buildExternalBlogPostsRedirects().catch(
      () => [],
    );
    return [
      ...postsRedirects,
      buildRedirect('/assets/:path*', '/static/:path*'),
      buildRedirect(
        '/static/images/posts/:path*',
        '/static/images/blog/:path*',
      ),
      buildRedirect(
        '/static/images/me/:path*',
        '/static/images/jahir/:path*',
      ),
      buildRedirect(
        '/static/images/me/me.jpg',
        '/static/images/jahir/jahir.jpg',
      ),
      buildRedirect('/dashbud', 'https://dashbud.dev'),
      buildRedirect('/dashbud/:path*', 'https://dashbud.dev'),
      buildRedirect('/dashsetup', 'https://dashbud.dev'),
      buildRedirect('/dashsetup/:path*', 'https://dashbud.dev'),
      buildRedirect('/links', '/'),
      buildRedirect('/music', '/dashboard'),
      buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
      buildRedirect('/support', '/donate'),
      buildRedirect('/thanks', '/donate#thanks'),
      buildRedirect('/blog/post-of-fame', '/donate#thanks'),
      buildRedirect('/uses', '/blog/uses'),
      buildRedirect('/releases', '/gh-releases'),
    ];
  },
};

module.exports = withContentlayer()(defaultNextConfig);
