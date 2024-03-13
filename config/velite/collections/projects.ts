import { defineCollection, s } from 'velite';

import { getBlurData } from '../rehype/blur';

export const projects = defineCollection({
  name: 'Project',
  pattern: 'projects.yml',
  schema: s
    .object({
      order: s.number().min(0),
      name: s.string(),
      description: s.string(),
      icon: s.string(),
      preview: s.string().optional(),
      url: s.string().url(),
      color: s.string().regex(new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$')),
      darkColor: s
        .string()
        .regex(new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$'))
        .optional(),
      repo: s.string().optional(),
      owner: s.string().optional(),
      hide: s.boolean().optional().default(false),
    })
    .transform(async (data) => {
      return {
        ...data,
        iconMeta: await getBlurData(`/media/projects/${data.icon}`),
      };
    }),
});
