/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import { writeFileSync } from 'fs';

const lightThemeUrl =
  'https://raw.githubusercontent.com/fabian-hiller/vscode-pace-theme/main/themes/light%2B.json';
const darkThemeUrl =
  'https://raw.githubusercontent.com/fabian-hiller/vscode-pace-theme/main/themes/dark.json';

const downloadThemeFile = async (light) => {
  try {
    console.error('Downloading code themes json files from GitHub');
    const response = await fetch(light ? lightThemeUrl : darkThemeUrl);
    const json = await response.json();
    console.error(`Status: ${response.status} <>= Error ${response.error}`);
    writeFileSync(
      `./config/contentlayer/themes/${light ? 'light' : 'dark'}.json`,
      JSON.stringify(json, null, 2),
    );
  } catch (e) {
    console.error('Error downloading themes files');
    console.error(e);
  }
};

(async () => {
  await Promise.all([downloadThemeFile(true), downloadThemeFile()]);
})();
