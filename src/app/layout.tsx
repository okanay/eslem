import './globals.css';
import { chakraPetch } from '@/libs/next-fonts/chakra-petch';
import { Providers } from '@/providers/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxolis | Login Task',
  description: 'Created by Okan Ay for Luxolis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={chakraPetch.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
