import { Hero } from '@/components/index/hero-section/hero';
import { Testimonials } from '@/components/index/testimonials-section/testimonials';
import { Contact } from '@/components/index/contact-section/contact';
import { TestimonialAvatars } from '@/components/index/testimonials-avatars-section/testimonial-avatars';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main>
      <Hero />
      <TestimonialAvatars />
      <Testimonials />
      <Contact />
    </main>
  );
}
