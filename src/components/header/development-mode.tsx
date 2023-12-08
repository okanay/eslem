'use client';
import { useEffect } from 'react';

export const DevelopmentMode: React.FC<{ mode: boolean }> = ({ mode }) => {
  useEffect(() => {
    if (mode) {
      const html = document.getElementsByTagName('HTML')[0];
      html.classList.remove('initial-lenis');
    }
  }, [mode]);

  return <></>;
};
