import { NavigationEslem } from '@/components/header/navigation/navigation-eslem';
import { NavigationMenuBtn } from '@/components/header/navigation/navigation-menu-btn';
import { NavigationBtn } from '@/components/header/navigation/navigation-btn';
import NavigationMenu from '@/components/header/navigation/navigation-menu';

export const Navigation = () => {
  // const [scroll, scrollTo] = useWindowScroll();
  // const desiredScroll = scroll.y > 300;

  return (
    <nav className={'fixed z-[56100] w-full'}>
      <div className={'mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:py-8'}>
        <div data-name={'authentication-buttons'} className={'hidden sm:flex sm:items-center sm:justify-start'}>
          <NavigationBtn type={'panel'} name={'panel'} url={'/'} />
          <NavigationBtn type={'register'} name={'kayit'} url={'/'} />
        </div>
        <NavigationEslem />
        <div className={''}>
          <NavigationMenu />
          <NavigationMenuBtn />
        </div>
      </div>
    </nav>
  );
};
