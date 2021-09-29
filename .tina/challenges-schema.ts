import { TinaCloudCollection } from '@tinacms/graphql';

export const challengesSchema: TinaCloudCollection = {
  label: 'Coding Challenges',
  name: 'challenges',
  path: 'challenges',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
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
