import localFont from 'next/font/local';

export const schnyder = localFont({
  src: [
    {
      path: 'schnyder.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});
