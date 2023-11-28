import { Hero } from '@/components/index/hero-section/hero';
import { Testimonials } from '@/components/index/testimonials-section/testimonials';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={''}>
      <Hero />
      <Testimonials />
    </main>
  );
}
