/* eslint-disable import/no-extraneous-dependencies */
import { makeSource } from 'contentlayer/source-files';

import Blog from './content/config/blogs';
import mdx from './content/config/mdx';
import Project from './content/config/projects';

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Project],
  mdx,
});

export default contentLayerConfig;
