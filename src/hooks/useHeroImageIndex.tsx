'use client';
import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { useInitialLoading } from '@/hooks/useInitialLoading';

export const heroImageIndexAtom = atom(0);

export const useHeroImageIndex = (timeMS: number) => {
  const [imageIndex, setImageIndex] = useAtom(heroImageIndexAtom);
  const { loading } = useInitialLoading();

  useEffect(() => {
    if (loading) return;

    const timeout = setTimeout(() => {
      setImageIndex(imageIndex + 1);
    }, timeMS);

    return () => {
      clearTimeout(timeout);
    };
  }, [imageIndex, loading, timeMS, setImageIndex]);

  return { imageIndex };
};
