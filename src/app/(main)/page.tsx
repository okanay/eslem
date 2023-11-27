import { Hero } from '@/components/index/hero-section/hero';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={''}>
      <Hero />
      <div className={'h-screen w-full bg-third-300'}></div>
    </main>
  );
}
