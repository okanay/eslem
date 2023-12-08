import { ContactForm } from '@/components/index/contact-section/contact-form';
import { ContactImage } from '@/components/index/contact-section/contact-image';

export const Contact = () => {
  return (
    <section
      className={
        'mx-auto flex w-full flex-col justify-center border border-zinc-100 bg-primary-200 py-12 shadow-md shadow-zinc-300/40'
      }
    >
      <div
        className={
          'mx-auto flex w-full max-w-7xl flex-col items-center justify-center'
        }
      >
        <div className="flex h-full w-full max-w-[560px] items-center justify-center gap-20 px-8 py-4 md:max-w-full lg:gap-40 ">
          <ContactForm />
          <ContactImage />
        </div>
      </div>
    </section>
  );
};
