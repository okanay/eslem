'use client';

import { useHeroImageIndex } from '@/hooks/useHeroImageIndex';
import { AnimatePresence, motion } from 'framer-motion';

export const HeroBgImage = () => {
  const { imageIndex } = useHeroImageIndex(7500);
  const images = [{ image: 'bg-tea' }, { image: 'bg-hurma' }, { image: 'bg-bayir' }];

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={imageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className={`${images[imageIndex % images.length].image} absolute inset-0 bg-tea bg-cover bg-center`}
        />
      </AnimatePresence>
    </>
  );
};
