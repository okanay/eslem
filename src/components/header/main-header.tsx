import SessionTerminate from '@/components/header/session-terminate';
import { PageInitialAnimation } from '@/components/header/page-initial/page-initial';
import { Navigation } from '@/components/header/navigation/navigation';
import { DevelopmentMode } from '@/components/header/development-mode';

type TProps = React.FC<{}>;

const MainHeader: TProps = () => {
  const mode = process.env.NODE_ENV === 'development';

  return (
    <>
      <SessionTerminate />
      {mode ? <DevelopmentMode mode={mode} /> : <PageInitialAnimation />}
      <header>
        <Navigation />
      </header>
    </>
  );
};

export default MainHeader;
