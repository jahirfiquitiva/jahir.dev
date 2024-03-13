import { defineCollection, s } from 'velite';

import { getBlurData } from '../rehype/blur';

export const software = defineCollection({
  name: 'Software',
  pattern: 'software.yml',
  schema: s
    .object({
      name: s.string(),
      image: s.string(),
      url: s.string().url(),
    })
    .transform(async (data) => {
      return { ...data, imageMeta: await getBlurData(`/media/${data.image}`) };
    }),
});
