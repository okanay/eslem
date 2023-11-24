import Link from 'next/link';

export const NavigationEslem = () => {
  return (
    <h1
      className={`font-schnyder via-zinc-80 flex-shrink-0 bg-gradient-to-br from-zinc-700 to-zinc-700 bg-clip-text text-5xl tracking-wide text-transparent sm:ml-8 sm:from-zinc-100 sm:via-zinc-50 sm:to-zinc-100 sm:text-5xl lg:ml-0`}
    >
      <Link href={'/'}>ESLEM BAYIR</Link>
    </h1>
  );
};
