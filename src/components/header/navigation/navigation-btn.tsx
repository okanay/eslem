import registerIcon from '../../../../public/icons/svgs/register.svg';
import panelIcon from '../../../../public/icons/svgs/panel.svg';

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
        // placeholder={'blur'}
        loading={'eager'}
        className={'h-[22px] w-[22px] text-zinc-800 lg:h-[24px] lg:w-[24px]'}
      />
      <span className={'text-lg uppercase text-zinc-800 lg:text-xl'}>
        {name}
      </span>
    </Link>
  );
};
