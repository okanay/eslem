'use client';

import { motion, useInView, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

const variants = {
  initial: {
    y: '120%',
  },
  hidden: {
    y: '120%',
  },
  enter: {
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      type: 'spring',
      damping: 10,
      stiffness: 120,
    },
  },
};

type TProps = React.FC<{ children: React.ReactNode; once?: boolean; margin?: string }>;

export const InViewScrollAnimation: TProps = ({ children, margin = '0px', once = true }) => {
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
