'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const TestimonialAvatars = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative z-20 h-[10vh] w-full border border-zinc-100 bg-zinc-50 shadow-md shadow-zinc-300/40"
    >
      <div className={'mx-auto h-full max-w-7xl px-4'}>
        <div className="flex h-full w-full flex-col items-center justify-center sm:items-start">
          <div className="flex flex-row items-center justify-start gap-4 sm:gap-8">
            <div className={'flex -space-x-4 rtl:space-x-reverse'}>
              <div className="h-10 w-10 rounded-full border-2 border-white bg-sky-200 basePhone:h-12 basePhone:w-12 sm:h-16 sm:w-16" />
              <div className="h-10 w-10 rounded-full border-2 border-white bg-rose-200 basePhone:h-12 basePhone:w-12 sm:h-16 sm:w-16" />
              <div className="h-10 w-10 rounded-full border-2 border-white bg-primary-300 basePhone:h-12 basePhone:w-12 sm:h-16 sm:w-16" />
              <div className="h-10 w-10 rounded-full border-2 border-white bg-violet-200 basePhone:h-12 basePhone:w-12 sm:h-16 sm:w-16" />
            </div>
            <h1 className="max-w-[160px] text-center text-sm leading-[22px] tracking-wider text-zinc-800 basePhone:text-base lgPhone:max-w-full sm:text-2xl">
              Daha önce mutlu olmuş yüzler.
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
