'use client';

import useSessionTerminate from '@/hooks/useSessionTerminate';

const SessionTerminate: TProps = () => {
  useSessionTerminate();
  return <></>;
};

export default SessionTerminate;
type TProps = React.FC<{}>;
