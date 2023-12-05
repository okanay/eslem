'use client';

import { menuStatusAtom } from '@/atoms/menu-status-atom';
import { motion } from 'framer-motion';
import { lenisScrollControlAtom } from '@/atoms/lenis-scroll-control-atom';
import { useAtom, useAtomValue } from 'jotai';

export const NavigationMenuBtn = () => {
  const [menuStatus, setMenuStatus] = useAtom(menuStatusAtom);
  const scrollControl = useAtomValue(lenisScrollControlAtom);

  const handleOnClick = () => {
    setMenuStatus(!menuStatus);

    if (!menuStatus) scrollControl?.stop();
    else scrollControl?.start();
  };

  return (
    <button
      className={
        'relative z-[56101] flex h-[56px] w-[56px] flex-col items-end justify-center gap-2 transition-all duration-300 hover:scale-90'
      }
      onClick={handleOnClick}
    >
      <motion.div
        variants={lineVariantFirst}
        custom={menuStatus}
        animate={'animate'}
        transition={{
          delay: menuStatus ? 0.25 : 0,
          type: 'ease',
          ease: [0.22, 1, 0.88, 1],
        }}
        className={`h-[3px] w-full rounded-lg transition-colors duration-500 ${
          menuStatus
            ? 'bg-zinc-50 sm:bg-zinc-50'
            : 'bg-zinc-800 delay-300 sm:bg-zinc-800'
        }`}
      />
      <motion.div
        variants={lineVariantSecond}
        custom={menuStatus}
        animate={'animate'}
        transition={{
          delay: menuStatus ? 0 : 0.25,
          type: 'ease',
          ease: [0.22, 1, 0.88, 1],
        }}
        className={`h-[3px] w-[80%] rounded-lg object-right transition-colors duration-500 ${
          menuStatus
            ? 'bg-zinc-50 sm:bg-zinc-50'
            : 'bg-zinc-800 delay-300 sm:bg-zinc-800'
        }`}
      />
      <motion.div
        variants={lineVariantThird}
        custom={menuStatus}
        animate={'animate'}
        transition={{
          delay: 0.1,
          type: 'spring',
          stiffness: 90,
        }}
        className={`h-[3px] w-full rounded-lg transition-colors duration-500 ${
          menuStatus
            ? 'bg-zinc-50 sm:bg-zinc-50'
            : 'bg-zinc-800 delay-300 sm:bg-zinc-800'
        }`}
      />
    </button>
  );
};

const lineVariantFirst = {
  animate: (menuStatus: boolean) => ({
    y: menuStatus ? 10 : 0,
    rotate: menuStatus ? '45deg' : '0',
  }),
};
const lineVariantSecond = {
  animate: (menuStatus: boolean) => ({
    scaleX: menuStatus ? 0 : 1,
  }),
};
const lineVariantThird = {
  animate: (menuStatus: boolean) => ({
    y: menuStatus ? -10 : 0,
    rotate: menuStatus ? '-45deg' : '0',
  }),
};
