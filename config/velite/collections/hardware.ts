import { defineCollection, s } from 'velite';

import { getBlurData } from '../rehype/blur';

export const hardware = defineCollection({
  name: 'Hardware',
  pattern: 'hardware.yml',
  schema: s
    .object({
      name: s.string(),
      description: s.string().optional().default(''),
      url: s.string().url(),
      image: s.string(),
    })
    .transform(async (data) => {
      return { ...data, imageMeta: await getBlurData(`/media/${data.image}`) };
    }),
});
