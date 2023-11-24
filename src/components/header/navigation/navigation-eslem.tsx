import Link from 'next/link';

export const NavigationEslem = () => {
  return (
    <h1
      className={`font-schnyder flex-shrink-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-100 bg-clip-text text-5xl tracking-wide text-transparent sm:ml-8 sm:text-5xl`}
    >
      <Link href={'/'}>ESLEM BAYIR</Link>
    </h1>
  );
};
