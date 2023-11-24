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
            width={'1000'}
            height={1000}
            quality={100}
            placeholder={'blur'}
            className={'h-full w-full'}
            priority={true}
          />
          <div className={'absolute inset-0 block bg-zinc-800/40'}></div>
        </div>
      </div>
    </main>
  );
}
