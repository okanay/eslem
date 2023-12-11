import registerIcon from '../../../../public/icons/webps/register.webp';
import panelIcon from '../../../../public/icons/webps/panel.webp';

import Link from 'next/link';
import Image from 'next/image';

type TProps = React.FC<{
  name: string;
  url: string;
  type: 'register' | 'panel';
}>;

export const NavigationBtn: TProps = ({ name, url, type }) => {
  const src = type === 'register' ? registerIcon : panelIcon;
  const alt = type === 'register' ? 'register-icon-svg' : 'profile-icon-svg';

  return (
    <Link
      href={url}
      className={`group relative flex
            items-center justify-center gap-2 transition-all duration-300 hover:scale-90`}
    >
      <Image
        src={src}
        alt={alt}
        placeholder={'blur'}
        className={'h-[22px] w-[22px] text-zinc-800 lg:h-[24px] lg:w-[24px]'}
      />
      <span className={'text-[18px] uppercase text-zinc-800 lg:text-[22px]'}>
        {name}
      </span>
    </Link>
  );
};
