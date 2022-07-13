import type { SpotlightOption } from './types';

export const pagesOptions: Array<SpotlightOption> = [
  {
    id: 'home',
    title: 'Home',
    keywords: 'index root',
    shortcuts: ['1'],
    url: '/',
  },
  {
    id: 'about',
    title: 'About',
    shortcuts: ['2'],
    keywords: 'information bio biography details',
    url: '/about',
  },
  {
    id: 'blog',
    title: 'Blog',
    keywords: 'writing words blogs blog post articles tutorials',
  },
  {
    id: 'projects',
    title: 'Projects',
    keywords: 'projects work portfolio',
  },
  {
    id: 'contact',
    title: 'Contact',
    shortcuts: ['5'],
    keywords: 'email message',
    url: '/contact',
  },
];
