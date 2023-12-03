import { ImageComparison } from '@/components/ui/image-comparison';
import { InViewScrollAnimation } from '@/components/ui/in-view-scroll-animation';

export const Testimonials = () => {
  return (
    <section className={'w-full bg-zinc-100 bg-noise pb-24 md:pb-24 md:pt-24 '}>
      <div
        className="grid-rows-8 mx-auto grid max-w-7xl grid-flow-dense items-center gap-24
       px-4 align-middle md:grid-cols-4 md:gap-16"
      >
        <div
          data-index={1}
          data-name="testimonial-1"
          className="row-start-1 h-[400px] md:col-span-2 md:col-start-1 md:row-span-4"
        >
          <div
            className="mx-auto flex h-full w-full flex-col items-center justify-center
          gap-8 text-center text-base md:gap-12 md:text-lg"
          >
            <div data-name={'heading'}>
              <h1
                className="max-w-[400px] text-4xl font-semibold italic leading-[36px] -tracking-widest
              md:text-5xl md:-tracking-wider"
              >
                <span>&ldquo;Bedenin bu </span>
                <InViewScrollAnimation>
                  <span className={'-tracking-wide text-primary-600 underline'}>
                    özel
                  </span>
                </InViewScrollAnimation>
                <span> ilgiyi hak ediyor!&rdquo;</span>
              </h1>
            </div>
            <div data-name={'context'}>
              <p className="max-w-[320px] leading-6 tracking-wide lgPhone:max-w-[440px] md:max-w-[520px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                assumenda consequuntur cum dolores eos error, fugit natus nisi
                nostrum, officiis placeat qui quibusdam quidem recusandae
                repellat sed.
              </p>
            </div>
            <div data-name={'name'}>
              <p
                className={'text-center font-semibold leading-6 tracking-wide'}
              >
                - OKAN A.
              </p>
            </div>
          </div>
        </div>
        <div
          data-index={2}
          data-name="picture-1"
          className="row-start-2 h-[400px] md:col-span-2 md:col-start-3 md:row-span-4 md:h-[520px]"
        >
          <div className="relative mx-auto h-full w-full max-w-[400px] overflow-hidden rounded-[24px] border-[1px] border-zinc-950/20 bg-zinc-50">
            <ImageComparison startPosition={60} />
          </div>
        </div>
        <div
          data-index={3}
          data-name="picture-2"
          className="row-start-4 h-[400px] md:col-span-2 md:col-start-1 md:row-span-4 md:h-[520px]"
        >
          <div className="relative mx-auto h-full w-full max-w-[400px] overflow-hidden rounded-[24px] border-[1px] border-zinc-950/20 bg-zinc-50">
            <ImageComparison startPosition={40} />
          </div>
        </div>
        <div
          data-index={4}
          data-name="testimonial-2"
          className="row-start-3 h-[400px] md:col-span-2 md:row-span-4"
        >
          <div
            className="mx-auto flex h-full w-full flex-col items-center justify-center gap-8 text-center text-base
          md:gap-12 md:text-lg"
          >
            <div data-name={'heading'}>
              <h1
                className="max-w-[400px] text-4xl font-semibold italic leading-[36px] -tracking-widest
              md:text-5xl md:-tracking-wider"
              >
                <span>&ldquo;Bilimsel ve </span>
                <InViewScrollAnimation>
                  <span className={'-tracking-wide text-primary-600 underline'}>
                    doğal{' '}
                  </span>
                </InViewScrollAnimation>
                <span>programlar.&rdquo;</span>
              </h1>
            </div>
            <div data-name={'context'}>
              <p className="max-w-[320px] leading-6 tracking-wide lgPhone:max-w-[440px] md:max-w-[520px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                assumenda consequuntur cum dolores eos error, fugit natus nisi
                nostrum, officiis placeat qui quibusdam quidem recusandae
                repellat sed.
              </p>
            </div>
            <div data-name={'name'}>
              <p
                className={'text-center font-semibold leading-6 tracking-wide'}
              >
                - OKAN A.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
