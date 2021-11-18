/* eslint-disable import/no-extraneous-dependencies */
import { makeSource } from 'contentlayer/source-files';

import Blog from './content/blogs';
import Inspiration from './content/inspiration';
import mdx from './content/mdx';
import Project from './content/projects';

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Inspiration, Project],
  mdx,
});

export default contentLayerConfig;
