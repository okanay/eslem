import { playFairDisplay } from '@/libs/next-fonts/google-fonts/play-fair-display';
import Image from 'next/image';
import { quicksand } from '@/libs/next-fonts/google-fonts/quicksand';
import { roboto } from '@/libs/next-fonts/google-fonts/roboto';
import { NavigationBtn } from '@/components/header/navigation/navigation-btn';

export const HeroUnStart = () => {
  return (
    <div className="flex h-full w-full justify-end p-2 sm:h-full sm:min-w-[640px] sm:max-w-[50%] sm:flex-shrink-0 sm:p-0">
      <div className={'flex h-full w-full max-w-[640px] flex-col items-center justify-center'}>
        <div className={'flex h-full w-full flex-col items-start gap-8 px-4 text-primary-950'}>
          <div
            className={
              'font h-mobile-full flex max-h-[940px] flex-col items-start justify-center gap-3 lgPhone:gap-4 sm:max-h-full sm:gap-6'
            }
          >
            <div className={'flex flex-row gap-4 sm:hidden'}>
              <NavigationBtn type={'panel'} name={'panel'} url={'/'} />
              <NavigationBtn type={'register'} name={'kayit'} url={'/'} />
            </div>
            <FirstStepText />
            <MainHeadingText />
            <AltHeadingText />
            <NutritiousButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FirstStepText = () => {
  return (
    <>
      <h1
        className={
          'flex flex-row items-center justify-center gap-3 rounded-full border-[2px] border-zinc-600 bg-zinc-50 p-2 shadow shadow-zinc-700 sm:gap-4 sm:p-4'
        }
      >
        <Image
          src={'/icons/checklist.svg'}
          alt={'checklist-icon-svg'}
          width={125}
          height={125}
          className={'basePhone::w-[24px] h-[20px] w-[20px] basePhone:h-[24px]'}
        />
        <span className={'text-base text-zinc-800 basePhone:text-xl sm:text-2xl'}>İlk adımı tamamlandın.</span>
      </h1>
    </>
  );
};
export const MainHeadingText = () => {
  return (
    <>
      <h1 className={`flex flex-col text-3xl font-bold lgPhone:text-5xl sm:text-7xl ${playFairDisplay.className}}`}>
        <span className={'text-5xl font-bold text-primary-600 lgPhone:text-7xl sm:text-8xl'}>başlamak</span>{' '}
        <span>için buradasın.</span>
      </h1>
    </>
  );
};
export const AltHeadingText = () => {
  return (
    <>
      <h4 className={'max-w-[380px] text-xl font-light lgPhone:text-3xl sm:max-w-[560px] sm:text-4xl'}>
        Ayrıcalıklı bir <span className={'font-bold italic text-primary-800'}>ifade</span> için güçlü bir{' '}
        <span className={'font-bold italic text-primary-700'}>irade</span> sunmaya hazırsın. Birlikte bu{' '}
        <span className={'font-bold italic text-primary-600'}>özel</span> yolculuğu tamamlayalım.
      </h4>
    </>
  );
};
export const NutritiousButton = () => {
  return (
    <>
      <button className="flex flex-row items-center justify-center gap-3 rounded-[8px] bg-primary-50 px-6 py-3 shadow shadow-primary-900 sm:px-8 sm:py-4">
        <span className={`${roboto.className} text-lg text-primary-900 lgPhone:text-2xl sm:text-3xl`}>
          Diyete Başla
        </span>
        <Image
          src={'/icons/fresh.svg'}
          alt={'nut'}
          width={125}
          height={125}
          className={'h-[28px] w-[28px] sm:h-[40px] sm:w-[40px]'}
        />
      </button>
    </>
  );
};
