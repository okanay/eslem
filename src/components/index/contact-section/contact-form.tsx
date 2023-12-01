import { ContactFormButton } from '@/components/index/contact-section/contact-form-button';

export const ContactForm = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[20px] text-center text-primary-950 md:max-w-[480px]">
      <h3 className={'text-4xl font-semibold italic basePhone:text-5xl md:text-6xl'}>Son Bir Adım! </h3>
      <p className={'max-w-[400px] text-base uppercase tracking-wide md:text-lg'}>
        SANA ÖZEL 1 HAFTALIK ÜCRETSİZ PROGRAM İLE DENEYİMLEMEYE BAŞLA.
      </p>
      <form className={'flex w-full flex-col items-center justify-center gap-[16px] text-sm md:text-base'}>
        <input
          type="text"
          placeholder={'İsim, Soyisim'}
          className={
            'h-[56px] w-full rounded-[4px] border border-zinc-950 px-4 shadow shadow-zinc-300 focus:outline-zinc-950'
          }
        />
        <input
          type="text"
          placeholder={'E-Mail Adresin'}
          className={
            'h-[56px] w-full rounded-[4px] border border-zinc-950 px-4 shadow shadow-zinc-300 focus:outline-zinc-950'
          }
        />
        <ContactFormButton />
      </form>
    </div>
  );
};
