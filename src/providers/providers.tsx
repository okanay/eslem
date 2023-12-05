import { NextAuthProvider } from '@/providers/nextauth-provider';
import { JotaiProvider } from '@/providers/jotai-provider';
import { LenisProvider } from '@/providers/lenis-scroll-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <NextAuthProvider>
        <LenisProvider>{children}</LenisProvider>
      </NextAuthProvider>
    </JotaiProvider>
  );
};
