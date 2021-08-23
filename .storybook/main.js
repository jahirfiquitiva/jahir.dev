const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

const tsConf = require('./../tsconfig.json');
const customPaths = tsConf.compilerOptions.paths;

module.exports = {
  stories: [
    './../src/stories/**/*.stories.mdx',
    './../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    './../src/stories/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    const newAlias = {};
    for (const customPath of Object.keys(customPaths)) {
      const realPath = customPaths[customPath][0];
      const realFullPath = `../${realPath.substring(
        0,
        realPath.lastIndexOf('/'),
      )}`;

      try {
        if (realPath) {
          newAlias[
            customPath.substring(0, customPath.lastIndexOf('/'))
          ] = path.resolve(__dirname, realFullPath);
        }
      } catch (e) {}
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      ...newAlias,
      'emotion-theming': toPath('node_modules/@emotion/react'),
      '@emotion/core': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
    };
    return config;
  },
};
