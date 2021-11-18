export interface ProjectProps {
  name: string;
  description: string;
  icon: string;
  preview?: string;
  link: string;
  color?: string;
  darkColor?: string;
  tag?: string;
  stack?: Array<string>;
  hide?: boolean;
  slug?: string;
}

const allProjects: ProjectProps[] = [
  {
    name: 'Pals',
    description:
      'Access popular color palettes or create new ones from any color or image',
    icon: 'android/pals.png',
    preview: 'android/pals-preview.png',
    link: 'https://jahir.xyz/PalsApp',
    color: '#4285F4',
    stack: ['android', 'kotlin', 'material design'],
  },
  {
    name: 'Tap',
    description:
      'Floating Action Button for quickly creating Keep notes and Todoist tasks',
    icon: 'android/tap.png',
    preview: 'android/tap-preview.png',
    link: 'https://jahir.xyz/TapApp',
    color: '#E69494',
    stack: ['android', 'kotlin', 'material design'],
  },
  {
    name: 'ChipView',
    description: "Custom view to provide Material Design specs' Chip component",
    icon: 'android/chipview.png',
    preview: 'android/chipview-preview.png',
    link: 'https://github.com/jahirfiquitiva/ChipView/',
    color: '#3E95FB',
    stack: ['android', 'kotlin', 'material design'],
    hide: true,
  },
  {
    name: 'FABsMenu',
    description: 'A menu of Material Design FloatingActionButtons',
    icon: 'android/fabsmenu.png',
    preview: 'android/fabsmenu-preview.png',
    link: 'https://github.com/jahirfiquitiva/FABsMenu/',
    color: '#eb3b75',
    stack: ['android', 'java', 'material design'],
    hide: true,
  },
  {
    name: 'Dashbud',
    description: 'Quickly setup any of my Android dashboards',
    icon: 'web/setup.png',
    link: 'https://dashbud.dev/',
    preview: 'web/dashbud-preview.png',
    color: '#9853fd',
    stack: ['HTLM5', 'css3', 'javascript', 'react'],
  },
  {
    name: 'Colombian Holidays',
    description: 'Get to know upcoming Colombian holidays',
    icon: 'web/col-holidays.png',
    link: 'https://col-holidays.co/',
    preview: 'web/col-holidays-preview.png',
    color: '#003893',
    darkColor: '#fcd116',
    stack: ['NextJS', 'react', 'typescript'],
  },
  {
    name: 'Prev Websites',
    description: 'Check the source code of previous versions of this website',
    icon: 'web/prev-websites.png',
    link: 'https://github.com/jahirfiquitiva/prev-websites/',
    preview: 'web/websites-preview.png',
    color: '#88a4e6',
    stack: ['HTLM5', 'css3', 'javascript'],
    hide: true,
  },
  {
    name: 'BoyaConf',
    description: 'First software development conference in Boyacá, Colombia',
    icon: 'other/boyaconf.png',
    link: 'https://boyaconf.com',
    preview: 'other/boyaconf-preview.png',
    color: '#00202b',
    darkColor: '#4dcc89',
    stack: ['community', 'HTLM5', 'css3', 'javascript'],
  },
  {
    name: 'Sliding Puzzle',
    description: 'Pseudo-AI+ML solves the 8-Puzzle aka Sliding Puzzle',
    icon: 'other/puzzle.png',
    link: 'https://jahir.xyz/SlidingPuzzle',
    preview: 'other/sliding-puzzle-preview.png',
    color: '#929292',
    stack: ['python'],
    hide: true,
  },
  {
    name: 'Stan',
    description: 'Slack bot to help with text-only SCRUM stand-ups',
    icon: 'other/stan.png',
    link: 'https://github.com/jahirfiquitiva/stanbot/',
    color: '#FC8303',
    stack: ['python'],
    hide: true,
  },
  {
    name: 'More',
    description: 'Find other open-source projects on GitHub',
    icon: 'other/more.png',
    link: 'https://jahir.xyz/github',
    color: '#92a3b5',
    tag: 'other',
  },
].filter((project) => !project.hide);

export const projects = [...allProjects] as const;
