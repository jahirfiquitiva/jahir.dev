/* eslint-disable import/no-extraneous-dependencies */
import { makeSource } from 'contentlayer/source-files';

import mdx from './cl-config/mdx';
import Project from './cl-config/projects';

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
  mdx,
});

export default contentLayerConfig;
