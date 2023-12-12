import { HeroImageBlur } from '@/components/index/hero-section/hero-image-blur';
import Image from 'next/image';
import faces from '../../../../public/images/faces.webp';

export const HeroImage = () => {
  return (
    <div className="hidden h-[240px] w-full p-2 basePhone:h-[40%] sm:block sm:h-full sm:p-0">
      <div className={'relative h-full w-full rounded-[24px] sm:rounded-none'}>
        <Image
          src={faces}
          alt={'multiple-faces-images-gif'}
          quality={100}
          placeholder={'blur'}
          loading={'eager'}
          priority={false}
          className={'h-full w-full rounded-lg object-cover sm:rounded-none'}
        />
        <div className={'absolute inset-0 sm:p-0'}>
          <HeroImageBlur />
        </div>
      </div>
    </div>
  );
};
