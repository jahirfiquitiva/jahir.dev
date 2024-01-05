/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import { writeFileSync, existsSync } from 'fs';

const lightThemeUrl =
  'https://raw.githubusercontent.com/fabian-hiller/vscode-pace-theme/main/themes/light%2B.json';
const darkThemeUrl =
  'https://raw.githubusercontent.com/fabian-hiller/vscode-pace-theme/main/themes/dark.json';

const downloadThemeFile = async (light) => {
  const filePath = `./config/mdx/themes/${light ? 'light' : 'dark'}.json`;
  try {
    if (existsSync(filePath)) return;
    const response = await fetch(light ? lightThemeUrl : darkThemeUrl);
    const json = await response.json();
    if (response.ok) writeFileSync(filePath, JSON.stringify(json, null, 2));
  } catch (e) {
    console.error('Error downloading themes files');
    console.error(e);
  }
};

console.log('Downloading theme json files…');
Promise.all([downloadThemeFile(true), downloadThemeFile()]).then(() => {
  console.log('Theme files downloaded successfully!');
});
