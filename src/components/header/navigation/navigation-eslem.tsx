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
      } relative z-[56101] -my-2 flex-shrink-0 p-2 text-7xl tracking-wide transition-colors sm:-mx-6 ${
        menuStatus
          ? 'text-zinc-100 duration-100 sm:text-zinc-950'
          : 'text-zinc-950 delay-300 duration-300 sm:text-zinc-950'
      }`}
    >
      <Link href={'/'}>ESLEM BAYIR</Link>
    </h1>
  );
};
