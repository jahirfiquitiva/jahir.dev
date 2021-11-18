import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';

import unique from '../src/lib/unique';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    // eslint-disable-next-line no-underscore-dangle
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  darkColor: {
    type: 'string',
    resolve: (doc) => {
      const { color, darkColor } = doc;
      return darkColor || color;
    },
  },
  stack: {
    type: 'list',
    resolve: (doc) => {
      const { stack = '' } = doc;
      if (!stack) return [];
      return unique(
        (stack || '').split(',').map((it: string) => it.trim().toLowerCase()),
      );
    },
  },
};

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  bodyType: 'mdx',
  fields: {
    order: { type: 'number', required: true },
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    icon: { type: 'string', required: true },
    preview: { type: 'string' },
    link: { type: 'string', required: true },
    color: { type: 'string' },
    darkColor: { type: 'string' },
    hide: { type: 'boolean' },
    stack: { type: 'string' },
  },
  computedFields,
}));

export default Project;
