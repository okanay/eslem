'use client';

import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

import { SessionProvider } from 'next-auth/react';

export const NextAuthProvider = ({ children }: TProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
