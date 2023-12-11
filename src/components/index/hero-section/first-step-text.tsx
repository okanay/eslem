import Image from 'next/image';
import checklist from '../../../../public/icons/webps/checklist.webp';

export const FirstStepText = () => {
  return (
    <h1
      className="flex flex-row items-center justify-center gap-2 rounded-[8px]
    border-[2px] border-zinc-600 bg-zinc-50 px-4 py-2 shadow shadow-zinc-700 sm:p-4"
    >
      <Image
        src={checklist}
        alt={'checklist-icon-svg'}
        placeholder={'blur'}
        className="h-[20px] w-[20px] flex-shrink-0 basePhone:h-[24px] basePhone:w-[24px]"
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
