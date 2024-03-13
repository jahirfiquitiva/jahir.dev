import { defineCollection, s } from 'velite';

export const extensions = defineCollection({
  name: 'Extension',
  pattern: 'extensions.yml',
  schema: s.object({
    name: s.string(),
    url: s.string().url(),
  }),
});
