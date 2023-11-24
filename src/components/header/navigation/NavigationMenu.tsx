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
        <motion.div
          initial={{
            width: '56px',
            height: '64px',
            x: -0,
            y: -4,
            opacity: 0,
          }}
          animate={{
            width: 'var(--menu-w)',
            height: 'var(--menu-h)',
            x: 16,
            y: -16,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            delay: 0,
            duration: 0.75,
            type: 'ease',
            ease: [0.22, 1, 0.78, 1],
            width: { delay: menuStatus ? 0.15 : 0, duration: menuStatus ? 0.6 : 0.75 },
            height: { delay: menuStatus ? 0 : 0.15, duration: menuStatus ? 0.75 : 0.6 },
            opacity: { delay: 0.1, duration: 0.65 },
          }}
          className={`absolute right-0 top-0 bg-gradient-to-tr from-primary-100 via-primary-300 to-primary-500 drop-shadow-xl 
          [--menu-h:100vh] [--menu-w:100vh] [--menu-y:4] sm:right-0 sm:top-0 sm:z-[56101]
          sm:rounded-l-[24px] sm:shadow-2xl sm:shadow-zinc-100 sm:[--menu-h:480px] sm:[--menu-w:360px] sm:[--menu-y:-4] desktop:rounded-r-[24px]`}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
