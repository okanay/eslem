import { Hero } from '@/components/index/hero/hero';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={'h-screen bg-zinc-100 bg-hero-noise'}>
      <Hero />
    </main>
  );
}
