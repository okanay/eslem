'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  initial: {
    scale: 0.85,
    y: '120%',
    opacity: 0.15,
  },
  hidden: {
    scale: 0.85,
    y: '120%',
    opacity: 0.15,
  },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      delay: 0,
      type: 'spring',
      damping: 18,
      stiffness: 180,
    },
  },
};

type TProps = React.FC<{ children: React.ReactNode; once?: boolean; margin?: string }>;

export const InViewScrollAnimation: TProps = ({ children, margin = '-40px', once = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: once, margin: margin });

  return (
    <div className={'relative inline-flex justify-end overflow-hidden py-2'} ref={ref}>
      <motion.div variants={variants} initial={'initial'} animate={isInView ? 'enter' : 'hidden'}>
        {children}
      </motion.div>
    </div>
  );
};
