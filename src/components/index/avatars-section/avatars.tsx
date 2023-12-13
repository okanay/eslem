'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Avatars = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <m.div
      ref={ref}
      style={{ y, opacity }}
      className="relative z-20 hidden h-[10vh] w-full border border-zinc-100 bg-zinc-50 sm:block"
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
            <h1 className="max-w-[160px] text-center leading-6 tracking-wide text-zinc-800 lgPhone:max-w-full lgPhone:text-lg">
              Daha önce mutlu olmuş yüzler.
            </h1>
          </div>
        </div>
      </div>
    </m.div>
  );
};
