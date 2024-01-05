import { buildColoredLinkClasses } from '@/utils/colored-text';

export const linksGroups = [
  {
    title: 'Navigate',
    a11yTitle: 'Navigation links',
    links: [
      {
        title: 'Home',
        href: '/',
        className: buildColoredLinkClasses('brand', 'blue', true),
      },
      {
        title: 'About',
        href: '/about',
        className: buildColoredLinkClasses('blue', 'green', true),
      },
      {
        title: 'Blog',
        href: '/blog',
        className: buildColoredLinkClasses('yellow', 'orange', true),
      },
      {
        title: 'Projects',
        href: '/projects',
        className: buildColoredLinkClasses('red', 'purple', true),
      },
      {
        title: 'Uses',
        href: '/uses',
        className: buildColoredLinkClasses('brand', 'blue', true),
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
        className: buildColoredLinkClasses('purple', 'brand', true),
      },
      {
        title: 'Contact',
        href: '/contact',
        className: buildColoredLinkClasses('blue', 'green', true),
        props: {
          ignoreNextLink: true,
        },
      },
      {
        title: 'RSS Feed',
        href: '/feed.xml',
        className: buildColoredLinkClasses('yellow', 'orange', true),
        props: {
          'data-umami-event': 'RSS feed',
        },
      },
      {
        title: 'Colophon',
        href: '/colophon',
        className: buildColoredLinkClasses('red', 'purple', true),
      },
      {
        title: 'Back to Top',
        a11yTitle: 'Scroll back to top',
        href: '#',
        className: buildColoredLinkClasses('brand', 'blue', true),
      },
    ],
  },
];
