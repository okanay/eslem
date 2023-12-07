import { Hero } from '@/components/index/hero-section/hero';
import { Testimonials } from '@/components/index/testimonials-section/testimonials';
import { Contact } from '@/components/index/contact-section/contact';
import { WhatWeDo } from '@/components/index/what-we-do-section/what-we-do';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Testimonials />
      <Contact />
    </main>
  );
}
