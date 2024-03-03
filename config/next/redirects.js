const buildRedirect = (source, destination, permanent = false) => {
  return {
    source,
    destination,
    permanent,
  };
};

const redirects = [
  /* Blog posts redirections */
  buildRedirect(
    '/blog/md-iconography-guidelines',
    'https://stories.uplabs.com/what-google-missed-in-their-guidelines-for-material-design-iconography-daf9f88000ec',
  ),
  buildRedirect('/blog/post-of-fame', '/donate#thanks'),
  buildRedirect('/blog/uses', '/uses'),
  buildRedirect(
    '/blog/how-tailwind-growed-upon-me',
    '/blog/how-tailwind-grew-on-me',
  ),
  buildRedirect('/inspiration', '/blog/people-websites-that-inspire'),
  /* Old static assets paths to new ones */
  buildRedirect('/assets/images/:path*', '/media/:path*'),
  buildRedirect('/static/images/:path*', '/media/:path*'),
  /* Needed for android dashboards */
  buildRedirect('/static/images/me/me.jpg', '/media/jahir/jahir.jpg'),
  /* Dashbud links */
  buildRedirect('/dashbud', 'https://dashbud.dev'),
  buildRedirect('/dashbud/:path*', 'https://dashbud.dev'),
  buildRedirect('/dashsetup', 'https://dashbud.dev'),
  buildRedirect('/dashsetup/:path*', 'https://dashbud.dev'),
  /* Other redirections */
  buildRedirect('/links', 'https://bio.jahir.dev'),
  buildRedirect('/contact', '/about#contact'),
  /* Dashboard aliases */
  buildRedirect('/music', '/about#activity'),
  buildRedirect('/dashboard', '/about#activity'),
  buildRedirect('/stats', '/about#activity'),
  buildRedirect('/now', '/about#activity'),
  buildRedirect('/activity', '/about#activity'),
  /* Donate aliases */
  buildRedirect('/support', '/donate'),
  buildRedirect('/sponsor', '/donate'),
  buildRedirect('/thanks', '/donate#thanks'),
  buildRedirect('/sponsors', '/donate#thanks'),
  buildRedirect('/supporters', '/donate#thanks'),
  buildRedirect('/gear', '/uses'),
  buildRedirect('/releases/:path*', '/gh-releases/:path*'),
  buildRedirect('/feed', '/feed.xml'),
  buildRedirect('/sitemap', '/sitemap.xml'),
  buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
  buildRedirect('/shop', 'https://www.shop.jahir.dev/nuestros-productos'),
  buildRedirect(
    '/analytics',
    'https://umami.jahir.dev/share/uEOUfeOMI5kda1wn/jahir.dev',
  ),
];

module.exports = redirects;
