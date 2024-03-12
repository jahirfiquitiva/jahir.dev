import { s, defineCollection } from 'velite';

import { getBlurData } from './utils/blur';

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/media/blog/${hero}`) : '';

const getKeywords = (docKeywords: string = '') => {
  if (!docKeywords || !docKeywords.length) return [];
  let filteredKeywords: Array<string> = [];
  try {
    filteredKeywords = docKeywords.split(',').map((it: string) => it.trim());
  } catch (e) {}
  return Array.from(new Set([...filteredKeywords]));
};

export const blogs = defineCollection({
  name: 'Blog', // collection type name
  pattern: './*.mdx', // content files glob pattern
  schema: s
    .object({
      title: s.string(), // .max(69),
      summary: s.string(), //.max(69),
      slug: s.path(), // auto generate slug from file path
      date: s.isodate(), // input Date-like string, output ISO Date string.
      color: s.string().regex(new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$')),
      keywords: s.string(),
      hero: s.string().optional(), // input image relative path, output image object with blurImage.
      heroSource: s.string().optional(),
      link: s.string().optional(),
      inProgress: s.boolean().optional().default(false),
      // devToId: s.number().optional(),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    // more additional fields (computed fields)
    .transform(async (data) => {
      const { metadata, keywords, ...blogData } = data;
      const hero = getActualHeroUrl(data.hero || `${data.slug}/hero.jpg`);
      return {
        ...blogData,
        hero,
        keywords: getKeywords(keywords),
        readingTime: metadata.readingTime,
        heroMeta: await getBlurData(hero),
      };
    }),
});
