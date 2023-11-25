import { Hero } from '@/components/index/hero-section/hero';

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
