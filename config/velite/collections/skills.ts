import { defineCollection, s } from 'velite';

export const skills = defineCollection({
  name: 'Skill',
  pattern: 'skills.yml',
  schema: s.object({
    name: s.string(),
    color: s.string().regex(new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$')),
    icon: s.string(),
    hide: s.boolean().optional().default(false),
  }),
});
