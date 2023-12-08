'use client';

import { useIncreaseTime } from '@/hooks/useIncreaseTime';
import { AnimatePresence, motion } from 'framer-motion';

type TProps = React.FC<{}>;

export const WorldChangeAnimation: TProps = ({}) => {
  const dummyText = ['text-1', 'text-2', 'text-3'];

  const { value } = useIncreaseTime(4000);
  const activeText = value % dummyText.length;

  return (
    <AnimatePresence mode={'wait'}>
      <motion.div key={value}>{dummyText[activeText]}</motion.div>
    </AnimatePresence>
  );
};
