'use client';

import { m } from 'framer-motion';

type TPageInitialWrapper = React.FC<{
  children: React.ReactNode;
}>;

export const PageInitialWrapper: TPageInitialWrapper = ({ children }) => {
  return (
    <m.div
      variants={mainContainerVariant}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      className={`fixed left-0 top-0 z-[57099] flex h-screen w-full origin-center flex-col items-center justify-center bg-zinc-800`}
    >
      {children}
    </m.div>
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
      color: {
        delay: 2.5,
        type: 'ease',
        ease: [0.22, 1, 0.88, 1],
        duration: 1,
      },
      backgroundColor: {
        delay: 2.5,
        type: 'ease',
        ease: [0.22, 1, 0.88, 1],
        duration: 1.2,
      },
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.75, duration: 1.5 },
  },
};
