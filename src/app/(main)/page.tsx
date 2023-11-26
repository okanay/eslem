import { Hero } from '@/components/index/hero-section/hero';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={'bg-white'}>
      <Hero />
      <div className={'h-screen w-full bg-primary-400'}></div>
    </main>
  );
}
