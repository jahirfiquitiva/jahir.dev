import localFont from 'next/font/local';

export const Inter = localFont({
  src: './../assets/fonts/InterVariable.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '1 999',
});

export const Manrope = localFont({
  src: './../assets/fonts/ManropeVariable.woff2',
  variable: '--font-manrope',
  display: 'swap',
  weight: '1 999',
  preload: false,
});

export const MonoLisa = localFont({
  src: './../assets/fonts/monolisa.woff2',
  variable: '--font-monolisa',
  display: 'swap',
  weight: '1 999',
  preload: false,
  adjustFontFallback: false,
});
