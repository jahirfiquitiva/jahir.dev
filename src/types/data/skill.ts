import {
  mdiAndroid,
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLanguageKotlin,
  mdiLanguagePython,
  mdiLanguageTypescript,
  mdiLeaf,
  mdiMaterialDesign,
  mdiNodejs,
  mdiPuzzleOutline,
  mdiReact,
  mdiTriangle,
  mdiAccountGroupOutline,
  mdiPaletteSwatchOutline,
  mdiTailwind,
} from '@mdi/js';

export interface SkillProps {
  name: string;
  iconPath: string;
  color: string;
  hide?: boolean;
}

export const skills: SkillProps[] = [
  { name: 'Android', iconPath: mdiAndroid, color: '#3ddc84' },
  { name: 'Kotlin', iconPath: mdiLanguageKotlin, color: '#6677e0' },
  { name: 'Java', iconPath: mdiLanguageJava, color: '#ea2e2f' },
  { name: 'Python', iconPath: mdiLanguagePython, color: '#3a74a5' },
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS3', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'Node JS', iconPath: mdiNodejs, color: '#61af43' },
  { name: 'React', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'NextJS', iconPath: mdiTriangle, color: '#0070f3' },
  {
    name: 'Styled Components',
    iconPath: mdiPaletteSwatchOutline,
    color: '#c43bad',
  },
  { name: 'Tailwind', iconPath: mdiTailwind, color: '#06b6d4' },
  { name: 'Mongo DB', iconPath: mdiLeaf, color: '#69a14a' },
  { name: 'Express', iconPath: mdiPuzzleOutline, color: '#888888' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  { name: 'Material Design', iconPath: mdiMaterialDesign, color: '#888888' },
  {
    name: 'Community',
    iconPath: mdiAccountGroupOutline,
    color: '#888888',
    hide: true,
  },
];

const skillsKeys = [...skills.map((it) => it.name.toLowerCase())] as const;
export type SkillKey = typeof skillsKeys[number];