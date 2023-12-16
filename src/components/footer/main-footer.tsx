import { NavigationEslem } from '@/components/header/navigation/navigation-eslem';
import { SectionScrollEffect } from '@/components/ui/section-scroll-effect';

export const MainFooter = () => {
  return (
    <SectionScrollEffect yValueStart={'-80px'} yValueEnd={'0px'}>
      <footer
        className={`h-full w-full bg-primary-200 bg-noise text-primary-950`}
      >
        <div className={'mx-auto max-w-fit px-8 py-12'}>
          <div className="flex h-full flex-col items-center justify-between sm:flex-row">
            <div className="flex flex-col items-center gap-4 rounded bg-primary-50/30 p-4">
              <div className={'scale-75'}>
                <NavigationEslem />
              </div>
              <p className={'text-center'}>
                © 2024 Tüm Hakları Saklıdır, Bayır AŞ.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SectionScrollEffect>
  );
};
