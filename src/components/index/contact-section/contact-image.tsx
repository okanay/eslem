import Image from 'next/image';

export const ContactImage = () => {
  return (
    <>
      <div className="hidden h-[440px] w-[320px] flex-shrink-0 rounded-[24px] border-[1px] border-primary-950/20 bg-primary-50/60 md:block lg:w-[360px]">
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
