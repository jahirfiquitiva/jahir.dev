/* eslint-disable import/no-extraneous-dependencies */
import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';
import readingTime from 'reading-time';

import unique from './../src/utils/tools/unique';
import { getBlurData } from './image-metadata';

const getIconUrl = (icon?: string) =>
  icon ? (icon.startsWith('http') ? icon : `/static/images/projects/${icon}`) : '';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
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
  iconMeta: {
    type: 'json',
    resolve: async (doc) => {
      return getBlurData(getIconUrl(doc.icon), 6);
    },
  },
};

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
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
    repo: { type: 'string' },
    owner: { type: 'string' },
    inProgress: { type: 'boolean' },
    iconMeta: { type: 'json' },
  },
  computedFields,
}));

export default Project;
