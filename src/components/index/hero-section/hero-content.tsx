import { NavigationBtn } from '@/components/header/navigation/navigation-btn';
import { SocialAccounts } from '@/components/index/hero-section/social-accounts';
import { FirstStepText } from '@/components/index/hero-section/first-step-text';
import { NutritiousButton } from '@/components/index/hero-section/nutritious-button';

export const HeroContent = () => {
  return (
    <div className="flex h-full w-full justify-end sm:h-full sm:min-w-[640px] sm:max-w-[50%] sm:flex-shrink-0">
      <div className="flex h-full w-full max-w-[640px] flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col items-start text-primary-950">
          <div className="h-mobile-full mt-8 flex max-h-[920px] flex-col items-start justify-center gap-4 px-4 sm:mt-0 sm:max-h-full sm:gap-8">
            <AuthButtons />
            <FirstStepText />
            <MainHeadingText />
            <AltHeadingText />
            <SocialAccounts />
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
export const MainHeadingText = () => {
  return (
    <>
      <h1 className={`flex flex-col sm:-space-y-2`}>
        <span
          className={`text-5xl font-semibold -tracking-wide text-primary-600 lgPhone:text-6xl sm:text-8xl`}
        >
          başlamak
        </span>{' '}
        <span className={'text-4xl lgPhone:text-5xl sm:text-7xl'}>
          için hazırsın.
        </span>
      </h1>
    </>
  );
};
export const AltHeadingText = () => {
  return (
    <h4 className="max-w-[380px] text-2xl font-light tracking-wide lgPhone:text-3xl sm:max-w-[560px] sm:text-4xl">
      Ayrıcalıklı bir{' '}
      <span className="font-bold italic -tracking-wide text-primary-800">
        vücut
      </span>{' '}
      için güçlü bir{' '}
      <span className={'font-bold italic -tracking-wide text-primary-700'}>
        irade
      </span>{' '}
      göstermeye hazırsın. Birlikte bu{' '}
      <span className={'font-bold italic -tracking-wide text-primary-600'}>
        özel
      </span>{' '}
      yolculuğu tamamlayalım.
    </h4>
  );
};
