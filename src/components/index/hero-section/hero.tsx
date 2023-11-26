import { HeroUnStart } from '@/components/index/hero-section/hero-unstart';
import { HeroImage } from '@/components/index/hero-section/hero-image';

export const Hero = () => {
  return (
    <div className={'h-mobile-full w-full bg-zinc-100 bg-noise'}>
      <div className={'flex h-full w-full flex-row flex-wrap-reverse overflow-hidden sm:flex-nowrap'}>
        <HeroUnStart />
        <HeroImage />
      </div>
    </div>
  );
};

// <div className={'h-mobile-full relative w-full bg-zinc-100 bg-noise'}>
//   <div className={'h-mobile-full mx-auto grid w-full max-w-7xl grid-rows-2 sm:grid-cols-2'}>
//     <div className={'row-start-2 sm:col-start-1 sm:row-start-auto sm:h-screen'}>
//       <div className={'flex h-full w-full flex-col items-center justify-center'}>a</div>
//     </div>
//     <div className=""></div>
//   </div>
//   <div className={'absolute inset-0 flex h-full w-full flex-row justify-end'}>
//     <HeroImage />
//   </div>
// </div>
