import Link from 'next/link';

export const NavigationEslem = () => {
  return (
    <h1
      className={`font-schnyder flex-shrink-0 bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-600 bg-clip-text text-5xl tracking-wide text-transparent sm:text-5xl`}
    >
      <Link href={'/'}>ESLEM BAYIR</Link>
    </h1>
  );
};
