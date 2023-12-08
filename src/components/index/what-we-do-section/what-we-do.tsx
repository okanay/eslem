'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const WhatWeDo = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '0%', '-100%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative z-20 h-[10vh] w-full border border-zinc-50 bg-zinc-200 bg-noise shadow-md shadow-zinc-700/10"
    >
      <div className={'mx-auto h-full max-w-7xl px-4'}>
        <div className="flex h-full w-full flex-col items-center justify-center sm:items-start">
          <div className="flex flex-row items-center justify-start gap-4 sm:gap-8">
            <div className={'flex -space-x-4 rtl:space-x-reverse'}>
              <div className="h-10 w-10 rounded-full border-2 border-white bg-sky-200 basePhone:h-12 basePhone:w-12 sm:h-16 sm:w-16" />
              <div className="h-10 w-10 rounded-full border-2 border-white bg-rose-200 basePhone:h-12 basePhone:w-12 sm:h-16 sm:w-16" />
              <div className="h-10 w-10 rounded-full border-2 border-white bg-zinc-100 basePhone:h-12 basePhone:w-12 sm:h-16 sm:w-16" />
              <div className="h-10 w-10 rounded-full border-2 border-white bg-violet-200 basePhone:h-12 basePhone:w-12 sm:h-16 sm:w-16" />
            </div>
            <h1 className="text-center text-sm font-bold tracking-wider text-zinc-800 basePhone:text-base sm:text-2xl">
              Daha önce mutlu olmuş yüzler.
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
