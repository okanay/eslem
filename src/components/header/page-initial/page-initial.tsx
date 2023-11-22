'use client';

import { AnimatePresence } from 'framer-motion';
import { AnimateWord } from '@/components/header/page-initial/animate-word';
import { useInitialLoading } from '@/hooks/useInitialLoading';
import { PageInitialWrapper } from '@/components/header/page-initial/page-initial-wrapper';
import { PageInitialEslem } from '@/components/header/page-initial/page-initial-eslem';

export const PageInitial = () => {
  const { loading } = useInitialLoading();
  const text = ['VÜCUDUNA', 'YAKLAŞ', ''];

  return (
    <AnimatePresence>
      {loading && (
        <PageInitialWrapper>
          <div className={'flex w-full flex-col items-center gap-2 bg-opacity-0 px-4  '}>
            <PageInitialEslem />
            {text.map((word, index) => (
              <AnimateWord word={word} key={index + word} />
            ))}
          </div>
        </PageInitialWrapper>
      )}
    </AnimatePresence>
  );
};
