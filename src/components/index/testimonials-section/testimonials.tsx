export const Testimonials = () => {
  return (
    <section className={'-mt-[80px] w-full bg-zinc-100 bg-noise px-4 py-12 sm:-mt-0'}>
      <div className="grid-rows-8 mx-auto grid max-w-6xl gap-y-8 md:mt-8 md:grid-cols-4 md:gap-x-4 md:gap-y-16">
        <div data-name="testimonial-1" className="row-start-1 h-[560px] md:col-span-2 md:col-start-1 md:row-span-4">
          <div className={'mx-auto flex h-full w-full max-w-[480px] flex-col items-center justify-center gap-12'}>
            <div>
              <h1 className={'text-center text-5xl font-semibold italic'}>
                {`"Bedenin bu `}
                <span className={'-tracking-wide text-primary-600 underline'}>özel</span> ilgiyi hak ediyor!{`"`}
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
          className="row-start-2 h-[480px] md:col-span-2 md:col-start-3 md:row-span-4 md:h-[520px]"
        >
          <div
            className={
              'mx-auto h-full w-full max-w-[400px] rounded-[24px] border-[2px] border-zinc-600 bg-zinc-50 shadow shadow-zinc-700'
            }
          ></div>
        </div>
        <div
          data-name="picture-2"
          className="row-start-4 h-[480px] md:col-span-2 md:col-start-1 md:row-span-4 md:h-[520px]"
        >
          <div
            className={
              'mx-auto h-full w-full max-w-[400px] rounded-[24px] border-[2px] border-zinc-600 bg-zinc-50 shadow shadow-zinc-700'
            }
          ></div>
        </div>
        <div data-name="testimonial-2" className="row-start-3 h-[560px] md:col-span-2 md:row-span-4">
          <div className={'mx-auto flex h-full w-full flex-col items-center justify-center gap-12'}>
            <div className={'max-w-[520px]'}>
              <h1 className={'text-center text-5xl font-semibold italic'}>
                {`"Başarmak `}
                <span className={'-tracking-wide text-primary-600 underline'}>tarifsiz</span>, zorlu bir serüven{`"`}
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
