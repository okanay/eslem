import { Providers } from '@/providers/providers';
import type { Metadata } from 'next';
import './globals.css';
import { quicksand } from '@/libs/next-fonts/quicksand';

export const metadata: Metadata = {
  title: 'Eslem | Diyetisyen',
  description: 'Vücüduna hükmet, içindeki zerafete uzanan profesyönel klavuz.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
