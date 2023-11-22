import SessionTerminate from '@/components/header/session-terminate';
import { Notifications } from '@/components/header/notifications/notifications';
import { LenisScroll } from '@/components/header/lenis-scroll';
import { PageInitialAnimation } from '@/components/header/page-initial/page-initial';
import { Navigation } from '@/components/header/navigation/navigation';

type TProps = React.FC<{}>;

const MainHeader: TProps = () => {
  return (
    <>
      <SessionTerminate />
      <LenisScroll />
      <Notifications />
      <PageInitialAnimation />
      <header className={''}>
        <Navigation />
      </header>
    </>
  );
};

export default MainHeader;
