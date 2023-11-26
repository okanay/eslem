'use client';
import { motion } from 'framer-motion';
import { schnyder } from '@/libs/next-fonts/local-fonts/schnyder/schnyder';

export const PageInitialEslem = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1.25,
            delay: 1.5,
          },
        }}
        exit={{ opacity: 0 }}
        className={`${schnyder.className} -my-4 text-4xl font-light sm:text-6xl lg:-my-12 lg:text-7xl`}
      >
        ESLEM
      </motion.h1>
    </>
  );
};
