import Image from 'next/image';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={'h-screen w-full bg-zinc-100 bg-noise'}>
      <div className={'relative flex h-screen w-full'}>
        <div className={'flex-1'} />
        <div className={'relative h-full w-full sm:w-1/2'}>
          <Image
            src={'/images/faces.webp'}
            alt={''}
            width={'100'}
            height={100}
            className={'h-full w-full'}
            quality={100}
          />
          <div className={'absolute inset-0 block bg-zinc-800/40'}></div>
        </div>
      </div>
    </main>
  );
}
