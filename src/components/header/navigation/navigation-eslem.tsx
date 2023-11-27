'use client';

import Link from 'next/link';
import { schnyder } from '@/libs/next-fonts/local-fonts/schnyder/schnyder';
import { useAtom } from 'jotai';
import { menuStatusAtom } from '@/atoms/menu-status-atom';

export const NavigationEslem = () => {
  const [menuStatus, setMenuStatus] = useAtom(menuStatusAtom);

  return (
    <Link
      href={'/'}
      className={`${
        schnyder.className
      } relative z-[56101] flex flex-shrink-0 flex-col items-center text-5xl tracking-wide transition-colors duration-500 sm:text-7xl ${
        menuStatus ? 'text-zinc-50 duration-100 sm:text-zinc-950' : 'text-zinc-800 delay-300 sm:text-zinc-950'
      }`}
    >
      <span className={'-my-1 text-lg tracking-[8px] sm:-my-2 sm:text-xl sm:tracking-[12px]'}>diyetisyen</span>
      <span>ESLEM BAYIR</span>
    </Link>
  );
};
