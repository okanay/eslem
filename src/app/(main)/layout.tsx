import MainHeader from '@/components/header/main-header';
import { MainFooter } from '@/components/footer/main-footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
