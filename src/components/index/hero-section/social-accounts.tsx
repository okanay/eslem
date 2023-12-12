import whatsapp from '../../../../public/icons/webps/whatsapp.webp';
import instagram from '../../../../public/icons/webps/instagram.webp';
import linkedin from '../../../../public/icons/webps/linkedin.webp';
import twitter from '../../../../public/icons/webps/twitter.webp';
import facebook from '../../../../public/icons/webps/facebook.webp';
import telegram from '../../../../public/icons/webps/telegram.webp';

import Image from 'next/image';

export const SocialAccounts = () => {
  return (
    <div className={'flex flex-row items-start justify-start gap-6'}>
      <Image
        src={whatsapp}
        alt={'whatsapp-icon'}
        placeholder={'blur'}
        loading={'eager'}
        className="h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]"
      />
      <Image
        src={instagram}
        alt={'instagram-icon'}
        placeholder={'blur'}
        loading={'eager'}
        className="h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]"
      />
      <Image
        src={linkedin}
        alt={'linkedin-icon'}
        placeholder={'blur'}
        loading={'eager'}
        className="h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]"
      />
      <Image
        src={twitter}
        alt={'twitter-icon'}
        placeholder={'blur'}
        loading={'eager'}
        className="h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]"
      />
      <Image
        src={facebook}
        alt={'facebook-icon'}
        placeholder={'blur'}
        loading={'eager'}
        className="h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]"
      />
      <Image
        src={telegram}
        alt={'telegram-icon'}
        placeholder={'blur'}
        loading={'eager'}
        className="h-[24px] w-[24px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-90 sm:h-[36px] sm:w-[36px]"
      />
    </div>
  );
};
