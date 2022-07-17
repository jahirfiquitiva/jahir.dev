/* eslint-disable import/no-extraneous-dependencies */
import { makeSource } from 'contentlayer/source-files';

import Blog from './cl-config/blogs';
import mdx from './cl-config/mdx';
import Project from './cl-config/projects';

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Project],
  mdx,
});

export default contentLayerConfig;
