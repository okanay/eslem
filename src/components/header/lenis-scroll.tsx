'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({ smoothTouch: true, smoothWheel: true, normalizeWheel: true });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <></>;
};
