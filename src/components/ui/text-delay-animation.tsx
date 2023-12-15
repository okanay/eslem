'use client';
import { m, useInView } from 'framer-motion';
import { useRef } from 'react';

type TProps = React.FC<{
  text: string;
}>;

export const TextDelayAnimation: TProps = ({ text }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const word = text.split(' ');

  return (
    <div
      ref={ref}
      className={'flex flex-wrap items-center justify-center gap-x-[12px]'}
    >
      {word.map((w, index) => (
        <span
          key={'word=' + w + 'index=' + index}
          className={'relative -my-2 inline overflow-hidden p-2'}
        >
          <m.span
            variants={variantsBackground}
            initial={'hidden'}
            animate={isVisible ? 'visible' : 'hidden'}
            custom={index}
            className={'absolute inset-0 rounded-[8px] bg-zinc-800'}
          />
          <m.div
            variants={variantsText}
            initial={'hidden'}
            animate={isVisible ? 'visible' : 'hidden'}
            custom={index}
            className={'relative z-10 text-zinc-50'}
          >
            {w}
          </m.div>
        </span>
      ))}
    </div>
  );
};

const variantsBackground = {
  hidden: (index: number) => ({
    opacity: 1,
    clipPath: 'inset(0% 100% 0% 0%)',
  }),
  visible: (index: number) => ({
    opacity: 1,
    clipPath: 'inset(0 0 0 0)',
    transition: {
      delay: (index + 1) * 0.15,
      type: 'ease',
      ease: [0.22, 1, 0.8, 1],
      opacity: {
        delay: 1,
        duration: 1,
      },
    },
  }),
};

const variantsText = {
  hidden: (index: number) => ({
    opacity: 0,
    y: '120%',
  }),
  visible: (index: number) => ({
    opacity: 1,
    color: '#3f3f46',
    y: '0%',
    transition: {
      delay: (index + 1) * 0.3,
      type: 'ease',
      ease: [0.22, 1, 0.8, 1],
      color: {
        delay: 1,
        duration: 0.5,
      },
    },
  }),
};
