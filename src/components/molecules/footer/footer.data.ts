export const linksGroups = [
  {
    title: 'Navigate',
    a11yTitle: 'Navigation links',
    links: [
      {
        title: 'Home',
        href: '/',
        className: ['from-brand', 'to-blue'],
      },
      {
        title: 'About',
        href: '/about',
        className: ['from-blue', 'to-green'],
      },
      {
        title: 'Blog',
        href: '/blog',
        className: ['from-yellow', 'to-orange'],
      },
      {
        title: 'Projects',
        href: '/projects',
        className: ['from-red', 'to-purple'],
      },
      {
        title: 'Uses',
        href: '/uses',
        className: ['from-brand', 'to-blue'],
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
        className: ['from-purple', 'to-brand'],
      },
      {
        title: 'Contact',
        href: '/contact',
        className: ['from-blue', 'to-green'],
        props: {
          ignoreNextLink: true,
        },
      },
      {
        title: 'RSS Feed',
        href: '/feed.xml',
        className: ['from-yellow', 'to-orange'],
        props: {
          'data-umami-event': 'RSS feed',
          prefetch: false,
        },
      },
      {
        title: 'Colophon',
        href: '/colophon',
        className: ['from-red', 'to-purple'],
      },
      {
        title: 'Back to Top',
        a11yTitle: 'Scroll back to top',
        href: '#',
        className: ['from-brand', 'to-blue'],
        prefetch: false,
      },
    ],
  },
];
