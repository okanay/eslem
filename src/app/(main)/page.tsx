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
    <main className={'h-mobile-full w-full bg-zinc-100 bg-noise'}>
      <div className={'flex h-full w-full flex-wrap'}>
        <div className={'flex-1'} />
        <div className={'w-min-[320px] relative h-[60%] w-full p-2 sm:h-full sm:w-[50%] sm:p-0'}>
          <Image
            src={'/images/faces.webp'}
            alt={''}
            width={'1000'}
            height={1000}
            quality={100}
            className={'h-full w-full rounded-lg sm:rounded-none'}
            priority={true}
          />
          <div className={'absolute inset-0 p-2 sm:p-0'}>
            <div
              className={`h-full w-full rounded-lg transition-all duration-500 sm:rounded-none ${
                menuStatus ? 'bg-zinc-500/[96%]' : 'bg-zinc-600/40'
              }`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
