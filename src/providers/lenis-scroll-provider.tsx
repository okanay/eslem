'use client';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useSetAtom } from 'jotai';
import { lenisScrollControlAtom } from '@/atoms/lenis-scroll-control-atom';

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const setLenisValue = useSetAtom(lenisScrollControlAtom);

  const lenis = useLenis(lenis => {
    setLenisValue(lenis);
  });

  return <ReactLenis root>{children}</ReactLenis>;
};
