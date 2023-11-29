export const Testimonials = () => {
  return (
    <section className={'-mt-12 w-full bg-zinc-100 bg-noise px-4 py-12 sm:mt-0'}>
      <div className="grid-rows-8 mx-auto grid max-w-7xl gap-y-0 md:mt-8 md:grid-cols-4 md:gap-x-4 md:gap-y-16">
        <div className="row-start-1 h-[560px] md:col-span-2 md:col-start-1 md:row-span-4">
          <div className={'mx-auto flex h-full w-full max-w-[480px] flex-col items-center justify-center gap-12'}>
            <div>
              <h1 className={'text-center text-5xl font-semibold italic'}>
                "It's <span className={'-tracking-wide text-primary-600 underline'}>wild</span> looking at these side by
                side!"
              </h1>
            </div>
            <div>
              <p className={'text-center leading-6 tracking-wide'}>
                "I’m extremely proud of myself but honestly I can’t believe it’s the same person. Looking back I never
                really thought I was that out of shape but I was always hiding under clothes and never faced it head on.
                Thank you so much!!"
              </p>
            </div>
            <div>
              <p className={'text-center font-semibold leading-6 tracking-wide'}>- OKAN A.</p>
            </div>
          </div>
        </div>
        <div className="row-start-2 h-[560px] md:col-span-2 md:col-start-3 md:row-span-4">
          <div
            className={
              'mx-auto h-full w-full max-w-[480px] rounded-[24px] border-[2px] border-zinc-600 bg-zinc-50 shadow shadow-zinc-700'
            }
          ></div>
        </div>
        <div className="row-start-4 h-[560px] md:col-span-2 md:col-start-1 md:row-span-4">
          <div
            className={
              'mx-auto h-full w-full max-w-[480px] rounded-[24px] border-[2px] border-zinc-600 bg-zinc-50 shadow shadow-zinc-700'
            }
          ></div>
        </div>
        <div className="row-start-3 h-[560px] md:col-span-2 md:row-span-4">
          <div className={'mx-auto flex h-full w-full flex-col items-center justify-center gap-12'}>
            <div className={'max-w-[520px]'}>
              <h1 className={'text-center text-5xl font-semibold italic'}>
                "I have always <span className={'-tracking-wide text-primary-600 underline'}>struggled</span> with
                food."
              </h1>
            </div>
            <div className={'max-w-[480px]'}>
              <p className={'text-center leading-6 tracking-wide'}>
                "I really think the flexibility of TSN helped me achieve my goal! You of course have to be in the
                calorie deficit, but there are no foods that are off limits! This helped change my mindset. I have
                always struggled with food, what’s a “healthy” food and a “bad food”, never eating white bread - but not
                anymore!"
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

// Kanıta dayalı bir yaklaşım kullanıyoruz, böylece kendinizi daha iyi hissedebilirsiniz.
// Sağlıklı alışkanlıklar geliştirmeniz için size destek veriyoruz.
// Her vücut bir parmak izi kadar özel. İyileşme yolculuğunda sana en doğru yolu inşa etmek istiyoruz.
// Bu sayede, kişilerin hedeflerine ulaşmasına ve sağlıklı bir yaşam tarzı benimsemesine yardımcı olur.
