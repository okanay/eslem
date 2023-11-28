'use client';
import { motion } from 'framer-motion';
import { useWindowScroll } from '@mantine/hooks';

export const NavigationBg = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const desiredScroll = scroll.y > 200;

  return (
    <motion.div
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: desiredScroll ? '0%' : '-100%', opacity: desiredScroll ? 0.98 : 0 }}
      transition={{ type: 'linear', ease: [0.22, 1, 0.78, 1] }}
      className={'absolute top-0 -z-10 h-full w-full bg-zinc-100 shadow shadow-zinc-300/50'}
    />
  );
};
