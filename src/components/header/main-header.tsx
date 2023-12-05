import SessionTerminate from '@/components/header/session-terminate';
import { PageInitialAnimation } from '@/components/header/page-initial/page-initial';
import { Navigation } from '@/components/header/navigation/navigation';

type TProps = React.FC<{}>;

const MainHeader: TProps = () => {
  return (
    <>
      <SessionTerminate />
      <PageInitialAnimation />
      <header>
        <Navigation />
      </header>
    </>
  );
};

export default MainHeader;
