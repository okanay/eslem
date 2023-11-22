import MagneticButton from '@/components/ui/magnetic-button';

export const NavigationRightNow = () => {
  return (
    <MagneticButton>
      <button>
        <h4
          className={
            'relative flex rotate-[-8deg] flex-col items-center justify-center' +
            ' text-xl font-semibold leading-5 -tracking-wide text-zinc-700 underline' +
            ' transition-opacity duration-500 hover:opacity-60'
          }
        >
          <span>Hemen</span>
          <span>Bize Katıl</span>
        </h4>
      </button>
    </MagneticButton>
  );
};
