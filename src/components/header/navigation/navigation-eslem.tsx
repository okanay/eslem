import Link from 'next/link';
import { schnyder } from '@/libs/next-fonts/local-fonts/schnyder/schnyder';

export const NavigationEslem = () => {
  return (
    <h1
      className={`${schnyder.className} via-zinc-80 relative z-[56101] flex-shrink-0 bg-gradient-to-br bg-clip-text text-5xl tracking-wide text-transparent text-zinc-100 transition-colors duration-500 sm:ml-8 sm:text-5xl lg:ml-0`}
    >
      <Link href={'/'}>ESLEM BAYIR</Link>
    </h1>
  );
};
