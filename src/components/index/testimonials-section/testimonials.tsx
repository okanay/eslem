import { ImageComparison } from '@/components/ui/image-comparison';

export const Testimonials = () => {
  return (
    <section className={'-mt-[80px] w-full bg-zinc-100 bg-noise px-4 pb-20 md:-mt-0 md:pt-20'}>
      <div className="grid-rows-8 mx-auto grid max-w-6xl grid-flow-dense grid-rows-[masonry] gap-y-8 md:mt-8 md:grid-cols-4 md:gap-x-4 md:gap-y-16">
        <div data-name="testimonial-1" className="row-start-1 h-[560px] md:col-span-2 md:col-start-1 md:row-span-4">
          <div className={'mx-auto flex h-full w-full max-w-[480px] flex-col items-center justify-center gap-12'}>
            <div>
              <h1 className={'text-center text-4xl font-semibold italic md:text-5xl'}>
                {`"Bedenin bu `}
                <span className={'-tracking-wide text-third-600 underline'}>özel</span> ilgiyi hak ediyor!{`"`}
              </h1>
            </div>
            <div>
              <p className={'text-center leading-6 tracking-wide'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus doloremque eveniet nemo sint
                tempore temporibus? Accusantium.
              </p>
            </div>
            <div>
              <p className={'text-center font-semibold leading-6 tracking-wide'}>- OKAN A.</p>
            </div>
          </div>
        </div>
        <div
          data-name="picture-1"
          className="row-start-2 -mt-9 h-[400px] md:col-span-2 md:col-start-3 md:row-span-4 md:h-[520px]"
        >
          <div
            className={
              'relative mx-auto h-full w-full max-w-[400px] overflow-hidden rounded-[24px] border-[2px] border-zinc-600 bg-zinc-50 shadow shadow-zinc-700'
            }
          >
            <ImageComparison startPosition={60} />
          </div>
        </div>
        <div
          data-name="picture-2"
          className="row-start-4 h-[400px] md:col-span-2 md:col-start-1 md:row-span-4 md:h-[520px]"
        >
          <div
            className={
              'relative mx-auto h-full w-full max-w-[400px] overflow-hidden rounded-[24px] border-[2px] border-zinc-600 bg-zinc-50 shadow shadow-zinc-700'
            }
          >
            <ImageComparison startPosition={40} />
          </div>
        </div>
        <div data-name="testimonial-2" className="row-start-3 h-[560px] md:col-span-2 md:row-span-4">
          <div className={'mx-auto flex h-full w-full flex-col items-center justify-center gap-12'}>
            <div className={'max-w-[520px]'}>
              <h1 className={'text-center text-4xl font-semibold italic md:text-5xl'}>
                {`"Gurur duyacağın `}
                <span className={'-tracking-wide text-second-600 underline'}>doğal</span> bir deneyim!{`"`}
              </h1>
            </div>
            <div className={'max-w-[480px]'}>
              <p className={'text-center leading-6 tracking-wide'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus doloremque eveniet nemo sint
                tempore temporibus? Accusantium, autem excepturi facere hic inventore, laudantium mollitia nobis
                perferendis possimus quis soluta vel.
              </p>
            </div>
            <div>
              <p className={'text-center font-semibold leading-6 tracking-wide'}>- OKAN A.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
