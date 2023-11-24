import Image from 'next/image';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={'h-screen w-full bg-zinc-100 bg-noise'}>
      <div className={'h-mobile-full relative flex w-full flex-col sm:flex-row'}>
        <div className={'flex-1'} />
        <div className={'relative h-[60%] w-full p-4 sm:h-full sm:w-1/2 sm:p-0'}>
          <Image
            src={'/images/faces.webp'}
            alt={''}
            width={'1000'}
            height={1000}
            quality={100}
            // placeholder={'blur'}
            className={'h-full w-full rounded-lg sm:rounded-none'}
            priority={true}
          />
          <div className={'absolute inset-0 p-4 sm:p-0'}>
            <div className={'h-full w-full rounded-lg bg-zinc-800/40 sm:rounded-none'} />
          </div>
        </div>
      </div>
    </main>
  );
}
