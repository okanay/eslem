'use client';

import { useHeroImageIndex } from '@/hooks/useHeroImageIndex';
import { AnimatePresence, motion } from 'framer-motion';

export const HeroBgImage = () => {
  const images = [{ image: 'bg-tea' }, { image: 'bg-hurma' }, { image: 'bg-bayir' }];
  const { imageIndex } = useHeroImageIndex(12000);
  const activeImage = imageIndex % images.length;

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={imageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: '-1%' }}
          transition={{ duration: 1.4, type: 'ease', ease: [0.22, 1, 0.78, 1] }}
          className={`${images[activeImage].image} absolute top-0 h-full w-full bg-cover bg-center`}
        />
      </AnimatePresence>
    </>
  );
};
