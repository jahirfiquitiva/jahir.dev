import localFont from 'next/font/local';

export const InterVariable = localFont({
  src: './../assets/fonts/InterVariable.woff2',
  variable: '--font-inter',
  display: 'fallback',
  weight: '1 999',
  fallback: ['system-ui'],
});

export const ManropeVariable = localFont({
  src: './../assets/fonts/ManropeVariable.woff2',
  variable: '--font-manrope',
  display: 'fallback',
  weight: '1 999',
  fallback: ['system-ui'],
  preload: false,
});
