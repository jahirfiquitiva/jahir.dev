/* eslint-disable import/no-extraneous-dependencies */
import { makeSource } from 'contentlayer/source-files';

import Blog from './config/contentlayer';
import mdx from './config/contentlayer/mdx';

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx,
});

export default contentLayerConfig;
