'use client';
import { useEffect, useState } from 'react';

export const useLoadingDelay = (duration: number) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => {
      clearTimeout(timeId);
    };
  }, [setLoading, duration]);

  return { loading, setLoading };
};
