import Image from 'next/image';

export const ContactImage = () => {
  return (
    <>
      <div
        className="hidden h-[440px] w-[320px] flex-shrink-0 rounded-[8px] border-[0.5px]
      border-zinc-800 bg-primary-50/10 md:block lg:w-[360px]"
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
