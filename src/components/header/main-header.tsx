import SessionTerminate from '@/components/header/session-terminate';
import { Notifications } from '@/components/header/notifications/notifications';
import { LenisScroll } from '@/components/header/lenis-scroll';
import { PageInitial } from '@/components/header/page-initial/page-initial';

type TProps = React.FC<{}>;

const MainHeader: TProps = () => {
  return (
    <>
      <SessionTerminate />
      <LenisScroll />
      <Notifications />
      <PageInitial />
      <header className={''}>{/*<Navigation />*/}</header>
    </>
  );
};

export default MainHeader;
