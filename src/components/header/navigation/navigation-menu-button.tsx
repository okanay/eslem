'use client';

import { motion } from 'framer-motion';
import { menuStatusAtom } from '@/atoms/menu-status-atom';
import { useAtom } from 'jotai';
import MagneticButton from '@/components/ui/magnetic-button';

const lineVariantFirst = {
  initial: {},
  animate: (isOpen: boolean) => ({
    rotate: isOpen ? '45deg' : '0',
    y: isOpen ? 11 : 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 90,
    },
  }),
};

const lineVariantSecond = {
  initial: {},
  animate: (isOpen: boolean) => ({
    scaleX: isOpen ? 0 : 1,
    opacity: isOpen ? 0 : 1,
    transition: {
      delay: 0.05,
      type: 'spring',
      stiffness: 90,
    },
  }),
};

const lineVariantThird = {
  initial: {},
  animate: (isOpen: boolean) => ({
    rotate: isOpen ? '-45deg' : '0',
    y: isOpen ? -10 : 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 90,
    },
  }),
};

export const NavigationMenuButton = () => {
  const [menuStatus, setMenuStatus] = useAtom(menuStatusAtom);

  return (
    <MagneticButton>
      <button
        onClick={() => setMenuStatus(!menuStatus)}
        className={`relative z-[999] flex items-center justify-center gap-0 text-sm font-bold -tracking-wide text-zinc-700 transition-opacity duration-500 hover:opacity-60 smTablet:gap-2 smTablet:text-base`}
      >
        <div data-name={'menu-names'} className={'relative w-12 shrink-0 overflow-hidden'}>
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: menuStatus ? 24 : 0,
              transition: {
                delay: 0.1,
                type: 'spring',
                stiffness: 90,
              },
            }}
          >
            <h4 className={''}>MENÜ</h4>
          </motion.div>
          <motion.div
            className={'absolute top-0'}
            initial={{
              y: -24,
            }}
            animate={{
              y: menuStatus ? 0 : -24,
              transition: {
                delay: 0.1,
                type: 'spring',
                stiffness: 90,
              },
            }}
          >
            <h4 className={''}>KAPAT</h4>
          </motion.div>
        </div>
        <div data-name={'menu-lines'} className={'flex w-[34px] shrink-0 flex-col gap-1.5'}>
          <motion.div
            variants={lineVariantFirst}
            animate={'animate'}
            custom={menuStatus}
            className={'h-[4px] w-full rounded-lg bg-zinc-700'}
          />
          <motion.div
            variants={lineVariantSecond}
            animate={'animate'}
            custom={menuStatus}
            className={'h-[4px] w-full origin-left rounded-lg bg-zinc-700'}
          />
          <motion.div
            variants={lineVariantThird}
            animate={'animate'}
            custom={menuStatus}
            className={'h-[4px] w-full rounded-lg bg-zinc-700'}
          />
        </div>
      </button>
    </MagneticButton>
  );
};
