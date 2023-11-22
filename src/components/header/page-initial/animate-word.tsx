import { motion } from 'framer-motion';
import { playFairDisplay } from '@/libs/next-fonts/play-fair-display';

type TAnimateWord = React.FC<{ word: string }>;
export const AnimateWord: TAnimateWord = ({ word }) => {
  return (
    <div
      className={`${playFairDisplay.className} flex w-full items-start justify-center overflow-hidden
    text-[3.2rem] font-light basePhone:text-[4rem] lgPhone:text-[4.4rem] sm:text-[7rem] lg:text-[11rem]`}
    >
      {word.split('').map((l, i) => (
        <motion.span
          variants={letterVariant}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          style={{ perspective: '120px', perspectiveOrigin: 'left' }}
          key={i}
          custom={i}
          className={`flex h-[56px] w-auto shrink-0 items-center justify-center 
           font-light basePhone:h-[72px] lgPhone:h-[80px] sm:h-[112px] lg:h-[212px]`}
        >
          {l}
        </motion.span>
      ))}
    </div>
  );
};

const letterVariant = {
  initial: (index: number) => ({
    scaleX: 1.75,
    scaleY: 1.75,
    y: index % 2 === 0 ? 4 : -4,
    x: index % 2 === 0 ? 8 : -8,
    rotate: index % 2 === 0 ? 2 : -2,
    opacity: 0,
  }),
  animate: (index: number) => ({
    scaleX: 0.95,
    scaleY: 0.95,
    rotate: 0,
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 2.15,
      opacity: { delay: 0, duration: 2.15 },
      delay: Math.floor((Math.random() * 5) / 5) + index * 0.05,
      type: 'ease',
      ease: [0.76, 0, 0.36, 1.2],
      // ease: [0.22, 1, 0.78, 1.2],
    },
  }),
  exit: (index: number) => ({
    y: '120%',
    opacity: 0.25,
    transition: {
      delay: Math.floor(Math.random() * 10) / 20,
      duration: 0.75,
      type: 'ease',
      ease: [0.76, 0, 0.36, 1.2],
      // ease: [0.22, 1, 0.78, 1],
    },
  }),
};
