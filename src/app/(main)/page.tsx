import { Hero } from '@/components/index/hero-section/hero';

type TProps = {
  searchParams: {} | null;
};

export default function Home(props: TProps) {
  return (
    <main className={''}>
      <Hero />
      <div className={'absolute inset-0 -z-10 bg-primary-100 bg-noise'}></div>
    </main>
  );
}
