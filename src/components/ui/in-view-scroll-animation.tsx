'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  hidden: {
    opacity: 0,
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  enter: {
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0 100%)',
    transition: {
      duration: 0.45,
    },
  },
};

type TProps = React.FC<{
  children: React.ReactNode;
  once?: boolean;
  margin?: string;
}>;

export const InViewScrollAnimation: TProps = ({
  children,
  margin = '-20px',
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: once, margin: margin });

  return (
    <div
      className={'relative inline-flex justify-end overflow-hidden'}
      ref={ref}
    >
      <m.div
        variants={variants}
        initial={'initial'}
        animate={isInView ? 'enter' : 'hidden'}
      >
        {children}
      </m.div>
    </div>
  );
};
