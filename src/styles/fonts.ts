import localFont from 'next/font/local';

export const InterVariable = localFont({
  src: './../assets/fonts/InterVariable.woff2',
  variable: '--font-inter',
  display: 'fallback',
  weight: '1 999',
});

export const ManropeVariable = localFont({
  src: './../assets/fonts/ManropeVariable.woff2',
  variable: '--font-manrope',
  display: 'fallback',
  weight: '1 999',
  preload: false,
});
