import fresh from '../../../../public/icons/svgs/fresh.svg';
import Image from 'next/image';

export const NutritiousButton = () => {
  return (
    <button
      className="flex flex-row items-center justify-center gap-2 rounded-[8px] border-2 border-zinc-100
      bg-zinc-800 px-6 py-3 shadow shadow-zinc-950 transition-all duration-300 hover:scale-[96%] sm:px-8 sm:py-4"
    >
      <span className={`text-lg text-zinc-50 sm:text-2xl`}>Diyete Başla</span>
      <Image
        src={fresh}
        alt={'fresh-icon'}
        priority={true}
        className={'h-[28px] w-[28px] sm:h-[40px] sm:w-[40px]'}
      />
    </button>
  );
};
