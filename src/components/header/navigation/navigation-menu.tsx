'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { menuStatusAtom } from '@/atoms/menu-status-atom';
import { useAtom } from 'jotai';

// 'var(--menu-h)'
const NavigationMenu = () => {
  const [menuStatus, setMenuStatus] = useAtom(menuStatusAtom);
  return (
    <AnimatePresence mode={'wait'}>
      {menuStatus && (
        <motion.div className={'relative'}>
          <motion.div
            animate={{
              width: 'var(--menu-w)',
              height: 'var(--menu-h)',
              x: 16,
              y: 'var(--menu-y)',
              opacity: 1,
              transition: {
                duration: 0.75,
                type: 'ease',
                ease: [0.22, 1, 0.78, 1],
                opacity: { delay: 0.5, duration: 0.5 },
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.55,
                duration: 0.45,
                type: 'ease',
                ease: [0.22, 1, 0.78, 1],
              },
            }}
            className={`fixed right-0 top-0 h-[56px] w-[64px] bg-gradient-to-t from-primary-300 via-primary-400 
          to-primary-300 [--menu-h:100vh] [--menu-w:100vh] [--menu-y:-0px] sm:absolute
          sm:z-[56101] sm:rounded-l-[24px] sm:shadow sm:shadow-zinc-100 sm:[--menu-h:480px] sm:[--menu-w:360px] sm:[--menu-y:-16px] desktop:rounded-r-[24px]`}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
