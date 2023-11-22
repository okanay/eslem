'use client';

import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function useSessionTerminate() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.terminate === true) {
      console.log('token expire');
      signOut({ callbackUrl: '/', redirect: true });
    }
  }, [session]);
}
