'use client';

import Link from 'next/link';
import { schnyder } from '@/libs/next-fonts/local-fonts/schnyder/schnyder';
import { useAtom } from 'jotai';
import { menuStatusAtom } from '@/atoms/menu-status-atom';

export const NavigationEslem = () => {
  const [menuStatus, setMenuStatus] = useAtom(menuStatusAtom);

  return (
    <h1
      className={`${
        schnyder.className
      } relative z-[56101] flex-shrink-0 text-5xl tracking-wide transition-colors duration-500 sm:text-7xl ${
        menuStatus ? 'text-zinc-50 duration-100 sm:text-zinc-950' : 'text-zinc-800 delay-300 sm:text-zinc-950'
      }`}
    >
      <Link href={'/'}>ESLEM BAYIR</Link>
    </h1>
  );
};
