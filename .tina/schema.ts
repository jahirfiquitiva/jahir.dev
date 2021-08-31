import { defineSchema } from '@tinacms/cli';

export default defineSchema({
  collections: [
    {
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
    },
  ],
});