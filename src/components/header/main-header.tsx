import SessionTerminate from '@/components/header/session-terminate';
import { LenisScroll } from '@/components/header/lenis-scroll';
import { PageInitialAnimation } from '@/components/header/page-initial/page-initial';
import { Navigation } from '@/components/header/navigation/navigation';

type TProps = React.FC<{}>;

const MainHeader: TProps = () => {
  return (
    <>
      <SessionTerminate />
      <LenisScroll />
      <PageInitialAnimation />
      <header className={''}>
        <Navigation />
      </header>
    </>
  );
};

export default MainHeader;
