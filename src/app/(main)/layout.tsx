import MainHeader from '@/components/header/main-header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
