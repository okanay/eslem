import Image from 'next/image';
import dummyIcon from '../../../../public/icons/webps/panel.webp';
const data = [
  {
    image: { src: dummyIcon, alt: '' },
    header: 'Sağlıklı Beslenme',
    text: 'Sağlıklı beslenme, hastalıklardan korunmak, bağışıklığı güçlendirmek, daha iyi bir yaşam kalitesi ve performansı sağlamak için önemlidir. Doğru besin kombinasyonları, vücudun ihtiyaç duyduğu tüm besinleri almasını sağlar.',
  },
  {
    image: { src: dummyIcon, alt: '' },
    header: 'Kilo Verme & Alma',
    text: 'Kilo verme veya alma, birçok nedenden dolayı gerekli olabilir. Bu nedenler arasında hastalık, yanlış beslenme, sedanter yaşam, stres ve uyku düzensizlikleri yer alır. Kilo verme veya alma sürecinde, sağlıklı beslenme ve düzenli egzersiz önemlidir.',
  },
  {
    image: { src: dummyIcon, alt: '' },
    header: 'Tıbbi Beslenme',
    text: 'Tıbbi beslenme, kronik hastalıkların tedavisinde kullanılan bir beslenme yaklaşımıdır. Eliminasyon diyeti, sibo beslenme tedavisi gibi özel beslenme programları, hastalıkların semptomlarını azaltmaya ve yaşam kalitesini iyileştirmeye yardımcı olabilir.',
  },
];

export const WhatCanDo: React.FC<{}> = props => {
  return (
    <section className="h-full w-full bg-gradient-to-br from-zinc-50 to-primary-50 py-20">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-16">
        <div className="flex h-full w-full flex-col items-center justify-start gap-[4px] px-6 text-center text-zinc-700">
          <h2 className="text-sm font-light smPhone:text-base md:text-base">
            Temel Hizmetler.
          </h2>
          <h1 className="max-w-[480px] text-2xl font-bold leading-[36px] tracking-wide smPhone:text-3xl md:text-4xl md:leading-[44px]">
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
                  placeholder={'blur'}
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
  );
};
