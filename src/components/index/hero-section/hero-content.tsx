import { NavigationBtn } from '@/components/header/navigation/navigation-btn';
import Image from 'next/image';

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
    <h1
      className="flex flex-row items-center justify-center gap-2 rounded-[8px]
    border-[2px] border-zinc-600 bg-zinc-50 px-4 py-2 shadow shadow-zinc-700 sm:p-4"
    >
      <Image
        src={'/icons/checklist.svg'}
        alt={'checklist-icon-svg'}
        width={125}
        height={125}
        className={
          'h-[20px] w-[20px] flex-shrink-0 basePhone:h-[24px] basePhone:w-[24px]'
        }
      />
      <span
        className={
          'text-sm text-zinc-800 smPhone:text-base basePhone:text-lg xlPhone:text-xl sm:text-2xl'
        }
      >
        Neredeyse tamamlamak üzeresin.
      </span>
    </h1>
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
export const SocialAccount = () => {
  return (
    <div className={'flex flex-row items-start justify-start gap-6'}>
      <Image
        src={'/icons/whatsapp.svg'}
        alt={'whatsapp-icon'}
        width={125}
        height={125}
        sizes={'125'}
        loading={'eager'}
        className={
          'h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]'
        }
      />
      <Image
        src={'/icons/instagram.svg'}
        alt={'instagram-icon'}
        width={125}
        height={125}
        sizes={'125'}
        loading={'eager'}
        className={
          'h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]'
        }
      />
      <Image
        src={'/icons/linkedin.svg'}
        alt={'linkedin-icon'}
        width={125}
        height={125}
        sizes={'125'}
        loading={'eager'}
        className={
          'h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]'
        }
      />
      <Image
        src={'/icons/twitter.svg'}
        alt={'linkedin-icon'}
        width={125}
        height={125}
        sizes={'125'}
        loading={'eager'}
        className={
          'h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]'
        }
      />
      <Image
        src={'/icons/facebook.svg'}
        alt={'facebook-icon'}
        width={125}
        height={125}
        sizes={'125'}
        loading={'eager'}
        className={
          'h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]'
        }
      />
      <Image
        src={'/icons/telegram.svg'}
        alt={'telegram-icon'}
        width={125}
        height={125}
        sizes={'125'}
        loading={'eager'}
        className={
          'h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]'
        }
      />
    </div>
  );
};
export const NutritiousButton = () => {
  return (
    <button
      className="flex flex-row items-center justify-center gap-2 rounded-[8px] border-2 border-zinc-100
      bg-zinc-800 px-6 py-3 shadow shadow-zinc-950 transition-all duration-300 hover:scale-[96%] sm:px-8 sm:py-4"
    >
      <span className={`text-lg text-zinc-50 lgPhone:text-2xl sm:text-3xl`}>
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
  );
};
