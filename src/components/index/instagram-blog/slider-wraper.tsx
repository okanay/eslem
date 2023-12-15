'use client';
import { m } from 'framer-motion';

export const SliderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <m.div
      animate={{ x: '-50%' }}
      transition={{
        repeat: Infinity,
        type: 'tween',
        ease: 'linear',
        duration: 120,
      }}
      data-name={'slider-items'}
      className="flex w-fit"
    >
      {children}
    </m.div>
  );
};
