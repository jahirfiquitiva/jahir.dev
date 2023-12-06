const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

module.exports = [
  /* Blog posts redirections */
  buildRedirect(
    '/blog/md-iconography-guidelines',
    'https://stories.uplabs.com/what-google-missed-in-their-guidelines-for-material-design-iconography-daf9f88000ec',
  ),
  buildRedirect('/blog/post-of-fame', '/donate#thanks'),
  buildRedirect('/inspiration', '/blog/people-websites-that-inspire'),
  /* Old static assets paths to new ones */
  buildRedirect('/assets/:path*', '/static/:path*'),
  /* Needed for android dashboards */
  buildRedirect('/static/images/me/me.jpg', '/static/images/jahir/jahir.jpg'),
  /* Dashbud links */
  buildRedirect('/dashbud', 'https://dashbud.dev'),
  buildRedirect('/dashbud/:path*', 'https://dashbud.dev'),
  buildRedirect('/dashsetup', 'https://dashbud.dev'),
  buildRedirect('/dashsetup/:path*', 'https://dashbud.dev'),
  /* Other redirections */
  buildRedirect('/links', 'https://links.jahir.dev'),
  buildRedirect('/contact', '/about#contact'),
  /* Dashboard aliases */
  buildRedirect('/music', '/now'),
  buildRedirect('/dashboard', '/now'),
  buildRedirect('/stats', '/now'),
  /* Donate aliases */
  buildRedirect('/support', '/donate'),
  buildRedirect('/sponsor', '/donate'),
  buildRedirect('/thanks', '/donate#thanks'),
  buildRedirect('/sponsors', '/donate#thanks'),
  buildRedirect('/supporters', '/donate#thanks'),
  /* Uses blog post aliases */
  buildRedirect('/blog/uses', '/uses'),
  buildRedirect('/gear', '/uses'),
  buildRedirect('/colophon', '/uses#colophon'),
  buildRedirect('/releases/:path*', '/gh-releases/:path*'),
  buildRedirect('/feed', '/feed.xml'),
  buildRedirect('/sitemap', '/sitemap.xml'),
  buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
  buildRedirect('/shop', 'https://www.shop.jahir.dev/nuestros-productos'),
];
