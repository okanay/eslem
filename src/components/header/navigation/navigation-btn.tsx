import Link from 'next/link';
import Image from 'next/image';

type TProps = React.FC<{
  name: string;
  url: string;
  type: 'register' | 'panel';
}>;

export const NavigationBtn: TProps = ({ name, url, type }) => {
  const src = type === 'register' ? '/icons/register.svg' : '/icons/profile.svg';
  const alt = type === 'register' ? 'register-icon-svg' : 'profile-icon-svg';

  return (
    <Link
      href={url}
      className={`group relative -mx-2 flex
            items-center justify-center gap-1.5
            px-[16px] py-[8px] opacity-100 transition-all duration-500 
            hover:scale-110 hover:opacity-90
            lg:px-[24px] lg:py-[12px]`}
    >
      <Image src={src} alt={alt} className={'h-[22px] w-[22px] text-zinc-800'} width={128} height={128} />
      <span className={'text-[18px] uppercase text-zinc-800'}>{name}</span>
      <div
        className={
          'absolute bottom-2 h-[1.5px] w-[0%] origin-left rounded-full bg-zinc-800 opacity-30 transition-all duration-500 group-hover:w-[70%] group-hover:opacity-80'
        }
      />
    </Link>
  );
};
