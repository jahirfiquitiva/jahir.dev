import { customIconPaths } from '@/utils/icon-paths';

import type { SpotlightOption } from './types';

export const socialOptions: Array<SpotlightOption> = [
  {
    id: 'github',
    title: 'GitHub',
    keywords: 'github source code',
    url: 'https://github.com/jahirfiquitiva',
    icon: customIconPaths.gitHubOutline,
  },
  {
    id: 'twitter',
    title: 'Twitter',
    keywords: 'twitter',
    url: 'https://twitter.com/jahirfiquitiva',
    icon: customIconPaths.twitterOutline,
  },
];
