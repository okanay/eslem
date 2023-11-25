import Image from 'next/image';
import { HeroImageBlur } from '@/components/index/hero-section/hero-image-blur';

export const HeroImage = () => {
  return (
    <div className={'w-min-[320px] relative h-[60%] w-full p-2 sm:h-full sm:w-[50%] sm:p-0'}>
      <Image
        src={'/images/faces.webp'}
        alt={''}
        width={'1000'}
        height={1000}
        quality={100}
        loading={'lazy'}
        priority={false}
        className={'h-full w-full rounded-lg sm:rounded-none'}
      />
      <div className={'absolute inset-0 p-2 sm:p-0'}>
        <HeroImageBlur />
      </div>
    </div>
  );
};
