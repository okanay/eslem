import { Hero } from '@/components/index/hero-section/hero';
import { Testimonials } from '@/components/index/testimonials-section/testimonials';
import { Contact } from '@/components/index/contact-section/contact';
import { Avatars } from '@/components/index/avatars-section/avatars';
import { WhatCanDo } from '@/components/index/what-can-do-section/what-can-do';
import { InstagramBlog } from '@/components/index/instagram-blog/instagram-blog';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={'bg-primary-200'}>
      <Hero />
      <WhatCanDo />
      <InstagramBlog />
      <Avatars />
      <Testimonials />
      <Contact />
    </main>
  );
}
