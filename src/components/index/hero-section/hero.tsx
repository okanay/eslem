import { HeroUnstart } from '@/components/index/hero-section/hero-unstart';
import { HeroImage } from '@/components/index/hero-section/hero-image';

export const Hero = () => {
  return (
    <div className={'h-mobile-full w-full bg-zinc-100 bg-noise'}>
      <div className={'flex h-full w-full flex-wrap'}>
        <HeroUnstart />
        <HeroImage />
      </div>
    </div>
  );
};
