'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

export const FramerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};
