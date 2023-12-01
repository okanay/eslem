'use client';

export const ContactFormButton = () => {
  return (
    <button
      type={'button'}
      className={
        'h-[56px] w-full rounded-[4px] border border-zinc-950 bg-gradient-to-bl from-second-400 to-second-500 text-zinc-50 shadow shadow-zinc-100 transition-all duration-500 hover:scale-[98%] basePhone:text-base md:text-lg'
      }
    >
      Her Şey Hazırsa, Formu Gönder!
    </button>
  );
};
