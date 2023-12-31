import { Roboto_Serif } from 'next/font/google';

export const roboto = Roboto_Serif({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-roboto-serif',
});
