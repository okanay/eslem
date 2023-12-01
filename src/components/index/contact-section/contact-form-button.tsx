'use client';

export const ContactFormButton = () => {
  return (
    <button
      type={'button'}
      className={
        'h-[56px] w-full rounded-[4px] border border-zinc-950 bg-gradient-to-bl from-primary-300 to-primary-400 text-sm text-zinc-50 shadow shadow-zinc-100 transition-all duration-500 hover:scale-[98%] smPhone:text-base basePhone:text-lg md:text-xl'
      }
    >
      Her Şey Hazırsa, Formu Gönder!
    </button>
  );
};
