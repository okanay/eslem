import { NextAuthProvider } from '@/providers/nextauth-provider';
import { JotaiProvider } from '@/providers/jotai-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </JotaiProvider>
  );
};
