import Image from 'next/image';
import { HeroImageBlur } from '@/components/index/1-hero-section/hero-image-blur';
import { Suspense } from 'react';

export const ImageLoading = () => {
  return (
    <div className={'h-full w-full animate-pulse rounded-lg bg-gray-500 transition-all duration-300 sm:rounded-none'} />
  );
};

export const HeroImage = () => {
  return (
    <div className={'w-min-[320px] relative h-[60%] w-full p-2 sm:h-full sm:w-[50%] sm:p-0'}>
      <Suspense fallback={<ImageLoading />}>
        <Image
          src={'/images/faces.webp'}
          alt={''}
          width={'1000'}
          height={1000}
          quality={100}
          className={'h-full w-full rounded-lg sm:rounded-none'}
          priority={true}
        />
      </Suspense>
      <div className={'absolute inset-0 p-2 sm:p-0'}>
        <HeroImageBlur />
      </div>
    </div>
  );
};
