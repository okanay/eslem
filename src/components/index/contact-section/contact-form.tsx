export const ContactForm = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[20px] text-center text-second-950 md:max-w-[480px]">
      <h3 className={'text-4xl font-semibold italic basePhone:text-5xl md:text-6xl'}>Son Bir Adım! </h3>
      <p className={'max-w-[380px] text-base uppercase tracking-wide md:text-lg'}>
        SANA ÖZEL ÜCRETSİZ PROGRAMIN İLE DENEYİMLEMEYE BAŞLA.
      </p>
      <form className={'flex w-full flex-col items-center justify-center gap-[16px]'}>
        <input
          type="text"
          placeholder={'İsim, Soyisim'}
          className={
            'h-[56px] w-full rounded-[4px] border border-second-950 px-4 shadow shadow-second-300 focus:outline-second-950'
          }
        />
        <input
          type="text"
          placeholder={'E-Mail Adresin'}
          className={
            'h-[56px] w-full rounded-[4px] border border-second-950 px-4 shadow shadow-second-300 focus:outline-second-950'
          }
        />

        <button
          className={
            'h-[56px] w-full rounded-[4px] border border-zinc-950/80 bg-gradient-to-bl from-second-300 to-second-300 text-lg shadow shadow-zinc-950'
          }
        >
          Her Şey Hazırsa, Formu Gönder!
        </button>
      </form>
    </div>
  );
};
