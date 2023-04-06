import { Inter, Manrope } from 'next/font/google';

export * from './breakpoints';
export * from './colors';
export * from './font-sizes';
export * from './spaces';
export * from './utils';

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--fonts-inter',
});
const manrope = Manrope({
  subsets: ['latin'],
  preload: true,
  variable: '--fonts-manrope',
});

export const fonts = {
  inter,
  manrope,
};
