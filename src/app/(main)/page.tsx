import { Hero } from '@/components/index/1-hero-section/hero';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main>
      <Hero />
    </main>
  );
}
