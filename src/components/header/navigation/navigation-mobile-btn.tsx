'use client';

import { menuStatusAtom } from '@/atoms/menu-status-atom';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai/index';

export const NavigationMobileBtn = () => {
  const [menuStatus, setMenuStatus] = useAtom(menuStatusAtom);

  return (
    <button
      className={'relative z-[56101] flex h-[56px] w-[56px] flex-col items-end justify-center gap-2 '}
      onClick={() => setMenuStatus(!menuStatus)}
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
        className={`h-[3px] w-full rounded-lg bg-zinc-100 transition-colors`}
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
        className={`h-[3px] w-[80%] origin-left rounded-lg bg-zinc-100 transition-colors`}
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
        className={`h-[3px] w-full rounded-lg bg-zinc-100 transition-colors`}
      />
    </button>
  );
};

const lineVariantFirst = {
  animate: (menuStatus: boolean) => ({
    scaleX: menuStatus ? 1 : '1',
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
