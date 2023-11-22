import MagneticButton from '@/components/ui/magnetic-button';

export const NavigationProfileButton = () => {
  return (
    <MagneticButton>
      <button
        className={
          'relative rounded-full border border-third-400/10 bg-second-400 px-4 py-2 text-sm ' +
          'font-semibold text-zinc-50 smTablet:px-8 smTablet:py-4 smTablet:text-lg ' +
          'transition-colors duration-500 hover:bg-zinc-700'
        }
      >
        PROFİL
      </button>
    </MagneticButton>
  );
};
