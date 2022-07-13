import { pagesOptions } from './pages';
import { socialOptions } from './social';
import { SpotlightOptions } from './types';

export const spotlightOptions: SpotlightOptions = {
  Pages: pagesOptions,
  Social: socialOptions,
  withOptions: {
    Projects: [
      {
        id: 'all-projects',
        title: 'All Projects',
        url: '/projects',
        keywords: 'projects work portfolio',
        shortcuts: ['3'],
      },
      {
        id: 'blueprint',
        title: 'Blueprint',
        url: 'https://github.com/jahirfiquitiva/Blueprint',
      },
    ],
  },
};

export * from './types';
