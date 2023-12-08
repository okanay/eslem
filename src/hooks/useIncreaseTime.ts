'use client';
import { useEffect } from 'react';

import { atom, useAtom } from 'jotai';
const increaseAtom = atom(0);

export const useIncreaseTime = (timeMS: number) => {
  const [value, setValue] = useAtom(increaseAtom);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(value + 1);
    }, timeMS);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, timeMS, setValue]);

  return { value };
};
