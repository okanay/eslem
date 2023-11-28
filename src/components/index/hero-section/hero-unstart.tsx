import { playFairDisplay } from '@/libs/next-fonts/google-fonts/play-fair-display';
import Image from 'next/image';
import { quicksand } from '@/libs/next-fonts/google-fonts/quicksand';
import { roboto } from '@/libs/next-fonts/google-fonts/roboto';
import { NavigationBtn } from '@/components/header/navigation/navigation-btn';
import { schnyder } from '@/libs/next-fonts/local-fonts/schnyder/schnyder';

export const HeroUnStart = () => {
  return (
    <div className="mt-8 flex h-full w-full justify-end p-2 sm:h-full sm:min-w-[640px] sm:max-w-[50%] sm:flex-shrink-0 sm:p-0">
      <div className={'flex h-full w-full max-w-[640px] flex-col items-center justify-center'}>
        <div className={'flex h-full w-full flex-col items-start gap-8 px-2 text-primary-950 sm:p-4'}>
          <div
            className={
              'font h-mobile-full flex max-h-[940px] flex-col items-start justify-center gap-4 lgPhone:gap-5 sm:max-h-full sm:gap-6'
            }
          >
            <AuthButtons />
            <FirstStepText />
            <MainHeadingText />
            <AltHeadingText />
            <SocialAccount />
            <NutritiousButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuthButtons = () => {
  return (
    <>
      <div className={'flex flex-row gap-4 sm:hidden'}>
        <NavigationBtn type={'panel'} name={'panel'} url={'/'} />
        <NavigationBtn type={'register'} name={'kayit'} url={'/'} />
      </div>
    </>
  );
};
export const FirstStepText = () => {
  return (
    <>
      <h1
        className={
          'mb-2 flex flex-row items-center justify-center gap-3 rounded-full border-[2px] border-zinc-600 bg-zinc-50 p-2 shadow shadow-zinc-700 sm:gap-4 sm:p-4'
        }
      >
        <Image
          src={'/icons/checklist.svg'}
          alt={'checklist-icon-svg'}
          width={125}
          height={125}
          className={'basePhone::w-[24px] h-[20px] w-[20px] basePhone:h-[24px]'}
        />
        <span className={'text-sm text-zinc-800 smPhone:text-base basePhone:text-lg xlPhone:text-xl sm:text-2xl'}>
          Neredeyse tamamlamak üzeresin.
        </span>
      </h1>
    </>
  );
};
export const MainHeadingText = () => {
  return (
    <>
      <h1 className={`flex flex-col sm:-space-y-2`}>
        <span className={`text-5xl font-semibold -tracking-wide text-primary-600 lgPhone:text-6xl sm:text-8xl`}>
          başlamak
        </span>{' '}
        <span className={'text-4xl lgPhone:text-5xl sm:text-7xl'}>için hazırsın.</span>
      </h1>
    </>
  );
};
export const AltHeadingText = () => {
  return (
    <h4 className={'max-w-[380px] text-2xl font-light tracking-wide lgPhone:text-3xl sm:max-w-[560px] sm:text-4xl'}>
      Ayrıcalıklı bir <span className={'font-bold italic -tracking-wide text-primary-800'}>vücut</span> için güçlü bir{' '}
      <span className={'font-bold italic -tracking-wide text-primary-700'}>irade</span> göstermeye hazırsın. Birlikte bu{' '}
      <span className={'font-bold italic -tracking-wide text-primary-600'}>özel</span> yolculuğu tamamlayalım.
    </h4>
  );
};
export const NutritiousButton = () => {
  return (
    <>
      <button className="flex flex-row items-center justify-center gap-3 rounded-[8px] border border-primary-950 bg-zinc-50 px-6 py-3 shadow shadow-primary-950 sm:px-8 sm:py-4">
        <span className={`text-lg text-primary-950 lgPhone:text-2xl sm:text-3xl`}>Diyete Başla</span>
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
export const SocialAccount = () => {
  return (
    <div className={'mt-4 flex flex-row items-start justify-start gap-[20px]'}>
      <Image
        src={'/icons/whatsapp.svg'}
        alt={'whatsapp-icon'}
        width={125}
        height={125}
        className={'h-[24px] w-[24px] flex-shrink-0 sm:h-[36px] sm:w-[36px]'}
      />
      <Image
        src={'/icons/instagram.svg'}
        alt={'instagram-icon'}
        width={125}
        height={125}
        className={'h-[24px] w-[24px] flex-shrink-0 sm:h-[36px] sm:w-[36px]'}
      />
      <Image
        src={'/icons/linkedin.svg'}
        alt={'linkedin-icon'}
        width={125}
        height={125}
        className={'h-[24px] w-[24px] flex-shrink-0 sm:h-[36px] sm:w-[36px]'}
      />
      <Image
        src={'/icons/twitter.svg'}
        alt={'linkedin-icon'}
        width={125}
        height={125}
        className={'h-[24px] w-[24px] flex-shrink-0 sm:h-[36px] sm:w-[36px]'}
      />
      <Image
        src={'/icons/facebook.svg'}
        alt={'facebook-icon'}
        width={125}
        height={125}
        className={'h-[24px] w-[24px] flex-shrink-0 sm:h-[36px] sm:w-[36px]'}
      />
      <Image
        src={'/icons/telegram.svg'}
        alt={'telegram-icon'}
        width={125}
        height={125}
        className={'h-[24px] w-[24px] flex-shrink-0 sm:h-[36px] sm:w-[36px]'}
      />
    </div>
  );
};
