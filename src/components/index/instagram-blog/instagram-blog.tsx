import { SliderWrapper } from '@/components/index/instagram-blog/slider-wraper';

export const InstagramBlog = () => {
  return (
    <section className="h-full bg-gradient-to-tr from-zinc-100 to-primary-100 pb-20">
      <div className="flex h-full w-full flex-col items-center justify-start gap-[4px] px-6 pb-[76px] text-center text-zinc-700">
        <h2 className="text-sm font-light smPhone:text-base md:text-base">
          Sosyal Medya.
        </h2>
        <h1 className="max-w-[480px] text-2xl font-bold leading-[36px] tracking-wide smPhone:text-3xl md:text-5xl md:leading-[52px]">
          Blog Paylaşımları.
        </h1>
      </div>
      <div
        data-name={'slider'}
        className="relative mx-auto h-full max-w-[3000px] overflow-x-hidden"
      >
        <div
          data-name={'slider-inner'}
          className={'flex w-fit max-w-full flex-row'}
        >
          <SliderWrapper>
            <ul className={'flex h-full w-fit flex-row'}>
              {Array.from({ length: 12 }).map((_, index) => (
                <InstagramCard key={'main_card_index=' + index} index={index} />
              ))}
            </ul>
            <ul className={'flex h-full w-fit flex-row '}>
              {Array.from({ length: 12 }).map((_, index) => (
                <InstagramCard
                  key={'copy_card_index1=' + index}
                  index={index}
                />
              ))}
            </ul>
          </SliderWrapper>
        </div>
      </div>
    </section>
  );
};

export const InstagramCard = ({ index }: { index: number }) => {
  return (
    <div
      className={
        'group h-[400px] w-[328px] flex-shrink-0 cursor-pointer px-2 transition-all duration-500 hover:translate-y-[-5%] hover:scale-[102%]'
      }
    >
      <div className="flex h-full w-full flex-col items-start justify-start gap-2 rounded-[4px] bg-gradient-to-tl from-zinc-50 via-zinc-100 to-zinc-50 p-2 shadow-sm shadow-zinc-800/20">
        <div
          className={`h-[260px] w-full rounded-[8px] ${
            index % 2 === 0 ? 'bg-zinc-300' : 'bg-zinc-100'
          } transition-colors duration-500 group-hover:bg-primary-300`}
        />
        <div
          className={`h-[20px] ${
            index % 2 === 0 ? 'w-[48%]' : 'w-[64%]'
          } animate-pulse rounded-[4px] bg-zinc-300`}
        />
        <div
          className={` ${
            index % 2 === 0 ? 'h-[32px] w-[80%]' : 'h-[32px] w-[88%]'
          } animate-pulse rounded-[4px] bg-zinc-200`}
        />
      </div>
    </div>
  );
};
