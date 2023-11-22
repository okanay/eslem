'use client';

import { motion } from 'framer-motion';
import { bodoniModa } from '@/libs/next-fonts/bodoni-moda';

type TPageInitialWrapper = React.FC<{
  children: React.ReactNode;
}>;

export const PageInitialWrapper: TPageInitialWrapper = ({ children }) => {
  return (
    <motion.div
      variants={mainContainerVariant}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      className={`${bodoniModa.className} flex h-screen w-full origin-top flex-col items-center justify-center bg-zinc-800`}
    >
      {children}
    </motion.div>
  );
};

const mainContainerVariant = {
  initial: {
    color: 'rgb(240,240,240)',
    backgroundColor: 'rgb(20,20,20)',
  },
  animate: {
    backgroundColor: 'rgb(240,240,240)',
    color: 'rgb(20,20,20)',
    transition: {
      color: { delay: 3.75, type: 'ease', ease: [0.22, 1, 0.88, 1], duration: 1 },
      backgroundColor: { delay: 3.75, type: 'ease', ease: [0.22, 1, 0.88, 1], duration: 1.2 },
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.45 },
  },
};
