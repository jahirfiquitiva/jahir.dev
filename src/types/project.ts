export interface ProjectProps {
  title: string;
  description: string;
  icon: string;
  preview?: string;
  link: string;
  color?: string;
  darkColor?: string;
  gradient?: string[];
  darkGradient?: string[];
  tag?: string;
  stack?: string[];
  hide?: boolean;
}

export const projects: ProjectProps[] = [
  {
    title: 'Blueprint',
    description: 'Dashboard for creating Android icon packs.',
    icon: '/static/images/projects/android/blueprint.png',
    preview: '/static/images/projects/android/blueprint-preview.png',
    link: 'https://github.com/jahirfiquitiva/Blueprint/',
    color: '#4d8af0',
    tag: 'android',
    stack: ['android', 'kotlin', 'material design'],
  },
  {
    title: 'Frames',
    description: 'Dashboard for creating Android wallpapers apps',
    icon: '/static/images/projects/android/frames.png',
    preview: '/static/images/projects/android/frames-preview.png',
    link: 'https://github.com/jahirfiquitiva/Frames/',
    color: '#35b4ef',
    tag: 'android',
    stack: ['android', 'kotlin', 'material design'],
  },
  {
    title: 'Kuper',
    description: 'Dashboard for Zooper & Kustom KLWP/KWGT Android widget packs',
    icon: '/static/images/projects/android/kuper.png',
    preview: '/static/images/projects/android/kuper-preview.png',
    link: 'https://github.com/jahirfiquitiva/Kuper/',
    color: '#6673C0',
    tag: 'android',
    stack: ['android', 'kotlin', 'material design'],
  },
  {
    title: 'Pals',
    description:
      'Access popular color palettes or create new ones from any color or image',
    icon: '/static/images/projects/android/pals.png',
    preview: '/static/images/projects/android/pals-preview.png',
    link: 'https://jahir.xyz/PalsApp',
    color: '#4285F4',
    tag: 'android',
    stack: ['android', 'kotlin', 'material design'],
  },
  {
    title: 'Tap',
    description:
      'A Floating Action Button for quickly creating Keep notes and Todoist tasks',
    icon: '/static/images/projects/android/tap.png',
    preview: '/static/images/projects/android/tap-preview.png',
    link: 'https://jahir.xyz/TapApp',
    color: '#E69494',
    tag: 'android',
    stack: ['android', 'kotlin', 'material design'],
  },
  {
    title: 'ChipView',
    description: "Custom view to provide Material Design specs' Chip component",
    icon: '/static/images/projects/android/chipview.png',
    preview: '/static/images/projects/android/chipview-preview.png',
    link: 'https://github.com/jahirfiquitiva/ChipView/',
    color: '#3E95FB',
    tag: 'android',
    stack: ['android', 'kotlin', 'material design'],
    hide: true,
  },
  {
    title: 'FABsMenu',
    description: 'A menu of Material Design FloatingActionButtons',
    icon: '/static/images/projects/android/fabsmenu.png',
    preview: '/static/images/projects/android/fabsmenu-preview.png',
    link: 'https://github.com/jahirfiquitiva/FABsMenu/',
    color: '#eb3b75',
    tag: 'android',
    stack: ['android', 'java', 'material design'],
    hide: true,
  },
  {
    title: 'Dashbud',
    description: 'Quickly setup any of my Android dashboards',
    icon: '/static/images/projects/web/setup.png',
    link: '/dashsetup/',
    preview: '/static/images/projects/web/dashbud-preview.png',
    color: '#9853fd',
    tag: 'web',
    stack: ['HTLM5', 'css3', 'javascript', 'react'],
  },
  {
    title: 'Prev Websites',
    description: 'Check the source code of previous versions of this website',
    icon: '/static/images/projects/web/prev-websites.png',
    link: 'https://github.com/jahirfiquitiva/prev-websites/',
    preview: '/static/images/projects/web/websites-preview.png',
    color: '#88a4e6',
    tag: 'web',
    stack: ['HTLM5', 'css3', 'javascript'],
    hide: true,
  },
  {
    title: 'BoyaConf',
    description: 'First software development conference in Boyacá, Colombia',
    icon: '/static/images/projects/other/boyaconf.png',
    link: 'https://boyaconf.com',
    preview: '/static/images/projects/other/boyaconf-preview.png',
    color: '#00202b',
    darkColor: '#4dcc89',
    tag: 'conference',
    stack: ['community', 'HTLM5', 'css3', 'javascript'],
  },
  {
    title: 'Sliding Puzzle',
    description: 'Pseudo-AI+ML solves the 8-Puzzle aka Sliding Puzzle',
    icon: '/static/images/projects/other/puzzle.png',
    link: 'https://jahir.xyz/SlidingPuzzle',
    preview: '/static/images/projects/other/sliding-puzzle-preview.png',
    color: '#929292',
    tag: 'python',
    stack: ['python'],
    hide: true,
  },
  {
    title: 'Stan',
    description: 'Slack bot to help with text-only SCRUM stand-ups',
    icon: '/static/images/projects/other/stan.png',
    link: 'https://github.com/jahirfiquitiva/stanbot/',
    color: '#FC8303',
    tag: 'python',
    stack: ['python'],
    hide: true,
  },
  {
    title: 'More',
    description: 'Find other open-source projects on GitHub',
    icon: '/static/images/projects/other/more.png',
    link: 'https://jahir.xyz/github',
    color: '#92a3b5',
    tag: 'other',
    stack: ['git'],
  },
];
