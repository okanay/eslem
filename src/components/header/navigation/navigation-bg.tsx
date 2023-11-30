'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowScroll } from '@mantine/hooks';

export const NavigationBg = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const desiredScroll = scroll.y > 50;

  return (
    <AnimatePresence>
      {desiredScroll && (
        <motion.div
          initial={{ y: '-100%', opacity: 0.5 }}
          animate={{ y: '0%', opacity: 0.98 }}
          exit={{ y: '-100%', opacity: 0.5 }}
          transition={{ type: 'linear', ease: [0.22, 1, 0.78, 1], duration: 0.5 }}
          className={'absolute top-0 -z-10 h-full w-full bg-zinc-100 shadow shadow-zinc-300/50'}
        />
      )}
    </AnimatePresence>
  );
};
