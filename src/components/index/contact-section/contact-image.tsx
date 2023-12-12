import Image from 'next/image';

export const ContactImage = () => {
  return (
    <>
      <div
        className="hidden h-[440px] w-[320px] flex-shrink-0 rounded-[8px] bg-gradient-to-tl from-zinc-50 via-zinc-100 to-zinc-50 shadow-sm shadow-zinc-800/20
      md:block lg:w-[360px]"
      >
        <Image
          src={'./illustration/information.svg'}
          alt={'info-illustration'}
          width={100}
          height={100}
          loading={'lazy'}
          className={'h-full w-full'}
        />
      </div>
    </>
  );
};
