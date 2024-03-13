import { defineCollection, s } from 'velite';

export const extensions = defineCollection({
  name: 'Extensions',
  pattern: 'extensions.yml',
  schema: s.object({
    name: s.string(),
    url: s.string().url(),
  }),
});
