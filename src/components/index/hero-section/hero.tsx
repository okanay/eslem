import { HeroContent } from '@/components/index/hero-section/hero-content';
import { HeroImage } from '@/components/index/hero-section/hero-image';

export const Hero = () => {
  return (
    <div className={'h-full w-full bg-zinc-100 bg-noise sm:h-screen sm:max-h-screen'}>
      <div className={'flex h-full w-full flex-row flex-wrap-reverse overflow-hidden sm:flex-nowrap'}>
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
};
