/* eslint-disable import/no-extraneous-dependencies */
import { makeSource } from 'contentlayer/source-files';

import Blog from './content/blogs';
import mdx from './content/mdx';
import Project from './content/projects';

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Project],
  mdx,
});

export default contentLayerConfig;
