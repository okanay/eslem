import { HeroImageBlur } from '@/components/index/hero-section/hero-image-blur';
import Image from 'next/image';

export const HeroImage = () => {
  return (
    <div
      className={
        'hidden h-[240px] w-full p-2 basePhone:h-[40%] sm:block sm:h-full sm:p-0'
      }
    >
      <div className={'relative h-full w-full rounded-[24px] sm:rounded-none'}>
        {/*<Image*/}
        {/*  src={'/images/faces.webp'}*/}
        {/*  alt={''}*/}
        {/*  width={'1000'}*/}
        {/*  height={1000}*/}
        {/*  quality={100}*/}
        {/*  priority={true}*/}
        {/*  className={'h-full w-full rounded-lg object-cover sm:rounded-none'}*/}
        {/*/>*/}
        <div className={'absolute inset-0 sm:p-0'}>
          <HeroImageBlur />
        </div>
      </div>
    </div>
  );
};
