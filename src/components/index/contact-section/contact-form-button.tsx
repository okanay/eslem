'use client';

export const ContactFormButton = () => {
  return (
    <button
      className="flex h-[64px] w-full flex-row items-center justify-center gap-2 rounded-[8px]
      border-2 border-zinc-100 bg-zinc-800 shadow shadow-zinc-950 transition-all duration-300 hover:scale-[96%] sm:px-8 sm:py-4"
    >
      <span className={`text-base text-zinc-50 lgPhone:text-2xl sm:text-lg`}>
        Her Şey Hazırsa, Formu Gönder!
      </span>
    </button>
  );
};
