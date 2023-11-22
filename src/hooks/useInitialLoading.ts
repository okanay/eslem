'use client';
import { useEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';

const loadingAtom = atom(true);

export const useInitialLoading = () => {
  const [loading, setLoading] = useAtom(loadingAtom);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLoading(false);
    }, 5400);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return { loading, setLoading };
};
