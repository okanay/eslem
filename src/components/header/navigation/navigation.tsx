import { NavigationEslem } from '@/components/header/navigation/navigation-eslem';
import { NavigationMenuBtn } from '@/components/header/navigation/navigation-menu-btn';
import { NavigationBtn } from '@/components/header/navigation/navigation-btn';
import NavigationMenu from '@/components/header/navigation/navigation-menu';
import { NavigationBg } from '@/components/header/navigation/navigation-bg';

export const Navigation = () => {
  return (
    <nav className={'fixed z-[56100] w-full'}>
      <div className={'mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:py-4'}>
        <NavigationEslem />
        <div
          className={
            'sm:spy-2 sm:flex sm:items-center sm:justify-center sm:gap-8 sm:rounded-full sm:bg-zinc-100 sm:px-8'
          }
        >
          <div className={'hidden sm:block'}>
            <NavigationBtn type={'panel'} name={'panel'} url={'/'} />
          </div>
          <div className={'hidden sm:block'}>
            <NavigationBtn type={'register'} name={'kayit'} url={'/'} />
          </div>
          <NavigationMenu />
          <NavigationMenuBtn />
        </div>
      </div>
      <NavigationBg />
    </nav>
  );
};
