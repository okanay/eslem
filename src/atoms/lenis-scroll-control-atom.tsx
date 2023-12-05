'use client';

import { atom } from 'jotai';
import { LenisInstance } from '@studio-freight/react-lenis';

export const lenisScrollControlAtom = atom<LenisInstance | undefined>(
  undefined,
);
