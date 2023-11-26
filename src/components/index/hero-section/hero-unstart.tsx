import { playFairDisplay } from '@/libs/next-fonts/google-fonts/play-fair-display';

export const HeroUnStart = () => {
  return (
    <div className="flex h-full w-full justify-end p-2 sm:h-full sm:min-w-[640px] sm:max-w-[50%] sm:flex-shrink-0 sm:p-0">
      <div className={'flex h-full w-full max-w-[640px] flex-col items-center justify-center'}>
        <div className={'flex w-full flex-col items-start gap-8 px-4 text-primary-950'}>
          <h1 className={`${playFairDisplay.className} text-start text-4xl tracking-widest sm:text-7xl`}>
            <span className={'underline-offset-3 text-4xl tracking-widest sm:text-4xl'}>İlk adımı tamamlandın.</span>{' '}
            <span className={'text-7xl lowercase -tracking-wider text-primary-600 sm:text-9xl'}>başlamak</span> için{' '}
            <span className={'underline'}>buradasın</span>.
          </h1>
          <h4 className={'text-3xl font-light leading-[40px] sm:text-4xl'}>
            Ayrıcalıklı bir <span className={'italic underline'}>ifade</span> için güçlü bir{' '}
            <span className={`text-primary-600 ${playFairDisplay.className}`}>irade</span> sunmaya hazırsın. Birlikte bu
            özel yolculuğunu tamamlayalım.
          </h4>

          <div className={'font flex flex-row items-center justify-center gap-4'}>
            <button
              className={
                'rounded-[4px] border border-primary-400 px-[20px] py-[10px] text-2xl text-primary-500 transition-opacity duration-500 hover:opacity-70 sm:text-4xl'
              }
            >
              iletişim
            </button>
            <button
              className={
                'rounded-[4px] border border-primary-200 bg-primary-950 px-[20px] py-[10px] text-2xl text-primary-50 shadow-2xl shadow-primary-400 transition-opacity duration-500 hover:opacity-70 sm:text-4xl'
              }
            >
              yolculuk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
