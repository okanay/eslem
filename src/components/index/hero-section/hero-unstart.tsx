import { playFairDisplay } from '@/libs/next-fonts/google-fonts/play-fair-display';

export const HeroUnStart = () => {
  return (
    <div className="flex h-full w-full justify-end p-2 sm:h-full sm:min-w-[640px] sm:max-w-[50%] sm:flex-shrink-0 sm:p-0">
      <div className={'flex h-full w-full max-w-[640px] flex-col items-center justify-center'}>
        <div className={'flex w-full flex-col items-start gap-8 px-4 text-primary-950'}>
          <div className={'font flex flex-row items-center justify-center gap-4'}></div>
        </div>
      </div>
    </div>
  );
};
