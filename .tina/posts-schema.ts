import { TinaCloudCollection } from '@tinacms/graphql';

export const postsSchema: TinaCloudCollection = {
  label: 'Blog Posts',
  name: 'posts',
  path: 'posts',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'Excerpt',
      name: 'excerpt',
    },
    {
      type: 'string',
      label: 'Hero Image',
      name: 'hero',
    },
    {
      type: 'string',
      label: 'Keywords (separate by comma)',
      name: 'keywords',
    },
    {
      type: 'datetime',
      label: 'Date',
      name: 'date',
    },
    {
      type: 'boolean',
      label: 'Is in progress',
      name: 'inProgress',
    },
    {
      type: 'string',
      label: 'Body',
      name: 'body',
      isBody: true,
      ui: {
        component: 'markdown',
      },
    },
  ],
};
