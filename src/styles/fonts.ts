import localFont from 'next/font/local';

export const InterVariable = localFont({
  src: './../assets/fonts/InterVariable.woff2',
  variable: '--font-inter-variable',
  display: 'fallback',
  weight: 'variable',
});

export const Inter = localFont({
  src: [
    {
      path: './../assets/fonts/Inter-Bold.woff2',
      weight: '700',
    },
    {
      path: './../assets/fonts/Inter-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './../assets/fonts/Inter-Medium.woff2',
      weight: '500',
    },
    {
      path: './../assets/fonts/Inter-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-inter',
  display: 'fallback',
});

export const ManropeVariable = localFont({
  src: './../assets/fonts/ManropeVariable.woff2',
  variable: '--font-manrope-variable',
  display: 'fallback',
  weight: 'variable',
  preload: false,
});

export const Manrope = localFont({
  src: [
    {
      path: './../assets/fonts/Manrope-Bold.woff2',
      weight: '700',
    },
    {
      path: './../assets/fonts/Manrope-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './../assets/fonts/Manrope-Medium.woff2',
      weight: '500',
    },
    {
      path: './../assets/fonts/Manrope-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-manrope',
  display: 'fallback',
  preload: false,
});
