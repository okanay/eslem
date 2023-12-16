'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type TProps = React.FC<{
  children: React.ReactNode;
  yValueStart?: string;
  yValueEnd?: string;
  start?: number;
  end?: number;
}>;

export const SectionScrollEffect: TProps = ({
  yValueStart = '0px',
  yValueEnd = '-200px',
  start = 0,
  end = 1,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [yValueStart, yValueEnd],
  );

  return (
    <m.div ref={ref} style={{ y, marginBottom: yValueEnd }}>
      {children}
    </m.div>
  );
};
