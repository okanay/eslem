import { Providers } from '@/providers/providers';
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';

import './globals.css';
import { roboto } from '@/libs/next-fonts/google-fonts/roboto';

export const metadata: Metadata = {
  title: 'Eslem | Diyetisyen',
  description: 'Vücüduna hükmet, içindeki zerafete uzanan profesyönel klavuz.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={'initial-lenis'}>
      <body
        className={`${roboto.className}`}
        style={{
          WebkitTapHighlightColor: 'rgba(97, 62, 196, 0.1)',
        }}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
