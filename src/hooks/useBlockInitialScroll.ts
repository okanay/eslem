'use client';

import { useAtomValue } from 'jotai';
import { lenisScrollControlAtom } from '@/atoms/lenis-scroll-control-atom';
import { useEffect } from 'react';

export const useBlockInitialScroll = (loading: boolean) => {
  const scrollControl = useAtomValue(lenisScrollControlAtom);

  useEffect(() => {
    if (loading) {
      scrollControl?.stop();
      window.scroll(0, 0);
    } else {
      const html = document.getElementsByTagName('HTML')[0];
      html.classList.remove('initial-lenis');
      scrollControl?.start();
    }
  }, [loading, scrollControl]);
};
