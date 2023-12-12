import { NextAuthProvider } from '@/providers/nextauth-provider';
import { JotaiProvider } from '@/providers/jotai-provider';
import { LenisProvider } from '@/providers/lenis-scroll-provider';
import { FramerProvider } from '@/providers/framer-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <NextAuthProvider>
        <LenisProvider>
          <FramerProvider>{children}</FramerProvider>
        </LenisProvider>
      </NextAuthProvider>
    </JotaiProvider>
  );
};
