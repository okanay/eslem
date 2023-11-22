import './globals.css';
import { chakraPetch } from '@/libs/next-fonts/chakra-petch';
import { Providers } from '@/providers/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eslem | Diyetisyen',
  description: 'Vücüduna hükmet, içindeki zerafete uzanan profesyönel klavuz.',
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
