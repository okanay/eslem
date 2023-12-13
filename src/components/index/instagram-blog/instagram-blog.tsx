'use client';

import { m } from 'framer-motion';

export const InstagramBlog = () => {
  return (
    <section
      className={'h-full bg-gradient-to-tr from-zinc-50 to-primary-50 pb-20'}
    >
      <div
        data-name={'slider'}
        className={'mx-auto h-full max-w-[3000px] overflow-x-visible'}
      >
        <div data-name={'slider-inner'} className={'flex w-fit flex-row'}>
          <m.div
            animate={{ x: '-50%' }}
            transition={{
              repeat: Infinity,
              type: 'tween',
              ease: 'linear',
              duration: 44,
            }}
            data-name={'slider-items'}
            className="flex w-fit"
          >
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
          </m.div>
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
      <div className="flex h-full w-full flex-col items-start justify-start gap-2 bg-gradient-to-tl from-zinc-50 via-zinc-100 to-zinc-50 p-2 shadow-sm shadow-zinc-800/20">
        <div
          className={`h-[260px] w-full rounded-[8px] ${
            index % 2 === 0 ? 'bg-primary-200' : 'bg-primary-100'
          } transition-colors duration-500 group-hover:bg-primary-300`}
        />
        <div
          className={`h-[20px] ${
            index % 2 === 0 ? 'w-[48%]' : 'w-[64%]'
          } animate-pulse rounded-[4px] bg-zinc-300`}
        />
        <div
          className={`h-[40px] ${
            index % 2 === 0 ? 'w-[64%]' : 'w-[76%]'
          } animate-pulse rounded-[4px] bg-zinc-200`}
        />
      </div>
    </div>
  );
};
