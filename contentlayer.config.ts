/* eslint-disable import/no-extraneous-dependencies */
import { makeSource } from 'contentlayer/source-files';

import Blog from './cl-config/blogs';
import mdx from './cl-config/mdx';

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx,
});

export default contentLayerConfig;
