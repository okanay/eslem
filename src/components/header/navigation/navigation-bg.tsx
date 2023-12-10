'use client';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useState } from 'react';

export const NavigationBg = () => {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  scrollYProgress.on('change', latestValue => {
    return setShow(latestValue > 0.05);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '-100%', opacity: 0.5 }}
          animate={{ y: '0%', opacity: 0.98 }}
          exit={{ y: '-100%', opacity: 0.5 }}
          transition={{
            type: 'linear',
            ease: [0.22, 1, 0.78, 1],
            duration: 0.5,
          }}
          className={
            'absolute top-0 -z-10 h-full w-full bg-zinc-100 shadow shadow-zinc-300/50'
          }
        />
      )}
    </AnimatePresence>
  );
};
