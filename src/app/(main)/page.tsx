import { Hero } from '@/components/index/hero-section/hero';
import { Feature } from '@/components/index/feature-section/feature';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={''}>
      <Hero />
      <Feature />
    </main>
  );
}
