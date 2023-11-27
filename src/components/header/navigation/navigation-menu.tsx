'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { menuStatusAtom } from '@/atoms/menu-status-atom';
import { useAtomValue } from 'jotai';
import { useMediaQuery } from '@mantine/hooks';
import { NavigationMenuLinks } from '@/components/header/navigation/navigation-menu-links';

const NavigationMenu = () => {
  const menuStatus = useAtomValue(menuStatusAtom);
  const isMobile = useMediaQuery('(max-width: 640px)');

  const initial = isMobile ? 'initial_mobile' : 'initial_desktop';
  const animate = isMobile ? 'animate_mobile' : 'animate_desktop';
  const exit = isMobile ? 'exit_mobile' : 'exit_desktop';

  return (
    <AnimatePresence mode={'popLayout'}>
      {menuStatus && (
        <motion.div className={'pointer-events-none fixed right-0 top-0 h-screen w-full sm:absolute'}>
          <div className={'mx-auto flex max-w-7xl justify-end sm:px-2 sm:py-4'}>
            <motion.div
              variants={variants}
              initial={initial}
              animate={animate}
              exit={exit}
              className={`absolute h-[40px] w-full origin-bottom sm:absolute sm:z-[56101] sm:h-[48px] sm:w-[40px]`}
            >
              <NavigationMenuLinks menuStatus={menuStatus} isMobile={isMobile} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
const variants = {
  initial_desktop: {},
  animate_desktop: {
    width: '420px',
    height: '500px',
    opacity: 1,
    transition: {
      duration: 0.75,
      type: 'ease',
      ease: [0.22, 1, 0.78, 1],
      opacity: { delay: 0.5, duration: 0.5 },
    },
  },
  exit_desktop: {
    opacity: 0,
    transition: {
      // delay: 0.55,
      duration: 0.55,
      type: 'ease',
      ease: [0.88, 1, 0.88, 1],
    },
  },
  initial_mobile: {
    width: '100%',
    height: '0px',
  },
  animate_mobile: {
    width: '100%',
    height: '100vh',
    transition: {
      height: {
        duration: 0.8,
        type: 'ease',
        ease: [0.22, 0.85, 0.78, 0.95],
      },
    },
  },
  exit_mobile: {
    width: '100%',
    height: '0vh',
    transition: {
      height: {
        duration: 0.5,
        type: 'ease',
        ease: [0.88, 1, 0.88, 1],
      },
    },
  },
};
