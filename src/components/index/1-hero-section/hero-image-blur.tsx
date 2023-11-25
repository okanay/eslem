'use client';

import { useAtomValue } from 'jotai/index';
import { menuStatusAtom } from '@/atoms/menu-status-atom';

export const HeroImageBlur = () => {
  const menuStatus = useAtomValue(menuStatusAtom);

  return (
    <>
      <div
        className={`h-full w-full rounded-lg transition-all duration-500 sm:rounded-none ${
          menuStatus ? 'bg-zinc-400/95' : 'bg-zinc-600/50 delay-500'
        }`}
      />
    </>
  );
};
