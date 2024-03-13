export const linksGroups = [
  {
    title: 'Navigate',
    a11yTitle: 'Navigation links',
    links: [
      {
        title: 'Home',
        href: '/',
        className: 'text-brand',
      },
      {
        title: 'About',
        href: '/about',
        className: 'text-green',
      },
      {
        title: 'Blog',
        href: '/blog',
        className: 'text-orange',
      },
      {
        title: 'Projects',
        href: '/projects',
        className: 'text-purple',
      },
      {
        title: 'Uses',
        href: '/uses',
        className: 'text-blue',
      },
    ],
  },
  {
    title: 'Misc',
    a11yTitle: 'Miscellaneous links',
    links: [
      {
        title: 'Donate',
        href: '/donate',
        className: 'text-yellow',
      },
      {
        title: 'Contact',
        href: '/contact',
        className: 'text-green',
        props: {
          ignoreNextLink: true,
        },
      },
      {
        title: 'RSS Feed',
        href: '/feed.xml',
        className: 'text-orange',
        props: {
          'data-umami-event': 'RSS feed',
        },
      },
      {
        title: 'Colophon',
        href: '/colophon',
        className: 'text-purple',
      },
      {
        title: 'Back to Top',
        a11yTitle: 'Scroll back to top',
        href: '#',
        className: 'text-brand',
      },
    ],
  },
];
