import { NavigationMenuButton } from '@/components/header/navigation/navigation-menu-button';
import { NavigationProfileButton } from '@/components/header/navigation/navigation-profile-button';
import { NavigationRightNow } from '@/components/header/navigation/navigation-right-now';

export const Navigation = () => {
  // const [scroll, scrollTo] = useWindowScroll();
  // const desiredScroll = scroll.y > 300;

  return (
    <nav className={'fixed h-24 w-full bg-primary-200/50'}>
      <div className={'flex h-full justify-between border-b-2 border-zinc-50 px-2'}>
        <div data-name={'social-icons'} className={'flex items-center justify-center'}>
          <NavigationProfileButton />
        </div>
        <div data-name={'brand-name'} className={'flex h-full flex-col items-center justify-center'}>
          <h1 className={'text-3xl smTablet:text-6xl'}>Eslem</h1>
        </div>
        <div data-name={'buttons'} className={'flex items-center justify-end gap-12'}>
          <NavigationMenuButton />
        </div>
      </div>
    </nav>
  );
};
