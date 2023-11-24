'use client';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { menuStatusAtom } from '@/atoms/menu-status-atom';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  const [menuStatus, setMenuStatus] = useAtom(menuStatusAtom);

  return (
    <main className={'h-screen w-full bg-zinc-100 bg-noise'}>
      <div className={'h-mobile-full relative flex w-full flex-col sm:flex-row'}>
        <div className={'flex-1'} />
        <div className={'relative h-[40%] w-full p-4 sm:h-full sm:w-[50%] sm:p-0'}>
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
            <div
              className={`h-full w-full rounded-lg transition-all duration-500 sm:rounded-none ${
                menuStatus ? 'bg-zinc-800/[96%]' : 'bg-zinc-800/40'
              }`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
