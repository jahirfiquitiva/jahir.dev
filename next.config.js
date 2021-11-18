/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require('next-contentlayer');

const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
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
  async headers() {
    return [
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
      buildRedirect('/support', '/donate'),
      buildRedirect('/thanks', '/donate#thanks'),
      buildRedirect('/uses', '/blog/uses'),
      buildRedirect('/releases', '/gh-releases'),
      buildRedirect('/feed', '/feed.xml'),
      buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
    ];
  },
};

module.exports = withContentlayer()(defaultNextConfig);
