import { Providers } from '@/providers/providers';
import type { Metadata } from 'next';
import './globals.css';
import { quicksand } from '@/libs/next-fonts/google-fonts/quicksand';
import { inter } from '@/libs/next-fonts/archive-fonts/inter';
import { roboto } from '@/libs/next-fonts/google-fonts/roboto';

export const metadata: Metadata = {
  title: 'Eslem | Diyetisyen',
  description: 'Vücüduna hükmet, içindeki zerafete uzanan profesyönel klavuz.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`} style={{ WebkitTapHighlightColor: 'rgba(97, 62, 196, 0.1)' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
