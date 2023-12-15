import Image from 'next/image';
import { data } from './data';
import { SectionScrollEffect } from '@/components/ui/section-scroll-effect';

export const WhatCanDo = () => {
  return (
    <SectionScrollEffect yValueEnd={'-250px'}>
      <section className="h-full w-full bg-gradient-to-br from-zinc-100 to-primary-100 py-20">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-16">
          <div className="flex h-full w-full flex-col items-center justify-start gap-[4px] px-6 text-center text-zinc-700">
            <h2 className="text-sm font-light smPhone:text-base md:text-base">
              Temel Hizmetler.
            </h2>
            <h1 className="max-w-[480px] text-2xl font-bold leading-[36px] tracking-wide smPhone:text-3xl md:text-5xl md:leading-[52px]">
              Profesyonel Diyetisyenlik Hizmetleri.
            </h1>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-x-[40px] gap-y-[20px] px-4 lg:flex-row">
            {data.map((item, index) => (
              <div
                key={'what-can-do' + index}
                className="h-[400px] w-full rounded-[8px] bg-gradient-to-tl from-zinc-50 via-zinc-100 to-zinc-50 shadow-sm shadow-zinc-800/20 md:h-[440px]"
              >
                <div className="flex h-full w-full flex-col items-start justify-start gap-6 px-8 pt-8 font-light text-zinc-900">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    className={'h-[44px] w-[44px] md:h-[52px] md:w-[52px]'}
                  />
                  <h2 className={'text-lg font-bold tracking-wide md:text-xl'}>
                    {item.header}
                  </h2>
                  <p className="text-sm font-light leading-[28px] md:text-base md:leading-[28px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionScrollEffect>
  );
};
