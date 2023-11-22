'use client';
import { motion } from 'framer-motion';

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
        className={'text-4xl font-light smTablet:text-5xl lgTablet:text-6xl'}
      >
        ESLEM
      </motion.h1>
    </>
  );
};
